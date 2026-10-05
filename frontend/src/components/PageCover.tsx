import React from 'react';
import { StickerIcon } from './StickerIcon';
import { TagChip } from './TagChip';
import { HalftoneBg } from './HalftoneBg';

export interface PageCoverProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode | string;
  breadcrumbs?: Array<{ label: string; href?: string; icon?: React.ReactNode }>;
  coverPattern?: 'halftone-city' | 'comic-grid' | 'notion-dots' | 'burst';
  coverBg?: 'yellow' | 'blue' | 'red' | 'mint' | 'purple' | 'dark';
  tags?: Array<{ label: string; color: any }>;
  statusBadge?: string;
  className?: string;
}

const coverBgMap = {
  yellow: 'bg-[var(--pop-yellow)]',
  blue: 'bg-[var(--sky-blue)]',
  red: 'bg-[var(--hero-red)]',
  mint: 'bg-[var(--mint)]',
  purple: 'bg-[var(--comic-purple)]',
  dark: 'bg-[var(--ink-black)]',
};

export const PageCover: React.FC<PageCoverProps> = ({
  title,
  subtitle,
  icon = '🦸‍♂️',
  breadcrumbs = [{ label: 'Prajwal Workspace' }, { label: 'Issue #01: Overview' }],
  coverBg = 'yellow',
  tags = [
    { label: 'Full Stack', color: 'yellow' },
    { label: 'React 19', color: 'blue' },
    { label: 'Node.js', color: 'mint' },
    { label: 'Bengaluru 🇮🇳', color: 'red' },
  ],
  statusBadge = 'ISSUE #01: ACTIVE',
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Breadcrumb Bar */}
      <div className="flex items-center gap-2 py-2 px-4 text-xs font-mono border-b-2 border-comic text-[var(--notion-gray)] bg-[var(--bg-paper-subtle)] overflow-x-auto">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="text-black dark:text-white font-bold">/</span>}
            <span className="flex items-center gap-1.5 hover:text-[var(--ink-black)] transition-colors cursor-pointer whitespace-nowrap">
              {crumb.icon && <span>{crumb.icon}</span>}
              <span>{crumb.label}</span>
            </span>
          </React.Fragment>
        ))}
      </div>

      {/* Cover Header Banner */}
      <div className={`relative h-44 md:h-56 border-b-comic ${coverBgMap[coverBg]} overflow-hidden`}>
        <HalftoneBg opacity={0.2} density="medium" className="w-full h-full">
          <div className="absolute inset-0 flex items-center justify-between p-6 select-none opacity-20 pointer-events-none">
            <span className="font-bangers text-7xl md:text-9xl text-black">POW!</span>
            <span className="font-bangers text-7xl md:text-9xl text-black hidden md:inline">BUILD</span>
          </div>
        </HalftoneBg>

        {/* Status Badge Top Right */}
        {statusBadge && (
          <div className="absolute top-4 right-4 z-10 px-3 py-1 border-comic rounded-lg bg-white dark:bg-slate-900 text-black dark:text-white font-bangers text-sm tracking-widest shadow-comic-sm">
            {statusBadge}
          </div>
        )}
      </div>

      {/* Title & Sticker Header Area */}
      <div className="relative px-6 md:px-12 pb-6">
        {/* Floating Sticker Icon overlapping cover */}
        <div className="absolute -top-12 left-6 md:left-12 z-20">
          <StickerIcon icon={icon} rotate={-4} size="lg" bg="white" />
        </div>

        <div className="pt-14 md:pt-16 space-y-3">
          {/* Main Title */}
          <h1 className="font-bangers text-4xl md:text-6xl tracking-wide text-[var(--ink-black)] flex items-center gap-3 flex-wrap">
            <span>{title}</span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="font-comic text-lg md:text-xl text-[var(--ink-muted)] max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Tags bar */}
          {tags && tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap pt-2">
              {tags.map((tag, i) => (
                <TagChip key={i} label={tag.label} color={tag.color} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
