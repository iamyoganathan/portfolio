"use client";

import { useEffect, useRef } from "react";

export default function AuroraCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.animate(
      [
        { filter: "hue-rotate(0deg)" },
        { filter: "hue-rotate(25deg)" },
        { filter: "hue-rotate(0deg)" },
      ],
      {
        duration: 12000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-30"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#041021] via-[#0f1c3f] to-[#20104d] opacity-70" />
      <div
        className="absolute inset-0 blur-[60px] opacity-60 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 15% 25%, rgba(59, 130, 246, 0.32), transparent 55%), radial-gradient(circle at 80% 32%, rgba(34, 197, 94, 0.28), transparent 50%), radial-gradient(circle at 50% 80%, rgba(251, 191, 36, 0.18), transparent 55%)",
        }}
      />
    </div>
  );
}
