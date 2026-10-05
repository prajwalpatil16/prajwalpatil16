import React from 'react';
import {
  EditorialHero,
  EditorialGridItem,
  EditorialExperience,
  EditorialDatabase,
  EditorialEducation,
  EditorialFooter,
} from '../components';
import { Code2, Cpu, Terminal, Sparkles } from 'lucide-react';

export const EditorialDesignSystemPage: React.FC = () => {
  return (
    <div className="space-y-16 select-none bg-[var(--bg-paper)] text-[var(--text-charcoal)]">
      {/* 1. ICONIC POSTER HERO SECTION */}
      <EditorialHero
        onExploreMissions={() => {
          document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 01 / ORIGIN & ABOUT PRAJWAL PATIL */}
      <section id="origin" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-8">
        <div className="flex items-end justify-between border-b-2 border-editorial-heavy pb-6 flex-wrap gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#C81E1E] uppercase tracking-widest font-bold block mb-1">
              01 / ABOUT &amp; PHILOSOPHY
            </span>
            <h2 className="font-antonio text-4xl sm:text-6xl md:text-7xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
              PRAJWAL PATIL — FULL STACK DEVELOPER
            </h2>
          </div>
          <span className="font-mono-code text-xs text-[#121316] font-bold bg-[#DBD3C5] px-3 py-1.5 rounded-lg border-2 border-[#121316]">
            BENGALURU, KARNATAKA 🇮🇳
          </span>
        </div>

        {/* Narrative Statement */}
        <div className="p-6 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl space-y-3 shadow-lg">
          <p className="font-serif-editorial text-lg sm:text-xl text-[#121316] font-bold italic leading-relaxed">
            "I write code for a living, break things occasionally, and enjoy figuring out how to make them work better. Still building. Still learning. Probably still debugging."
          </p>
          <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
            I enjoy turning ideas, messy requirements, and real-world problems into products people can actually use. I like getting involved beyond just writing code — understanding the problem, figuring out the approach, building it, fixing what breaks, and making it better. Build seriously, debug patiently, learn constantly, and have a little fun along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EditorialGridItem
            number="01"
            title="BUILD SERIOUSLY"
            subtitle="END-TO-END PRODUCTS"
            description="Specializing in building high-concurrency web applications, microservices, REST APIs, and responsive React 19 / TypeScript frontends."
            tags={['Java', 'Spring Boot', 'Python', 'Flask', 'React 19', 'MySQL']}
          />

          <EditorialGridItem
            number="02"
            title="DEBUG PATIENTLY"
            subtitle="BACKEND &amp; SYSTEM LOGIC"
            description="Focused on database schemas, state machines, connection pooling, security scoping, and resilient API architecture."
            tags={['REST APIs', 'JWT Auth', 'PostgreSQL', 'MySQL', 'System Design']}
          />

          <EditorialGridItem
            number="03"
            title="LEARN CONSTANTLY"
            subtitle="AI &amp; WORKFLOW AUTOMATION"
            description="Hands-on experience developing AI note-taking workspaces with Gemini RAG, force-directed knowledge graphs, and sales automation engines."
            tags={['Notely AI', 'Gemini RAG', 'Knowledge Graph', 'SwiftBIM', 'TestDesk']}
          />
        </div>
      </section>

      {/* 02 / WORK EXPERIENCE TIMELINE */}
      <EditorialExperience />

      {/* 03 / FEATURED PROJECTS DATABASE */}
      <EditorialDatabase />

      {/* 04 / TECHNICAL ARSENAL & SKILLS */}
      <section id="superpowers" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-8">
        <div className="border-b-2 border-editorial-heavy pb-6">
          <span className="font-mono-code text-xs text-[#C81E1E] uppercase tracking-widest font-bold block mb-1">
            04 / TECHNICAL ARSENAL
          </span>
          <h2 className="font-antonio text-4xl sm:text-6xl md:text-7xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
            SKILLS &amp; TECHNOLOGIES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              category: 'BACKEND & LANGUAGES',
              icon: <Cpu className="w-5 h-5 text-[#C81E1E]" />,
              skills: ['Java', 'Spring Boot', 'Python', 'Flask', 'Node.js', 'REST APIs', 'Microservices', 'MySQL'],
            },
            {
              category: 'FRONTEND ENGINEERING',
              icon: <Code2 className="w-5 h-5 text-[#C81E1E]" />,
              skills: ['React 19', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite'],
            },
            {
              category: 'AI & DATA SYSTEMS',
              icon: <Sparkles className="w-5 h-5 text-[#C81E1E]" />,
              skills: ['Google Gemini API', 'RAG Embeddings', 'Knowledge Graphs', 'Semantic Search', 'JWT / OAuth'],
            },
            {
              category: 'DEVOPS & TOOLS',
              icon: <Terminal className="w-5 h-5 text-[#C81E1E]" />,
              skills: ['Git & GitHub', 'Docker', 'Postman', 'VS Code', 'Eclipse', 'Agile / Technical Specs'],
            },
          ].map((block, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl space-y-4 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center justify-between border-b border-[#121316]/30 pb-2">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#121316]">
                  {block.category}
                </span>
                {block.icon}
              </div>

              <ul className="space-y-2 font-mono-code text-xs text-[#121316]">
                {block.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C81E1E]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 05 / EDUCATION & CREDENTIALS */}
      <EditorialEducation />

      {/* 06 / TRANSMISSION FOOTER */}
      <EditorialFooter />
    </div>
  );
};
