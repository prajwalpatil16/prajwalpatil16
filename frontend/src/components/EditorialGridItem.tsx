import React from 'react';
import { motion } from 'framer-motion';

export interface EditorialGridItemProps {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  className?: string;
  onClick?: () => void;
}

export const EditorialGridItem: React.FC<EditorialGridItemProps> = ({
  number,
  title,
  subtitle,
  description,
  tags = [],
  className = '',
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`p-6 bg-[var(--bg-card)] border-2 border-editorial-heavy rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between font-mono-code text-xs text-[var(--text-muted)] mb-2">
        <span className="font-antonio text-3xl text-[var(--crimson-red)] font-bold">{number}</span>
        {subtitle && <span className="uppercase font-bold tracking-widest text-[var(--text-charcoal)]">{subtitle}</span>}
      </div>

      <h3 className="font-antonio text-3xl text-[var(--text-charcoal)] mb-2 tracking-wide uppercase leading-none">
        {title}
      </h3>

      <p className="font-serif-editorial text-sm text-[var(--text-muted)] mb-4 leading-relaxed italic">
        "{description}"
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-editorial-heavy">
          {tags.map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-[var(--bg-paper)] border border-editorial-heavy text-[var(--text-charcoal)] font-bold uppercase"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
