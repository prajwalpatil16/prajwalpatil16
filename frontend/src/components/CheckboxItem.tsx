import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export interface CheckboxItemProps {
  label: React.ReactNode;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const CheckboxItem: React.FC<CheckboxItemProps> = ({
  label,
  defaultChecked = false,
  onChange,
  className = '',
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <div
      onClick={toggle}
      className={`flex items-start gap-3 py-1.5 px-2 rounded-md hover:bg-[var(--bg-paper-subtle)] cursor-pointer select-none transition-colors ${className}`}
    >
      <motion.div
        whileTap={{ scale: 0.85 }}
        className={`flex items-center justify-center w-5 h-5 mt-0.5 rounded border-comic-thin transition-colors flex-shrink-0 ${
          checked ? 'bg-[var(--hero-red)] text-white' : 'bg-white dark:bg-slate-800'
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
      </motion.div>

      <span
        className={`font-sans text-sm md:text-base leading-relaxed transition-all ${
          checked ? 'line-through opacity-60 text-[var(--notion-gray)] font-comic' : 'text-[var(--ink-black)]'
        }`}
      >
        {label}
      </span>
    </div>
  );
};
