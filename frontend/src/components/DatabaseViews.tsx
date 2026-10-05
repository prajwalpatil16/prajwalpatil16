import React, { useState } from 'react';
import { Table, LayoutGrid, Columns3 } from 'lucide-react';
import { TagChip } from './TagChip';

export interface DatabaseViewsProps {
  className?: string;
}

export const DatabaseViews: React.FC<DatabaseViewsProps> = ({ className = '' }) => {
  const [activeView, setActiveView] = useState<'table' | 'gallery' | 'board'>('gallery');

  const sampleProjects = [
    {
      id: 1,
      title: 'AgriTech OS 🌾',
      type: 'Full Stack Web App',
      tech: ['React 19', 'Node.js', 'PostgreSQL'],
      status: 'Shipped 🚀',
      color: 'mint' as const,
      desc: 'Real-time telemetry and crop yield prediction platform for Karnataka farmers.',
    },
    {
      id: 2,
      title: 'DevComic Engine ⚡',
      type: 'Developer Tooling',
      tech: ['TypeScript', 'Vite', 'Tailwind'],
      status: 'In Progress 🛠️',
      color: 'yellow' as const,
      desc: 'Design system generator transforming plain markdown specs into comic issue layouts.',
    },
    {
      id: 3,
      title: 'Bengaluru Pulse 🌆',
      type: 'Community Dashboard',
      tech: ['Next.js', 'GraphQL', 'GSAP'],
      status: 'Featured ⭐',
      color: 'blue' as const,
      desc: 'Live tech meetup and traffic radar built for South India developer communities.',
    },
  ];

  return (
    <div className={`border-comic rounded-xl bg-[var(--bg-paper)] shadow-comic p-4 ${className}`}>
      {/* Notion Database Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-[var(--notion-gray)]/40 pb-3 mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2 font-bangers text-xl text-[var(--ink-black)]">
          <span className="p-1.5 bg-[var(--pop-yellow)] border-comic-thin rounded shadow-comic-sm">
            📊
          </span>
          <span>PROJECT DATABASE (3 RECORDS)</span>
        </div>

        {/* View Tabs */}
        <div className="flex items-center gap-1 bg-[var(--bg-paper-subtle)] p-1 rounded-lg border-comic-thin">
          <button
            onClick={() => setActiveView('table')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-semibold cursor-pointer transition-all ${
              activeView === 'table' ? 'bg-[var(--pop-yellow)] text-black border-comic-thin shadow-comic-sm' : 'text-[var(--notion-gray)] hover:text-black'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Table</span>
          </button>
          <button
            onClick={() => setActiveView('gallery')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-semibold cursor-pointer transition-all ${
              activeView === 'gallery' ? 'bg-[var(--sky-blue)] text-white border-comic-thin shadow-comic-sm' : 'text-[var(--notion-gray)] hover:text-black'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Gallery</span>
          </button>
          <button
            onClick={() => setActiveView('board')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-semibold cursor-pointer transition-all ${
              activeView === 'board' ? 'bg-[var(--mint)] text-black border-comic-thin shadow-comic-sm' : 'text-[var(--notion-gray)] hover:text-black'
            }`}
          >
            <Columns3 className="w-3.5 h-3.5" />
            <span>Board</span>
          </button>
        </div>
      </div>

      {/* View Contents */}
      {activeView === 'gallery' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sampleProjects.map((p) => (
            <div
              key={p.id}
              className="border-comic rounded-xl p-4 bg-white dark:bg-slate-800 shadow-comic-hover shadow-comic cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-bangers text-xl text-[var(--ink-black)]">{p.title}</h4>
                  <span className="px-2 py-0.5 border-comic-thin rounded font-mono text-xs bg-[var(--bg-paper-subtle)]">
                    {p.status}
                  </span>
                </div>
                <p className="font-sans text-xs text-[var(--ink-muted)] mb-3 leading-normal">{p.desc}</p>
              </div>

              <div className="flex items-center gap-1 flex-wrap pt-2 border-t border-dashed border-gray-200 dark:border-slate-700">
                {p.tech.map((t, idx) => (
                  <TagChip key={idx} label={t} color={p.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeView === 'table' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-xs md:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-comic bg-[var(--bg-paper-subtle)] text-[var(--ink-black)] font-mono uppercase">
                <th className="p-2.5">Project Name</th>
                <th className="p-2.5">Category</th>
                <th className="p-2.5">Stack</th>
                <th className="p-2.5">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleProjects.map((p) => (
                <tr key={p.id} className="border-b border-comic-thin hover:bg-[var(--bg-paper-subtle)]">
                  <td className="p-2.5 font-bold font-bangers text-base">{p.title}</td>
                  <td className="p-2.5 font-sans">{p.type}</td>
                  <td className="p-2.5">
                    <div className="flex items-center gap-1 flex-wrap">
                      {p.tech.map((t, idx) => (
                        <TagChip key={idx} label={t} color={p.color} />
                      ))}
                    </div>
                  </td>
                  <td className="p-2.5 font-mono">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeView === 'board' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['To Do 📋', 'In Progress ⚙️', 'Shipped 🚀'].map((column, colIdx) => (
            <div key={colIdx} className="bg-[var(--bg-paper-subtle)] p-3 rounded-xl border-comic-thin">
              <h5 className="font-bangers text-base text-[var(--ink-black)] mb-3 flex items-center justify-between">
                <span>{column}</span>
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[var(--pop-yellow)] text-black text-xs font-mono font-bold border-comic-thin">
                  {colIdx === 1 ? 1 : colIdx === 2 ? 2 : 0}
                </span>
              </h5>

              <div className="space-y-3">
                {sampleProjects
                  .filter((p) => (colIdx === 1 ? p.status.includes('Progress') : colIdx === 2 ? true : false))
                  .slice(0, 2)
                  .map((p) => (
                    <div key={p.id} className="bg-white dark:bg-slate-800 p-3 rounded-lg border-comic shadow-comic-sm">
                      <div className="font-bangers text-base mb-1">{p.title}</div>
                      <p className="font-sans text-xs text-[var(--ink-muted)] mb-2">{p.desc}</p>
                      <TagChip label={p.tech[0]} color={p.color} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
