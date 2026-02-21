import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen" data-testid="about-page">
      <Navbar />
      
      {/* Pure editorial single column manifesto */}
      <article className="bg-black" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '660px' }}>
          
          {/* Hero Headline - 36px, fits cleanly on 2 lines */}
          <h1 
            className="text-white font-medium"
            style={{ 
              fontSize: '36px', 
              lineHeight: '1.18',
              letterSpacing: '-0.015em',
              marginBottom: '28px'
            }}
          >
            We design how brands and spaces are experienced through sound.
          </h1>
          
          {/* Hero Paragraph - 16px body text, consistent throughout */}
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400',
              marginBottom: '72px'
            }}
          >
            SOUNDWVV develops structured music direction and long-term programming for hospitality venues, retail environments, global brands, and live events — building sound systems that are intentional, adaptable, and built to last.
          </p>

          {/* Section Headline - 26px, ~35% smaller than hero, stacked */}
          <p 
            className="text-white font-medium"
            style={{ 
              fontSize: '26px', 
              lineHeight: '1.2',
              marginBottom: '5px'
            }}
          >
            More than playlists.
          </p>
          <p 
            className="text-white font-medium"
            style={{ 
              fontSize: '26px', 
              lineHeight: '1.2',
              marginBottom: '28px'
            }}
          >
            More than DJ bookings.
          </p>

          {/* Short statements - same 16px body size */}
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400',
              marginBottom: '16px'
            }}
          >
            Music shapes perception.
          </p>
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400',
              marginBottom: '16px'
            }}
          >
            It sets pace.
          </p>
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400',
              marginBottom: '28px'
            }}
          >
            It defines atmosphere.
          </p>
          
          {/* Body paragraphs - 16px consistent */}
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400',
              marginBottom: '28px'
            }}
          >
            SOUNDWVV focuses on how sound functions inside a space — how it supports the brand, guides energy, and aligns with how an environment is intended to feel.
          </p>
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400',
              marginBottom: '72px'
            }}
          >
            We curate music programs for daily use and long-term consistency, with the flexibility to support singular moments when the occasion calls for it.
          </p>

          {/* Section Headline - 22px, proper hierarchy, more spacing above */}
          <h2 
            className="text-white font-medium"
            style={{ 
              fontSize: '22px', 
              lineHeight: '1.3',
              marginTop: '16px',
              marginBottom: '24px'
            }}
          >
            Grounded in real-world experience.
          </h2>
          
          {/* Body text - 16px consistent */}
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400',
              marginBottom: '28px'
            }}
          >
            Years of DJ performance and music curation across global spaces and brands shape the studio's perspective.
          </p>
          
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400'
            }}
          >
            From intimate venues to international stages, the focus has remained the same — music designed to serve the space, the brand, and the people inside it.
          </p>

          {/* Subtle 1px divider */}
          <div 
            style={{ 
              height: '1px', 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              marginTop: '72px',
              marginBottom: '72px'
            }}
          />

          {/* CTA Section - Centered, restrained */}
          <div className="text-center">
            {/* CTA Headline - 24px, restrained */}
            <p 
              className="text-white font-medium"
              style={{ 
                fontSize: '24px', 
                lineHeight: '1.3',
                marginBottom: '28px'
              }}
            >
              Let's design how your brand sounds.
            </p>
            
            <Link 
              to="/services"
              onClick={() => window.scrollTo(0, 0)}
              data-testid="explore-services-btn"
              className="group bg-white text-black px-5 py-2 rounded-full font-medium text-[12px] uppercase tracking-wider hover:bg-white/90 transition-all inline-flex items-center gap-2"
            >
              Explore Services
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AboutPage;
