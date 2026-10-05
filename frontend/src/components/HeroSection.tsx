import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowDown, ExternalLink, Sparkles } from 'lucide-react';

export interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 select-none">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/15 to-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Badge Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-code text-xs font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL STACK SOFTWARE DEVELOPER</span>
          </div>

          {/* Main Title */}
          <h1 className="font-outfit text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95]">
            PRAJWAL <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              PATIL
            </span>
          </h1>

          {/* Headline Subtitle */}
          <p className="font-inter text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl">
            I turn ideas, messy requirements, and complex business workflows into clean, reliable, production-ready products.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { label: 'Java', bg: 'bg-orange-500/10 text-orange-400 border-orange-500/30' },
              { label: 'Spring Boot', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
              { label: 'Python', bg: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
              { label: 'Flask', bg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
              { label: 'React 19', bg: 'bg-teal-500/10 text-teal-400 border-teal-500/30' },
              { label: 'MySQL', bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
              { label: 'Gemini AI / RAG', bg: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
            ].map((tech) => (
              <span
                key={tech.label}
                className={`px-3 py-1 rounded-lg border font-mono-code text-xs font-semibold ${tech.bg}`}
              >
                {tech.label}
              </span>
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreProjects}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-outfit font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Explore Featured Works</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="mailto:prajwalgpatil2002@gmail.com"
              className="flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-outfit font-semibold text-sm sm:text-base rounded-xl transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Get in Touch</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Developer Profile Dossier */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-6 shadow-2xl relative group">
            {/* Top Bar Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="font-mono-code text-xs text-gray-400 ml-2">prajwal_patil.config</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-code text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="space-y-4 font-mono-code text-xs">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                <div className="text-gray-400 text-[11px]">CURRENT ROLE:</div>
                <div className="text-white font-bold text-sm">Full Stack Developer @ MINE IT</div>
                <div className="text-emerald-400 text-[11px]">Bengaluru, Karnataka, India 🇮🇳</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
                  <span className="text-gray-400 text-[10px] uppercase">EXPERIENCE</span>
                  <div className="text-white font-bold text-sm">1+ Years Industry</div>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
                  <span className="text-gray-400 text-[10px] uppercase">DEGREE</span>
                  <div className="text-white font-bold text-sm">BE (ECE) 2024</div>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-gray-400 text-[11px]">CORE PRODUCT ACHIEVEMENTS:</div>
                <ul className="space-y-1.5 text-gray-300 text-xs font-inter">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono-code">✓</span>
                    <span>Digitized SwiftBIM sales-to-delivery workflows in production.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono-code">✓</span>
                    <span>Built Notely AI workspace with Gemini RAG &amp; Knowledge Graph.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono-code">✓</span>
                    <span>Engineered TestDesk enterprise SaaS platform.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:7019609440"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono-code text-xs font-bold transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 7019609440</span>
              </a>

              <a
                href="https://www.linkedin.com/in/prajwal-patil16/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-code text-xs font-bold transition-all"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
