
import React, { useState } from 'react';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionD from './components/SectionD';
import SectionH from './components/SectionH';
import BonusSection from './components/BonusSection';
import { Section } from './types';
import { BookOpen, Trophy } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('A');

  const renderSection = () => {
    switch (activeSection) {
      case 'A': return <SectionA />;
      case 'B': return <SectionB />;
      case 'D': return <SectionD />;
      case 'H': return <SectionH />;
      case 'Bonus': return <BonusSection />;
      default: return <SectionA />;
    }
  };

  const navItems: Section[] = ['A', 'B', 'D', 'H', 'Bonus'];

  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans pb-32 relative overflow-hidden">
      {/* Decorative Background Emojis */}
      <div className="fixed top-10 left-10 text-6xl opacity-20 pointer-events-none animate-bounce delay-700">🍔</div>
      <div className="fixed top-20 right-10 text-5xl opacity-20 pointer-events-none animate-pulse">🍟</div>
      <div className="fixed bottom-32 left-5 text-6xl opacity-20 pointer-events-none animate-spin-slow">🍩</div>
      <div className="fixed bottom-40 right-10 text-5xl opacity-20 pointer-events-none animate-bounce">🍦</div>
      <div className="fixed top-1/2 left-5 text-4xl opacity-10 pointer-events-none -rotate-12">🍇</div>
      <div className="fixed top-1/3 right-12 text-6xl opacity-10 pointer-events-none rotate-12">🍉</div>

      {/* Header */}
      <header className="max-w-4xl mx-auto mb-10 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-retro text-white drop-shadow-[4px_4px_0_rgba(74,64,58,1)] tracking-wider">
          FOOD FUN QUIZ 🍎
        </h1>
        <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full border-2 border-retro-dark mt-5 shadow-retro-sm">
          <BookOpen size={24} className="text-retro-accent"/>
          <span className="font-bold text-retro-dark text-xl">Grade 3 English</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto relative z-10">
        {renderSection()}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border-4 border-retro-dark rounded-3xl shadow-retro p-3 flex gap-3 z-50 max-w-[95vw] overflow-x-auto">
        {navItems.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`
              flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-2xl border-2 border-retro-dark flex items-center justify-center font-retro text-2xl sm:text-3xl transition-all
              ${activeSection === section 
                ? 'bg-retro-accent text-white -translate-y-3 shadow-retro-sm rotate-3' 
                : 'bg-retro-bg text-retro-dark hover:bg-gray-100 hover:-rotate-2'}
            `}
          >
            {section === 'Bonus' ? <Trophy size={28} /> : section === 'H' ? '🛠️' : section}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
