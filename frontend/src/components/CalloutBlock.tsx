import React from 'react';

export interface CalloutBlockProps {
  icon?: React.ReactNode | string;
  children: React.ReactNode;
  bg?: 'yellow' | 'blue' | 'red' | 'mint' | 'gray' | 'purple';
  badge?: string;
  className?: string;
}

const calloutBgMap = {
  yellow: 'bg-[var(--pop-yellow)]/20 border-[var(--pop-yellow)]',
  blue: 'bg-[var(--sky-blue)]/20 border-[var(--sky-blue)]',
  red: 'bg-[var(--hero-red)]/20 border-[var(--hero-red)]',
  mint: 'bg-[var(--mint)]/20 border-[var(--mint)]',
  purple: 'bg-[var(--comic-purple)]/20 border-[var(--comic-purple)]',
  gray: 'bg-[var(--bg-paper-subtle)] border-[var(--notion-gray)]',
};

const iconBoxBgMap = {
  yellow: 'bg-[var(--pop-yellow)] text-black',
  blue: 'bg-[var(--sky-blue)] text-white',
  red: 'bg-[var(--hero-red)] text-white',
  mint: 'bg-[var(--mint)] text-black',
  purple: 'bg-[var(--comic-purple)] text-white',
  gray: 'bg-white text-black dark:bg-slate-700 dark:text-white',
};

export const CalloutBlock: React.FC<CalloutBlockProps> = ({
  icon = '💡',
  children,
  bg = 'yellow',
  badge,
  className = '',
}) => {
  return (
    <div
      className={`relative flex items-start gap-4 p-4 border-comic rounded-xl shadow-comic ${calloutBgMap[bg]} ${className}`}
    >
      {/* Icon Badge Container */}
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-xl border-comic shadow-comic-sm font-bangers text-xl flex-shrink-0 ${iconBoxBgMap[bg]}`}
      >
        {typeof icon === 'string' ? <span>{icon}</span> : icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 font-sans text-sm md:text-base leading-relaxed text-[var(--ink-black)]">
        {badge && (
          <span className="inline-block px-2 py-0.5 mb-1.5 border-comic-thin rounded font-bangers text-xs tracking-wider bg-white dark:bg-slate-800 text-black dark:text-white shadow-comic-sm">
            {badge}
          </span>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};
