import React from 'react';

export interface TagChipProps {
  label: string;
  color?: 'yellow' | 'blue' | 'red' | 'mint' | 'purple' | 'orange' | 'gray';
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
}

const colorMap = {
  yellow: 'bg-[var(--pop-yellow)] text-black border-black',
  blue: 'bg-[var(--sky-blue)] text-white border-black',
  red: 'bg-[var(--hero-red)] text-white border-black',
  mint: 'bg-[var(--mint)] text-black border-black',
  purple: 'bg-[var(--comic-purple)] text-white border-black',
  orange: 'bg-[var(--comic-orange)] text-white border-black',
  gray: 'bg-[var(--bg-paper-subtle)] text-[var(--ink-black)] border-[var(--card-border)]',
};

export const TagChip: React.FC<TagChipProps> = ({
  label,
  color = 'yellow',
  icon,
  removable = false,
  onRemove,
  onClick,
  className = '',
}) => {
  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border-comic-thin font-mono text-xs font-semibold shadow-comic-sm select-none transition-transform hover:-translate-y-0.5 cursor-pointer ${colorMap[color]} ${className}`}
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      <span>{label}</span>
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-0.5 hover:opacity-75 font-bold cursor-pointer"
        >
          ×
        </button>
      )}
    </span>
  );
};
