"use client";

import { useEffect, useId, useRef } from "react";
import type { MouseEvent } from "react";

import type { ProjectSummary } from "./types";

interface CaseStudyModalProps {
  open: boolean;
  onClose: () => void;
  project: ProjectSummary | null;
}

export default function CaseStudyModal({
  open,
  onClose,
  project,
}: CaseStudyModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  if (!open || !project?.caseStudy) {
    return null;
  }

  const { caseStudy } = project;

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur"
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950/95 p-8 text-slate-200 shadow-[0_30px_80px_rgba(7,16,33,0.65)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
              Deep dive
            </p>
            <h3 id={titleId} className="text-2xl font-semibold text-white">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-emerald-300/40 hover:text-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Close
          </button>
        </div>

        <p
          id={descriptionId}
          className="mt-4 text-sm leading-relaxed text-slate-300/90"
        >
          {caseStudy.intro}
        </p>

        <div className="mt-8 grid gap-6">
          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Problem
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-200/90">
              {caseStudy.problem}
            </p>
          </section>

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Process
            </h4>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed">
              {caseStudy.process.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-2 text-slate-200/90"
                >
                  <span aria-hidden>▹</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Results
            </h4>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-emerald-200/90">
              {caseStudy.results.map((result) => (
                <li key={result} className="flex items-start gap-2">
                  <span aria-hidden>✔</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>

          {caseStudy.takeaways && caseStudy.takeaways.length > 0 && (
            <section>
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Takeaways
              </h4>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-200/90">
                {caseStudy.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex items-start gap-2">
                    <span aria-hidden>•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.link && (
            <div>
              <a
                href={project.link.href}
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-emerald-50"
                target="_blank"
                rel="noreferrer"
              >
                {project.link.label}
                <span aria-hidden>↗</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
