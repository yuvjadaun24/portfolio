"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { useElementSize } from "@/hooks/useElementSize";
import { playBeep, primeAudio } from "@/lib/sfx";

type Props = {
    onDone: () => void;
    onCornerHit?: () => void;
};

type Vec2 = { x: number; y: number };

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export function DvdLoader({ onDone, onCornerHit }: Props) {
    const reduceMotion = useReducedMotion();
    const { ref, size } = useElementSize<HTMLDivElement>();

    const [pos, setPos] = useState<Vec2>({ x: 0, y: 0 });
    const [cornerHits, setCornerHits] = useState(0);
    const [glowPulse, setGlowPulse] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    const doneRef = useRef(false);

    const rafRef = useRef<number | null>(null);
    const lastRef = useRef<number | null>(null);
    const velRef = useRef<Vec2>({ x: 265, y: 235 });

    const palette = useMemo(
        () => [
            "hsl(52 92% 62%)", // yellow
            "hsl(189 92% 55%)", // cyan
            "hsl(316 88% 64%)", // magenta
            "hsl(122 72% 56%)", // green
            "hsl(0 88% 62%)", // red
            "hsl(226 92% 64%)", // blue
            "hsl(26 92% 60%)", // orange
        ],
        []
    );

    const logoColor = palette[colorIndex % palette.length] ?? "hsl(52 92% 62%)";

    useEffect(() => {
        primeAudio();
    }, []);

    const logoSize = useMemo(() => {
        // Scale relative to container, but keep sensible min/max
        const w = clamp(Math.round(size.width * 0.24), 95, 170);
        const h = Math.round(w * 0.442);
        return { w, h };
    }, [size.width]);

    useEffect(() => {
        if (!size.width || !size.height) return;
        const boundsW = Math.max(0, size.width - logoSize.w);
        const boundsH = Math.max(0, size.height - logoSize.h);
        setPos({ x: Math.round(boundsW / 2), y: Math.round(boundsH / 2) });
        lastRef.current = null;
    }, [logoSize.h, logoSize.w, size.height, size.width]);

    useEffect(() => {
        if (reduceMotion) return;
        if (!size.width || !size.height) return;

        const boundsW = Math.max(0, size.width - logoSize.w);
        const boundsH = Math.max(0, size.height - logoSize.h);

        const tick = (now: number) => {
            if (lastRef.current == null) lastRef.current = now;
            const dt = Math.min(0.05, (now - lastRef.current) / 1000);
            lastRef.current = now;

            setPos((prev) => {
                let nextX = prev.x + velRef.current.x * dt;
                let nextY = prev.y + velRef.current.y * dt;

                let hitX = false;
                let hitY = false;

                // Reflecting bounce: preserves speed even when overshooting bounds.
                if (nextX < 0) {
                    hitX = true;
                    velRef.current.x *= -1;
                    nextX = -nextX;
                } else if (nextX > boundsW) {
                    hitX = true;
                    velRef.current.x *= -1;
                    nextX = 2 * boundsW - nextX;
                }

                if (nextY < 0) {
                    hitY = true;
                    velRef.current.y *= -1;
                    nextY = -nextY;
                } else if (nextY > boundsH) {
                    hitY = true;
                    velRef.current.y *= -1;
                    nextY = 2 * boundsH - nextY;
                }

                const didBounce = hitX || hitY;
                const didCorner = hitX && hitY;

                if (didBounce) {
                    setGlowPulse((n) => n + 1);
                    setColorIndex((curr) => {
                        if (palette.length <= 1) return curr;
                        let next = curr;
                        while (next === curr) {
                            next = Math.floor(Math.random() * palette.length);
                        }
                        return next;
                    });
                    // Soft beep on wall hit
                    playBeep({ frequencyHz: 660, durationMs: 30, volume: 0.16, type: "sine" });
                }

                if (didCorner) {
                    setCornerHits((n) => n + 1);
                    onCornerHit?.();
                    setGlowPulse((n) => n + 1);
                    playBeep({ frequencyHz: 820, durationMs: 44, volume: 0.22, type: "sine" });
                }

                return { x: clamp(nextX, 0, boundsW), y: clamp(nextY, 0, boundsH) };
            });

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
            lastRef.current = null;
        };
    }, [reduceMotion, size.width, size.height, logoSize.w, logoSize.h, onCornerHit]);

    useEffect(() => {
        // Allow "press any key" to skip the boot screen.
        const onKeyDown = () => {
            if (doneRef.current) return;
            doneRef.current = true;
            // Key events can fire during React render; defer to avoid setState-in-render warnings.
            window.setTimeout(onDone, 0);
        };

        window.addEventListener("keydown", onKeyDown, { once: true });
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onDone]);
//////////return 
    return (
        <div ref={ref} className="relative h-full w-full bg-black overflow-hidden">
            {/* CRT-ish overlays - Only on CRT screen, not background */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_10px,transparent_14px)] dvd-loader-crt-only" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_3px,transparent_7px)] dvd-loader-crt-only" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)] dvd-loader-crt-only" />

            {reduceMotion ? (
                <div className="h-full w-full grid place-items-center">
                    <DvdLogoCrt className="h-[54px] w-auto" color={logoColor} />
                </div>
            ) : (
                <div
                    className="absolute will-change-transform"
                    style={{
                        width: logoSize.w,
                        height: logoSize.h,
                        transform: `translate3d(${Math.round(pos.x)}px, ${Math.round(pos.y)}px, 0)`,
                    }}
                >
                    <div className="relative h-full w-full">
                        {glowPulse > 0 ? (
                            <div
                                key={glowPulse}
                                className="pointer-events-none absolute -inset-8 dvd-glow"
                                style={{
                                    background:
                                        `radial-gradient(ellipse at center, hsla(${getHue(logoColor)} 95% 65% / 0.75) 0%, hsla(${getHue(
                                            logoColor
                                        )} 95% 65% / 0.24) 45%, rgba(0,0,0,0) 76%)`,
                                }}
                            />
                        ) : null}

                        <div className="h-full w-full grid place-items-center">
                            <div
                                key={`hit-${glowPulse}`}
                                className={
                                    "h-full w-full " +
                                    (glowPulse > 0
                                        ? "dvd-hit"
                                        : "")
                                }
                            >
                                <DvdLogoCrt className="h-full w-full" color={logoColor} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="pointer-events-none absolute left-1/2 top-[72%] -translate-x-1/2 -translate-y-1/2">
                <div className="dvd-prompt rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] tracking-[0.22em] text-white/70">
                    PRESS ANY KEY TO ENTER
                </div>
            </div>
        </div>
    );
}

function DvdLogoCrt({
    className,
    color,
}: {
    className?: string;
    color: string;
}) {
    return (
        <div className={"relative isolate " + (className ?? "")}>
            {/* main logo (keep crisp / HD) */}
            <DvdLogoSvg className="relative" color={color} />
        </div>
    );
}

function DvdLogoSvg({
    className,
    color,
}: {
    className?: string;
    color: string;
}) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 187.09 82.68"
            role="img"
            aria-label="DVD"
            shapeRendering="geometricPrecision"
            preserveAspectRatio="xMidYMid meet"
            style={{ color }}
        >
            <title>DVD</title>
            <g fill="currentColor">
                <path d="M128.81,10.16H147S169,9,168.45,20.32c-.87,17.47-27.65,16.22-27.65,16.22L146,13.83h-18.2L120.2,46.7h18.06s18,.8,32.88-6.35c15.8-7.62,15.94-21,15.94-21a15.3,15.3,0,0,0-7.76-13.4C170,.42,157.87,0,157.87,0H118.09L94.53,30.62,84.65,0H16.08L13.54,10.16h18.2S53.75,9,53.19,20.32c-.87,17.47-27.65,16.22-27.65,16.22l5.22-22.71H12.56L4.94,46.7H23s18,.8,32.87-6.35c15.8-7.62,15.94-21,15.94-21a35,35,0,0,0-.7-5.5c-.43-1.41-1-3.67-1-3.67H71L87.76,57.28l41.05-47.12Z" />
                <path d="M88.32,57.28C39.54,57.28,0,63,0,70s39.54,12.7,88.32,12.7S176.64,77,176.64,70,137.1,57.28,88.32,57.28ZM45.54,76.92H41.82L34.06,63.73h5.21l4.46,8,4.48-8h5.22Zm20.93,0h-4.8V63.73h4.8Zm17,0h-6.8V63.73h6.8c5.15,0,9.38,2.89,9.38,6.59S88.58,76.92,83.46,76.92Zm29.16-10.28h-5.7v2.2h5.41v2.9h-5.41V74h5.7v2.9h-10.5V63.73h10.5Zm19.29,10.72c-5.93,0-10.21-3-10.21-7.28,0-4,4.89-6.78,10.21-6.78s10.21,2.79,10.21,6.78C142.12,74.35,137.83,77.36,131.91,77.36Z" />
                <path d="M131.91,66.62c2.86,0,5.21,1.66,5.21,3.48,0,2.27-2.35,3.93-5.21,3.93s-5.22-1.66-5.22-3.93c0-1.82,2.35-3.48,5.22-3.48Z" />
                <path d="M82.58,66.64H81.45V74h1.08c2.87,0,5.32-1.12,5.32-3.69C87.85,68,85.67,66.64,82.58,66.64Z" />
            </g>
        </svg>
    );
}

function getHue(hsl: string) {
    // Expects `hsl(H S% L%)` (spaces are ok).
    const match = /hsl\((\d+(?:\.\d+)?)\s/i.exec(hsl);
    return match?.[1] ? `${match[1]}deg` : "52deg";
}
