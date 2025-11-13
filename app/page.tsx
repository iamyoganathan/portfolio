import Hero from "./components/Hero";
import AuroraCanvas from "./components/AuroraCanvas";
import Meteors from "./components/Meteors";

export default function Home() {
  return (
    <section id="top" className="relative overflow-hidden">
      <AuroraCanvas />
      <Meteors />

      <div className="mx-auto flex min-h-screen flex-col gap-24 px-6 pb-24 pt-16 max-w-7xl">
        <Hero />

        {/* About Section - New card design */}
        <section
          id="about"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Main about card */}
          <div className="lg:col-span-2 glass p-8 rounded-3xl hover:glass-hover transition-all duration-300">
            <h2 className="text-3xl font-bold gradient-text-purple mb-6">
              About Me
            </h2>
            <p className="text-base leading-relaxed text-purple-100/90 mb-6">
              I&apos;m Yoganathan C, a passionate Flutter Developer and AI
              enthusiast pursuing my Master of Computer Applications (MCA). I
              specialize in developing cross-platform mobile applications with
              elegant UI/UX, smart AI integration, and optimized performance.
            </p>
            <p className="text-base leading-relaxed text-purple-100/80">
              My journey includes hands-on projects like Language Learning App,
              Digital Diary for Students, and Expense Tracker, demonstrating my
              expertise in building intelligent mobile experiences that empower
              users.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 mt-6 text-purple-300 hover:text-purple-200 font-semibold transition-colors"
            >
              <span>Learn more about me</span>
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Skills highlight card */}
          <div className="glass p-8 rounded-3xl hover:glass-hover transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">
              Core Skills
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                <div>
                  <p className="font-semibold text-white">Mobile Development</p>
                  <p className="text-sm text-purple-200/70">Flutter, Dart, Material Design, Riverpod</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                <div>
                  <p className="font-semibold text-white">Backend Services</p>
                  <p className="text-sm text-purple-200/70">Firebase, Firestore, RESTful APIs, SQLite</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                <div>
                  <p className="font-semibold text-white">AI/ML Integration</p>
                  <p className="text-sm text-purple-200/70">Python, Machine Learning, Google Cloud, Whisper AI</p>
                </div>
              </li>
            </ul>
            <a
              href="/skills"
              className="inline-flex items-center gap-2 mt-6 text-purple-300 hover:text-purple-200 font-semibold transition-colors"
            >
              <span>View all skills</span>
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* CTA Section with modern design */}
        <section
          id="contact"
          className="glass-hover rounded-3xl p-12 text-center space-y-6 neon-glow"
        >
          <h3 className="text-3xl md:text-4xl font-bold gradient-text">
            Ready to work together?
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-purple-100/80">
            I&apos;m available for Flutter development opportunities and
            exciting projects. Whether you&apos;re looking for mobile app
            expertise, AI integration, or cross-platform solutions, let&apos;s
            discuss how we can work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a className="btn-primary" href="mailto:iamyoganathanc@gmail.com">
              <span>Email me</span>
            </a>
            <a className="btn-ghost" href="/contact">
              <span>Contact Page</span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
