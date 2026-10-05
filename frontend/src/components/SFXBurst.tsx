import React from 'react';
import { motion } from 'framer-motion';

export interface SFXBurstProps {
  text: string;
  variant?: 'yellow' | 'red' | 'blue' | 'mint' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}

const sfxColorMap = {
  yellow: { bg: '#FFD400', stroke: '#111111', text: '#111111' },
  red: { bg: '#FF3B30', stroke: '#111111', text: '#FFFFFF' },
  blue: { bg: '#2E9BFF', stroke: '#111111', text: '#FFFFFF' },
  mint: { bg: '#3DDC97', stroke: '#111111', text: '#111111' },
  purple: { bg: '#B57EDC', stroke: '#111111', text: '#FFFFFF' },
};

const sizeMap = {
  sm: { box: 'w-20 h-20', font: 'text-sm' },
  md: { box: 'w-28 h-28', font: 'text-xl' },
  lg: { box: 'w-36 h-36', font: 'text-3xl' },
};

export const SFXBurst: React.FC<SFXBurstProps> = ({
  text,
  variant = 'yellow',
  size = 'md',
  animate = true,
  className = '',
}) => {
  const colors = sfxColorMap[variant];
  const dimensions = sizeMap[size];

  const content = (
    <div className={`relative flex items-center justify-center ${dimensions.box} select-none ${className}`}>
      {/* Starburst SVG */}
      <svg
        className="absolute inset-0 w-full h-full drop-shadow-[4px_4px_0px_rgba(17,17,17,1)]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 0 
             L61 24 L85 11 L79 36 L100 48 L80 63 L90 88 L66 81 L53 100 
             L38 82 L16 93 L21 68 L0 55 L19 39 L7 15 L32 23 Z"
          fill={colors.bg}
          stroke={colors.stroke}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Action Text */}
      <span
        className={`relative z-10 font-bangers ${dimensions.font} font-bold tracking-widest uppercase text-center transform -rotate-6 px-1`}
        style={{ color: colors.text }}
      >
        {text}
      </span>
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ scale: 0.8, rotate: -8 }}
      animate={{ scale: [0.95, 1.05, 0.98, 1], rotate: [-6, 3, -4, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      className="inline-block"
    >
      {content}
    </motion.div>
  );
};
