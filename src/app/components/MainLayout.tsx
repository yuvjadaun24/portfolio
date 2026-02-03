import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar, { Section } from '@/app/components/Sidebar';
import MobileSidebar from '@/app/components/MobileSidebar';
import Footer from '@/app/components/Footer';
import KeyboardHint from '@/app/components/KeyboardHint';
import LiquidBackground from '@/app/components/LiquidBackground';
import Projects from '@/app/components/sections/Projects';
import CaseStudies from '@/app/components/sections/CaseStudies';
import About from '@/app/components/sections/About';
import Skills from '@/app/components/sections/Skills';
import Contact from '@/app/components/sections/Contact';
import { useSound } from '@/app/hooks/useSound';

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState<Section>('projects');
  const { playBlip, playSelect } = useSound();

  const sections: Section[] = ['projects', 'caseStudies', 'about', 'skills', 'contact'];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const currentIndex = sections.indexOf(activeSection);

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        playBlip();
        const newIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
        setActiveSection(sections[newIndex]);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        playBlip();
        const newIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
        setActiveSection(sections[newIndex]);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        playSelect();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeSection, playBlip, playSelect, sections]);

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'caseStudies':
        return <CaseStudies />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="size-full relative overflow-hidden bg-[#0033cc] flex items-center justify-center">
      {/* Animated Liquid Background */}
      <LiquidBackground />

      {/* Main Container */}
      <motion.div
        className="relative z-10 w-full md:w-[95%] h-full md:h-[90%] max-w-7xl flex flex-col shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden md:rounded-t-lg border-4 border-black/30">
          {/* Mobile Sidebar (Top) */}
          <div className="md:hidden">
            <MobileSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          </div>

          {/* Desktop Sidebar (Left) */}
          <div className="hidden md:block">
            <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#b0b0b0] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                className="size-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        <div className="hidden md:block">
          <Footer />
        </div>
      </motion.div>

      {/* Keyboard Navigation Hint */}
      <KeyboardHint />
    </div>
  );
}
