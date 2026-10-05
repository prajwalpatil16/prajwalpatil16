import React, { useState } from 'react';
import { Sparkles, MessageSquare, Zap, ChevronDown, Terminal, Info, CheckSquare } from 'lucide-react';

export interface SlashMenuProps {
  onSelect?: (item: string) => void;
  className?: string;
}

export const SlashMenu: React.FC<SlashMenuProps> = ({ onSelect, className = '' }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const menuItems = [
    {
      label: '/comic-panel',
      name: 'Comic Panel Grid',
      desc: 'Tilted frame with hard offset shadow & halftone background',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      bg: 'bg-amber-100 dark:bg-amber-900/30',
    },
    {
      label: '/speech-bubble',
      name: 'Speech Bubble',
      desc: 'Comic speech/thought bubble with custom tail directions',
      icon: <MessageSquare className="w-4 h-4 text-sky-500" />,
      bg: 'bg-sky-100 dark:bg-sky-900/30',
    },
    {
      label: '/sfx-burst',
      name: 'Action SFX Burst',
      desc: 'POW! BUILT! SHIPPED! animated action starburst',
      icon: <Zap className="w-4 h-4 text-red-500" />,
      bg: 'bg-red-100 dark:bg-red-900/30',
    },
    {
      label: '/toggle-block',
      name: 'Notion Toggle Block',
      desc: 'Collapsible accordion block with comic arrow',
      icon: <ChevronDown className="w-4 h-4 text-emerald-500" />,
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    },
    {
      label: '/callout-box',
      name: 'Notion Callout',
      desc: 'Highlighted block with custom sticker icon frame',
      icon: <Info className="w-4 h-4 text-purple-500" />,
      bg: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      label: '/code-block',
      name: 'Terminal Code Chip',
      desc: 'JetBrains Mono styled code chip container',
      icon: <Terminal className="w-4 h-4 text-slate-700 dark:text-slate-300" />,
      bg: 'bg-slate-200 dark:bg-slate-700',
    },
  ];

  return (
    <div className={`w-full max-w-md border-comic rounded-xl bg-white dark:bg-slate-900 shadow-comic-lg p-2 select-none ${className}`}>
      {/* Menu Header */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b-2 border-dashed border-[var(--notion-gray)]/40 mb-1 text-xs font-mono text-[var(--notion-gray)]">
        <span className="font-bold text-[var(--ink-black)] flex items-center gap-1">
          <CheckSquare className="w-3.5 h-3.5 text-[var(--hero-red)]" />
          <span>NOTION SLASH COMMAND MENU</span>
        </span>
        <span>Type to filter...</span>
      </div>

      {/* Item List */}
      <div className="space-y-1">
        {menuItems.map((item, idx) => (
          <div
            key={item.label}
            onMouseEnter={() => setSelectedIdx(idx)}
            onClick={() => onSelect?.(item.label)}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors border-2 ${
              selectedIdx === idx
                ? 'border-black bg-[var(--pop-yellow)]/30 shadow-comic-sm dark:bg-slate-800 dark:border-white'
                : 'border-transparent hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <div className={`p-2 rounded-md border-comic-thin ${item.bg}`}>
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-bangers text-base text-[var(--ink-black)] tracking-wide">{item.name}</span>
                <span className="font-mono text-xs text-[var(--notion-gray)] font-semibold">{item.label}</span>
              </div>
              <p className="font-sans text-xs text-[var(--ink-muted)] truncate">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
