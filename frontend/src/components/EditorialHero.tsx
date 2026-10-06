import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, ArrowDown, FolderGit2 } from 'lucide-react';

export interface EditorialHeroProps {
  onExploreMissions?: () => void;
  onGoToContact?: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onExploreMissions,
  onGoToContact,
}) => {
  return (
    <section className="relative w-full bg-[var(--bg-paper)] text-[var(--text-charcoal)] border-b-2 border-editorial-heavy py-16 sm:py-24 px-4 sm:px-6 md:px-8 select-none">
      <div className="max-w-[1100px] mx-auto space-y-12">
        {/* 1. Main Headline & Subtitle */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="space-y-3"
          >
            <span className="font-mono-code text-xs sm:text-sm font-bold text-[#B52B27] uppercase tracking-[0.2em] inline-block">
              PRAJWAL PATIL • BENGALURU, INDIA
            </span>

            {/* Clear Headline with comfortable line-height so nothing collides */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#121316] uppercase leading-[1.05] tracking-tight">
              FULL STACK <span className="text-[#B52B27]">DEVELOPER</span>
            </h1>

            {/* One-Line Subtitle */}
            <p className="font-sans-editorial text-base sm:text-lg md:text-xl text-[#4A4A52] max-w-2xl mx-auto leading-relaxed">
              Building clean, reliable web applications and internal tools with Java, Python, and React.
            </p>
          </motion.div>

          {/* Two Buttons Only: View Projects & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-3 pt-3"
          >
            <button
              onClick={onExploreMissions}
              className="flex items-center gap-2 px-6 py-3 bg-[#121316] text-[#E6DFD3] hover:bg-[#B52B27] hover:text-white font-display text-base font-bold uppercase tracking-wider rounded-xl border-2 border-[#121316] shadow-sm transition-all cursor-pointer btn-press"
            >
              <span>VIEW PROJECTS</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onGoToContact}
              className="flex items-center gap-2 px-6 py-3 bg-[#ECE5D9] text-[#121316] hover:bg-[#121316] hover:text-white font-display text-base font-bold uppercase tracking-wider rounded-xl border-2 border-[#121316] shadow-sm transition-all cursor-pointer btn-press"
            >
              <Mail className="w-4 h-4" />
              <span>GET IN TOUCH</span>
            </button>
          </motion.div>
        </div>

        {/* 2. Structured Profile Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: 'easeOut' }}
          className="p-6 sm:p-8 bg-[#ECE5D9] border-2 border-[#121316] rounded-2xl shadow-md space-y-6 card-hover"
        >
          {/* Card Top Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#121316]/25 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B52B27]" />
              <span className="font-mono-code text-xs font-bold text-[#121316] tracking-widest uppercase">
                ENGINEERING PROFILE // OVERVIEW
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-mono-code text-xs font-bold text-emerald-950 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-400">
                AVAILABLE FOR ROLES
              </span>
            </div>
          </div>

          {/* Grid Information */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Narrative */}
            <div className="md:col-span-7 space-y-3">
              <p className="font-serif-editorial text-base sm:text-lg text-[#121316] font-bold italic leading-relaxed">
                "I enjoy turning ideas, messy requirements, and real-world problems into products people can actually use."
              </p>
              <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
                Full Stack Developer at MINE IT working across Java, Python, Flask, React, and MySQL. Building core sales-to-delivery workflows for SwiftBIM and production CMS platforms that internal teams run independently.
              </p>

              {/* Verified Tech Stack Tags */}
              <div className="pt-2">
                <span className="font-mono-code text-[11px] font-bold text-[#121316] uppercase tracking-wider block mb-2">
                  PRIMARY TECH STACK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Java',
                    'Python',
                    'JavaScript (ES6+)',
                    'React.js 19',
                    'Spring Boot',
                    'Flask',
                    'SQL',
                    'MySQL',
                    'REST APIs',
                    'Tailwind CSS',
                    'Git',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#E6DFD3] border border-[#121316] font-mono-code text-xs font-bold text-[#121316] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Contact Details */}
            <div className="md:col-span-5 space-y-3.5 border-t md:border-t-0 md:border-l border-[#121316]/25 pt-4 md:pt-0 md:pl-6">
              <span className="font-mono-code text-xs font-bold text-[#B52B27] uppercase tracking-wider block">
                DIRECT CONTACT:
              </span>

              <a
                href="mailto:prajwalgpatil2002@gmail.com"
                className="flex items-center gap-2 p-2.5 bg-white border border-[#121316] rounded-lg text-xs font-mono-code font-bold text-[#121316] hover:bg-[#B52B27] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B52B27] shrink-0" />
                <span className="truncate">prajwalgpatil2002@gmail.com</span>
              </a>

              <a
                href="tel:7019609440"
                className="flex items-center gap-2 p-2.5 bg-white border border-[#121316] rounded-lg text-xs font-mono-code font-bold text-[#121316] hover:bg-[#121316] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B52B27] shrink-0" />
                <span>+91 7019609440</span>
              </a>

              <div className="flex gap-2 pt-1 font-mono-code text-xs font-bold">
                <a
                  href="https://www.linkedin.com/in/prajwal-patil16/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 p-2 bg-white border border-[#121316] rounded-lg hover:bg-[#121316] hover:text-white transition-colors"
                >
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://github.com/prajwalpatil16"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 p-2 bg-white border border-[#121316] rounded-lg hover:bg-[#121316] hover:text-white transition-colors"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
