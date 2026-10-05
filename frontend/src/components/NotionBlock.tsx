import React, { useState } from 'react';
import { GripVertical } from 'lucide-react';

export interface NotionBlockProps {
  type?: 'paragraph' | 'heading-1' | 'heading-2' | 'heading-3' | 'bullet' | 'quote' | 'code';
  children: React.ReactNode;
  dragHandle?: boolean;
  blockId?: string;
  className?: string;
}

export const NotionBlock: React.FC<NotionBlockProps> = ({
  type = 'paragraph',
  children,
  dragHandle = true,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBlockContent = () => {
    switch (type) {
      case 'heading-1':
        return (
          <h1 className="font-bangers text-3xl md:text-4xl text-[var(--ink-black)] tracking-wide border-b-2 border-dashed border-[var(--notion-gray)]/40 pb-2">
            {children}
          </h1>
        );
      case 'heading-2':
        return (
          <h2 className="font-bangers text-2xl md:text-3xl text-[var(--ink-black)] tracking-wide pt-2">
            {children}
          </h2>
        );
      case 'heading-3':
        return (
          <h3 className="font-sans font-bold text-xl text-[var(--ink-black)] pt-1">
            {children}
          </h3>
        );
      case 'bullet':
        return (
          <div className="flex items-start gap-2 text-base leading-relaxed">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--hero-red)] mt-2 flex-shrink-0" />
            <div className="flex-1">{children}</div>
          </div>
        );
      case 'quote':
        return (
          <blockquote className="border-l-4 border-[var(--pop-yellow)] bg-[var(--bg-paper-subtle)] p-3 rounded-r-lg italic font-hand text-lg text-[var(--ink-black)] shadow-comic-sm">
            {children}
          </blockquote>
        );
      case 'code':
        return (
          <div className="border-comic rounded-lg bg-[var(--ink-black)] text-emerald-400 p-3 font-mono text-sm shadow-comic-sm overflow-x-auto">
            {children}
          </div>
        );
      case 'paragraph':
      default:
        return <div className="text-base text-[var(--ink-black)] leading-relaxed font-sans">{children}</div>;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex items-start gap-1.5 py-1 px-1 rounded-md transition-colors duration-150 ${
        isHovered ? 'bg-[var(--bg-paper-subtle)]' : ''
      } ${className}`}
    >
      {/* Notion 6-dot Drag Handle */}
      {dragHandle && (
        <div
          className={`flex items-center justify-center w-5 h-6 text-[var(--notion-gray)] cursor-grab active:cursor-grabbing transition-opacity duration-150 flex-shrink-0 mt-0.5 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          title="Drag block to reorder"
        >
          <GripVertical className="w-4 h-4" />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0">{getBlockContent()}</div>
    </div>
  );
};
