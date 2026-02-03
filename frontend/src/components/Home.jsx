import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import CredibilitySection from './CredibilitySection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { Toaster } from './ui/sonner';

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CredibilitySection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;
