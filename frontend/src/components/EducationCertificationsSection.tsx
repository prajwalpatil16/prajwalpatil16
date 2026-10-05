import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, BookOpen } from 'lucide-react';


export const EducationCertificationsSection: React.FC = () => {
  const educationList = [
    {
      institution: 'JAIN COLLEGE OF ENGINEERING',
      degree: 'Bachelor of Engineering (BE) — Electrical, Electronics & Communications Engineering',
      period: 'Aug 2020 — Jul 2024',
      grade: 'Grade: 7.1 / 10 CGPA',
      description:
        'Developed a strong foundation in programming through academic projects and self-driven learning in Java, Python, and web development. Actively participated in technical events, group projects, and software workshops.',
      highlight: 'Engineering Graduate',
    },
    {
      institution: 'Tungal Schools',
      degree: 'Pre-University Course (PUC) — Science',
      period: 'Jun 2018 — May 2020',
      grade: 'Grade: 70%',
      description: 'Completed higher secondary education with focus on Mathematics, Physics, and Chemistry.',
    },
    {
      institution: 'The Excellent English Medium School — Vijayapura',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      period: 'Jun 2017 — May 2018',
      grade: 'Grade: 86%',
      description: 'Secondary education with distinction in mathematics and science fundamentals.',
    },
  ];

  const certifications = [
    {
      title: 'Full Stack Developer Internship Certificate',
      issuer: 'MINE IT (Merry\'s Info Educare)',
      issued: 'Issued Jan 2026',
      badge: 'MINE IT Verified',
    },
    {
      title: 'Java Full Stack Developer Certificate',
      issuer: 'KodNest',
      issued: 'Issued Feb 2025',
      badge: 'KodNest Verified',
    },
    {
      title: 'Java Full Stack Developer Certificate',
      issuer: 'AiROBOSOFT Products And Services',
      issued: 'Issued Aug 2023',
      badge: 'AiROBOSOFT Verified',
    },
    {
      title: 'Java Programming Fundamentals',
      issuer: 'Professional Certification',
      issued: 'Verified Credential',
      badge: 'Core Java',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 select-none">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-amber-400 font-semibold uppercase tracking-widest mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>05 / ACADEMICS &amp; CREDENTIALS</span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-6xl font-black text-white tracking-tight">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
          </div>
          <div className="font-mono-code text-xs text-amber-400 bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/30">
            QUALIFICATIONS
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-outfit text-2xl font-extrabold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span>ACADEMIC BACKGROUND</span>
            </h3>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <h4 className="font-outfit font-extrabold text-lg text-white">
                        {edu.institution}
                      </h4>
                      <div className="font-inter text-xs text-emerald-400 font-semibold mt-0.5">
                        {edu.degree}
                      </div>
                    </div>
                    <div className="font-mono-code text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-lg border border-white/5 self-start sm:self-auto">
                      {edu.period}
                    </div>
                  </div>

                  <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-code text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications List */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-outfit text-2xl font-extrabold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>VERIFIED CERTIFICATIONS</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
                      {cert.badge}
                    </span>
                    <span className="font-mono-code text-xs text-gray-400">
                      {cert.issued}
                    </span>
                  </div>

                  <h4 className="font-outfit font-bold text-base text-white pt-1">
                    {cert.title}
                  </h4>

                  <div className="font-inter text-xs text-gray-400">
                    Issuer: <span className="text-gray-200 font-medium">{cert.issuer}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
