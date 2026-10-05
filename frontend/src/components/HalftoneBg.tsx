import React from 'react';

export interface HalftoneBgProps {
  dotColor?: string;
  density?: 'sparse' | 'medium' | 'dense';
  opacity?: number;
  className?: string;
  children?: React.ReactNode;
}

export const HalftoneBg: React.FC<HalftoneBgProps> = ({
  dotColor = 'currentColor',
  density = 'medium',
  opacity = 0.15,
  className = '',
  children,
}) => {
  const step = density === 'sparse' ? 24 : density === 'dense' ? 10 : 16;
  const radius = density === 'sparse' ? 2 : density === 'dense' ? 1.5 : 2.2;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`halftone-pattern-${density}`}
            width={step}
            height={step}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <circle cx={step / 2} cy={step / 2} r={radius} fill={dotColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#halftone-pattern-${density})`} />
      </svg>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};
