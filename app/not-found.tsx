"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-8xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          🔍
        </motion.div>

        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-slate-300 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-400 transition-colors"
          >
            Go Home
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-slate-300 rounded-full font-medium hover:bg-slate-800 transition-colors"
          >
            View Projects
          </Link>
        </div>

        <motion.div
          className="mt-12 text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>Lost? Try using the search command menu with Cmd+K</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
