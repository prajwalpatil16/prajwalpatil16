import React from 'react';
import {
  EditorialHero,
  EditorialGridItem,
  EditorialExperience,
  EditorialDatabase,
  EditorialEducation,
  EditorialFooter,
} from '../components';
import { Code2, Cpu, Wrench, Globe } from 'lucide-react';

export interface EditorialDesignSystemPageProps {
  onNavigateToProjects?: () => void;
  onNavigateToContact?: () => void;
}

export const EditorialDesignSystemPage: React.FC<EditorialDesignSystemPageProps> = ({
  onNavigateToProjects,
  onNavigateToContact,
}) => {
  return (
    <div className="select-none bg-[var(--bg-paper)] text-[var(--text-charcoal)]">
      {/* Hero Section */}
      <EditorialHero
        onExploreMissions={() => {
          document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onGoToContact={onNavigateToContact}
      />

      {/* 01 / ABOUT & PHILOSOPHY */}
      <section id="origin" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-b-2 border-editorial-heavy">
        <div className="max-w-[1100px] mx-auto space-y-8">
          <div className="flex items-end justify-between border-b-2 border-editorial-heavy pb-5 flex-wrap gap-4">
            <div>
              <span className="font-mono-code text-xs text-[#B52B27] uppercase tracking-widest font-bold block mb-1">
                01 / ABOUT &amp; PHILOSOPHY
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
                ABOUT ME
              </h2>
            </div>
            <span className="font-mono-code text-xs text-[#121316] font-bold bg-[#DBD3C5] px-3 py-1.5 rounded-lg border border-[#121316]">
              BENGALURU, KARNATAKA
            </span>
          </div>

          {/* Narrative Statement */}
          <div className="p-6 sm:p-7 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl space-y-3 shadow-sm card-hover">
            <p className="font-serif-editorial text-lg sm:text-xl text-[#121316] font-bold italic leading-relaxed">
              "I write code for a living, break things occasionally, and enjoy figuring out how to make them work better. Still building. Still learning. Probably still debugging."
            </p>
            <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
              I enjoy turning ideas, messy requirements, and real-world problems into products people can actually use. I like getting involved beyond just writing code — understanding the problem, figuring out the approach, building it, fixing what breaks, and making it better. Build seriously, debug patiently, learn constantly, and have a little fun along the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EditorialGridItem
              number="01"
              title="END-TO-END DEVELOPMENT"
              subtitle="FULL STACK WEB APPS"
              description="Building reliable web applications and internal tools with clean component hierarchies, robust backend APIs, and responsive layouts."
              tags={['Java', 'Spring Boot', 'Python', 'Flask', 'React.js 19', 'MySQL']}
            />

            <EditorialGridItem
              number="02"
              title="RELATIONAL DATA &amp; APIS"
              subtitle="DATABASE &amp; LOGIC"
              description="Structuring normalized database schemas, atomic SQL transactions, RESTful APIs, and secure token-based authentication."
              tags={['REST APIs', 'JWT', 'RBAC', 'MySQL', 'SQL']}
            />

            <EditorialGridItem
              number="03"
              title="PRACTICAL SYSTEMS"
              subtitle="BUSINESS WORKFLOWS &amp; CMS"
              description="Delivering real-world applications including SwiftBIM's sales-to-delivery workflow, CMS tools, and full-stack platforms."
              tags={['SwiftBIM', 'Lumière', 'TestDesk', 'Notely', 'Siddashree']}
            />
          </div>
        </div>
      </section>

      {/* 02 / WORK EXPERIENCE TIMELINE */}
      <EditorialExperience />

      {/* 03 / FEATURED PROJECTS DATABASE */}
      <EditorialDatabase onExploreDeepDive={onNavigateToProjects} />

      {/* 04 / TECHNICAL SKILLS */}
      <section id="superpowers" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-b-2 border-editorial-heavy">
        <div className="max-w-[1100px] mx-auto space-y-8">
          <div className="border-b-2 border-editorial-heavy pb-5 flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="font-mono-code text-xs text-[#B52B27] uppercase tracking-widest font-bold block mb-1">
                04 / TECHNICAL SKILLS
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
                SKILLS &amp; TECHNOLOGIES
              </h2>
            </div>
            <div className="font-mono-code text-xs font-bold text-[#121316] bg-[#DBD3C5] px-3 py-1.5 rounded-lg border border-[#121316]">
              CORE COMPETENCIES
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'LANGUAGES & CORE',
                icon: <Cpu className="w-5 h-5 text-[#B52B27]" />,
                skills: ['Java', 'Python', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'],
              },
              {
                category: 'FRAMEWORKS & WEB',
                icon: <Code2 className="w-5 h-5 text-[#B52B27]" />,
                skills: ['React.js 19', 'Spring Boot', 'Flask', 'Tailwind CSS'],
              },
              {
                category: 'DATABASES & TOOLS',
                icon: <Wrench className="w-5 h-5 text-[#B52B27]" />,
                skills: ['MySQL', 'Git', 'Postman', 'VS Code', 'Eclipse'],
              },
              {
                category: 'APIS & PLATFORMS',
                icon: <Globe className="w-5 h-5 text-[#B52B27]" />,
                skills: ['REST APIs', 'JWT', 'RBAC', 'Razorpay', 'Google Gemini API', 'Netlify / Render / Vercel'],
              },
            ].map((block, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl space-y-4 shadow-sm card-hover flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#121316]/25 pb-2.5">
                    <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#121316]">
                      {block.category}
                    </span>
                    {block.icon}
                  </div>

                  <ul className="space-y-2 font-mono-code text-xs text-[#121316]">
                    {block.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B52B27]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#DBD3C5] border border-[#121316]/30 rounded-lg font-mono-code text-xs text-[#4A4A52] flex items-center justify-between">
            <span>Note: TypeScript is utilized specifically for type safety on TestDesk.</span>
            <span className="text-[#121316] font-bold">VERIFIED REPERTOIRE</span>
          </div>
        </div>
      </section>

      {/* 05 / EDUCATION & CREDENTIALS */}
      <EditorialEducation />

      {/* 06 / FOOTER & CONTACT */}
      <EditorialFooter onGoToContact={onNavigateToContact} />
    </div>
  );
};
