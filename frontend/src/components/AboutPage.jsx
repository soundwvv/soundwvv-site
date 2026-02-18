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
      <article className="bg-black" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '720px' }}>
          
          {/* Main Headline - 42-44px, medium weight, tighter line height */}
          <h1 
            className="text-white font-medium"
            style={{ 
              fontSize: '43px', 
              lineHeight: '1.12',
              letterSpacing: '-0.02em',
              marginBottom: '32px'
            }}
          >
            We design how brands and spaces are experienced through sound.
          </h1>
          
          {/* Intro Paragraph - Body text 17px, same as all other body copy */}
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.72)',
              fontWeight: '400',
              marginBottom: '80px'
            }}
          >
            SOUNDWVV develops structured music direction and long-term programming for hospitality venues, retail environments, global brands, and live events — building sound systems that are intentional, adaptable, and built to last.
          </p>

          {/* Section Headlines - 28-30px, slightly heavier, stacked */}
          <p 
            className="text-white font-medium"
            style={{ 
              fontSize: '29px', 
              lineHeight: '1.2',
              marginBottom: '6px'
            }}
          >
            More than playlists.
          </p>
          <p 
            className="text-white font-medium"
            style={{ 
              fontSize: '29px', 
              lineHeight: '1.2',
              marginBottom: '32px'
            }}
          >
            More than DJ bookings.
          </p>

          {/* Short statements - same size as body, slightly more line spacing */}
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.72)',
              fontWeight: '400',
              marginBottom: '18px'
            }}
          >
            Music shapes perception.
          </p>
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.72)',
              fontWeight: '400',
              marginBottom: '18px'
            }}
          >
            It sets pace.
          </p>
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.72)',
              fontWeight: '400',
              marginBottom: '32px'
            }}
          >
            It defines atmosphere.
          </p>
          
          {/* Body paragraphs - 17px consistent */}
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.72)',
              fontWeight: '400',
              marginBottom: '32px'
            }}
          >
            SOUNDWVV focuses on how sound functions inside a space — how it supports the brand, guides energy, and aligns with how an environment is intended to feel.
          </p>
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.72)',
              fontWeight: '400',
              marginBottom: '80px'
            }}
          >
            We curate music programs for daily use and long-term consistency, with the flexibility to support singular moments when the occasion calls for it.
          </p>

          {/* Subsection Headline - 24-26px, medium weight */}
          <h2 
            className="text-white font-medium"
            style={{ 
              fontSize: '25px', 
              lineHeight: '1.25',
              marginBottom: '32px'
            }}
          >
            Grounded in real-world experience.
          </h2>
          
          {/* Body text - 17px consistent */}
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.72)',
              fontWeight: '400',
              marginBottom: '32px'
            }}
          >
            Years of DJ performance and music curation across global spaces and brands shape the studio's perspective.
          </p>
          
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.72)',
              fontWeight: '400'
            }}
          >
            From intimate venues to international stages, the focus has remained the same — music designed to serve the space, the brand, and the people inside it.
          </p>

          {/* Subtle 1px divider */}
          <div 
            style={{ 
              height: '1px', 
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              marginTop: '80px',
              marginBottom: '80px'
            }}
          />

          {/* CTA Section - Centered */}
          <div className="text-center">
            {/* CTA Headline - 27px, medium weight */}
            <p 
              className="text-white font-medium"
              style={{ 
                fontSize: '27px', 
                lineHeight: '1.25',
                marginBottom: '32px'
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
