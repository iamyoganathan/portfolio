"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projectSummaries } from "../data/projects";
import CaseStudyModal from "../components/CaseStudyModal";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "Mobile", "Web", "AI/ML"];

  const filteredProjects = projectSummaries.filter((project) => {
    if (filter === "all") return true;
    if (filter === "Mobile") return project.stack.includes("Flutter");
    if (filter === "Web") return project.stack.includes("Flutter Web");
    if (filter === "AI/ML") return project.stack.some(tech => tech.includes("AI") || tech.includes("Whisper"));
    return true;
  });

  return (
    <section className="relative min-h-screen py-20">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-4 font-semibold"
          >
            Featured Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="gradient-text">Building The Future</span>
            <br />
            <span className="text-white">With Code</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-purple-100/80 max-w-2xl mx-auto"
          >
            A showcase of mobile applications, AI integrations, and innovative
            solutions built with Flutter, Firebase, and cutting-edge technologies
          </motion.p>
        </motion.header>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 scale-105"
                  : "glass text-purple-200 hover:bg-purple-500/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-hover p-8 rounded-3xl h-full flex flex-col space-y-6 overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500 rounded-3xl" />

                {/* Icon/Number Badge */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white neon-glow group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-purple-100/80 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="relative flex items-center justify-between pt-4 border-t border-purple-400/20">
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="text-sm font-semibold text-purple-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group/btn"
                  >
                    View Case Study
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>

                  {project.link && project.link.href !== "#" && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="glass p-12 rounded-3xl inline-block">
              <p className="text-2xl text-purple-200">
                No projects found in this category
              </p>
              <button
                onClick={() => setFilter("all")}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                View All Projects
              </button>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 glass-hover p-12 rounded-3xl text-center space-y-6 neon-glow"
        >
          <h3 className="text-3xl font-bold gradient-text">
            Have a Project in Mind?
          </h3>
          <p className="text-lg text-purple-100/80 max-w-2xl mx-auto">
            Let&apos;s collaborate and bring your ideas to life with cutting-edge
            mobile and AI solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="/contact" className="btn-primary">
              <span>Start a Conversation</span>
            </a>
            <a href="/about" className="btn-ghost">
              <span>Learn More About Me</span>
            </a>
          </div>
        </motion.section>
      </div>

      {/* Case Study Modal */}
      {selectedProject !== null && (
        <CaseStudyModal
          project={projectSummaries[selectedProject]}
          open={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
