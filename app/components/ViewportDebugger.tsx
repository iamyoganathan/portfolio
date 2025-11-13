"use client";

import { useState, useEffect } from "react";

export default function ViewportDebugger() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [breakpoint, setBreakpoint] = useState("xs");

  useEffect(() => {
    function updateViewport() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewport({ width, height });

      // Tailwind breakpoints
      if (width >= 1280) setBreakpoint("xl");
      else if (width >= 1024) setBreakpoint("lg");
      else if (width >= 768) setBreakpoint("md");
      else if (width >= 640) setBreakpoint("sm");
      else setBreakpoint("xs");
    }

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-xs text-white z-50 font-mono">
      <div className="flex items-center gap-3">
        <div>
          <span className="text-emerald-300">{breakpoint.toUpperCase()}</span>
          <span className="text-slate-400 ml-1">
            {viewport.width} × {viewport.height}
          </span>
        </div>
        <div className="flex gap-1">
          <div
            className={`w-2 h-2 rounded-full ${
              breakpoint === "xs" ? "bg-red-400" : "bg-slate-600"
            }`}
          />
          <div
            className={`w-2 h-2 rounded-full ${
              breakpoint === "sm" ? "bg-yellow-400" : "bg-slate-600"
            }`}
          />
          <div
            className={`w-2 h-2 rounded-full ${
              breakpoint === "md" ? "bg-blue-400" : "bg-slate-600"
            }`}
          />
          <div
            className={`w-2 h-2 rounded-full ${
              breakpoint === "lg" ? "bg-green-400" : "bg-slate-600"
            }`}
          />
          <div
            className={`w-2 h-2 rounded-full ${
              breakpoint === "xl" ? "bg-purple-400" : "bg-slate-600"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
