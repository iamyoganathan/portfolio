"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const buttons = [
  { label: "View Projects", variant: "btn-primary", href: "/projects" },
  { label: "Contact Me", variant: "btn-ghost", href: "/contact" },
];

const techStack = [
  { name: "Flutter", icon: "/icons/flutter.svg", color: "#02569B" },
  { name: "Dart", icon: "/icons/dart.svg", color: "#0175C2" },
  { name: "Firebase", icon: "/icons/firebase.svg", color: "#FFCA28" },
  { name: "Python", icon: "/icons/python.svg", color: "#3776AB" },
  { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "HTML/CSS", icon: "/icons/html.svg", color: "#E34F26" },
];

export default function Hero() {
  return (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900/10 to-pink-900/20 pointer-events-none" />


      <div className="relative z-10 grid gap-16 lg:grid-cols-2 items-center w-full max-w-7xl px-6">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-purple-200">Available for opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="block text-white">Hi, I&apos;m</span>
              <span className="block gradient-text">Yoganathan C</span>
            </h1>
            <div className="flex flex-wrap gap-2 text-xl md:text-2xl font-semibold text-purple-200">
              <span>Flutter Developer</span>
              <span className="text-pink-400">•</span>
              <span>AI Innovator</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-purple-100/80 max-w-xl leading-relaxed"
          >
            I craft <strong className="text-white">intelligent mobile experiences</strong> that blend 
            elegant design with powerful AI integration. Specializing in cross-platform development 
            with Flutter and cutting-edge AI technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {buttons.map((button) => (
              <a key={button.label} href={button.href} className={button.variant}>
                <span>{button.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Tech Stack with modern design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4 pt-8"
          >
            <p className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  className="glass px-4 py-3 rounded-xl hover:glass-hover transition-all duration-300 cursor-pointer"
                  title={tech.name}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="text-sm font-semibold text-purple-100">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Visual element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Decorative elements */}
          <div className="relative -mt-16">
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                width: "500px",
                height: "500px",
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Middle ring */}
            <motion.div
              className="absolute inset-0 m-12 rounded-full border-2 border-purple-500/30"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner ring */}
            <motion.div
              className="absolute inset-0 m-24 rounded-full border border-pink-500/30"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center content */}
            <motion.div
              className="relative z-10 glass p-16 rounded-3xl neon-glow"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="space-y-8 text-center">
                <motion.div
                  className="text-8xl font-black gradient-text"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {"{ }"}
                </motion.div>
                <div className="space-y-3">
                  <p className="text-3xl font-bold text-white">Building</p>
                  <p className="text-2xl gradient-text-purple">The Future</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-purple-300"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </header>
  );
}
