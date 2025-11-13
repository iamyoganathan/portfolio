"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import QR from "./QR";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (searchParams.get("submitted") === "1") {
      setFormState("success");
    } else if (searchParams.get("error") === "1") {
      setFormState("error");
      setErrors(["Something went wrong. Please try again."]);
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrors([]);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("message", formData.message);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
        setErrors(result.errors || [result.error || "Something went wrong"]);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setFormState("error");
      setErrors(["Network error. Please check your connection and try again."]);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        {/* Header */}
        <motion.header
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] gradient-text-purple font-medium">
              Get In Touch
            </p>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-extrabold gradient-text mb-6">
            Let&apos;s Build Something Amazing
          </h1>
          <p className="text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your Flutter app idea to life? I&apos;m here to collaborate on innovative mobile solutions with AI integration.
          </p>
        </motion.header>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Form */}
          <motion.div
            className="glass p-8 md:p-10 rounded-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
            <p className="text-slate-300/80 mb-6">
              Fill out the form below and I&apos;ll get back to you within 24 hours.
            </p>

            {/* Success Message */}
            {formState === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Message sent successfully!</p>
                    <p className="text-sm text-slate-300/80">
                      I&apos;ll respond soon. Check your inbox!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Messages */}
            {formState === "error" && errors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-400/40"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <p className="font-semibold text-red-200">Please fix the following:</p>
                    <ul className="text-sm text-red-200/80 mt-1 space-y-1">
                      {errors.map((error, index) => (
                        <li key={index}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="name"
                  placeholder="John Doe"
                  required
                  disabled={formState === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  placeholder="john@example.com"
                  required
                  disabled={formState === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project idea, timeline, and how I can help bring it to life..."
                  required
                  disabled={formState === "submitting"}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={formState === "submitting"}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: formState === "submitting" ? 1 : 1.02 }}
                whileTap={{ scale: formState === "submitting" ? 1 : 0.98 }}
              >
                {formState === "submitting" ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-slate-400 text-center">
                🔒 Your information is secure and never shared with third parties.
              </p>
            </form>
          </motion.div>

          {/* Right Side - Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Quick Connect Card */}
            <motion.div
              className="glass p-8 rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Connect</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:iamyoganathanc@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.014L12 12.548 22.35 3.821h.014c.904 0 1.636.732 1.636 1.636z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">Email Me</p>
                    <p className="text-sm text-slate-400">iamyoganathanc@gmail.com</p>
                  </div>
                  <svg className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">Schedule a Call</p>
                    <p className="text-sm text-slate-400">Book a 30-minute chat</p>
                  </div>
                  <svg className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>

              <div className="mt-6 p-6 bg-slate-900/40 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                <QR value="mailto:iamyoganathanc@gmail.com" />
                <p className="text-xs text-slate-400 text-center mt-3">
                  Scan to email me instantly
                </p>
              </div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              className="glass p-8 rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">Connect & Follow</h3>
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/yoganathan-c"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-xl bg-blue-500/10 border border-blue-400/20 hover:border-blue-400/40 hover:bg-blue-500/20 transition-all flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 mb-3 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="font-medium text-white text-sm text-center">LinkedIn</p>
                  <p className="text-xs text-slate-400 text-center">Professional</p>
                </motion.a>

                <motion.a
                  href="https://github.com/iamyoganathan"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-xl bg-slate-600/10 border border-slate-400/20 hover:border-slate-400/40 hover:bg-slate-600/20 transition-all flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 mb-3 rounded-lg bg-slate-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <p className="font-medium text-white text-sm text-center">GitHub</p>
                  <p className="text-xs text-slate-400 text-center">Code</p>
                </motion.a>

                <motion.a
                  href="https://instagram.com/yoganathan"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-pink-400/20 hover:border-pink-400/40 hover:from-purple-500/20 hover:to-pink-500/20 transition-all flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <p className="font-medium text-white text-sm text-center">Instagram</p>
                  <p className="text-xs text-slate-400 text-center">Lifestyle</p>
                </motion.a>

                <motion.a
                  href="https://www.freelancer.com/u/yoganathan"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-xl bg-green-500/10 border border-green-400/20 hover:border-green-400/40 hover:bg-green-500/20 transition-all flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 mb-3 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z" />
                    </svg>
                  </div>
                  <p className="font-medium text-white text-sm text-center">Freelancer</p>
                  <p className="text-xs text-slate-400 text-center">Projects</p>
                </motion.a>
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              className="glass p-8 rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Currently Available</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✦</span>
                  Full-time opportunities
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-400">✦</span>
                  Freelance Flutter projects
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✦</span>
                  AI-powered app collaborations
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPageWithSuspense() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
