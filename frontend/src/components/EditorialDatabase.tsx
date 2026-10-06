import React, { useState } from 'react';
import {
  LayoutGrid,
  List,
  ExternalLink,
  ShoppingBag,
  CheckSquare,
  Sparkles,
  Layers,
  GraduationCap,
  FolderGit2
} from 'lucide-react';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  features: string[];
  icon: React.ReactNode;
}

export interface EditorialDatabaseProps {
  onExploreDeepDive?: () => void;
}

export const EditorialDatabase: React.FC<EditorialDatabaseProps> = ({ onExploreDeepDive }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects: ProjectItem[] = [
    {
      id: 'lumiere',
      number: '01',
      title: 'Lumière',
      category: 'E-Commerce Platform',
      description: 'Full-stack retail platform with normalized variant modeling, atomic order checkout, and Razorpay payments.',
      tech: ['React 19', 'Python', 'Flask', 'MySQL', 'JWT', 'Razorpay'],
      github: 'https://github.com/prajwalpatil16/Lumiere_Offical_Store',
      features: [
        'Normalized 25-table relational schema modeling product variants, SKUs, and order lifecycles.',
        'Atomic SQL checkout transactions ensuring consistent inventory management.',
        'Role-based access control with staff invite flows and secure Razorpay integration.',
      ],
      icon: <ShoppingBag className="w-5 h-5 text-[#B52B27]" />,
    },
    {
      id: 'testdesk',
      number: '02',
      title: 'TestDesk',
      category: 'QA Management SaaS',
      description: 'QA test management and defect tracking platform with hierarchical test suites and role-scoped access.',
      tech: ['React (TypeScript)', 'Python', 'Flask', 'MySQL', 'REST APIs'],
      github: 'https://github.com/prajwalpatil16/TestDesk',
      features: [
        'Hierarchical test suite repository with drag-and-drop ordering and test run tracking.',
        'Defect tracking lifecycle with severity classifications, reproduction steps, and assignment routing.',
        'Interactive Kanban boards, team collaboration module, and project-scoped RBAC.',
      ],
      icon: <CheckSquare className="w-5 h-5 text-[#B52B27]" />,
    },
    {
      id: 'notely',
      number: '03',
      title: 'Notely',
      category: 'AI Knowledge Workspace',
      description: 'Markdown note-taking platform with an AI chat layer grounded on user notes and force-directed knowledge graph.',
      tech: ['React 19', 'Python', 'Flask', 'Google Gemini API', 'MySQL'],
      github: 'https://github.com/prajwalpatil16/notely',
      features: [
        'Markdown note editor with nested folders, tag hierarchies, and version rollback.',
        'RAG chat assistant grounded in the user\'s personal notes via Google Gemini API.',
        '2D/3D force-directed knowledge graph visualizing conceptual connections between notes.',
      ],
      icon: <Sparkles className="w-5 h-5 text-[#B52B27]" />,
    },
    {
      id: 'swiftbim',
      number: '04',
      title: 'SwiftBIM',
      category: 'Operations Management',
      description: 'Centralized sales-to-delivery operations portal replacing manual hand-offs with structured workflows.',
      tech: ['React 19', 'Python', 'Flask', 'MySQL', 'REST APIs', 'Tailwind CSS'],
      features: [
        'Digitized sales-to-delivery operations into an integrated web portal at MINE IT.',
        'Structured pipelines for enquiry intake, proposal drafting, contract signing, and task tracking.',
        'Role-scoped dashboards for sales engineers, project leads, and management.',
      ],
      icon: <Layers className="w-5 h-5 text-[#B52B27]" />,
    },
    {
      id: 'siddashree',
      number: '05',
      title: 'Siddashree Institute',
      category: 'Live Educational Portal',
      description: 'Production website and management portal deployed for a real educational institution.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      live: 'https://siddashree.org',
      features: [
        'Production website serving active students, parents, and administrative staff.',
        'Structured portal for academic announcements, program catalogs, and admission inquiries.',
        'Clean, responsive mobile UI optimized for fast page loads and clear navigation.',
      ],
      icon: <GraduationCap className="w-5 h-5 text-[#B52B27]" />,
    },
  ];

  return (
    <section id="missions" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-b-2 border-editorial-heavy select-none">
      <div className="max-w-[1100px] mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b-2 border-editorial-heavy pb-5 flex-wrap gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#B52B27] uppercase tracking-widest font-bold block mb-1">
              03 / FEATURED PROJECTS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
              SELECTED WORK
            </h2>
          </div>

          {/* View Switcher */}
          <div className="flex items-center gap-1 bg-[#DBD3C5] p-1 rounded-lg border border-[#121316]/50 font-mono-code text-xs">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded cursor-pointer transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#121316] text-[#E6DFD3] font-bold shadow-sm'
                  : 'text-[#4A4A52] hover:text-[#121316]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded cursor-pointer transition-all ${
                viewMode === 'list'
                  ? 'bg-[#121316] text-[#E6DFD3] font-bold shadow-sm'
                  : 'text-[#4A4A52] hover:text-[#121316]'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>LIST</span>
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {projects.map((p) => (
              <div
                key={p.id}
                className="p-6 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl shadow-sm card-hover flex flex-col justify-between h-full space-y-5"
              >
                {/* Top Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#121316]/25 pb-2.5">
                    <span className="font-display text-2xl text-[#B52B27] font-bold">
                      {p.number}
                    </span>
                    <span className="font-mono-code text-[11px] font-bold text-[#4A4A52] uppercase bg-[#DBD3C5] px-2 py-0.5 rounded border border-[#121316]/30">
                      {p.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {p.icon}
                    <h3 className="font-display text-2xl text-[#121316] font-bold uppercase tracking-tight">
                      {p.title}
                    </h3>
                  </div>

                  <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
                    {p.description}
                  </p>

                  {/* 3 Bullets Max */}
                  <ul className="space-y-1.5 font-sans-editorial text-xs text-[#4A4A52] pt-1">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B52B27] shrink-0 mt-1.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Section: Tech Tags & Links */}
                <div className="pt-3 border-t border-[#121316]/20 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#E6DFD3] border border-[#121316] font-mono-code text-[10px] font-bold text-[#121316] rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-1 font-mono-code text-xs font-bold">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#121316] text-white hover:bg-[#B52B27] rounded-lg border border-[#121316] transition-colors"
                      >
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>GITHUB</span>
                      </a>
                    )}

                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#B52B27] text-white hover:bg-[#121316] rounded-lg border border-[#121316] transition-colors"
                      >
                        <span>LIVE SITE</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {!p.github && !p.live && (
                      <span className="w-full text-center py-1.5 px-3 bg-[#DBD3C5] border border-[#121316]/40 rounded-lg text-[11px] text-[#4A4A52]">
                        INTERNAL PRODUCTION PLATFORM
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="bg-[#ECE5D9] border-2 border-[#121316] rounded-xl overflow-hidden shadow-sm">
            <div className="divide-y divide-[#121316]/20">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#E6DFD3] transition-colors"
                >
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl text-[#B52B27] font-bold">
                        {p.number}
                      </span>
                      <h3 className="font-display text-2xl text-[#121316] font-bold uppercase">
                        {p.title}
                      </h3>
                      <span className="font-mono-code text-[10px] text-[#4A4A52] font-bold bg-[#DBD3C5] px-2 py-0.5 rounded border border-[#121316]/30">
                        {p.category}
                      </span>
                    </div>

                    <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52]">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-white border border-[#121316] font-mono-code text-[10px] font-bold text-[#121316] rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-auto font-mono-code text-xs font-bold shrink-0">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121316] text-white hover:bg-[#B52B27] rounded-lg transition-colors"
                      >
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>GITHUB</span>
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#B52B27] text-white hover:bg-[#121316] rounded-lg transition-colors"
                      >
                        <span>LIVE</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {!p.github && !p.live && (
                      <span className="font-mono-code text-xs text-[#4A4A52] bg-[#DBD3C5] px-2.5 py-1 rounded">
                        INTERNAL
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Studies Link Banner */}
        {onExploreDeepDive && (
          <div className="p-6 bg-[#DBD3C5] border-2 border-[#121316] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <span className="font-mono-code text-[11px] font-bold text-[#B52B27] uppercase tracking-wider block">
                DETAILED WRITE-UPS
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#121316] leading-tight">
                LOOKING FOR COMPLETE CASE STUDIES &amp; CODE ARCHITECTURE?
              </h4>
              <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52]">
                Explore in-depth problem statements, solutions, schema decisions, and production code snippets in the dedicated Case Studies section.
              </p>
            </div>
            <button
              onClick={onExploreDeepDive}
              className="px-5 py-2.5 bg-[#121316] text-[#E6DFD3] hover:bg-[#B52B27] hover:text-white rounded-xl border-2 border-[#121316] font-display text-base font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow-sm btn-press"
            >
              VIEW CASE STUDIES →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
