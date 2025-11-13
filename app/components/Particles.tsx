"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesLayer() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setShouldReduceMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  if (shouldReduceMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-20 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(32, 211, 174, 0.15), transparent 45%), radial-gradient(circle at 80% 30%, rgba(56, 189, 248, 0.12), transparent 55%)",
        }}
      />
    );
  }

  return (
    <Particles
      id="portfolio-particles"
      className="pointer-events-none fixed inset-0 -z-20"
      init={init}
      options={{
        fpsLimit: 60,
        detectRetina: true,
        background: {
          color: "transparent",
        },
        particles: {
          color: {
            value: "#bbf7d0",
          },
          links: {
            enable: true,
            color: "#bbf7d0",
            distance: 140,
            opacity: 0.35,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.1,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          number: {
            value: 30,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: { min: 0.2, max: 0.5 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
}
