import { Howl, Howler } from "howler";

type BeepOptions = {
  frequencyHz?: number;
  durationMs?: number;
  volume?: number;
  type?: OscillatorType;
};

const dataUriCache = new Map<string, string>();
const howlCache = new Map<string, Howl>();

let primed = false;

export function primeAudio() {
  if (typeof window === "undefined") return;
  if (primed) return;
  primed = true;

  const tryResume = async () => {
    try {
      const ctx = Howler.ctx;
      if (ctx && ctx.state === "suspended") {
        await ctx.resume();
      }
    } catch {
      // Ignore: some browsers will only resume on a valid user gesture.
    }
  };

  // Best-effort unlock: attach to common user gestures.
  window.addEventListener("pointerdown", tryResume, { once: true });
  window.addEventListener("keydown", tryResume, { once: true });
  window.addEventListener("touchstart", tryResume, { once: true });
}

function base64FromBytes(bytes: Uint8Array) {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]!);
  }
  return btoa(binary);
}

function wavDataUriFromSamples(samples: Float32Array, sampleRate: number) {
  const numChannels = 1;
  const bitsPerSample = 16;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const byteRate = sampleRate * blockAlign;
  const dataSize = samples.length * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i += 1) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeString(36, "data");
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i += 1) {
    const s = Math.max(-1, Math.min(1, samples[i]!));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }

  const bytes = new Uint8Array(buffer);
  const base64 = base64FromBytes(bytes);
  return `data:audio/wav;base64,${base64}`;
}

function toneDataUri({
  frequencyHz,
  durationMs,
  type,
}: Required<Pick<BeepOptions, "frequencyHz" | "durationMs" | "type">>) {
  const key = `${frequencyHz}-${durationMs}-${type}`;
  const cached = dataUriCache.get(key);
  if (cached) return cached;

  const sampleRate = 22050;
  const length = Math.max(1, Math.round((sampleRate * durationMs) / 1000));
  const samples = new Float32Array(length);

  const angular = (2 * Math.PI * frequencyHz) / sampleRate;
  for (let i = 0; i < length; i += 1) {
    const t = i * angular;

    let v = 0;
    switch (type) {
      case "square":
        v = Math.sign(Math.sin(t));
        break;
      case "sawtooth":
        v = 2 * (t / (2 * Math.PI) - Math.floor(0.5 + t / (2 * Math.PI)));
        break;
      case "triangle":
        v = (2 / Math.PI) * Math.asin(Math.sin(t));
        break;
      case "sine":
      default:
        v = Math.sin(t);
        break;
    }

    // Short envelope to prevent clicks
    const attack = Math.min(1, i / (0.02 * length));
    const release = Math.min(1, (length - i) / (0.08 * length));
    const env = Math.min(attack, release);
    samples[i] = v * env * 0.35;
  }

  const uri = wavDataUriFromSamples(samples, sampleRate);
  dataUriCache.set(key, uri);
  return uri;
}

export function playBeep(options: BeepOptions = {}) {
  if (typeof window === "undefined") return;

  primeAudio();

  const frequencyHz = options.frequencyHz ?? 880;
  const durationMs = options.durationMs ?? 55;
  const volume = options.volume ?? 0.25;
  const type = options.type ?? "square";

  const src = toneDataUri({ frequencyHz, durationMs, type });

  let howl = howlCache.get(src);
  if (!howl) {
    howl = new Howl({
      src: [src],
      volume,
      html5: false,
    });
    howlCache.set(src, howl);
  } else {
    howl.volume(volume);
  }

  howl.play();
}
