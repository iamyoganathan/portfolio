"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const timelineItems = [
  {
    year: "2025",
    title: "MCA Pursuit & AI/ML Integration",
    description: "Currently pursuing Master of Computer Applications while building AI-powered mobile applications.",
    icon: "",
  },
  {
    year: "2024",
    title: "Advanced Flutter Development",
    description: "A transformative year of creating production-ready applications with AI features.",
    icon: "",
  },
  {
    year: "2023",
    title: "Mobile Development Foundation",
    description: "Began the journey into mobile app development with Flutter and Dart.",
    icon: "",
  },
  {
    year: "2022",
    title: "Programming & Web Basics",
    description: "Started the coding journey with HTML, CSS, and JavaScript fundamentals.",
    icon: "",
  },
];

const coreValues = [
  {
    icon: "",
    title: "User-Centric Design",
    description: "Every line of code serves a purpose - enhancing user experience and solving real problems.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "",
    title: "Continuous Learning",
    description: "Technology evolves rapidly. I stay ahead by embracing new tools and methodologies.",
    gradient: "from-pink-500 to-cyan-500",
  },
  {
    icon: "",
    title: "Performance First",
    description: "Beautiful interfaces mean nothing if they're slow. I optimize for speed and scalability.",
    gradient: "from-cyan-500 to-purple-500",
  },
  {
    icon: "",
    title: "Collaborative Growth",
    description: "The best solutions emerge from diverse perspectives. I believe in knowledge sharing.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const currentInterests = [
  { name: "Flutter & Mobile Dev", progress: 90 },
  { name: "AI/ML Integration", progress: 80 },
  { name: "Backend & Firebase", progress: 85 },
  { name: "UI/UX Design", progress: 75 },
];

const navigationSections = [
  { id: "intro", label: "Introduction" },
  { id: "story", label: "My Story" },
  { id: "values", label: "Core Values" },
  { id: "journey", label: "Journey" },
  { id: "interests", label: "Current Focus" },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationSections.map((s) => s.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen py-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-4 font-semibold"
          >
            About Me
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="gradient-text">Crafting Digital</span>
            <br />
            <span className="text-white">Experiences</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-purple-100/80 max-w-2xl mx-auto"
          >
            A passionate Flutter developer bridging creativity and technology
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <nav className="sticky top-24 glass p-6 rounded-2xl space-y-2">
              <p className="text-xs uppercase tracking-wider text-purple-300 mb-4 font-semibold">Navigation</p>
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-purple-500/20 text-white border-l-4 border-purple-500"
                      : "text-purple-200/70 hover:text-purple-100 hover:bg-purple-500/10"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </motion.aside>

          <div className="space-y-24">
            <motion.section id="intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-hover p-8 md:p-12 rounded-3xl">
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                <motion.div whileHover={{ scale: 1.05 }} className="relative w-48 h-48 mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-full h-full rounded-full border-4 border-purple-400/50 overflow-hidden neon-glow">
                    <Image src="/yoganathan.png" alt="Yoganathan C" width={192} height={192} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3">
                    <span className="text-2xl"></span>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold gradient-text-purple">Hi, I am Yoganathan C</h2>
                  <p className="text-lg text-purple-100/90 leading-relaxed">A passionate Flutter Developer and AI enthusiast pursuing my MCA.</p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
                      <span className="text-purple-400"></span>
                      <span className="text-sm text-purple-100">Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
                      <span className="text-purple-400"></span>
                      <span className="text-sm text-purple-100">MCA Student</span>
                    </div>
                    <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-sm text-purple-100">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section id="story" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <h2 className="text-4xl font-bold gradient-text flex items-center gap-3">
                <span className="text-3xl"></span> My Story
              </h2>
              <div className="glass-hover p-8 md:p-12 rounded-3xl space-y-6">
                <p className="text-lg text-purple-100/90 leading-relaxed">My journey began in <strong className="text-white">2022</strong> with a simple HTML page, evolving into mobile development expertise.</p>
                <p className="text-lg text-purple-100/90 leading-relaxed">While pursuing my <strong className="text-white">MCA</strong>, I built real projects and explored AI/ML applications.</p>
                <p className="text-lg text-purple-100/90 leading-relaxed">I discovered <strong className="gradient-text-purple">Flutter</strong> and now focus on intelligent mobile experiences.</p>
              </div>
            </motion.section>

            <motion.section id="values" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <h2 className="text-4xl font-bold gradient-text flex items-center gap-3">
                <span className="text-3xl"></span> Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.03 }} className="glass-hover p-8 rounded-2xl group cursor-pointer">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                    <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>{value.title}</h3>
                    <p className="text-purple-100/80 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section id="journey" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <h2 className="text-4xl font-bold gradient-text flex items-center gap-3">
                <span className="text-3xl"></span> My Journey
              </h2>
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-hover p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl neon-glow">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <span className="text-sm font-semibold px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full">{item.year}</span>
                        </div>
                        <p className="text-purple-100/80 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section id="interests" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <h2 className="text-4xl font-bold gradient-text flex items-center gap-3">
                <span className="text-3xl"></span> Current Focus
              </h2>
              <div className="glass-hover p-8 md:p-12 rounded-3xl space-y-8">
                {currentInterests.map((interest, index) => (
                  <motion.div key={interest.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-semibold text-white">{interest.name}</h4>
                      <span className="text-lg font-bold gradient-text-purple">{interest.progress}%</span>
                    </div>
                    <div className="h-3 bg-purple-900/30 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${interest.progress}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.1 }} className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-hover p-12 rounded-3xl text-center space-y-6 neon-glow">
              <h3 className="text-3xl font-bold gradient-text">Let's Build Something Amazing Together</h3>
              <p className="text-lg text-purple-100/80 max-w-2xl mx-auto">Have an interesting project? I'd love to hear about it.</p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href="/contact" className="btn-primary"><span>Get In Touch</span></a>
                <a href="/projects" className="btn-ghost"><span>View My Work</span></a>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </section>
  );
}
