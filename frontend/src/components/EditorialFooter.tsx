import React from 'react';
import { Mail, ExternalLink, ArrowUp } from 'lucide-react';

export interface EditorialFooterProps {
  onScrollTop?: () => void;
  onGoToContact?: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({ onScrollTop, onGoToContact }) => {
  return (
    <footer id="contact" className="w-full bg-[#121316] text-[#E6DFD3] py-16 px-4 sm:px-6 md:px-8 select-none border-t-2 border-[#121316]">
      <div className="max-w-[1100px] mx-auto space-y-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-8 gap-6">
          <div className="space-y-2">
            <span className="font-mono-code text-xs text-[#B52B27] uppercase tracking-widest font-bold block">
              CONTACT &amp; CONNECT
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-none text-[#E6DFD3] font-extrabold">
              LET'S WORK <span className="text-[#B52B27]">TOGETHER.</span>
            </h2>
            <p className="font-sans-editorial text-sm text-stone-400 max-w-lg leading-relaxed pt-1">
              Currently available for full-time Full Stack Developer roles and engineering projects. Based in Bengaluru, open to remote and on-site opportunities.
            </p>
          </div>

          {onGoToContact && (
            <button
              onClick={onGoToContact}
              className="flex items-center gap-2 px-6 py-3 bg-[#B52B27] hover:bg-white hover:text-[#121316] text-white font-display text-base font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer self-start md:self-auto shrink-0 shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>SEND A MESSAGE →</span>
            </button>
          )}
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono-code text-xs">
          {/* Email */}
          <div className="p-4 bg-stone-900/80 rounded-xl border border-stone-800 space-y-1.5">
            <span className="text-stone-400 text-[10px] uppercase font-bold block">EMAIL ADDRESS</span>
            <a
              href="mailto:prajwalgpatil2002@gmail.com"
              className="font-bold text-white hover:text-[#B52B27] transition-colors truncate block"
            >
              prajwalgpatil2002@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="p-4 bg-stone-900/80 rounded-xl border border-stone-800 space-y-1.5">
            <span className="text-stone-400 text-[10px] uppercase font-bold block">PHONE</span>
            <a
              href="tel:7019609440"
              className="font-bold text-white hover:text-[#B52B27] transition-colors block"
            >
              +91 7019609440
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-4 bg-stone-900/80 rounded-xl border border-stone-800 space-y-1.5">
            <span className="text-stone-400 text-[10px] uppercase font-bold block">LINKEDIN</span>
            <a
              href="https://www.linkedin.com/in/prajwal-patil16/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-white hover:text-[#B52B27] transition-colors flex items-center justify-between"
            >
              <span>prajwal-patil16</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub */}
          <div className="p-4 bg-stone-900/80 rounded-xl border border-stone-800 space-y-1.5">
            <span className="text-stone-400 text-[10px] uppercase font-bold block">GITHUB</span>
            <a
              href="https://github.com/prajwalpatil16"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-white hover:text-[#B52B27] transition-colors flex items-center justify-between"
            >
              <span>prajwalpatil16</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-800 font-mono-code text-xs text-stone-500">
          <div>© 2026 PRAJWAL PATIL • FULL STACK DEVELOPER</div>
          <button
            onClick={() => {
              if (onScrollTop) onScrollTop();
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-bold text-stone-400"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
