import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';


export const EditorialExperience: React.FC = () => {
  const experiences = [
    {
      role: 'FULL STACK DEVELOPER',
      company: 'MINE IT (Merry\'s Info Educare)',
      location: 'Bengaluru, KA 🇮🇳 • On-site',
      period: 'OCT 2025 — PRESENT',
      type: 'FULL-TIME & INTERNSHIP',
      highlights: [
        'Digitized SwiftBIM\'s core sales-to-delivery workflow, transforming a manual, ad-hoc process into a structured system covering enquiry → proposal → contract → task execution and progress tracking.',
        'Contributed to SwiftBIM\'s production development across React.js, Flask, and MySQL, building and integrating real product features.',
        'Developed REST APIs and backend logic for authentication, data handling, state machines, and core application workflows.',
        'Earned MINE IT Internship Certificate | Full Stack Developer (Issued Jan 2026).',
      ],
      tech: ['Python (Flask)', 'React.js', 'MySQL', 'REST APIs', 'Authentication', 'State Machines'],
    },
    {
      role: 'FULL STACK DEVELOPER TRAINEE',
      company: 'KodNest',
      location: 'Bengaluru, KA 🇮🇳 • On-site',
      period: 'JUL 2024 — FEB 2025',
      type: 'INTERNSHIP / TRAINING',
      highlights: [
        'Built 5+ full-stack projects end-to-end using Java, Spring Boot, Flask, React, and MySQL.',
        'Gained strong hands-on experience simulating real full-stack development workflows, API integration, and database management.',
        'Earned Java Full Stack Developer Certificate from KodNest (Issued Feb 2025).',
      ],
      tech: ['Java', 'Spring Boot', 'Python', 'Flask', 'React', 'MySQL', 'OOPs', 'REST APIs'],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 border-b-2 border-editorial-heavy max-w-7xl mx-auto space-y-8 select-none">
      <div className="border-b-2 border-editorial-heavy pb-6 flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="font-mono-code text-xs text-[#C81E1E] uppercase tracking-widest font-bold block mb-1">
            02 / CAREER HISTORY
          </span>
          <h2 className="font-antonio text-4xl sm:text-6xl md:text-7xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
            WORK EXPERIENCE
          </h2>
        </div>
        <div className="font-mono-code text-xs font-bold text-[#121316] bg-[#DBD3C5] px-3 py-1.5 rounded-lg border-2 border-[#121316]">
          FULL STACK DEVELOPMENT
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-8 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl shadow-lg hover:shadow-xl transition-all space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#121316]/30 pb-4">
              <div>
                <span className="font-mono-code text-xs text-[#C81E1E] font-bold tracking-widest uppercase">
                  {exp.type}
                </span>
                <h3 className="font-antonio text-2xl sm:text-3xl md:text-4xl text-[#121316] font-bold uppercase leading-tight mt-1">
                  {exp.role} <span className="text-[#C81E1E]">@ {exp.company}</span>
                </h3>
              </div>

              <div className="font-mono-code text-xs text-[#121316] font-bold flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="flex items-center gap-1 bg-[#E6DFD3] px-2.5 py-1 rounded border border-[#121316]/40">
                  <Calendar className="w-3.5 h-3.5 text-[#C81E1E]" />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1 bg-[#E6DFD3] px-2.5 py-1 rounded border border-[#121316]/40">
                  <MapPin className="w-3.5 h-3.5 text-[#C81E1E]" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 font-sans-editorial text-xs sm:text-sm text-[#4A4A52]">
              {exp.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C81E1E] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {exp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded font-mono-code text-xs bg-[#E6DFD3] border border-[#121316] font-bold text-[#121316]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
