import React from 'react';
import { Award, BookOpen, CheckCircle2 } from 'lucide-react';

export const EditorialEducation: React.FC = () => {
  const educationList = [
    {
      institution: 'Dayananda Sagar Academy of Technology and Management',
      degree: 'B.E. in Electronics & Communication Engineering',
      period: 'Aug 2020 — Jul 2024',
      grade: '7.1 CGPA',
      location: 'Bengaluru, Karnataka',
      description:
        'Built a strong foundation in core engineering, object-oriented programming, data structures, and web technologies through academic curriculum and projects.',
    },
  ];

  const certifications = [
    {
      title: 'Full Stack Developer Internship Certificate',
      issuer: 'MINE IT',
      issued: 'Jan 2026',
    },
    {
      title: 'Java Full Stack Developer Certification',
      issuer: 'KodNest',
      issued: 'Feb 2025',
    },
    {
      title: 'Java Full Stack Developer Certificate',
      issuer: 'AiROBOSOFT Products And Services',
      issued: 'Aug 2023',
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-b-2 border-editorial-heavy select-none">
      <div className="max-w-[1100px] mx-auto space-y-8">
        {/* Section Header */}
        <div className="border-b-2 border-editorial-heavy pb-5 flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#B52B27] uppercase tracking-widest font-bold block mb-1">
              05 / EDUCATION &amp; CREDENTIALS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
          </div>
          <div className="font-mono-code text-xs font-bold text-[#121316] bg-[#DBD3C5] px-3 py-1.5 rounded-lg border border-[#121316]">
            ACADEMIC QUALIFICATIONS
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display text-2xl font-bold text-[#121316] uppercase flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#B52B27]" />
              <span>UNDERGRADUATE DEGREE</span>
            </h3>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl space-y-3 shadow-sm card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#121316]/25 pb-3">
                    <div>
                      <h4 className="font-display text-2xl text-[#121316] font-bold uppercase leading-snug">
                        {edu.institution}
                      </h4>
                      <div className="font-mono-code text-xs text-[#B52B27] font-bold mt-1">
                        {edu.degree}
                      </div>
                    </div>
                    <span className="font-mono-code text-[11px] font-bold text-[#121316] bg-[#E6DFD3] px-2.5 py-1 rounded border border-[#121316]/40 self-start sm:self-auto shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="flex items-center justify-between pt-1 font-mono-code text-xs">
                    <span className="text-[#4A4A52]">{edu.location}</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#B52B27] text-white font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{edu.grade}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-2xl font-bold text-[#121316] uppercase flex items-center gap-2">
              <Award className="w-5 h-5 text-[#B52B27]" />
              <span>INDUSTRY CERTIFICATIONS</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl space-y-1.5 shadow-sm card-hover"
                >
                  <div className="flex items-center justify-between font-mono-code text-[11px]">
                    <span className="text-[#B52B27] font-bold uppercase">CERTIFIED</span>
                    <span className="text-[#4A4A52] font-semibold">{cert.issued}</span>
                  </div>

                  <h4 className="font-display text-xl text-[#121316] font-bold uppercase leading-tight">
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
      </div>
    </section>
  );
};
