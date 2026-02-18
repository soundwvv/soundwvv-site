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
          
          {/* Body text - 17px, regular weight, light gray (#CFCFCF), 1.65 line height */}
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.65',
              color: '#CFCFCF',
              fontWeight: '400',
              marginBottom: '60px'
            }}
          >
            SOUNDWVV develops structured music direction and long-term programming for hospitality venues, retail environments, global brands, and live events — building sound systems that are intentional, adaptable, and built to last.
          </p>

          {/* Stacked manifesto lines - 32-36px, semi-bold, white, tight line height */}
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
              lineHeight: '1.22',
              marginBottom: '24px'
            }}
          >
            More than DJ bookings.
          </p>

          {/* Short poetic lines - body text style */}
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.65',
              color: '#CFCFCF',
              fontWeight: '400',
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
              fontWeight: '400',
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
              fontWeight: '400',
              marginBottom: '24px'
            }}
          >
            It defines atmosphere.
          </p>
          
          {/* Longer body paragraphs */}
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.65',
              color: '#CFCFCF',
              fontWeight: '400',
              marginBottom: '24px'
            }}
          >
            SOUNDWVV focuses on how sound functions inside a space — how it supports the brand, guides energy, and aligns with how an environment is meant to be experienced.
          </p>
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.65',
              color: '#CFCFCF',
              fontWeight: '400',
              marginBottom: '60px'
            }}
          >
            We design music programs for daily use and long-term consistency, not one-off moments.
          </p>

          {/* Sub section header - 24px, medium weight, 60px margin above, 20px margin below */}
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
              fontWeight: '400',
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
              fontWeight: '400',
              marginBottom: '24px'
            }}
          >
            The focus remains the same:
          </p>
          
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.65',
              color: '#CFCFCF',
              fontWeight: '400'
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

          {/* CTA Section - centered, 28px headline, generous top spacing */}
          <div className="text-center">
            <p 
              className="text-white font-semibold tracking-tight"
              style={{ 
                fontSize: '28px', 
                lineHeight: '1.25',
                marginBottom: '32px',
                whiteSpace: 'nowrap'
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
