"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export interface CommandItem {
  label: string;
  href: string;
  shortcut?: string;
  description?: string;
}

export default function CommandMenu({ items }: { items: CommandItem[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return items.slice(0, 8);
    }

    return items
      .map((item) => ({
        item,
        score: item.label.toLowerCase().includes(normalized)
          ? 2
          : item.description?.toLowerCase().includes(normalized)
          ? 1
          : 0,
      }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }, [items, query]);

  const handleNavigate = (target: CommandItem) => {
    setOpen(false);
    if (target.href.startsWith("#")) {
      const element = document.querySelector(target.href);
      if (element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    if (target.href.startsWith("mailto:")) {
      window.location.href = target.href;
      return;
    }

    if (target.href.startsWith("http")) {
      window.open(target.href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(target.href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-[#020617]/70 px-4 py-16 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/95 text-slate-100 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                Search
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type to filter sections, press Enter to go"
                className="flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                aria-label="Search portfolio commands"
              />
              <kbd className="rounded-md border border-white/20 px-1.5 py-0.5 text-[10px] uppercase text-slate-400">
                esc
              </kbd>
            </div>

            <ul className="max-h-72 overflow-y-auto px-2 py-3">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-slate-500">
                  No matches found. Try another keyword.
                </li>
              )}
              {filtered.map((entry) => (
                <li key={entry.label}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(entry)}
                    className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline focus-visible:outline-emerald-300/40"
                  >
                    <span className="flex flex-col">
                      <span className="font-medium text-white">
                        {entry.label}
                      </span>
                      {entry.description ? (
                        <span className="text-xs text-slate-400">
                          {entry.description}
                        </span>
                      ) : null}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-emerald-200/80">
                      {entry.shortcut ?? "Enter"}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-xs text-slate-500">
              <span>Press Esc to close</span>
              <span>
                Shortcut:{" "}
                <kbd className="rounded border border-white/30 px-1.5 py-0.5">
                  ⌘
                </kbd>{" "}
                + K
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
