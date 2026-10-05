import React from 'react';
import { motion } from 'framer-motion';

export interface StickerIconProps {
  icon: React.ReactNode;
  label?: string;
  bg?: 'yellow' | 'red' | 'blue' | 'mint' | 'purple' | 'orange' | 'white';
  rotate?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const stickerBgMap = {
  yellow: 'bg-[var(--pop-yellow)] text-black',
  red: 'bg-[var(--hero-red)] text-white',
  blue: 'bg-[var(--sky-blue)] text-white',
  mint: 'bg-[var(--mint)] text-black',
  purple: 'bg-[var(--comic-purple)] text-white',
  orange: 'bg-[var(--comic-orange)] text-white',
  white: 'bg-white text-black',
};

const stickerSizeMap = {
  sm: 'p-1.5 text-base rounded-lg',
  md: 'p-2.5 text-xl rounded-xl',
  lg: 'p-4 text-3xl rounded-2xl',
};

export const StickerIcon: React.FC<StickerIconProps> = ({
  icon,
  label,
  bg = 'yellow',
  rotate = -3,
  size = 'md',
  className = '',
}) => {
  return (
    <motion.div
      style={{ rotate: `${rotate}deg` }}
      whileHover={{ scale: 1.12, rotate: rotate + 6 }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      className={`inline-flex items-center gap-2 border-comic shadow-comic border-2 border-white ring-2 ring-black ${stickerBgMap[bg]} ${stickerSizeMap[size]} select-none cursor-pointer ${className}`}
    >
      <span className="flex items-center justify-center">{icon}</span>
      {label && <span className="font-bangers tracking-wider uppercase text-sm leading-none">{label}</span>}
    </motion.div>
  );
};
