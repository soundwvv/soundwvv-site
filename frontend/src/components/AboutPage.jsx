import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Pure editorial single column */}
      <article className="pt-32 pb-32 lg:pt-40 lg:pb-40 bg-black">
        <div className="max-w-[720px] mx-auto px-6">
          
          {/* H1 */}
          <h1 className="text-white text-[48px] lg:text-[56px] font-medium mb-20 lg:mb-24 tracking-tight leading-[1.1]">
            About SOUNDWVV
          </h1>
          
          {/* Intro Statement - Brighter white */}
          <div className="mb-20 lg:mb-24">
            <p className="text-white/90 text-[20px] lg:text-[22px] font-light leading-[1.55] mb-6">
              SOUNDWVV is a DJ-led studio shaping how brands and spaces are experienced through music.
            </p>
            <p className="text-white/90 text-[20px] lg:text-[22px] font-light leading-[1.55]">
              We develop structured music direction and programming for hospitality venues, retail environments, global brands, and live events — building sound systems that are intentional, adaptable, and built to last.
            </p>
          </div>

          {/* Section 2 - Manifesto Headline */}
          <h2 className="text-white text-[32px] lg:text-[36px] font-medium mb-8 tracking-tight leading-[1.2]">
            More than just playlists.<br />More than just DJ bookings.
          </h2>
          
          <div className="space-y-7 mb-32 lg:mb-36">
            <p className="text-white/70 text-[17px] lg:text-[18px] font-light leading-[1.7]">
              SOUNDWVV focuses on how music functions inside a space — how it supports the brand, shapes the atmosphere, and aligns with how the environment is meant to be experienced.
            </p>
            <p className="text-white/70 text-[17px] lg:text-[18px] font-light leading-[1.7]">
              We design music programs for daily use and long-term consistency, not one-off moments.
            </p>
          </div>

          {/* Section 3 - Experience */}
          <h2 className="text-white text-[28px] lg:text-[32px] font-medium mb-6 tracking-tight leading-[1.25]">
            Grounded in real-world experience.
          </h2>
          
          <div className="space-y-7 mb-32 lg:mb-36">
            <p className="text-white/70 text-[17px] lg:text-[18px] font-light leading-[1.7]">
              SOUNDWVV draws from years of hands-on music curation and international DJ experience.
            </p>
            <p className="text-white/70 text-[17px] lg:text-[18px] font-light leading-[1.7]">
              From intimate spaces to international stages, the focus has remained the same — music designed to serve the space, the brand, and the people inside it.
            </p>
          </div>

          {/* Final CTA - Center aligned with divider above */}
          <div className="pt-24 lg:pt-28 border-t border-white/10 text-center">
            <h2 className="text-white text-[36px] lg:text-[40px] font-medium mb-10 tracking-tight leading-[1.2]">
              Let's design how your brand sounds.
            </h2>
            
            <button 
              onClick={() => navigate('/')}
              className="group bg-white text-black px-9 py-3.5 rounded-full font-medium text-[13px] uppercase tracking-wider hover:bg-white/90 transition-all inline-flex items-center gap-3"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AboutPage;