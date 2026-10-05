import React, { useState } from 'react';
import {
  FileText,
  Search,
  Layers,
  ChevronDown,
  ChevronRight,
  Code2,
  Sparkles,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';

export interface NotionSidebarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeItem?: string;
  onSelectPage?: (pageId: string) => void;
}

export const NotionSidebar: React.FC<NotionSidebarProps> = ({
  darkMode,
  onToggleDarkMode,
  activeItem = 'design-system',
  onSelectPage,
}) => {
  const [collapsedFolders, setCollapsedFolders] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleFolder = (folderKey: string) => {
    setCollapsedFolders((prev) => ({ ...prev, [folderKey]: !prev[folderKey] }));
  };

  const pages = [
    {
      id: 'design-system',
      title: '🎨 Design System Spec',
      badge: 'SPECS',
      badgeBg: 'yellow' as const,
    },
    {
      id: 'hero-origin',
      title: '🦸‍♂️ Origin Story (About)',
      badge: 'ISSUE #01',
      badgeBg: 'blue' as const,
    },
    {
      id: 'superpowers',
      title: '⚡ Superpowers (Skills)',
      badge: 'TECH',
      badgeBg: 'mint' as const,
    },
    {
      id: 'missions',
      title: '🚀 Missions (Projects)',
      badge: 'CASE STUDIES',
      badgeBg: 'red' as const,
    },
    {
      id: 'comic-issues',
      title: '📚 Comic Issues (Blog)',
      badge: 'ARTICLES',
      badgeBg: 'purple' as const,
    },
    {
      id: 'transmission',
      title: '📡 Transmission (Contact)',
      badge: 'OPEN FOR HIRE',
      badgeBg: 'mint' as const,
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[var(--bg-sidebar)] border-r-2 border-[var(--sidebar-border)] text-[var(--ink-black)] select-none">
      {/* Workspace Header */}
      <div className="p-4 border-b-2 border-comic flex items-center justify-between bg-[var(--bg-paper-subtle)]">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[var(--pop-yellow)] border-comic-thin shadow-comic-sm flex items-center justify-center font-bangers text-lg text-black">
            P
          </div>
          <div className="truncate">
            <div className="font-bangers text-lg tracking-wide text-[var(--ink-black)] truncate">
              Prajwal's Workspace
            </div>
            <div className="font-mono text-[10px] text-[var(--notion-gray)] uppercase tracking-wider">
              Bengaluru • Issue #01
            </div>
          </div>
        </div>

        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden p-1 rounded border-comic-thin bg-white dark:bg-slate-800 text-black dark:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Search Bar */}
      <div className="p-3 border-b border-dashed border-[var(--notion-gray)]/40">
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border-comic-thin bg-white dark:bg-slate-800 text-xs text-[var(--notion-gray)] shadow-comic-sm cursor-pointer hover:border-black dark:hover:border-white">
          <Search className="w-3.5 h-3.5" />
          <span className="flex-1 font-mono">Jump to page... (⌘K)</span>
          <kbd className="px-1 rounded bg-[var(--bg-paper-subtle)] font-mono text-[10px] border border-gray-300 dark:border-slate-600">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Page Tree Navigation */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {/* Workspace Root Folder */}
        <div>
          <div
            onClick={() => toggleFolder('main')}
            className="flex items-center justify-between text-xs font-mono text-[var(--notion-gray)] font-semibold uppercase tracking-wider px-1 py-1 hover:text-black dark:hover:text-white cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              {collapsedFolders['main'] ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              <span>WORKSPACE PAGES</span>
            </span>
            <span className="text-[10px] bg-[var(--pop-yellow)] text-black px-1.5 rounded font-mono border border-black font-bold">
              6
            </span>
          </div>

          {!collapsedFolders['main'] && (
            <div className="mt-1 space-y-1 pl-1">
              {pages.map((p) => {
                const isActive = activeItem === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectPage?.(p.id);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center justify-between p-2 rounded-lg text-sm font-sans cursor-pointer transition-all border-2 ${
                      isActive
                        ? 'border-black bg-[var(--pop-yellow)] font-bold text-black shadow-comic-sm'
                        : 'border-transparent hover:bg-[var(--bg-paper-subtle)] text-[var(--ink-black)]'
                    }`}
                  >
                    <span className="truncate flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-700 dark:text-slate-300 flex-shrink-0" />
                      <span className="truncate">{p.title}</span>
                    </span>
                    {p.badge && (
                      <span className="font-mono text-[10px] px-1.5 py-0.2 rounded border border-black bg-white text-black font-bold flex-shrink-0">
                        {p.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Database Views Section */}
        <div>
          <div
            onClick={() => toggleFolder('db')}
            className="flex items-center justify-between text-xs font-mono text-[var(--notion-gray)] font-semibold uppercase tracking-wider px-1 py-1 hover:text-black dark:hover:text-white cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              {collapsedFolders['db'] ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              <span>NOTION DATABASES</span>
            </span>
          </div>

          {!collapsedFolders['db'] && (
            <div className="mt-1 space-y-1 pl-1 font-mono text-xs">
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[var(--bg-paper-subtle)] cursor-pointer">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>📂 Projects DB</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[var(--bg-paper-subtle)] cursor-pointer">
                <Code2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>⚡ Tech Stack DB</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[var(--bg-paper-subtle)] cursor-pointer">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>⭐ Experience Log</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Footer / Night Issue Toggle */}
      <div className="p-3 border-t-2 border-comic bg-[var(--bg-paper-subtle)] space-y-2">
        <button
          onClick={onToggleDarkMode}
          className="w-full flex items-center justify-between p-2 rounded-lg border-comic-thin bg-white dark:bg-slate-800 text-black dark:text-white font-mono text-xs font-bold shadow-comic-sm hover:scale-[1.02] cursor-pointer transition-transform"
        >
          <span className="flex items-center gap-2">
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            <span>{darkMode ? 'DAY ISSUE (LIGHT)' : 'NIGHT ISSUE (DARK)'}</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-[var(--pop-yellow)] text-black text-[10px]">
            TOGGLE
          </span>
        </button>

        <div className="flex items-center justify-between text-[11px] font-mono text-[var(--notion-gray)] px-1">
          <span>Prajwal Patil © 2026</span>
          <span className="text-[10px] text-emerald-500 font-bold">● ONLINE</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button (Visible when sidebar is closed on small screens) */}
      <div className="md:hidden fixed top-3 left-3 z-40">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 border-comic rounded-xl bg-[var(--pop-yellow)] text-black shadow-comic flex items-center justify-center cursor-pointer"
        >
          <Menu className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Desktop Sidebar (Fixed Left) */}
      <aside className="hidden md:block w-64 lg:w-72 h-screen sticky top-0 flex-shrink-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative w-4/5 max-w-xs h-full z-10">{sidebarContent}</div>
        </div>
      )}
    </>
  );
};
