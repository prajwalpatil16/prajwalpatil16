import React, { useState } from 'react';
import { Mail, Menu, X, Code2 } from 'lucide-react';

export interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0F17]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 transition-all select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div>
            <div className="font-outfit font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none group-hover:text-emerald-400 transition-colors">
              Prajwal Patil
            </div>
            <div className="font-mono-code text-[11px] text-emerald-400 font-medium tracking-wider flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Stack Developer</span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 font-outfit text-xs sm:text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeSection === link.id
                  ? 'bg-emerald-500 text-black font-semibold shadow-md shadow-emerald-500/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons: Socials & Direct Contact */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://github.com/prajwalpatil16"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-pointer"
            title="GitHub Profile"
          >
            <svg width="16" height="16" style={{ width: '16px', height: '16px' }} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/prajwal-patil16/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-pointer"
            title="LinkedIn Profile"
          >
            <svg width="16" height="16" style={{ width: '16px', height: '16px' }} className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
            </svg>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-outfit text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:opacity-90 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-white/10 space-y-3 font-outfit text-sm animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2.5 px-3 text-left rounded-xl font-medium border text-xs ${
                  activeSection === link.id
                    ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                    : 'bg-white/5 text-gray-300 border-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/10">
            <a
              href="https://github.com/prajwalpatil16"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono-code text-xs"
            >
              <svg width="16" height="16" style={{ width: '16px', height: '16px' }} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/prajwal-patil16/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono-code text-xs"
            >
              <svg width="16" height="16" style={{ width: '16px', height: '16px' }} className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


