import React, { useState } from 'react';
import { Mail, Phone, Menu, X, ExternalLink } from 'lucide-react';

export interface EditorialNavbarProps {
  currentPage?: 'overview' | 'projects' | 'contact';
  activeSection?: string;
  onNavigate?: (destination: string) => void;
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({
  currentPage = 'overview',
  activeSection = 'hero',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const mainPages = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects-page', label: 'Case Studies' },
  ];

  const inPageAnchors = [
    { id: 'origin', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'missions', label: 'Projects' },
    { id: 'superpowers', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#E6DFD3]/95 backdrop-blur-md text-[#121316] border-b-2 border-[#121316] px-4 sm:px-6 md:px-8 py-3 select-none">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <div
          onClick={() => onNavigate?.('overview')}
          className="cursor-pointer group flex items-center gap-2 sm:gap-3 select-none"
        >
          <span className="font-display text-2xl sm:text-3xl text-[#B52B27] font-extrabold tracking-wide uppercase leading-none transition-colors group-hover:text-[#121316]">
            PRAJWAL PATIL
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 border border-[#121316] font-mono-code text-[10px] text-[#121316] font-bold uppercase tracking-widest bg-[#E6DFD3]">
            FULL STACK DEVELOPER
          </span>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono-code text-xs tracking-wider font-bold bg-[#DBD3C5] p-1 rounded-xl border border-[#121316]/50">
          {/* Main Pages */}
          {mainPages.map((page) => {
            const isActive =
              (page.id === 'overview' && currentPage === 'overview') ||
              (page.id === 'projects-page' && currentPage === 'projects');

            return (
              <button
                key={page.id}
                onClick={() => onNavigate?.(page.id)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer uppercase ${
                  isActive
                    ? 'bg-[#121316] text-[#E6DFD3] shadow-sm'
                    : 'text-[#4A4A52] hover:text-[#121316] hover:bg-black/5'
                }`}
              >
                {page.label}
              </button>
            );
          })}

          {/* Quick Jump for in-page anchors if on overview */}
          {currentPage === 'overview' && (
            <div className="flex items-center gap-1 pl-2 border-l border-[#121316]/25 text-[11px] text-[#4A4A52]">
              {inPageAnchors.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate?.(item.id)}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer uppercase ${
                    activeSection === item.id
                      ? 'text-[#B52B27] font-extrabold bg-white/40'
                      : 'hover:text-[#121316]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Right: Social Profiles & Single Contact Button */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="https://www.linkedin.com/in/prajwal-patil16/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#121316] font-mono-code text-xs font-bold bg-[#ECE5D9] hover:bg-[#121316] hover:text-white transition-colors cursor-pointer"
            title="LinkedIn Profile"
          >
            <span>LINKEDIN</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href="https://github.com/prajwalpatil16"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#121316] font-mono-code text-xs font-bold bg-[#ECE5D9] hover:bg-[#121316] hover:text-white transition-colors cursor-pointer"
            title="GitHub Profile"
          >
            <span>GITHUB</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Single Contact Button */}
          <button
            onClick={() => onNavigate?.('contact-page')}
            className={`flex items-center gap-1.5 px-4 py-1.5 font-display text-base font-bold uppercase tracking-wider rounded-lg border-2 border-[#121316] transition-all cursor-pointer shadow-sm btn-press ${
              currentPage === 'contact'
                ? 'bg-[#121316] text-white'
                : 'bg-[#B52B27] text-white hover:bg-[#121316]'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-[#121316] bg-[#ECE5D9] text-[#121316] cursor-pointer"
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
            {mainPages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  onNavigate?.(page.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-3 text-center font-bold rounded-lg border uppercase text-xs ${
                  (page.id === 'overview' && currentPage === 'overview') ||
                  (page.id === 'projects-page' && currentPage === 'projects')
                    ? 'bg-[#121316] text-[#E6DFD3] border-[#121316]'
                    : 'bg-[#ECE5D9] text-[#121316] border-[#121316]/40'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-[#121316]/30">
            {inPageAnchors.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate?.(item.id);
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 px-2 text-center text-xs font-bold bg-[#ECE5D9] border border-[#121316]/40 rounded hover:bg-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#121316]/30 flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/prajwal-patil16/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg border border-[#121316] bg-white text-[#B52B27] font-bold text-xs"
            >
              <span>linkedin.com/in/prajwal-patil16</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/prajwalpatil16"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg border border-[#121316] bg-[#121316] text-white font-bold text-xs"
            >
              <span>github.com/prajwalpatil16</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center justify-between p-2.5 rounded-lg border border-[#121316] bg-[#DBD3C5] font-bold text-xs text-[#121316]">
              <a href="tel:7019609440" className="flex items-center gap-2 hover:text-[#B52B27]">
                <Phone className="w-3.5 h-3.5 text-[#B52B27]" />
                <span>+91 7019609440</span>
              </a>
              <a href="mailto:prajwalgpatil2002@gmail.com" className="flex items-center gap-1 text-[#B52B27] underline">
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
