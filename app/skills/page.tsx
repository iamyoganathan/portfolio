"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CircularProgress = ({ percentage, size = 120 }: { percentage: number; size?: number }) => {
  const radius = (size - 8) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="currentColor" strokeWidth={8} fill="none" className="text-purple-900/30" />
        <motion.circle cx={size / 2} cy={size / 2} r={radius} stroke="url(#gradient)" strokeWidth={8} fill="none" strokeLinecap="round" initial={{ strokeDashoffset: circumference }} animate={{ strokeDashoffset: offset }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ strokeDasharray: circumference }} />
        <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="50%" stopColor="#ec4899" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient></defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center"><span className="text-2xl font-bold text-white">{percentage}%</span></div>
    </div>
  );
};

const skills = [
  { category: "Mobile", icon: "/icons/flutter.svg", items: [{ name: "Flutter", level: 90, icon: "/icons/flutter.svg" }, { name: "Dart", level: 90, icon: "/icons/dart.svg" }, { name: "Material Design", level: 85, icon: "/icons/react.svg" }] },
  { category: "Backend", icon: "/icons/firebase.svg", items: [{ name: "Firebase", level: 85, icon: "/icons/firebase.svg" }, { name: "Python", level: 85, icon: "/icons/python.svg" }, { name: "RESTful APIs", level: 80, icon: "/icons/nextjs.svg" }] },
  { category: "AI/ML", icon: "/icons/python.svg", items: [{ name: "Machine Learning", level: 80, icon: "/icons/python.svg" }, { name: "Scikit-learn", level: 80, icon: "/icons/python.svg" }, { name: "AI Integration", level: 75, icon: "/icons/python.svg" }] },
  { category: "Frontend", icon: "/icons/html.svg", items: [{ name: "HTML5", level: 90, icon: "/icons/html.svg" }, { name: "CSS3", level: 85, icon: "/icons/tailwind.svg" }, { name: "JavaScript", level: 80, icon: "/icons/typescript.svg" }] },
];

export default function SkillsPage() {
  return (
    <section className="relative min-h-screen py-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-4 font-semibold">Technical Expertise</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl md:text-7xl font-extrabold mb-6"><span className="gradient-text">Skills &</span><br /><span className="text-white">Technologies</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-purple-100/80 max-w-2xl mx-auto">Technical skills and expertise gained through hands-on projects</motion.p>
        </motion.header>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20"><h2 className="text-3xl font-bold gradient-text text-center mb-12">Top Skills</h2><div className="grid md:grid-cols-4 gap-8">{[{ name: "Flutter", level: 90, icon: "/icons/flutter.svg" }, { name: "Dart", level: 90, icon: "/icons/dart.svg" }, { name: "Firebase", level: 85, icon: "/icons/firebase.svg" }, { name: "Python", level: 85, icon: "/icons/python.svg" }].map((skill, i) => (<motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05 }} className="glass-hover p-8 rounded-3xl flex flex-col items-center space-y-4"><div className="relative w-16 h-16"><Image src={skill.icon} alt={skill.name} fill className="object-contain" /></div><CircularProgress percentage={skill.level} size={140} /><h3 className="text-xl font-bold text-white mt-4">{skill.name}</h3><p className="text-sm text-purple-300">Expert Level</p></motion.div>))}</div></motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20"><h2 className="text-3xl font-bold gradient-text text-center mb-12">All Skills</h2><div className="grid md:grid-cols-4 gap-8">{skills.map((cat, i) => (<motion.div key={cat.category} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-hover p-6 rounded-3xl space-y-6"><div className="text-center space-y-2"><div className="relative w-16 h-16 mx-auto mb-3"><Image src={cat.icon} alt={cat.category} fill className="object-contain" /></div><h3 className="text-xl font-bold gradient-text-purple">{cat.category}</h3></div><div className="space-y-4">{cat.items.map((skill) => (<div key={skill.name} className="space-y-2"><div className="flex items-center justify-between gap-2"><div className="flex items-center gap-2"><Image src={skill.icon} alt={skill.name} width={16} height={16} className="object-contain" /><span className="text-sm font-semibold text-white">{skill.name}</span></div><span className="text-xs font-bold gradient-text-purple">{skill.level}%</span></div><div className="h-2 bg-purple-900/30 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" /></div></div>))}</div></motion.div>))}</div></motion.div>
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-hover p-12 rounded-3xl text-center space-y-6 neon-glow"><h3 className="text-3xl font-bold gradient-text">See My Skills in Action</h3><p className="text-lg text-purple-100/80 max-w-2xl mx-auto">Explore projects to see these technologies in use</p><div className="flex flex-wrap justify-center gap-4 pt-4"><a href="/projects" className="btn-primary"><span>View Projects</span></a><a href="/resume" className="btn-ghost"><span>Download Resume</span></a></div></motion.section>
      </div>
    </section>
  );
}