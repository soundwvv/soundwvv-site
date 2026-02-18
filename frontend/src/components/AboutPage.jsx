import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen" data-testid="about-page">
      <Navbar />
      
      {/* Pure editorial single column manifesto */}
      <article className="bg-black" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '720px' }}>
          
          {/* Hero Headline - 44-48px, medium weight, 1.15 line height, reduced tracking */}
          <h1 
            className="text-white font-medium"
            style={{ 
              fontSize: '46px', 
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              marginBottom: '32px'
            }}
          >
            We design how brands and spaces are experienced through sound.
          </h1>
          
          {/* Intro Paragraph - Body text 16px, 1.6 line height, muted white */}
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400',
              marginBottom: '80px'
            }}
          >
            SOUNDWVV develops structured music direction and long-term programming for hospitality venues, retail environments, global brands, and live events — building sound systems that are intentional, adaptable, and built to last.
          </p>

          {/* Section Headline - 32px, medium weight, tight stacking */}
          <p 
            className="text-white font-medium"
            style={{ 
              fontSize: '32px', 
              lineHeight: '1.2',
              marginBottom: '4px'
            }}
          >
            More than playlists.
          </p>
          <p 
            className="text-white font-medium"
            style={{ 
              fontSize: '32px', 
              lineHeight: '1.2',
              marginBottom: '32px'
            }}
          >
            More than DJ bookings.
          </p>

          {/* Short statements - 18px, increased line spacing between each */}
          <p 
            style={{ 
              fontSize: '18px', 
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400',
              marginBottom: '20px'
            }}
          >
            Music shapes perception.
          </p>
          <p 
            style={{ 
              fontSize: '18px', 
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400',
              marginBottom: '20px'
            }}
          >
            It sets pace.
          </p>
          <p 
            style={{ 
              fontSize: '18px', 
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400',
              marginBottom: '32px'
            }}
          >
            It defines atmosphere.
          </p>
          
          {/* Body paragraphs - 16px consistent */}
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400',
              marginBottom: '24px'
            }}
          >
            SOUNDWVV focuses on how sound functions inside a space — how it supports the brand, guides energy, and aligns with how an environment is intended to feel.
          </p>
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400',
              marginBottom: '48px'
            }}
          >
            We curate music programs for daily use and long-term consistency, with the flexibility to support singular moments when the occasion calls for it.
          </p>

          {/* Subsection Headline - 24px, medium weight, connected spacing */}
          <h2 
            className="text-white font-medium"
            style={{ 
              fontSize: '24px', 
              lineHeight: '1.3',
              marginBottom: '24px'
            }}
          >
            Grounded in real-world experience.
          </h2>
          
          {/* Body text - 16px consistent */}
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400',
              marginBottom: '24px'
            }}
          >
            Years of DJ performance and music curation across global spaces and brands shape the studio's perspective.
          </p>
          
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400'
            }}
          >
            From intimate venues to international stages, the focus has remained the same — music designed to serve the space, the brand, and the people inside it.
          </p>

          {/* Subtle 1px divider above CTA */}
          <div 
            style={{ 
              height: '1px', 
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              marginTop: '80px',
              marginBottom: '60px'
            }}
          />

          {/* CTA Section - Centered */}
          <div className="text-center">
            {/* CTA Headline - 28px, medium weight, prevent line break */}
            <p 
              className="text-white font-medium"
              style={{ 
                fontSize: '28px', 
                lineHeight: '1.3',
                marginBottom: '32px',
                maxWidth: '100%'
              }}
            >
              Let's design how your brand sounds.
            </p>
            
            <button 
              onClick={() => navigate('/')}
              data-testid="explore-services-btn"
              className="group bg-white text-black px-6 py-2.5 rounded-full font-medium text-[13px] uppercase tracking-wider hover:bg-white/90 transition-all inline-flex items-center gap-2"
            >
              Explore Services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AboutPage;
