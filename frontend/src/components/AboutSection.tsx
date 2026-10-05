import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Wrench, Lightbulb } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 select-none">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-emerald-400 font-semibold uppercase tracking-widest mb-2">
              <User className="w-4 h-4" />
              <span>01 / ABOUT &amp; MINDSET</span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-6xl font-black text-white tracking-tight">
              PHILOSOPHY &amp; BACKGROUND
            </h2>
          </div>
          <div className="font-mono-code text-xs text-gray-400 bg-white/5 px-4 py-2 rounded-xl border border-white/10 self-start md:self-auto">
            BENGALURU, KARNATAKA 🇮🇳
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10 flex flex-col justify-between"
          >
            <div className="space-y-4 font-inter text-base sm:text-lg text-gray-300 leading-relaxed">
              <p className="font-medium text-white text-xl">
                "I write code for a living, break things occasionally, and enjoy figuring out how to make them work better. Still building. Still learning. Probably still debugging."
              </p>

              <p>
                I'm a Full Stack Developer who enjoys turning ideas, messy requirements and real-world problems into products people can actually use. I like getting involved beyond just writing code — understanding the problem, figuring out the approach, building it, fixing what breaks, and making it better.
              </p>

              <p>
                I work across <span className="text-emerald-400 font-semibold">Java, Spring Boot, Python, Flask, React and MySQL</span>, with a strong interest in product development, backend systems and practical workflows.
              </p>

              <p className="italic text-gray-400 pt-2 border-t border-white/10">
                "I'm big on ownership, learning and doing things properly. Build seriously, debug patiently, learn constantly, and have a little fun along the way."
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3 font-mono-code text-xs text-emerald-400 font-semibold">
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                💡 Problem Solver
              </span>
              <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                ⚙️ Product Builder
              </span>
              <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30">
                🔍 Patient Debugger
              </span>
            </div>
          </motion.div>

          {/* Right Column: 3 Core Pillars */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {[
              {
                icon: <Code2 className="w-6 h-6 text-emerald-400" />,
                title: 'BUILD SERIOUSLY',
                description: 'Designing clean architectures, robust REST APIs, secure authentication, and well-structured database schemas.',
                badge: 'Java • Python • React',
              },
              {
                icon: <Wrench className="w-6 h-6 text-cyan-400" />,
                title: 'DEBUG PATIENTLY',
                description: 'Inspecting logs, tracing edge cases, optimizing connection pools, and ensuring bulletproof stability.',
                badge: 'Backend & System Logic',
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
                title: 'LEARN CONSTANTLY',
                description: 'Integrating modern AI models (Gemini RAG), knowledge graph visualizations, and production workflow automation.',
                badge: 'AI & Full Stack',
              },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 space-y-2 flex-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {pillar.icon}
                    </div>
                    <h3 className="font-outfit font-bold text-lg text-white tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="font-mono-code text-[11px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {pillar.badge}
                  </span>
                </div>
                <p className="font-inter text-xs sm:text-sm text-gray-400 leading-relaxed pl-12">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
