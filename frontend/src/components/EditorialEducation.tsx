import React from 'react';
import { Award, BookOpen, CheckCircle2 } from 'lucide-react';


export const EditorialEducation: React.FC = () => {
  const educationList = [
    {
      institution: 'JAIN COLLEGE OF ENGINEERING',
      degree: 'Bachelor of Engineering (BE) — Electrical, Electronics & Communications Engineering',
      period: 'AUG 2020 — JUL 2024',
      grade: 'Grade: 7.1 / 10 CGPA',
      description:
        'Developed a strong foundation in programming through academic projects and self-driven learning in Java, Python, and web development.',
    },
    {
      institution: 'Tungal Schools',
      degree: 'Pre-University Course (PUC) — Science',
      period: 'JUN 2018 — MAY 2020',
      grade: 'Grade: 70%',
      description: 'Completed higher secondary education in Mathematics, Physics, and Chemistry.',
    },
    {
      institution: 'The Excellent English Medium School — Vijayapura',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      period: 'JUN 2017 — MAY 2018',
      grade: 'Grade: 86%',
      description: 'Secondary education with distinction in mathematics and science fundamentals.',
    },
  ];

  const certifications = [
    {
      title: 'Full Stack Developer Internship Certificate',
      issuer: 'MINE IT (Merry\'s Info Educare)',
      issued: 'Issued Jan 2026',
    },
    {
      title: 'Java Full Stack Developer Certificate',
      issuer: 'KodNest',
      issued: 'Issued Feb 2025',
    },
    {
      title: 'Java Full Stack Developer Certificate',
      issuer: 'AiROBOSOFT Products And Services',
      issued: 'Issued Aug 2023',
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 border-b-2 border-editorial-heavy max-w-7xl mx-auto space-y-8 select-none">
      {/* Section Header */}
      <div className="border-b-2 border-editorial-heavy pb-6 flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="font-mono-code text-xs text-[#C81E1E] uppercase tracking-widest font-bold block mb-1">
            04 / ACADEMICS &amp; CERTIFICATIONS
          </span>
          <h2 className="font-antonio text-4xl sm:text-6xl md:text-7xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
            EDUCATION &amp; CREDENTIALS
          </h2>
        </div>
        <div className="font-mono-code text-xs font-bold text-[#121316] bg-[#DBD3C5] px-3 py-1.5 rounded-lg border-2 border-[#121316]">
          VERIFIED QUALIFICATIONS
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Education Timeline */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-antonio text-2xl font-bold text-[#121316] uppercase flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#C81E1E]" />
            <span>ACADEMIC BACKGROUND</span>
          </h3>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl space-y-2.5 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#121316]/30 pb-2">
                  <div>
                    <h4 className="font-antonio text-2xl text-[#121316] font-bold uppercase leading-none">
                      {edu.institution}
                    </h4>
                    <div className="font-mono-code text-xs text-[#C81E1E] font-bold mt-1">
                      {edu.degree}
                    </div>
                  </div>
                  <span className="font-mono-code text-[11px] font-bold text-[#121316] bg-[#E6DFD3] px-2 py-0.5 rounded border border-[#121316]/40 self-start sm:self-auto">
                    {edu.period}
                  </span>
                </div>

                <p className="font-serif-editorial text-xs sm:text-sm text-[#4A4A52] leading-relaxed italic">
                  "{edu.description}"
                </p>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono-code text-xs bg-[#C81E1E] text-white font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-antonio text-2xl font-bold text-[#121316] uppercase flex items-center gap-2">
            <Award className="w-5 h-5 text-[#C81E1E]" />
            <span>INDUSTRY CERTIFICATIONS</span>
          </h3>

          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl space-y-1.5 shadow-md"
              >
                <div className="flex items-center justify-between font-mono-code text-[10px] text-[#C81E1E] font-bold">
                  <span>VERIFIED CERTIFICATION</span>
                  <span>{cert.issued}</span>
                </div>

                <h4 className="font-antonio text-xl text-[#121316] font-bold uppercase leading-tight">
                  {cert.title}
                </h4>

                <div className="font-mono-code text-xs text-[#4A4A52]">
                  Issuer: <span className="font-bold text-[#121316]">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
