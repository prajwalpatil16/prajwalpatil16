import React from 'react';

export interface BrushStrokeBgProps {
  color?: 'ochre' | 'crimson' | 'charcoal' | 'mint';
  className?: string;
}

const colorMap = {
  ochre: 'fill-[#E59E1B] dark:fill-[#F5A623]',
  crimson: 'fill-[#C82323] dark:fill-[#EF4444]',
  charcoal: 'fill-[#121316] dark:fill-[#F3F4F6]',
  mint: 'fill-[#2E8B57] dark:fill-[#10B981]',
};

export const BrushStrokeBg: React.FC<BrushStrokeBgProps> = ({
  color = 'ochre',
  className = '',
}) => {
  return (
    <svg
      className={`absolute z-0 pointer-events-none ${className}`}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.2 210.5C92.8 140.2 188.5 75.8 285.3 62.1C382.1 48.4 465.9 85.3 480.2 165.8C494.5 246.3 439.2 370.4 358.7 425.6C278.2 480.8 172.5 467.1 105.1 412.3C37.7 357.5 -2.4 280.8 45.2 210.5Z"
        className={`${colorMap[color]} opacity-90`}
      />
    </svg>
  );
};
