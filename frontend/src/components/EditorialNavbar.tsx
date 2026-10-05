import React, { useState } from 'react';
import { Mail, Phone, Menu, X, ExternalLink } from 'lucide-react';

export interface EditorialNavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({
  activeSection = 'hero',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'origin', label: 'About' },
    { id: 'missions', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'superpowers', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'transmission', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#E6DFD3]/95 backdrop-blur-md text-[#121316] border-b-2 border-[#121316] px-4 sm:px-6 md:px-12 py-3 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <div
          onClick={() => onNavigate?.('hero')}
          className="cursor-pointer group flex items-center gap-2 sm:gap-3 select-none"
        >
          <span className="font-antonio text-2xl sm:text-3xl md:text-4xl text-[#C81E1E] font-extrabold tracking-wider uppercase leading-none">
            PRAJWAL PATIL
          </span>
          <span className="hidden lg:inline-block px-2.5 py-0.5 border border-[#121316] font-mono-code text-[10px] text-[#121316] font-bold uppercase tracking-widest bg-[#E6DFD3]">
            FULL STACK DEVELOPER
          </span>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono-code text-xs tracking-wider font-bold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className={`transition-colors cursor-pointer uppercase py-1 ${
                activeSection === item.id
                  ? 'text-[#C81E1E] border-b-2 border-[#C81E1E]'
                  : 'text-[#4A4A52] hover:text-[#121316]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Direct Links for LinkedIn, GitHub, Contact */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.linkedin.com/in/prajwal-patil16/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-[#121316] font-mono-code text-xs font-bold hover:bg-[#C81E1E] hover:text-white transition-all cursor-pointer"
            title="LinkedIn Profile"
          >
            <svg width="14" height="14" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
            </svg>
            <span>LINKEDIN</span>
          </a>

          <a
            href="https://github.com/prajwalpatil16"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-[#121316] font-mono-code text-xs font-bold hover:bg-[#121316] hover:text-white transition-all cursor-pointer"
            title="GitHub Profile"
          >
            <svg width="14" height="14" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GITHUB</span>
          </a>

          <button
            onClick={() => onNavigate?.('transmission')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#C81E1E] text-white font-antonio text-sm sm:text-base font-bold uppercase tracking-wider rounded-lg border-2 border-[#121316] hover:bg-[#121316] transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-[#121316] bg-[#ECE5D9] text-[#121316]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t-2 border-[#121316] space-y-3 font-mono-code text-sm">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate?.(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-3 text-left font-bold rounded-lg border border-[#121316]/40 uppercase text-xs ${
                  activeSection === item.id
                    ? 'bg-[#C81E1E] text-white border-[#121316]'
                    : 'bg-[#ECE5D9] text-[#121316]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#121316]/30 flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/prajwal-patil16/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg border border-[#121316] bg-white text-[#C81E1E] font-bold text-xs"
            >
              <span className="flex items-center gap-2">
                <svg width="16" height="16" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
                </svg>
                <span>linkedin.com/in/prajwal-patil16</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/prajwalpatil16"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg border border-[#121316] bg-[#121316] text-white font-bold text-xs"
            >
              <span className="flex items-center gap-2">
                <svg width="16" height="16" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>github.com/prajwalpatil16</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center justify-between p-2.5 rounded-lg border border-[#121316] bg-[#DBD3C5] font-bold text-xs text-[#121316]">
              <a href="tel:7019609440" className="flex items-center gap-2 hover:text-[#C81E1E]">
                <Phone className="w-3.5 h-3.5 text-[#C81E1E]" />
                <span>+91 7019609440</span>
              </a>
              <a href="mailto:prajwalgpatil2002@gmail.com" className="flex items-center gap-1 text-[#C81E1E] underline">
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
