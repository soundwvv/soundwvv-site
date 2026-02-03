import React from 'react';
import { Volume2, Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="relative w-full h-full flex flex-col items-center justify-center px-6 lg:px-8">
        {/* Animated Background Element */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mid-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mid-pink rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Volume2 size={32} className="text-mid-purple animate-pulse" />
            <span className="service-button" style={{ background: '#d987ff' }}>DJ-LED MUSIC STUDIO</span>
          </div>

          <h1 className="brand-display text-white mb-8">
            SOUNDWVV
          </h1>

          <p className="body-large text-mid-grey max-w-3xl mx-auto mb-12">
            We transform brands, spaces, and events through the power of curated sound. 
            Elevate your brand identity with sonic experiences that resonate and engage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToContact} className="cta-button large group">
              Book Consultation
              <Play size={16} className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="cta-button large bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
