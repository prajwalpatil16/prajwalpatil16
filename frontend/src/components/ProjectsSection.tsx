import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const projects = [
    {
      id: 'notely',
      title: 'Notely — AI-Powered Note-Taking Workspace',
      subtitle: 'Knowledge Management + Gemini AI RAG + Force Graph',
      category: 'AI & Full Stack',
      period: 'Jul 2026 — Present',
      github: 'https://github.com/prajwalpatil16/notely',
      featured: true,
      description:
        'Full-stack note-taking application built with Flask (Python) + React 19, combining structured knowledge management with an integrated AI layer powered by Google Gemini.',
      features: [
        'Rich markdown notes, nested folders & tags, pin/archive, version history with rollback.',
        'Force-directed 2D/3D knowledge graph visually linking related notes.',
        'AI companion grounded in user notes (RAG), auto-summarization, smart tag suggestions, and action-item extraction.',
        'Semantic search via embeddings with graceful fallback to keyword search.',
        'JWT-based auth with Google OAuth, rate-limited API design, IDOR-safe ownership scoping on every resource.',
      ],
      tech: ['React 19', 'Python (Flask)', 'Google Gemini AI', 'RAG / Vector Embeddings', 'MySQL', 'Knowledge Graph'],
      accentColor: 'from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-purple-400',
    },
    {
      id: 'testdesk',
      title: 'TestDesk — Enterprise Test Case & Bug Tracking SaaS',
      subtitle: 'SaaS Platform for QA & Software Engineering Teams',
      category: 'Enterprise SaaS',
      period: 'Jan 2026 — Present',
      featured: true,
      description:
        'Production-ready enterprise SaaS platform competing with platforms like Jira and BugHerd, providing QA and software engineering teams with a centralized command center for release cycles.',
      features: [
        'Hierarchical test suite repositories and requirement mapping.',
        'Defect tracking, issue severity workflows, and release cycle management.',
        'Scalable backend architecture designed with Java Spring Boot microservices.',
        'Role-based authorization and real-time release status dashboards.',
      ],
      tech: ['Java', 'Spring Boot', 'React 19', 'MySQL', 'Microservices', 'REST APIs'],
      accentColor: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    },
    {
      id: 'swiftbim',
      title: 'SwiftBIM Sales-to-Delivery Automation Platform',
      subtitle: 'Enterprise Operations Digitization @ MINE IT',
      category: 'Business Workflows',
      period: 'Oct 2025 — Present',
      featured: true,
      description:
        "Digitized SwiftBIM's core sales-to-delivery operations, transforming a manual ad-hoc workflow into a structured end-to-end enterprise platform.",
      features: [
        'Streamlined sales-to-delivery workflow: Enquiry → Proposal → Contract → Task Execution & Progress Tracking.',
        'Built secure REST APIs and backend logic for authentication, contract state management, and real product features.',
        'Integrated responsive React.js frontends with Flask and MySQL backend services.',
        'Eliminated workflow friction and improved project milestone tracking across teams.',
      ],
      tech: ['Python (Flask)', 'React.js', 'MySQL', 'REST APIs', 'Authentication', 'State Machines'],
      accentColor: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-cyan-400',
    },
  ];

  const tags = ['ALL', 'AI & Full Stack', 'Enterprise SaaS', 'Business Workflows'];

  const filteredProjects =
    selectedTag === 'ALL' ? projects : projects.filter((p) => p.category === selectedTag);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 select-none">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>02 / FEATURED WORKS &amp; PRODUCTS</span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-6xl font-black text-white tracking-tight">
              PROD-READY SOFTWARE
            </h2>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-xl font-mono-code text-xs font-semibold transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-gradient-to-r ${project.accentColor} border`}>
                      {project.category}
                    </span>
                    <span className="font-mono-code text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="font-mono-code text-xs text-emerald-400 font-medium mt-1">
                    {project.subtitle}
                  </div>
                </div>

                {/* External Links */}
                {project.github && (
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-code text-xs font-semibold transition-all cursor-pointer"
                    >
                      <svg width="16" height="16" style={{ width: '16px', height: '16px' }} className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </a>

                  </div>
                )}
              </div>

              {/* Description */}
              <p className="font-inter text-base text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2 pt-2">
                <div className="font-mono-code text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  KEY FEATURES &amp; ARCHITECTURE HIGHLIGHTS:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {project.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-black/30 border border-white/5 font-inter text-xs sm:text-sm text-gray-300"
                    >
                      <span className="text-emerald-400 font-mono-code font-bold">⚡</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="font-mono-code text-xs text-gray-400 mr-2">TECH STACK:</span>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono-code text-xs font-semibold text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
