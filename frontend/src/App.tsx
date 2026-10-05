import { useState } from 'react';
import { EditorialNavbar } from './components/EditorialNavbar';
import { EditorialDesignSystemPage } from './pages/EditorialDesignSystemPage';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#E6DFD3] text-[#121316] flex flex-col antialiased">
      {/* Editorial Navigation Header */}
      <EditorialNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Editorial Canvas */}
      <main className="flex-1 w-full">
        <EditorialDesignSystemPage />
      </main>
    </div>
  );
}

export default App;
