import { useState, useEffect } from 'react';
import { EditorialNavbar } from './components';
import { EditorialDesignSystemPage } from './pages/EditorialDesignSystemPage';
import { ProjectsDeepDivePage } from './pages/ProjectsDeepDivePage';
import { ContactPage } from './pages/ContactPage';
import { useTabAttention } from './hooks/useTabAttention';
import { ArrowUp } from 'lucide-react';

export function App() {
  // Sets clean browser tab titles
  useTabAttention();

  const [currentPage, setCurrentPage] = useState<'overview' | 'projects' | 'contact'>('overview');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (destination: string) => {
    if (destination === 'overview' || destination === 'hero') {
      setCurrentPage('overview');
      setActiveSection('hero');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (destination === 'projects-page' || destination === 'projects') {
      setCurrentPage('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (destination === 'contact-page' || destination === 'contact' || destination === 'transmission') {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // In-page section anchor on overview
      if (currentPage !== 'overview') {
        setCurrentPage('overview');
        setTimeout(() => {
          const el = document.getElementById(destination);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(destination);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setActiveSection(destination);
    }
  };

  return (
    <div className="min-h-screen bg-[#E6DFD3] text-[#121316] flex flex-col antialiased selection:bg-[#B52B27] selection:text-white">
      {/* Editorial Top Navbar */}
      <EditorialNavbar
        currentPage={currentPage}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content View */}
      <main className="flex-1 w-full">
        {currentPage === 'overview' && (
          <EditorialDesignSystemPage
            onNavigateToProjects={() => handleNavigate('projects-page')}
            onNavigateToContact={() => handleNavigate('contact-page')}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsDeepDivePage />
        )}

        {currentPage === 'contact' && (
          <ContactPage onBackToOverview={() => handleNavigate('overview')} />
        )}
      </main>

      {/* Single Floating Back to Top Button (Visible only after scroll > 400px) */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#121316] text-white border-2 border-[#121316] hover:bg-[#B52B27] transition-all shadow-lg cursor-pointer btn-press"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;
