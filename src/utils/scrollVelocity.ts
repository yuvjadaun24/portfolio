/**
 * Singleton scroll-velocity proxy.
 * Imported by every ShaderFrame so only ONE ScrollTrigger is ever created.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollVelocityProxy = { v: 0, s: 0 }; // v = signed -1..1, s = strength 0..1

const clamp = gsap.utils.clamp(-2000, 2000);
let initialized = false;

export function initScrollVelocity() {
  if (initialized) return;
  initialized = true;

  ScrollTrigger.create({
    start: 0,
    end: () => document.documentElement.scrollHeight - window.innerHeight,
    onUpdate(self) {
      const raw = clamp(self.getVelocity());
      const norm = raw / 1000;
      const strength = Math.min(1, Math.abs(norm));

      if (Math.abs(strength) > Math.abs(scrollVelocityProxy.s)) {
        scrollVelocityProxy.v = norm;
        scrollVelocityProxy.s = strength;
        gsap.to(scrollVelocityProxy, {
          v: 0,
          s: 0,
          duration: 0.8,
          ease: 'sine.inOut',
          overwrite: true,
        });
      }
    },
  });
}
