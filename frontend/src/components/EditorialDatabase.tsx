import React, { useState } from 'react';
import { LayoutGrid, List, ArrowUpRight } from 'lucide-react';


export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: string;
  github?: string;
  features: string[];
}

export const EditorialDatabase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects: ProjectItem[] = [
    {
      id: 'notely',
      number: '01',
      title: 'NOTELY — AI WORKSPACE 🤖',
      category: 'AI & Full Stack',
      description: 'Full-stack note-taking app built with Flask + React 19, combining structured knowledge management with a Google Gemini AI layer & force-directed knowledge graph.',
      tech: ['React 19', 'Python (Flask)', 'Google Gemini AI', 'RAG / Embeddings', 'MySQL', 'Knowledge Graph'],
      metrics: 'Gemini RAG + Force Graph',
      github: 'https://github.com/prajwalpatil16/notely',
      features: [
        'Rich markdown notes, nested folders & tags, pin/archive, version history rollback.',
        '2D/3D Force-directed knowledge graph linking related notes.',
        'AI chat companion grounded in user notes (RAG) + smart tag suggestions.',
        'JWT-based auth with Google OAuth, rate-limited API design, IDOR-safe scoping.',
      ],
    },
    {
      id: 'testdesk',
      number: '02',
      title: 'TESTDESK — ENTERPRISE SAAS 🛡️',
      category: 'Enterprise SaaS',
      description: 'Production-ready enterprise test case management and defect tracking SaaS platform competing with Jira and BugHerd.',
      tech: ['Java', 'Spring Boot', 'React 19', 'MySQL', 'Microservices', 'REST APIs'],
      metrics: 'Enterprise Release Center',
      features: [
        'Hierarchical test suite repositories & requirement mapping.',
        'Defect tracking, issue severity workflows, release management.',
        'Java Spring Boot microservice architecture with role-based auth.',
      ],
    },
    {
      id: 'swiftbim',
      number: '03',
      title: 'SWIFTBIM AUTOMATION ⚙️',
      category: 'Business Workflows',
      description: 'Digitized SwiftBIM core sales-to-delivery operations transforming a manual workflow into an end-to-end enterprise platform.',
      tech: ['Python (Flask)', 'React.js', 'MySQL', 'REST APIs', 'State Machines'],
      metrics: 'Enquiry → Proposal → Contract',
      features: [
        'End-to-end sales-to-delivery pipeline automation.',
        'Authentication, contract state machines, task execution tracking.',
        'Built production features across React.js, Flask, and MySQL.',
      ],
    },
  ];

  return (
    <section id="missions" className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 border-b-2 border-editorial-heavy max-w-7xl mx-auto space-y-8 select-none">
      {/* Section Header */}
      <div className="flex items-end justify-between border-b-2 border-editorial-heavy pb-6 flex-wrap gap-4">
        <div>
          <span className="font-mono-code text-xs text-[var(--crimson-red)] uppercase tracking-widest font-bold block mb-1">
            03 / FEATURED WORKS
          </span>
          <h2 className="font-antonio text-4xl sm:text-6xl md:text-7xl text-[var(--text-charcoal)] font-extrabold uppercase tracking-tight leading-none">
            SELECTED PROJECTS
          </h2>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-[var(--bg-paper-subtle)] p-1 rounded-lg border-2 border-editorial-heavy font-mono-code text-xs">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded cursor-pointer transition-all ${
              viewMode === 'grid'
                ? 'bg-[var(--text-charcoal)] text-[var(--bg-paper)] font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-charcoal)]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>GRID VIEW</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded cursor-pointer transition-all ${
              viewMode === 'list'
                ? 'bg-[var(--text-charcoal)] text-[var(--bg-paper)] font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-charcoal)]'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>LIST VIEW</span>
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative p-6 bg-[var(--bg-card)] border-2 border-editorial-heavy rounded-xl flex flex-col justify-between hover:shadow-2xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between font-mono-code text-xs text-[var(--text-muted)] mb-3">
                  <span className="font-antonio text-4xl text-[var(--crimson-red)] font-bold">{p.number}</span>
                  <span className="uppercase font-bold text-[var(--text-charcoal)]">{p.category}</span>
                </div>

                <h3 className="font-antonio text-2xl sm:text-3xl text-[var(--text-charcoal)] mb-3 tracking-wide group-hover:text-[var(--crimson-red)] transition-colors leading-tight">
                  {p.title}
                </h3>

                <p className="font-serif-editorial text-sm text-[var(--text-muted)] mb-4 leading-relaxed italic">
                  "{p.description}"
                </p>

                <div className="inline-block px-3 py-1 bg-[var(--crimson-red)] text-white border border-black font-mono-code text-xs font-bold mb-4">
                  ⚡ {p.metrics}
                </div>

                <div className="space-y-1.5 pt-2 border-t border-editorial-heavy/30 font-sans-editorial text-xs text-[#4A4A52]">
                  {p.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5">
                      <span className="text-[var(--crimson-red)] font-bold">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-editorial-heavy space-y-3 mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded font-mono-code text-[10px] bg-[var(--bg-paper)] border border-editorial-heavy font-bold text-[var(--text-charcoal)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.github && (
                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-code text-xs font-bold text-[var(--crimson-red)] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>VIEW CODE ON GITHUB</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="border-2 border-editorial-heavy rounded-xl overflow-hidden bg-[var(--bg-card)]">
          <table className="w-full text-left font-sans-editorial text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-editorial-heavy bg-[var(--bg-paper-subtle)] font-mono-code text-xs text-[var(--text-charcoal)] font-bold uppercase">
                <th className="p-4">NO.</th>
                <th className="p-4">PROJECT TITLE</th>
                <th className="p-4">CATEGORY</th>
                <th className="p-4">STACK</th>
                <th className="p-4 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id} className="border-b border-editorial-heavy hover:bg-[var(--bg-paper-subtle)] transition-colors">
                  <td className="p-4 font-antonio text-2xl text-[var(--crimson-red)] font-bold">{p.number}</td>
                  <td className="p-4 font-antonio text-2xl text-[var(--text-charcoal)]">{p.title}</td>
                  <td className="p-4 font-mono-code text-xs text-[var(--text-muted)] font-bold">{p.category}</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {p.tech.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-[var(--bg-paper)] font-mono-code text-[10px] border border-editorial-heavy font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-3 py-1 rounded bg-[var(--text-charcoal)] text-[var(--bg-paper)] font-mono-code text-xs font-bold hover:bg-[var(--crimson-red)] transition-colors"
                      >
                        GITHUB
                      </a>
                    ) : (
                      <span className="font-mono-code text-xs text-[var(--text-muted)] font-bold">PROD</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};
