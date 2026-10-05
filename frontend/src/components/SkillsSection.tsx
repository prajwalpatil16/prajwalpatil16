import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Code2, Sparkles, Terminal } from 'lucide-react';


export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'BACKEND & SYSTEMS',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      skills: [
        'Java',
        'Spring Boot',
        'Python',
        'Flask',
        'REST APIs',
        'Microservices',
        'JWT / OAuth Auth',
        'MySQL Database',
        'IDOR-Safe Scoping',
      ],
    },
    {
      title: 'FRONTEND ENGINEERING',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
      skills: [
        'React 19',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'State Management',
        'Responsive UI',
        'Component Libraries',
      ],
    },
    {
      title: 'AI & KNOWLEDGE SYSTEMS',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
      skills: [
        'Google Gemini API',
        'RAG Companion',
        'Vector Embeddings',
        'Knowledge Graphs',
        'Semantic Search',
        'Auto-Summarization',
        'Tag Extraction',
      ],
    },
    {
      title: 'TOOLS & METHODOLOGIES',
      icon: <Terminal className="w-5 h-5 text-amber-400" />,
      badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
      skills: [
        'Git & GitHub',
        'Docker',
        'Postman',
        'VS Code / Eclipse',
        'Agile Workflows',
        'Technical Specs',
        'Patient Debugging',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 select-none">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-emerald-400 font-semibold uppercase tracking-widest mb-2">
              <Cpu className="w-4 h-4" />
              <span>04 / TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-6xl font-black text-white tracking-tight">
              SKILLS &amp; TECHNOLOGIES
            </h2>
          </div>
          <div className="font-mono-code text-xs text-gray-400 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            FULL STACK STACK
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {category.icon}
                    </div>
                    <span className="font-outfit font-bold text-sm text-white tracking-wide">
                      {category.title}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 font-mono-code text-xs text-gray-300">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10 font-mono-code text-[11px] text-gray-400 text-right">
                {category.skills.length} CORE COMPETENCIES
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
