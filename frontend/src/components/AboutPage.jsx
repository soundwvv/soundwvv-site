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
      
      {/* Pure editorial single column manifesto */}
      <article className="bg-black" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '720px' }}>
          
          {/* Primary manifesto statement - 32-36px, semi-bold, white, tight line height */}
          <p 
            className="text-white font-semibold tracking-tight"
            style={{ 
              fontSize: '34px', 
              lineHeight: '1.22',
              marginBottom: '24px'
            }}
          >
            We design how brands and spaces are experienced through sound.
          </p>
          
          {/* Body text - 17px, regular weight, light gray, 1.65 line height */}
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.65',
              color: '#CFCFCF',
              marginBottom: '60px'
            }}
          >
            SOUNDWVV develops structured music direction and long-term programming for hospitality venues, retail environments, global brands, and live events — building sound systems that are intentional, adaptable, and built to last.
          </p>

          {/* Stacked manifesto lines - 32-36px, semi-bold, white */}
          <div style={{ marginBottom: '24px' }}>
            <p 
              className="text-white font-semibold tracking-tight"
              style={{ 
                fontSize: '34px', 
                lineHeight: '1.22',
                marginBottom: '8px'
              }}
            >
              More than playlists.
            </p>
            <p 
              className="text-white font-semibold tracking-tight"
              style={{ 
                fontSize: '34px', 
                lineHeight: '1.22'
              }}
            >
              More than DJ bookings.
            </p>
          </div>

          {/* Body paragraphs */}
          <div style={{ marginBottom: '60px' }}>
            <p 
              style={{ 
                fontSize: '17px', 
                lineHeight: '1.65',
                color: '#CFCFCF',
                marginBottom: '24px'
              }}
            >
              Music shapes perception.
            </p>
            <p 
              style={{ 
                fontSize: '17px', 
                lineHeight: '1.65',
                color: '#CFCFCF',
                marginBottom: '24px'
              }}
            >
              It sets pace.
            </p>
            <p 
              style={{ 
                fontSize: '17px', 
                lineHeight: '1.65',
                color: '#CFCFCF',
                marginBottom: '24px'
              }}
            >
              It defines atmosphere.
            </p>
            <p 
              style={{ 
                fontSize: '17px', 
                lineHeight: '1.65',
                color: '#CFCFCF',
                marginBottom: '24px'
              }}
            >
              SOUNDWVV focuses on how sound functions inside a space — how it supports the brand, guides energy, and aligns with how an environment is meant to be experienced.
            </p>
            <p 
              style={{ 
                fontSize: '17px', 
                lineHeight: '1.65',
                color: '#CFCFCF'
              }}
            >
              We design music programs for daily use and long-term consistency, not one-off moments.
            </p>
          </div>

          {/* Sub section header - 24px, medium weight */}
          <h2 
            className="text-white font-medium tracking-tight"
            style={{ 
              fontSize: '24px', 
              lineHeight: '1.25',
              marginTop: '60px',
              marginBottom: '20px'
            }}
          >
            Grounded in real-world experience.
          </h2>
          
          {/* Body text */}
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.65',
              color: '#CFCFCF',
              marginBottom: '24px'
            }}
          >
            Years of hands-on music curation and international DJ performance inform the work — from intimate spaces to global stages.
          </p>
          
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.65',
              color: '#CFCFCF',
              marginBottom: '24px'
            }}
          >
            The focus remains the same:
          </p>
          
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.65',
              color: '#CFCFCF'
            }}
          >
            music designed to serve the space, the brand, and the people inside it.
          </p>

          {/* Thin divider line - 1px charcoal */}
          <div 
            style={{ 
              height: '1px', 
              backgroundColor: '#333333',
              marginTop: '60px',
              marginBottom: '60px'
            }}
          />

          {/* CTA Section - centered */}
          <div className="text-center">
            <p 
              className="text-white font-semibold tracking-tight whitespace-nowrap"
              style={{ 
                fontSize: '28px', 
                lineHeight: '1.25',
                marginBottom: '32px'
              }}
            >
              Let's design how your brand sounds.
            </p>
            
            <button 
              onClick={() => navigate('/')}
              data-testid="explore-services-btn"
              className="group bg-white text-black px-8 py-3 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-all inline-flex items-center gap-2"
            >
              Explore Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AboutPage;
