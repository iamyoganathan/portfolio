"use client";

import { useMemo } from "react";

const METEOR_COUNT = 3;

export default function Meteors() {
  const meteors = useMemo(() => {
    return Array.from({ length: METEOR_COUNT }).map((_, index) => {
      const delay = index * 6;
      const top = 10 + index * 25;
      const left = 15 + index * 20;
      return { delay, top, left };
    });
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {meteors.map((meteor) => (
        <span
          key={`${meteor.left}-${meteor.top}`}
          className="meteor absolute h-px w-40"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
