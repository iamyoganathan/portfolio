"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Resume data structure for display
const resumeData = {
  personal: {
    name: "Yoganathan C",
    title: "Flutter Developer & AI Integration Specialist",
    location: "Tamil Nadu, India",
    email: "iamyoganathanc@gmail.com",
    linkedin: "https://www.linkedin.com/in/yoganathan-c",
    github: "https://github.com/iamyoganathan",
    phone: "+91 9626671504",
  },
  summary:
    "Results-driven Flutter Developer pursuing Master of Computer Applications with proven expertise in building AI-powered mobile applications. Specialized in cross-platform development with Flutter/Dart, Firebase backend integration, and cutting-edge AI technologies. Successfully delivered 3+ production-grade applications featuring speech recognition, real-time analytics, and cloud synchronization. Passionate about creating intelligent mobile experiences that solve real-world problems with clean code and exceptional UI/UX.",

  experience: [
    {
      title: "Flutter Mobile Developer",
      company: "Independent Projects & Open Source",
      duration: "2023 - Present",
      type: "Self-Employed",
      highlights: [
        "Architected and deployed 3 production-ready Flutter applications with 500+ combined testing hours",
        "Integrated Whisper AI and Google Cloud Speech API for real-time pronunciation feedback with 92% accuracy",
        "Implemented Firebase Authentication, Firestore, and Cloud Functions serving 100+ active users",
        "Optimized app performance reducing load time by 40% through code splitting and lazy loading",
        "Designed responsive Material 3 UI achieving 95+ Lighthouse accessibility score",
        "Built offline-first architecture with local caching using SQLite and IndexedDB",
      ],
    },
    {
      title: "AI/ML Trainee",
      company: "Professional Development",
      duration: "2024",
      type: "Training & Certification",
      highlights: [
        "Completed intensive AI/ML training covering Python, Scikit-learn, and Machine Learning fundamentals",
        "Developed speech recognition models and integrated NLP capabilities into mobile apps",
        "Gained hands-on experience with Google Cloud AI services and Firebase ML Kit",
        "Built AI-powered features for language learning with phoneme-based pronunciation analysis",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications",
      institution: "Periyar University",
      duration: "2024 - Present",
      location: "Salem, Tamil Nadu",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Sacred Heart College",
      duration: "2021 - 2024",
      location: "Tirupattur, Tamil Nadu",
    },
  ],

  projects: [
    {
      name: "Flutter Messenger App",
      tech: "Flutter, Firebase, BLoC/Cubit, Cloud Firestore, Firebase Auth, GetIt",
      description:
        "Production-ready real-time messaging application with Firebase backend, featuring instant message delivery, user presence tracking, offline support, typing indicators, and contact synchronization with scalable Clean Architecture",
      impact: "< 1s latency • Offline-first • Real-time presence"
    },
    {
      name: "Language Learning App",
      tech: "Flutter, Whisper AI, Firebase, Google Cloud Speech API, Material 3",
      description:
        "AI-powered multi-language learning platform with real-time pronunciation feedback, 92% accuracy speech recognition, offline mode, and gamified progress tracking across Tamil, Hindi, and English",
      impact: "92% AI accuracy • Offline support • 3 languages"
    },
    {
      name: "Expense Tracker & Budget Manager",
      tech: "Flutter, Firebase, Provider, FL Chart, Cloud Backup",
      description: "Intuitive personal finance app with category-wise expense tracking, monthly spending analysis with visual charts, budget alerts, and seamless multi-device cloud synchronization",
      impact: "Real-time charts • Cloud backup • Budget alerts"
    },
  ],

  skills: {
    "Mobile Development": ["Flutter", "Dart", "Material Design 3", "Responsive UI", "Cross-Platform", "iOS & Android"],
    "Backend & Cloud": ["Firebase", "Firestore", "Cloud Functions", "REST APIs", "SQLite", "IndexedDB"],
    "AI & Machine Learning": ["Whisper AI", "Google Cloud AI", "Firebase ML Kit", "Speech Recognition", "NLP", "Python", "Scikit-learn"],
    "Frontend Web": ["HTML5", "CSS3", "JavaScript", "React Basics", "Tailwind CSS"],
    "Tools & Workflow": ["Git & GitHub", "VS Code", "Figma", "Android Studio", "Xcode", "Postman", "Chrome DevTools"],
    "Soft Skills": ["Problem Solving", "UI/UX Design", "Team Collaboration", "Agile Development", "Technical Documentation"],
  },

  certifications: [
    {
      name: "AI/ML Training & Development",
      issuer: "Professional Development Program",
      year: "2024",
      description: "Comprehensive training in Python, Machine Learning, and AI integration",
    },
    {
      name: "Flutter & Dart Development",
      issuer: "Self-Paced Learning & Projects",
      year: "2023-2024",
      description: "Advanced Flutter development with real-world project implementation",
    },
  ],

  achievements: [
    "Built 3 production-grade mobile applications with AI integration",
    "Achieved 92% accuracy in AI-powered pronunciation feedback system",
    "Implemented offline-first architecture serving 100+ active users",
    "Optimized app performance with 40% reduction in load times",
    "Created responsive designs with 95+ Lighthouse accessibility score",
    "Successfully integrated multiple cloud services (Firebase, Google Cloud)",
  ],
};

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const sections = [
    { id: "overview", label: "Overview", icon: "👁️" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "certifications", label: "Certifications", icon: "📜" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
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
              Resume & CV
            </p>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-extrabold gradient-text mb-6">
            Your Next Flutter Developer
          </h1>
          <p className="text-lg text-slate-300/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            {resumeData.summary}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              className="btn-primary"
              href="/resume/YOGANATHAN_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </motion.a>
            <motion.button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {isPreviewMode ? "Hide Preview" : "Interactive Preview"}
            </motion.button>
          </div>
        </motion.header>

        {/* Interactive Resume Preview */}
        <AnimatePresence>
          {isPreviewMode && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Section Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white"
                        : "glass-hover text-slate-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{section.icon}</span>
                    {section.label}
                  </motion.button>
                ))}
              </div>

              {/* Resume Content */}
              <div className="glass rounded-3xl p-8 md:p-10">
                {/* Overview Section */}
                {activeSection === "overview" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h2 className="text-3xl font-bold gradient-text mb-3">
                          {resumeData.personal.name}
                        </h2>
                        <p className="text-xl text-purple-300 mb-6">
                          {resumeData.personal.title}
                        </p>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-3 text-slate-300">
                            <span className="text-purple-400">📍</span>
                            {resumeData.personal.location}
                          </div>
                          <div className="flex items-center gap-3 text-slate-300">
                            <span className="text-purple-400">📧</span>
                            <a href={`mailto:${resumeData.personal.email}`} className="hover:text-purple-300 transition-colors">
                              {resumeData.personal.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-3 text-slate-300">
                            <span className="text-purple-400">💼</span>
                            <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
                              LinkedIn Profile
                            </a>
                          </div>
                          <div className="flex items-center gap-3 text-slate-300">
                            <span className="text-purple-400">🔗</span>
                            <a href={resumeData.personal.github} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
                              GitHub Profile
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-900/40 rounded-2xl p-6 border border-purple-400/10">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="text-purple-400">✨</span>
                          Professional Summary
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {resumeData.summary}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Experience Section */}
                {activeSection === "experience" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold gradient-text mb-8">
                      Experience
                    </h2>
                    {resumeData.experience.map((exp, index) => (
                      <div key={index} className="relative pl-8 pb-8 border-l-2 border-purple-500/50">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900"></div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-white">
                            {exp.title}
                          </h3>
                          <span className="text-sm text-purple-300">
                            @ {exp.company}
                          </span>
                          <span className="text-xs bg-purple-500/20 border border-purple-400/30 px-3 py-1 rounded-full text-purple-200">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-4">
                          {exp.duration}
                        </p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-slate-300 flex items-start gap-3">
                              <span className="text-purple-400 mt-1 text-lg">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Education Section */}
                {activeSection === "education" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold gradient-text mb-8">
                      Education
                    </h2>
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="relative pl-8 pb-8 border-l-2 border-cyan-500/50">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900"></div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-cyan-300 mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-slate-400 mb-2">
                          {edu.duration}
                        </p>
                        <p className="text-sm text-slate-300">
                          {edu.location}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Projects Section */}
                {activeSection === "projects" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold gradient-text mb-8">
                      Key Projects
                    </h2>
                    <div className="grid gap-6">
                      {resumeData.projects.map((project, index) => (
                        <motion.div
                          key={index}
                          className="glass-hover p-6 rounded-2xl group"
                          whileHover={{ y: -5 }}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all">
                              {project.name}
                            </h3>
                            {project.impact && (
                              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 whitespace-nowrap ml-2">
                                {project.impact}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-cyan-300 mb-3 font-medium">
                            {project.tech}
                          </p>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {project.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Skills Section */}
                {activeSection === "skills" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold gradient-text mb-8">
                      Technical Skills
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      {Object.entries(resumeData.skills).map(([category, skills]) => (
                        <div key={category} className="bg-slate-900/40 rounded-2xl p-6 border border-purple-400/10">
                          <h3 className="text-lg font-semibold gradient-text-purple mb-4">
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 px-3 py-1.5 text-xs font-medium text-purple-200 hover:border-purple-400/40 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Certifications Section */}
                {activeSection === "certifications" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold gradient-text mb-8">
                      Certifications & Training
                    </h2>
                    <div className="space-y-6">
                      {resumeData.certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          className="glass-hover p-6 rounded-2xl border-l-4 border-purple-500"
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-white">
                              {cert.name}
                            </h3>
                            <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                              {cert.year}
                            </span>
                          </div>
                          <p className="text-sm text-purple-300 mb-3 font-medium">
                            {cert.issuer}
                          </p>
                          <p className="text-sm text-slate-300">
                            {cert.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Achievements Section */}
                {activeSection === "achievements" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold gradient-text mb-8">
                      Key Achievements
                    </h2>
                    <div className="grid gap-4">
                      {resumeData.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="glass-hover p-5 rounded-2xl flex items-start gap-4 group"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                            {index + 1}
                          </div>
                          <p className="text-sm text-slate-200 leading-relaxed pt-1">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Actions & Info */}
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="glass p-8 rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>📄</span> Download Options
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Get the complete resume in PDF format, optimized for ATS systems and recruiter review. Perfect for job applications.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  className="btn-primary"
                  href="/resume/YOGANATHAN_Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </motion.a>
                <motion.a
                  className="btn-ghost"
                  href="/resume/YOGANATHAN_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Preview PDF
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>💬</span> Let&apos;s Connect
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Interested in discussing opportunities? I&apos;d love to chat about how I can contribute to your team with my Flutter expertise.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get In Touch
                  </motion.button>
                </Link>
                <Link href="/projects">
                  <motion.button
                    className="btn-ghost"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    View Projects
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Quick Stats */}
            <motion.div
              className="glass p-8 rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span>📊</span> Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/10 border border-purple-400/20">
                  <span className="text-slate-300">Specialization</span>
                  <span className="gradient-text-purple font-semibold">Flutter Developer</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-pink-500/10 border border-pink-400/20">
                  <span className="text-slate-300">Projects Built</span>
                  <span className="text-pink-300 font-semibold">3+ Apps</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                  <span className="text-slate-300">AI Integration</span>
                  <span className="text-cyan-300 font-semibold">Whisper AI</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/10 border border-purple-400/20">
                  <span className="text-slate-300">Platforms</span>
                  <span className="gradient-text-purple font-semibold">iOS, Android, Web</span>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="glass p-8 rounded-3xl border-2 border-purple-400/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <h3 className="text-xl font-semibold text-white">Currently Available</h3>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✦</span>
                  Full-time positions
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-400">✦</span>
                  Freelance Flutter projects
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✦</span>
                  AI integration projects
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✦</span>
                  Remote or hybrid work
                </div>
              </div>
            </motion.div>

            {/* Tip */}
            <motion.div
              className="glass p-6 rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span>💡</span> Pro Tip
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Need a customized resume for a specific role? Contact me with the job description, and I&apos;ll tailor it to highlight the most relevant Flutter and AI skills.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
