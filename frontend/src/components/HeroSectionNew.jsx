import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSectionNew = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vinyl Record Video Background - Placeholder until you provide the file */}
      <div className="absolute inset-0 bg-black">
        {/* Placeholder for vinyl record video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          {/* Replace with your vinyl record video URL when provided */}
          <source src="YOUR_VINYL_VIDEO_URL_HERE" type="video/mp4" />
        </video>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-8 text-center">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-tight">
          We design how your
          <br />
          brand sounds
        </h1>

        <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-light mb-12 tracking-wide">
          DJ led curation studio
        </p>

        <button 
          onClick={scrollToContact}
          className="group bg-white text-black px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-all flex items-center gap-3"
        >
          Start a Sound Consultation
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;
