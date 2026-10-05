import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Code2 } from 'lucide-react';


export interface EditorialHeroProps {
  onExploreMissions?: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onExploreMissions }) => {
  return (
    <section className="relative w-full bg-[var(--bg-paper)] text-[var(--text-charcoal)] border-b-2 border-editorial-heavy overflow-hidden select-none">
      {/* 1. GIANT POSTER TITLE BANNER */}
      <div className="relative pt-6 sm:pt-10 px-4 sm:px-8 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1 sm:space-y-2"
        >
          <div className="font-mono-code text-xs sm:text-sm font-bold text-[var(--crimson-red)] uppercase tracking-[0.2em]">
            • FULL STACK SOFTWARE DEVELOPER &amp; ARCHITECT •
          </div>

          <h1 className="font-antonio text-4xl sm:text-6xl md:text-8xl lg:text-[7vw] font-extrabold text-[var(--crimson-red)] uppercase leading-[0.9] tracking-tight max-w-7xl mx-auto">
            DEVELOPER &amp; <br className="hidden sm:block" />
            <span className="text-[var(--text-charcoal)]">SOFTWARE ARCHITECT</span>
          </h1>
        </motion.div>

        {/* Minimalist Quotes */}
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-4 mt-4 sm:mt-6 mb-4 font-serif-editorial text-xs sm:text-sm text-[var(--text-muted)] italic">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center sm:text-left"
          >
            "Show me a complex system, and I'll write you an elegant architecture."
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center sm:text-right"
          >
            "Obsessed with clean code, resilient backend logic, and practical workflows."
          </motion.div>
        </div>
      </div>

      {/* 2. EDITORIAL POSTER DOSSIER CENTERPIECE (CLEAN, NO OVERLAPPING WHITE BOX) */}
      <div className="relative max-w-5xl mx-auto px-4 py-4 sm:py-6 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-5 sm:p-8 bg-[#ECE5D9] border-2 border-[#121316] rounded-2xl shadow-2xl space-y-6"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#121316] pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#C81E1E] text-white rounded-lg border border-[#121316]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] font-bold text-[#C81E1E] tracking-widest uppercase block">
                  TECHNICAL DOSSIER • 2026
                </span>
                <h2 className="font-antonio text-2xl sm:text-3xl font-extrabold text-[#121316] uppercase leading-none">
                  PRAJWAL PATIL — FULL STACK DEVELOPER
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-mono-code text-xs font-bold text-emerald-900 bg-emerald-200 px-3 py-1 rounded-md border border-emerald-500">
                AVAILABLE FOR ROLES
              </span>
            </div>
          </div>

          {/* Core Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center font-mono-code text-xs">
            {/* Column 1: Profile Brief */}
            <div className="md:col-span-7 space-y-3 font-sans-editorial text-sm text-[#4A4A52]">
              <p className="font-bold text-[#121316]">
                "I turn ideas, messy requirements, and complex business workflows into clean, reliable, production-ready products."
              </p>
              <p className="text-xs leading-relaxed text-[#4A4A52]">
                Full Stack Developer at MINE IT building SwiftBIM's sales-to-delivery automation system, Notely AI Workspace with Gemini RAG, and TestDesk Enterprise SaaS.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Java', 'Spring Boot', 'Python', 'Flask', 'React 19', 'MySQL', 'Gemini AI', 'REST APIs'].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-[#E6DFD3] border border-[#121316] font-mono-code text-xs font-bold text-[#121316] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Action Buttons */}
            <div className="md:col-span-5 space-y-3 border-t md:border-t-0 md:border-l border-[#121316]/30 pt-4 md:pt-0 md:pl-6">
              <div className="font-mono-code text-[11px] font-bold text-[#C81E1E] uppercase tracking-wider">
                DIRECT CONTACT ACTIONS:
              </div>

              <a
                href="mailto:prajwalgpatil2002@gmail.com"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C81E1E] text-white font-antonio text-base font-bold uppercase tracking-wider rounded-lg border-2 border-[#121316] hover:bg-[#121316] transition-colors shadow"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL PRAJWAL</span>
              </a>

              <a
                href="tel:7019609440"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#121316] text-white font-antonio text-base font-bold uppercase tracking-wider rounded-lg border-2 border-[#121316] hover:bg-[#C81E1E] transition-colors shadow"
              >
                <Phone className="w-4 h-4 text-[#C81E1E]" />
                <span>+91 7019609440</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/prajwal-patil16/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 p-2 bg-[#E6DFD3] border border-[#121316] font-mono-code text-xs font-bold text-[#121316] hover:bg-[#C81E1E] hover:text-white rounded transition-colors"
                >
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://github.com/prajwalpatil16"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 p-2 bg-[#E6DFD3] border border-[#121316] font-mono-code text-xs font-bold text-[#121316] hover:bg-[#121316] hover:text-white rounded transition-colors"
                >
                  <span>GITHUB</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. BASELINE GRID & EDITORIAL COLUMNS */}
      <div className="relative z-30 border-t-2 border-editorial-heavy pt-4 pb-8 px-4 sm:px-6 md:px-12 bg-[var(--bg-paper)]">
        {/* Baseline Column Number Markers */}
        <div className="hidden md:grid grid-cols-12 border-b border-editorial text-[10px] font-mono-code text-[var(--text-muted)] pb-1 mb-4">
          <div className="col-span-4 md:col-span-3 flex justify-between pr-4 border-r border-editorial">
            <span>SELECTED LIST OF WORKS</span>
            <span>01</span>
          </div>
          <div className="col-span-2 md:col-span-2 flex justify-end pr-4 border-r border-editorial">
            <span>02</span>
          </div>
          <div className="col-span-3 md:col-span-4 flex justify-between px-4 border-r border-editorial">
            <span>PHILOSOPHY</span>
            <span>03</span>
          </div>
          <div className="col-span-3 md:col-span-3 flex justify-end pl-4">
            <span>SIGNATURE</span>
          </div>
        </div>

        {/* Column Contents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 items-center">
          {/* Column 01: Selected List of Works */}
          <div
            onClick={onExploreMissions}
            className="md:col-span-3 space-y-1 font-mono-code text-xs text-[var(--text-charcoal)] pr-4 md:border-r border-editorial cursor-pointer"
          >
            <div className="hover:text-[var(--crimson-red)] transition-colors font-bold truncate">
              • Notely — AI-Powered Workspace (2026)
            </div>
            <div className="hover:text-[var(--crimson-red)] transition-colors font-bold truncate">
              • TestDesk — Enterprise SaaS (2026)
            </div>
            <div className="hover:text-[var(--crimson-red)] transition-colors font-bold truncate">
              • SwiftBIM Sales Automation (2025)
            </div>
          </div>

          {/* Column 02: Vertical Red Accent Text */}
          <div className="hidden md:flex md:col-span-2 justify-center border-r border-editorial h-20 items-center">
            <span className="font-antonio text-xl text-[var(--crimson-red)] font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
              FULL STACK
            </span>
          </div>

          {/* Column 03: Editorial Statement Block */}
          <div className="md:col-span-4 font-serif-editorial text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed md:px-2 md:border-r border-editorial italic">
            "Build seriously, debug patiently, learn constantly, and turn complex ideas into software people actually use."
          </div>

          {/* Column 04: Signature Display Name */}
          <div className="md:col-span-3 text-left sm:text-right flex flex-col items-start sm:items-end justify-end">
            <span className="font-antonio text-3xl sm:text-4xl md:text-5xl text-[var(--text-charcoal)] font-bold tracking-tight uppercase leading-none">
              PRAJWAL PATIL
            </span>
            <span className="font-mono-code text-[10px] text-[var(--text-muted)] uppercase tracking-widest mt-1">
              BENGALURU, KARNATAKA 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
