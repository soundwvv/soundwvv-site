import React, { useState } from 'react';
import Navbar from './Navbar';
import LoadingScreen from './LoadingScreen';
import HeroSectionNew from './HeroSectionNew';
import BridgeSection from './BridgeSection';
import AboutSection from './AboutSection';
import ServicesSectionNew from './ServicesSectionNew';
import OnDemandSoundSection from './OnDemandSoundSection';
import CredibilitySection from './CredibilitySection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { Toaster } from './ui/sonner';

const Home = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <div className="bg-black min-h-screen">
      {showLoading && <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />}
      
      {!showLoading && (
        <>
          <Navbar />
          <HeroSectionNew />
          <BridgeSection />
          <AboutSection />
          <ServicesSectionNew />
          <OnDemandSoundSection />
          <CredibilitySection />
          <ContactSection />
          <Footer />
          <Toaster />
        </>
      )}
    </div>
  );
};

export default Home;
