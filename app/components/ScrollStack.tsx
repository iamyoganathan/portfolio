"use client";

import React, {
  ReactNode,
  useLayoutEffect,
  useRef,
  useCallback,
  useEffect,
} from "react";
import type { ProjectSummary } from "./types";
import Image from "next/image";
import Lenis from "lenis";

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children?: ReactNode;
  projects: ProjectSummary[];
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  scaleDuration?: number;
  onStackComplete?: () => void;
}

// Project Card Component - Optimized for smooth scrolling
const ProjectCard = React.memo(
  ({ project, index }: { project: ProjectSummary; index: number }) => {
    return (
      <div className="scroll-stack-card max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 shadow-xl will-change-transform"
          style={{ contain: "layout style paint" }}
        >
          {/* Hero Image/Preview */}
          <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
            <Image
              src={getProjectImage(project.title)}
              alt={`${project.title} preview`}
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

            {/* Project badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center rounded-full border border-emerald-400/60 bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white">
                {getProjectCategory(project.title)}
              </span>
            </div>

            {/* Index indicator */}
            <div className="absolute top-6 right-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 border border-slate-600 text-sm font-bold text-white">
                {index + 1}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 space-y-5">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Challenge & Outcome - More compact */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold text-emerald-300 uppercase tracking-wide mb-2">
                  Challenge
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-emerald-300 uppercase tracking-wide mb-2">
                  Outcome
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-semibold text-emerald-300 uppercase tracking-wide mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-200 border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 6 && (
                  <span className="inline-flex items-center rounded-md bg-slate-700 px-2 py-1 text-xs text-slate-300">
                    +{project.stack.length - 6} more
                  </span>
                )}
              </div>
            </div>

            {/* Metrics - More compact */}
            {project.metrics && (
              <div>
                <h4 className="text-xs font-semibold text-emerald-300 uppercase tracking-wide mb-2">
                  Key Results
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.slice(0, 3).map((metric, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-200 border border-emerald-400/40"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-400 hover:scale-105"
                >
                  {project.link.label}
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
              <button className="inline-flex items-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

// Helper functions
function getProjectImage(title: string): string {
  // Use more reliable Unsplash images
  const imageMap: Record<string, string> = {
    MyAnimeTracker:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    "RAG Assistant with Gemini":
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    "StudyPro - Career Guidance App":
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    "Employee Salary Prediction ML":
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    "Student Event Management App":
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
  };
  return (
    imageMap[title] ||
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  );
}

function getProjectCategory(title: string): string {
  if (
    title.includes("Flutter") ||
    title.includes("StudyPro") ||
    title.includes("MyAnimeTracker") ||
    title.includes("Student")
  )
    return "📱 Mobile App";
  if (
    title.includes("AI") ||
    title.includes("ML") ||
    title.includes("RAG") ||
    title.includes("Prediction")
  )
    return "🤖 AI/ML";
  return "💻 Full Stack";
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  projects,
  className = "",
  itemDistance = 200, // Updated to match your reference
  itemScale = 0.03,
  itemStackDistance = 30, // Updated to match your reference
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85, // Updated to match your reference
  rotationAmount = 0, // Updated to match your reference
  blurAmount = 0, // Updated to match your reference
  scaleDuration = 0.5,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const lastTransformsRef = useRef(
    new Map<
      number,
      {
        translateY: number;
        scale: number;
        rotation: number;
        blur: number;
      }
    >()
  );
  const isUpdatingRef = useRef(false);
  const rafRef = useRef<number>(0);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value as string);
    },
    []
  );

  const getScrollData = useCallback(() => {
    return {
      scrollTop: lenisRef.current?.animatedScroll || window.scrollY || 0,
      containerHeight: window.innerHeight,
      scrollContainer: document.documentElement,
    };
  }, []);

  const getElementOffset = useCallback((element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return rect.top + (lenisRef.current?.animatedScroll || window.scrollY || 0);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );

    const endElement = document.querySelector(
      ".scroll-stack-end"
    ) as HTMLElement;
    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart =
            jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        requestAnimationFrame(() => {
          const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
          const filter =
            newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

          card.style.transform = transform;
          card.style.filter = filter;
        });

        lastTransformsRef.current.set(i, newTransform);
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ]);

  const handleScroll = useCallback(
    (lenis: Lenis) => {
      if (isUpdatingRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        updateCardTransforms();

        // Update progress indicator with smooth values
        if (typeof window !== "undefined") {
          const progressBar = document.getElementById("scroll-progress");
          if (progressBar) {
            const scrollProgress = lenis.progress;
            progressBar.style.width = `${Math.min(100, scrollProgress * 100)}%`;
          }
        }
      });
    },
    [updateCardTransforms]
  );

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  // Setup scroll stack cards
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const cards = Array.from(
      document.querySelectorAll(".scroll-stack-card")
    ) as HTMLElement[];
    cardsRef.current = cards;
    const lastTransforms = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      // Add transition for smooth transforms
      card.style.transition = `transform ${scaleDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    });

    // Initial transform update
    setTimeout(() => updateCardTransforms(), 100);

    return () => {
      cardsRef.current = [];
      lastTransforms.clear();
      isUpdatingRef.current = false;
    };
  }, [itemDistance, scaleDuration, updateCardTransforms]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
    >
      {/* Smooth progress indicator */}
      <div className="fixed top-20 left-0 right-0 z-50 h-1 bg-slate-800/50 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-150 ease-out"
          id="scroll-progress"
          style={{ width: "0%" }}
        />
      </div>

      <div className="scroll-stack-inner relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end h-screen" />
      </div>
    </div>
  );
};

export default ScrollStack;
