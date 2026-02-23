
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ImpactSection from './components/ImpactSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnchorModal from './components/AnchorModal';
import FounderPage from './components/FounderPage';
import LogoShowcase from './components/LogoShowcase';
import MediaShowcase from './components/MediaShowcase';

const App: React.FC = () => {
  const [isAnchorModalOpen, setIsAnchorModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'founder'>('home');
  const [activeFounderTab, setActiveFounderTab] = useState<'founder' | 'team' | 'events'>('founder');

  const openAnchorModal = () => setIsAnchorModalOpen(true);
  const closeAnchorModal = () => setIsAnchorModalOpen(false);

  const handleNavigate = (view: 'home' | 'founder', targetId?: string) => {
    setCurrentView(view);
    
    if (view === 'founder') {
        if (targetId === 'team') setActiveFounderTab('team');
        else if (targetId === 'events') setActiveFounderTab('events');
        else if (targetId === 'founder') setActiveFounderTab('founder');
    }
    
    // Scroll handling for both views
    if (targetId) {
       // Use setTimeout to allow the view to render before scrolling
       setTimeout(() => {
         const element = document.getElementById(targetId);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
         } else {
            // Fallback if element not found immediately
            window.scrollTo(0, 0);
         }
       }, 100);
    } else {
       // Scroll to top when changing views without a specific target
       window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-[#F8F7F4] text-[#1A1A1A]">
      <Header onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'home' ? (
            <>
                <HeroSection />
                <LogoShowcase />
                <AboutSection />
                <ServicesSection onOpenAnchor={openAnchorModal} />
                <ProjectsSection onOpenAnchor={openAnchorModal} />
                <ImpactSection />
                {/* TeamSection removed from here and moved to FounderPage */}
                <MediaShowcase />
                <ContactSection />
            </>
        ) : (
            <FounderPage 
                onOpenAnchor={openAnchorModal} 
                onNavigate={handleNavigate} 
                initialTab={activeFounderTab} 
            />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
      <AnchorModal 
        isOpen={isAnchorModalOpen} 
        onClose={closeAnchorModal} 
        onContact={() => {
            closeAnchorModal();
            handleNavigate('home', 'contact');
        }}
      />
    </div>
  );
};

export default App;
