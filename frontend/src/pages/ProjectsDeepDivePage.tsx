import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Terminal,
  FolderGit2,
  ShoppingBag,
  CheckSquare,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';

export interface ProjectDeepDive {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlight: string;
  problemStatement: string;
  solutionEngine: string;
  keyInnovations: string[];
  metrics: { label: string; value: string }[];
  codeSnippet: string;
  codeLang: string;
  icon: React.ReactNode;
}

export const ProjectsDeepDivePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: ProjectDeepDive[] = [
    {
      id: 'lumiere',
      number: '01',
      name: 'Lumière — Full-Stack E-Commerce',
      tagline: 'Multi-Variant Retail Platform with Atomic Checkout & Role-Based Access',
      category: 'E-Commerce',
      techStack: ['React 19', 'Python', 'Flask', 'MySQL', 'JWT', 'Razorpay', 'Tailwind CSS'],
      githubUrl: 'https://github.com/prajwalpatil16/Lumiere_Offical_Store',
      architectureHighlight: 'Normalized 25-table relational schema with raw-SQL transaction controls for atomic checkout integrity.',
      problemStatement:
        'Standard e-commerce templates often suffer from race conditions during concurrent checkouts, unverified inventory stock updates, and loose access control over staff privileges.',
      solutionEngine:
        'Architected an e-commerce platform with a normalized schema modeling complex variant hierarchies, sizes, and SKUs. Wrote raw SQL transactions for atomic checkout stock decrementing and implemented a 3-tier RBAC system with time-expiring hashed staff invitations.',
      keyInnovations: [
        'Normalized 25-table relational schema handling multi-attribute variant inventory.',
        'Hand-written SQL transactions to ensure atomicity across orders and payment validation.',
        'Three-tier RBAC (Admin, Staff, Customer) with secure invite flows.',
        'Seamless checkout integration with Razorpay webhooks for payment verification.',
      ],
      metrics: [
        { label: 'Database Schema', value: '25 Tables' },
        { label: 'Access Model', value: '3-Tier RBAC' },
        { label: 'Payment Gateway', value: 'Razorpay Verified' },
      ],
      codeSnippet: `@app.route('/api/orders/checkout', methods=['POST'])
@jwt_required()
def process_atomic_checkout():
    user_id = get_jwt_identity()
    cart_items = request.json.get('items', [])
    
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute("START TRANSACTION;")
        
        total_amount = 0
        for item in cart_items:
            # Check current inventory with row-level lock
            cursor.execute(
                "SELECT stock_quantity, price FROM product_variants WHERE id = %s FOR UPDATE;",
                (item['variant_id'],)
            )
            variant = cursor.fetchone()
            if not variant or variant['stock_quantity'] < item['quantity']:
                raise InsufficientStockError(f"Variant {item['variant_id']} out of stock.")
                
            # Decrement stock atomically
            cursor.execute(
                "UPDATE product_variants SET stock_quantity = stock_quantity - %s WHERE id = %s;",
                (item['quantity'], item['variant_id'])
            )
            total_amount += variant['price'] * item['quantity']
            
        cursor.execute("COMMIT;")
        return jsonify({"status": "success", "total": total_amount}), 201
    except Exception as e:
        cursor.execute("ROLLBACK;")
        return jsonify({"error": str(e)}), 400`,
      codeLang: 'python',
      icon: <ShoppingBag className="w-5 h-5 text-[#B52B27]" />,
    },
    {
      id: 'testdesk',
      number: '02',
      name: 'TestDesk — QA & Bug Tracking Platform',
      tagline: 'Defect Lifecycle & Hierarchical Test Suite Management Tool',
      category: 'QA Management',
      techStack: ['React (TypeScript)', 'Python', 'Flask', 'MySQL', 'REST APIs', 'Tailwind CSS'],
      githubUrl: 'https://github.com/prajwalpatil16/TestDesk',
      architectureHighlight: 'TypeScript single-page application paired with Flask REST APIs and project-scoped RBAC.',
      problemStatement:
        'Engineering teams often deal with fragmented QA tracking where test case catalogs, defect severity logs, and team communications exist across disparate disconnected spreadsheets.',
      solutionEngine:
        'Engineered an enterprise-style test case management platform featuring hierarchical suite trees, requirement mappings, bug reproduction steps, interactive Kanban boards, and a built-in team collaboration module.',
      keyInnovations: [
        'Hierarchical test case repository with nested folder trees and execution status.',
        'Defect tracking lifecycle with severity classifications, screenshots, and assignments.',
        'Built with React and TypeScript on the client for strict compile-time type safety.',
        'Project-scoped role-based access control protecting test runs and reports.',
      ],
      metrics: [
        { label: 'Client Type Safety', value: 'TypeScript' },
        { label: 'Workflow Board', value: 'Interactive Kanban' },
        { label: 'Defect Tracking', value: 'Severity Matrix' },
      ],
      codeSnippet: `// TypeScript Test Case Execution Interface
export interface TestCaseExecution {
  testCaseId: string;
  suiteId: string;
  runId: string;
  status: 'PASSED' | 'FAILED' | 'BLOCKED' | 'UNTESTED';
  executedBy: string;
  executionNotes?: string;
  defectReferenceId?: string;
}

export const recordTestRunResult = async (
  runId: string,
  payload: TestCaseExecution
): Promise<ExecutionSummary> => {
  const response = await fetch(\`/api/v1/test-runs/\${runId}/results\`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${getAuthToken()}\`
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error('Failed to record test result');
  return response.json();
};`,
      codeLang: 'typescript',
      icon: <CheckSquare className="w-5 h-5 text-[#B52B27]" />,
    },
    {
      id: 'notely',
      number: '03',
      name: 'Notely — AI Knowledge Workspace',
      tagline: 'Note-Taking Application with Gemini RAG & Knowledge Graph Visualization',
      category: 'AI & Web Application',
      techStack: ['React 19', 'Python', 'Flask', 'Google Gemini API', 'MySQL', 'REST APIs'],
      githubUrl: 'https://github.com/prajwalpatil16/notely',
      architectureHighlight: 'Flask backend integrating Google Gemini API with note-grounded context and force-directed graph UI.',
      problemStatement:
        'Personal knowledge bases often become passive archives where users write notes but struggle to synthesize connections across long-term documentation.',
      solutionEngine:
        'Built an AI-assisted note platform combining structured markdown editing with an interactive 2D/3D force-directed knowledge graph. Grounded an AI assistant on the user’s personal notes using Google Gemini API to deliver factual, hallucination-free answers.',
      keyInnovations: [
        'AI chat grounded directly on user notes using the Google Gemini API.',
        '2D/3D force-directed knowledge graph visualizing conceptual links between notes.',
        'Markdown editor supporting nested folders, tag taxonomies, and version history.',
        'REST API with token authentication and row-level access control.',
      ],
      metrics: [
        { label: 'AI Layer', value: 'Google Gemini' },
        { label: 'Knowledge Graph', value: 'Force-Directed' },
        { label: 'Data Store', value: 'Relational MySQL' },
      ],
      codeSnippet: `@app.route('/api/ai/chat', methods=['POST'])
@jwt_required()
def note_grounded_chat():
    user_id = get_jwt_identity()
    query = request.json.get('query')
    
    # Retrieve relevant notes for current authenticated user
    relevant_notes = search_user_notes(user_id, query, limit=5)
    context_text = "\\n---\\n".join([n['content'] for n in relevant_notes])
    
    system_prompt = (
        "You are Notely AI. Answer the user question based strictly on the provided notes context. "
        "Do not invent facts outside of these notes. Cite relevant note titles."
    )
    
    response = gemini_client.models.generate_content(
        model="gemini-1.5-flash",
        contents=[system_prompt, f"Notes Context:\\n{context_text}\\n\\nUser Query: {query}"]
    )
    return jsonify({"answer": response.text})`,
      codeLang: 'python',
      icon: <Sparkles className="w-5 h-5 text-[#B52B27]" />,
    },
    {
      id: 'swiftbim',
      number: '04',
      name: 'SwiftBIM — Operations & Workflow Management',
      tagline: 'Digitizing Sales-to-Delivery Pipelines into an Integrated Web Portal',
      category: 'Internal Tooling',
      techStack: ['React 19', 'Python', 'Flask', 'MySQL', 'REST APIs', 'Tailwind CSS'],
      architectureHighlight: 'Production workflow application integrating sales inquiry intake, quotation drafting, and project hand-offs.',
      problemStatement:
        'BIM & CAD design consulting operations previously depended on disparate emails, manual spreadsheets, and ad-hoc hand-offs, causing proposal discrepancies and tracking delays.',
      solutionEngine:
        'Engineered an internal web platform at MINE IT that consolidated the entire pipeline from customer inquiry to contract generation and delivery tracking into a unified web dashboard.',
      keyInnovations: [
        'Consolidated enquiry, proposal, contract, and task milestones into a unified system.',
        'Role-scoped interfaces for sales engineers, project leads, and management.',
        'Production development using React.js 19, Flask, and MySQL at MINE IT.',
        'Substantially reduced turnaround time for drafting and approving proposals.',
      ],
      metrics: [
        { label: 'Impact', value: 'End-to-End Tracking' },
        { label: 'Environment', value: 'Production MINE IT' },
        { label: 'Stack', value: 'Flask + React' },
      ],
      codeSnippet: `# Workflow Milestone Progression Service
def progress_workflow_step(proposal_id, current_stage, next_stage, user_role):
    VALID_FLOW = {
        'ENQUIRY': 'PROPOSAL_DRAFT',
        'PROPOSAL_DRAFT': 'REVIEW_PENDING',
        'REVIEW_PENDING': 'CONTRACT_ISSUED',
        'CONTRACT_ISSUED': 'DELIVERY_ACTIVE',
        'DELIVERY_ACTIVE': 'COMPLETED'
    }
    
    if VALID_FLOW.get(current_stage) != next_stage:
        raise ValueError(f"Invalid workflow progression from {current_stage} to {next_stage}")
        
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        "UPDATE proposals SET stage = %s, updated_at = NOW() WHERE id = %s;",
        (next_stage, proposal_id)
    )
    db.commit()
    return {"status": "success", "new_stage": next_stage}`,
      codeLang: 'python',
      icon: <Layers className="w-5 h-5 text-[#B52B27]" />,
    },
    {
      id: 'siddashree',
      number: '05',
      name: 'Siddashree Institute — Live Educational Portal',
      tagline: 'Production Public Site & Institutional Management Web Application',
      category: 'Production Portal',
      techStack: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      liveUrl: 'https://siddashree.org',
      architectureHighlight: 'High-performance React application deployed for a real educational institution.',
      problemStatement:
        'An established educational institution needed a modern, accessible web portal to manage admissions inquiries, academic announcements, and public communication.',
      solutionEngine:
        'Designed and deployed a responsive production website with clear navigation pathways, structured administrative announcements, course catalogs, and inquiry forms.',
      keyInnovations: [
        'Live production deployment serving active students, prospective applicants, and faculty.',
        'Accessible, mobile-responsive layout built with React and Tailwind CSS.',
        'Structured catalog pages and streamlined inquiry capture.',
        'Fast page load times and clean typography.',
      ],
      metrics: [
        { label: 'Status', value: 'Live in Production' },
        { label: 'Domain', value: 'siddashree.org' },
        { label: 'UI Framework', value: 'React + Tailwind' },
      ],
      codeSnippet: `// Institutional Announcement Component
export const AcademicAnnouncements = ({ notices }: { notices: NoticeItem[] }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b pb-3">
        <h3 className="font-semibold text-lg text-slate-900">Important Notices</h3>
        <span className="text-xs text-slate-500 font-mono">Academic Year 2025-26</span>
      </div>
      <div className="divide-y divide-slate-100">
        {notices.map((item) => (
          <div key={item.id} className="py-3 flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-blue-600 font-medium">{item.date}</span>
              <p className="text-sm text-slate-800 font-medium mt-0.5">{item.title}</p>
            </div>
            {item.attachmentUrl && (
              <a href={item.attachmentUrl} className="text-xs text-blue-600 underline shrink-0">
                Download PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};`,
      codeLang: 'typescript',
      icon: <GraduationCap className="w-5 h-5 text-[#B52B27]" />,
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const categories = ['All', 'E-Commerce', 'QA Management', 'AI & Web Application', 'Internal Tooling', 'Production Portal'];

  return (
    <div className="w-full bg-[var(--bg-paper)] text-[var(--text-charcoal)] py-16 sm:py-24 px-4 sm:px-6 md:px-8 select-none">
      <div className="max-w-[1100px] mx-auto space-y-10">
        {/* Header Banner */}
        <div className="space-y-4">
          <div className="border-b-2 border-editorial-heavy pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono-code text-xs text-[#B52B27] uppercase tracking-widest font-bold block mb-1">
                PROJECTS // ARCHITECTURE &amp; CODE
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
                CASE STUDIES
              </h1>
            </div>

            <div className="font-mono-code text-xs font-bold text-[#121316] bg-[#DBD3C5] px-3 py-1.5 rounded-lg border border-[#121316]">
              5 PRODUCTION &amp; FULL-STACK PROJECTS
            </div>
          </div>

          <p className="font-sans-editorial text-sm sm:text-base text-[#4A4A52] max-w-2xl leading-relaxed">
            In-depth breakdowns of real systems, problem-solution engineering decisions, database schemas, and code implementations.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg border font-mono-code text-xs font-bold uppercase transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#121316] text-[#E6DFD3] border-[#121316] shadow-sm'
                    : 'bg-[#ECE5D9] text-[#121316] border-[#121316]/30 hover:border-[#121316]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Deep-Dive Cards */}
        <div className="space-y-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="p-6 sm:p-8 bg-[#ECE5D9] border-2 border-[#121316] rounded-2xl shadow-sm space-y-6 card-hover"
            >
              {/* Top Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#121316]/25 pb-4 gap-3">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-display text-2xl text-[#B52B27] font-bold">
                      {p.number}
                    </span>
                    <span className="font-mono-code text-[11px] font-bold uppercase bg-[#DBD3C5] px-2.5 py-0.5 rounded border border-[#121316]/30">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {p.icon}
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#121316] tracking-tight">
                      {p.name}
                    </h2>
                  </div>
                  <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52] font-semibold mt-0.5">
                    {p.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto font-mono-code text-xs font-bold">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121316] text-white hover:bg-[#B52B27] rounded-lg border border-[#121316] transition-colors"
                    >
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>GITHUB</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#B52B27] text-white hover:bg-[#121316] rounded-lg border border-[#121316] transition-colors"
                    >
                      <span>LIVE SITE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {p.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3.5 bg-white border border-[#121316]/30 rounded-xl font-mono-code space-y-0.5"
                  >
                    <span className="text-[10px] text-[#4A4A52] uppercase font-bold tracking-wider block">
                      {m.label}
                    </span>
                    <span className="text-base font-bold text-[#B52B27] block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-[#121316]/30 rounded-xl space-y-1.5">
                  <span className="font-mono-code text-xs font-bold text-[#B52B27] uppercase tracking-wider block">
                    THE PROBLEM:
                  </span>
                  <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
                    {p.problemStatement}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#121316]/30 rounded-xl space-y-1.5">
                  <span className="font-mono-code text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                    THE SOLUTION &amp; APPROACH:
                  </span>
                  <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
                    {p.solutionEngine}
                  </p>
                </div>
              </div>

              {/* Key Implementation Highlights */}
              <div className="space-y-2.5">
                <span className="font-mono-code text-xs font-bold text-[#121316] uppercase tracking-wider block">
                  IMPLEMENTATION HIGHLIGHTS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {p.keyInnovations.map((inn, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-start gap-2 p-3 bg-white border border-[#121316]/20 rounded-lg text-xs font-sans-editorial text-[#121316]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B52B27] shrink-0 mt-0.5" />
                      <span>{inn}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono-code text-[11px]">
                  <span className="font-bold text-[#121316] flex items-center gap-1.5 uppercase">
                    <Terminal className="w-3.5 h-3.5 text-[#B52B27]" />
                    <span>CODE IMPLEMENTATION ({p.codeLang.toUpperCase()})</span>
                  </span>
                </div>

                <div className="p-4 bg-[#121316] text-[#E6DFD3] rounded-xl border border-[#121316] overflow-x-auto font-mono text-xs leading-relaxed">
                  <pre>{p.codeSnippet}</pre>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-[#121316]/15">
                <span className="font-mono-code text-[11px] font-bold text-[#4A4A52] mr-1.5">
                  TECH:
                </span>
                {p.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-white border border-[#121316] font-mono-code text-[11px] font-bold text-[#121316] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
