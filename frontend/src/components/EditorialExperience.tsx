import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EditorialExperience: React.FC = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'MINE IT',
      legalName: "Merry's Info Educare",
      location: 'Bengaluru, KA • On-site',
      period: 'Jan 2026 — Present',
      type: 'Full-Time',
      highlights: [
        'Digitized SwiftBIM sales-to-delivery workflow, covering enquiry, proposal, contract generation, and task progress tracking.',
        'Built and maintained CMS platforms for SwiftBIM and Asset Society, enabling non-engineering teams to manage content independently.',
        'Migrated MINE website from static pages to dynamic, database-driven web platforms including AECEarth.',
      ],
      tech: ['React.js 19', 'Python', 'Flask', 'MySQL', 'REST APIs', 'Tailwind CSS'],
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'MINE IT',
      legalName: "Merry's Info Educare",
      location: 'Bengaluru, KA • On-site',
      period: 'Oct 2025 — Jan 2026',
      type: 'Internship',
      highlights: [
        'Contributed to core frontend components and internal dashboard features using React.js.',
        'Built backend REST endpoints with Flask and MySQL for data intake, validations, and user authentication.',
        'Received Full Stack Developer Internship Certificate from MINE IT in Jan 2026.',
      ],
      tech: ['React.js', 'Flask', 'Python', 'MySQL', 'REST APIs'],
    },
    {
      role: 'Full Stack Developer Trainee',
      company: 'KodNest',
      legalName: '',
      location: 'Bengaluru, KA • On-site',
      period: 'Jul 2024 — Feb 2025',
      type: 'Training & Internship',
      highlights: [
        'Completed comprehensive full-stack engineering program covering Core Java, OOPs, Spring Boot, SQL, and React.',
        'Built 5+ end-to-end full-stack projects with relational database schemas, REST APIs, and responsive frontends.',
        'Earned Java Full Stack Developer Certificate from KodNest in Feb 2025.',
      ],
      tech: ['Java', 'Spring Boot', 'SQL', 'MySQL', 'React', 'REST APIs'],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-b-2 border-editorial-heavy select-none">
      <div className="max-w-[1100px] mx-auto space-y-8">
        {/* Section Header */}
        <div className="border-b-2 border-editorial-heavy pb-5 flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#B52B27] uppercase tracking-widest font-bold block mb-1">
              02 / WORK EXPERIENCE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
              EXPERIENCE
            </h2>
          </div>
          <div className="font-mono-code text-xs font-bold text-[#121316] bg-[#DBD3C5] px-3 py-1.5 rounded-lg border border-[#121316]">
            3 ROLES • BENGALURU, INDIA
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl shadow-sm card-hover space-y-4"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#121316]/25 pb-3.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-[11px] text-[#B52B27] font-bold tracking-wider uppercase">
                      {exp.type}
                    </span>
                    {exp.legalName && (
                      <span className="font-mono-code text-[11px] text-[#4A4A52]">
                        ({exp.legalName})
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#121316] font-bold uppercase leading-tight mt-0.5">
                    {exp.role} <span className="text-[#B52B27]">@ {exp.company}</span>
                  </h3>
                </div>

                <div className="font-mono-code text-xs text-[#121316] font-bold flex flex-wrap items-center gap-2 self-start sm:self-auto">
                  <span className="flex items-center gap-1 bg-[#E6DFD3] px-2.5 py-1 rounded border border-[#121316]/40">
                    <Calendar className="w-3.5 h-3.5 text-[#B52B27]" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-[#E6DFD3] px-2.5 py-1 rounded border border-[#121316]/40">
                    <MapPin className="w-3.5 h-3.5 text-[#B52B27]" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 font-sans-editorial text-xs sm:text-sm text-[#4A4A52]">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B52B27] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
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
      </div>
    </section>
  );
};
