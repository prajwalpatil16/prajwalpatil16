import React from 'react';

export interface ComicPanelProps {
  children: React.ReactNode;
  title?: string;
  tilt?: 'left' | 'right' | 'none' | number;
  badge?: string;
  badgeBg?: 'yellow' | 'red' | 'blue' | 'mint' | 'purple' | 'orange';
  variant?: 'paper' | 'yellow' | 'blue' | 'red' | 'mint' | 'dark' | 'subtle';
  halftone?: boolean;
  hoverEffect?: boolean;
  className?: string;
  onClick?: () => void;
}

const badgeBgMap = {
  yellow: 'bg-[var(--pop-yellow)] text-black',
  red: 'bg-[var(--hero-red)] text-white',
  blue: 'bg-[var(--sky-blue)] text-white',
  mint: 'bg-[var(--mint)] text-black',
  purple: 'bg-[var(--comic-purple)] text-white',
  orange: 'bg-[var(--comic-orange)] text-white',
};

const variantBgMap = {
  paper: 'bg-[var(--bg-paper)]',
  subtle: 'bg-[var(--bg-paper-subtle)]',
  yellow: 'bg-[var(--pop-yellow)]/20',
  blue: 'bg-[var(--sky-blue)]/20',
  red: 'bg-[var(--hero-red)]/20',
  mint: 'bg-[var(--mint)]/20',
  dark: 'bg-[var(--ink-black)] text-[var(--bg-paper)]',
};

export const ComicPanel: React.FC<ComicPanelProps> = ({
  children,
  title,
  tilt = 'none',
  badge,
  badgeBg = 'yellow',
  variant = 'paper',
  halftone = false,
  hoverEffect = true,
  className = '',
  onClick,
}) => {
  let tiltStyle = '';
  if (typeof tilt === 'number') {
    tiltStyle = `rotate(${tilt}deg)`;
  } else if (tilt === 'left') {
    tiltStyle = 'rotate(-1deg)';
  } else if (tilt === 'right') {
    tiltStyle = 'rotate(1deg)';
  }

  return (
    <div
      onClick={onClick}
      style={{ transform: tiltStyle ? tiltStyle : undefined }}
      className={`
        relative border-comic rounded-xl p-5
        ${variantBgMap[variant]}
        ${hoverEffect ? 'shadow-comic-hover shadow-comic cursor-pointer' : 'shadow-comic'}
        ${halftone ? 'bg-notion-dots' : ''}
        ${className}
      `}
    >
      {badge && (
        <div className={`absolute -top-3.5 left-4 px-2.5 py-0.5 border-comic-thin rounded-md font-bangers text-xs tracking-wider uppercase shadow-comic-sm ${badgeBgMap[badgeBg]}`}>
          {badge}
        </div>
      )}
      {title && <h3 className="font-bangers text-xl mb-2 text-[var(--ink-black)]">{title}</h3>}
      {children}
    </div>
  );
};
