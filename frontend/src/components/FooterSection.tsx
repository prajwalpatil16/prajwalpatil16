import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Send } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#070A10] border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main CTA Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-code text-xs font-semibold">
                <Send className="w-3.5 h-3.5" />
                <span>OPEN FOR ROLES &amp; CONSULTING</span>
              </div>

              <h2 className="font-outfit text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
                LET'S BUILD SOMETHING <br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  EXTRAORDINARY TOGETHER.
                </span>
              </h2>

              <p className="font-inter text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Open for full-time Full Stack Software Engineer roles, web application development, and workflow automation systems. Feel free to reach out directly!
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="mailto:prajwalgpatil2002@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-outfit text-base font-bold rounded-2xl shadow-xl shadow-emerald-500/25 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>

              <a
                href="tel:7019609440"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-outfit text-base font-bold rounded-2xl transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Call +91 7019609440</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Column 1: Direct Contact */}
          <div className="space-y-4">
            <h3 className="font-mono-code text-xs font-bold text-emerald-400 uppercase tracking-wider">
              DIRECT CONTACT
            </h3>
            <div className="space-y-3 font-mono-code text-xs">
              <a
                href="mailto:prajwalgpatil2002@gmail.com"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-gray-200"
              >
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">prajwalgpatil2002@gmail.com</span>
              </a>

              <a
                href="tel:7019609440"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-gray-200"
              >
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>+91 7019609440</span>
              </a>
            </div>
          </div>

          {/* Column 2: Online Profiles */}
          <div className="space-y-4">
            <h3 className="font-mono-code text-xs font-bold text-cyan-400 uppercase tracking-wider">
              ONLINE PROFILES
            </h3>
            <div className="space-y-3 font-mono-code text-xs">
              <a
                href="https://www.linkedin.com/in/prajwal-patil16/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-gray-200"
              >
                <svg width="16" height="16" style={{ width: '16px', height: '16px' }} className="w-4 h-4 fill-current text-cyan-400 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
                </svg>
                <span>linkedin.com/in/prajwal-patil16</span>
              </a>

              <a
                href="https://github.com/prajwalpatil16"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-gray-200"
              >
                <svg width="16" height="16" style={{ width: '16px', height: '16px' }} className="w-4 h-4 fill-current text-emerald-400 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>github.com/prajwalpatil16</span>
              </a>

            </div>
          </div>

          {/* Column 3: Location & Status */}
          <div className="space-y-4">
            <h3 className="font-mono-code text-xs font-bold text-amber-400 uppercase tracking-wider">
              LOCATION &amp; STATUS
            </h3>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 font-mono-code text-xs">
              <div className="flex items-center gap-2 text-white font-bold">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Bengaluru, Karnataka, India 🇮🇳</span>
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Open for On-site, Hybrid, and Remote Opportunities Worldwide.
              </p>
              <div className="pt-2 text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AVAILABLE IMMEDIATELY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 font-mono-code text-xs text-gray-400">
          <div>© 2026 PRAJWAL PATIL • FULL STACK DEVELOPER</div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer font-bold"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

