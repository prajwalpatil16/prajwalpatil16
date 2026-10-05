import React from 'react';

export interface SpeechBubbleProps {
  children: React.ReactNode;
  tailDirection?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
  variant?: 'speech' | 'thought' | 'shout' | 'whisper';
  bgColor?: string;
  className?: string;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  tailDirection = 'bottom-left',
  variant = 'speech',
  bgColor = 'bg-white dark:bg-slate-800',
  className = '',
}) => {
  // Tail positioning classes
  const getTailPosition = () => {
    switch (tailDirection) {
      case 'bottom-left':
        return 'bottom-[-16px] left-6';
      case 'bottom-right':
        return 'bottom-[-16px] right-6';
      case 'top-left':
        return 'top-[-16px] left-6 rotate-180';
      case 'top-right':
        return 'top-[-16px] right-6 rotate-180';
      case 'left':
        return 'left-[-16px] top-1/2 -translate-y-1/2 -rotate-90';
      case 'right':
        return 'right-[-16px] top-1/2 -translate-y-1/2 rotate-90';
      default:
        return 'bottom-[-16px] left-6';
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'shout':
        return 'border-comic-thick bg-[var(--pop-yellow)] text-black font-bangers uppercase tracking-wide text-lg shadow-comic-red';
      case 'whisper':
        return 'border-dashed border-comic-thin font-comic text-xs opacity-95';
      case 'thought':
        return 'border-comic rounded-3xl font-comic shadow-comic';
      case 'speech':
      default:
        return 'border-comic rounded-2xl font-comic shadow-comic';
    }
  };

  return (
    <div className={`relative inline-block p-4 ${bgColor} ${getVariantStyles()} ${className}`}>
      <div className="relative z-10">{children}</div>

      {/* Tail Graphic */}
      {variant === 'thought' ? (
        // Thought bubble circles
        <div className={`absolute ${getTailPosition()} flex flex-col items-center gap-1 z-0 pointer-events-none`}>
          <div className="w-3.5 h-3.5 rounded-full border-comic-thin bg-white dark:bg-slate-800" />
          <div className="w-2 h-2 rounded-full border-comic-thin bg-white dark:bg-slate-800" />
        </div>
      ) : (
        // Standard / Shout Speech tail triangle SVG
        <svg
          className={`absolute ${getTailPosition()} z-20 w-6 h-5 text-[var(--card-border)] overflow-visible pointer-events-none`}
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L24 0 L6 20 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 0 L21.5 0 L6 16 Z"
            className={variant === 'shout' ? 'fill-[var(--pop-yellow)]' : 'fill-[var(--bg-paper)] dark:fill-slate-800'}
          />
        </svg>
      )}
    </div>
  );
};
