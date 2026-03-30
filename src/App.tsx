import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroPinned from '@/components/sections/HeroPinned';
import Works from '@/components/sections/Works';
import WorksListTable from '@/components/sections/WorksListTable';
import PhotoCluster from '@/components/sections/PhotoCluster';
import BigStatement from '@/components/sections/BigStatement';
import StudioInfo from '@/components/sections/StudioInfo';
import WhiteToBlackTransition from '@/components/sections/WhiteToBlackTransition';
import ScrollingTextPinned from '@/components/sections/ScrollingTextPinned';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import CaseStudy from '@/components/pages/CaseStudy';
import { Analytics } from "@vercel/analytics/next"

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const scroll = () => {
      const el = document.getElementById(target);
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    };
    // Wait for SmoothScrollProvider / fonts gate then scroll
    document.fonts.ready.then(() => requestAnimationFrame(scroll));
  }, []);

  return (
    <>
      <SmoothScrollProvider>
        <Navbar />
        <main>
          <HeroPinned />
          <Works />
          <WorksListTable />
          <PhotoCluster />
          <BigStatement />
          <StudioInfo />
          <WhiteToBlackTransition />
          <ScrollingTextPinned />
          <Contact />
        </main>
        <Footer />
      </SmoothScrollProvider>
      <Analytics />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}
