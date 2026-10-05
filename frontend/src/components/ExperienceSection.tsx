import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: "MINE IT (Merry's Info Educare)",
      location: 'Bengaluru, Karnataka, India 🇮🇳 • On-site',
      period: 'Oct 2025 — Present (1 Yr)',
      roles: [
        {
          title: 'Full Stack Developer',
          type: 'Full-time',
          duration: 'Jan 2026 — Present (9 mos)',
          description:
            "Digitized SwiftBIM's core sales-to-delivery workflow, transforming a manual, ad-hoc process into a structured enterprise system covering enquiry → proposal → contract → task execution and progress tracking.",
          skills: ['Python (Flask)', 'React.js', 'MySQL', 'REST APIs', 'Workflow State Machines'],
        },
        {
          title: 'Full Stack Developer Intern',
          type: 'Internship',
          duration: 'Oct 2025 — Jan 2026 (4 mos)',
          description:
            "Contributed to SwiftBIM's production development across React.js, Flask, and MySQL, building and integrating real product features. Developed REST APIs and backend logic for authentication, data handling, and core application workflows.",
          certificate: 'MINE IT — Internship Certificate | Issued Jan 2026',
          skills: ['Python', 'Flask', 'React.js', 'MySQL', 'Authentication', 'Technical Docs'],
        },
      ],
    },
    {
      company: 'KodNest',
      location: 'Bengaluru, Karnataka, India 🇮🇳 • On-site',
      period: 'Jul 2024 — Feb 2025 (8 mos)',
      roles: [
        {
          title: 'Full Stack Developer Trainee',
          type: 'Internship / Training',
          duration: 'Jul 2024 — Feb 2025 (8 mos)',
          description:
            'Built 5+ full-stack projects end-to-end using Java, Spring Boot, Flask, React, and MySQL. Gained strong fundamentals in backend development, API integration, MVC patterns, database management, and responsive web interfaces.',
          certificate: 'Java Full Stack Developer Certificate | Issued Feb 2025',
          skills: ['Java', 'Spring Boot', 'Python', 'Flask', 'React', 'MySQL', 'OOPs', 'REST APIs'],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 select-none">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-emerald-400 font-semibold uppercase tracking-widest mb-2">
              <Briefcase className="w-4 h-4" />
              <span>03 / WORK EXPERIENCE</span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-6xl font-black text-white tracking-tight">
              CAREER &amp; INDUSTRY ROLES
            </h2>
          </div>
          <div className="font-mono-code text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/30">
            FULL STACK DEVELOPMENT
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {experiences.map((companyGroup, cIdx) => (
            <motion.div
              key={cIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cIdx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6"
            >
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                    <Building2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
                      {companyGroup.company}
                    </h3>
                    <div className="font-mono-code text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{companyGroup.location}</span>
                    </div>
                  </div>
                </div>

                <div className="font-mono-code text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 self-start sm:self-auto font-semibold">
                  {companyGroup.period}
                </div>
              </div>

              {/* Roles Under Company */}
              <div className="space-y-6 pl-2 sm:pl-4 border-l-2 border-emerald-500/30">
                {companyGroup.roles.map((role, rIdx) => (
                  <div key={rIdx} className="space-y-3 relative pl-4 sm:pl-6">
                    <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 border-4 border-[#0B0F17]" />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="font-mono-code text-[11px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                          {role.type}
                        </span>
                        <h4 className="font-outfit text-xl font-bold text-white mt-1">
                          {role.title}
                        </h4>
                      </div>
                      <span className="font-mono-code text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{role.duration}</span>
                      </span>
                    </div>

                    <p className="font-inter text-sm text-gray-300 leading-relaxed">
                      {role.description}
                    </p>

                    {role.certificate && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-code text-xs font-semibold">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span>{role.certificate}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {role.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-mono-code text-xs font-medium text-gray-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
