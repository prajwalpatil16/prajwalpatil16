import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export interface EditorialFooterProps {
  onScrollTop?: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({ onScrollTop }) => {
  return (
    <footer id="transmission" className="w-full bg-[#121316] text-[#E6DFD3] py-16 px-6 md:px-12 select-none border-t-2 border-[#121316]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div>
          <span className="font-mono-code text-xs text-[#C81E1E] uppercase tracking-widest font-bold block mb-2">
            05 / CONTACT &amp; CONNECT
          </span>
          <h2 className="font-antonio text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight leading-none text-[#E6DFD3] font-extrabold">
            LET'S BUILD SOMETHING <br />
            <span className="text-[#C81E1E]">EXTRAORDINARY TOGETHER.</span>
          </h2>
        </div>

        {/* Contact Info & Direct Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-stone-800">
          {/* Column 1: Direct Contact Details */}
          <div className="space-y-4">
            <h3 className="font-mono-code text-xs font-bold text-[#C81E1E] uppercase tracking-wider">
              GET IN TOUCH DIRECTLY
            </h3>
            <p className="font-sans-editorial text-sm text-stone-300 leading-relaxed">
              Open for full-time Full Stack Software Engineer roles, web application development, and workflow automation consulting.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:prajwalgpatil2002@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#C81E1E] text-white font-antonio text-xl font-bold uppercase tracking-wider rounded-lg border border-red-500 hover:bg-red-700 transition-colors shadow-lg w-full justify-center sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                <span>EMAIL ME</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="tel:7019609440"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-200 font-mono-code text-sm font-bold uppercase tracking-wider rounded-lg border border-stone-800 hover:border-[#C81E1E] hover:text-[#C81E1E] transition-colors w-full justify-center sm:w-auto"
              >
                <Phone className="w-4 h-4 text-[#C81E1E]" />
                <span>+91 7019609440</span>
              </a>
            </div>
          </div>

          {/* Column 2: LinkedIn & GitHub Profiles */}
          <div className="space-y-4">
            <h3 className="font-mono-code text-xs font-bold text-[#C81E1E] uppercase tracking-wider">
              SOCIAL &amp; CODE PROFILES
            </h3>
            <div className="space-y-2.5 font-mono-code text-sm">
              <a
                href="https://www.linkedin.com/in/prajwal-patil16/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-stone-900 border border-stone-800 hover:border-[#C81E1E] hover:text-[#C81E1E] transition-all"
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" className="w-4 h-4 fill-current text-[#C81E1E]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
                  </svg>
                  <span>linkedin.com/in/prajwal-patil16</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/prajwalpatil16"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-stone-900 border border-stone-800 hover:border-white transition-all"
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" className="w-4 h-4 fill-current text-stone-300" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>github.com/prajwalpatil16</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Location & Availability */}
          <div className="space-y-4">
            <h3 className="font-mono-code text-xs font-bold text-[#C81E1E] uppercase tracking-wider">
              CURRENT LOCATION
            </h3>
            <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2 font-mono-code text-xs">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#C81E1E]" />
                <span>Bengaluru, Karnataka 🇮🇳</span>
              </div>
              <p className="text-stone-400">
                Silicon Valley of India • Open for On-site, Hybrid &amp; Remote Roles
              </p>
              <div className="pt-2 text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AVAILABLE IMMEDIATELY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-stone-800 font-mono-code text-xs text-stone-400">
          <div>© 2026 PRAJWAL PATIL • FULL STACK SOFTWARE DEVELOPER</div>
          <button
            onClick={() => {
              if (onScrollTop) onScrollTop();
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors underline cursor-pointer font-bold"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
