import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export interface ToggleBlockProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  badge?: string;
  badgeBg?: 'yellow' | 'red' | 'blue' | 'mint' | 'purple';
  className?: string;
}

const badgeColorMap = {
  yellow: 'bg-[var(--pop-yellow)] text-black',
  red: 'bg-[var(--hero-red)] text-white',
  blue: 'bg-[var(--sky-blue)] text-white',
  mint: 'bg-[var(--mint)] text-black',
  purple: 'bg-[var(--comic-purple)] text-white',
};

export const ToggleBlock: React.FC<ToggleBlockProps> = ({
  title,
  children,
  defaultOpen = false,
  badge,
  badgeBg = 'yellow',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border-comic rounded-xl bg-[var(--bg-paper)] shadow-comic p-3 transition-all ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 text-left font-sans font-semibold text-base focus:outline-none group cursor-pointer"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-6 h-6 rounded-md border-comic-thin bg-[var(--pop-yellow)] text-black flex-shrink-0 group-hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </motion.div>
          <div className="flex-1 truncate text-[var(--ink-black)] font-sans">{title}</div>
        </div>

        {badge && (
          <span className={`px-2 py-0.5 border-comic-thin rounded font-bangers text-xs tracking-wider ${badgeColorMap[badgeBg]}`}>
            {badge}
          </span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-3 pl-8 border-l-2 border-dashed border-[var(--notion-gray)]/40 mt-2 space-y-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
