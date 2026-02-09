import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Technology } from './components/Technology';
import { Layers } from './components/Layers';
import { Science } from './components/Science';
import { Writing } from './components/Writing';
import { Explore } from './components/Explore';
import { AllProjects } from './components/AllProjects';
import { AllWritings } from './components/AllWritings';
import { Footer } from './components/Footer';
import ReactLenis from '@studio-freight/react-lenis';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'projects' | 'writings'>('landing');

  const handleNavigateHome = () => {
    setView('landing');
  };

  return (
    <ReactLenis root>
      <div className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black">
        <Navbar onNavClick={handleNavigateHome} />
        
        <main className="relative z-10">
          {view === 'landing' && (
            <>
              <Hero />
              <Technology />
              <Layers onSeeAll={() => setView('projects')} />
              <Science />
              <Writing onSeeAll={() => setView('writings')} />
              <Explore />
            </>
          )}
          
          {view === 'projects' && (
            <AllProjects onBack={handleNavigateHome} />
          )}

          {view === 'writings' && (
             <AllWritings onBack={handleNavigateHome} />
          )}
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;