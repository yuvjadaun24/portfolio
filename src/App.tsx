import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function HomePage() {
  return (
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}
