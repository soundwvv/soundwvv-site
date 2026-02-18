import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen" data-testid="services-page">
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <h1 
            className="text-white font-medium"
            style={{ 
              fontSize: '44px', 
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              marginBottom: '20px'
            }}
          >
            SOUNDWVV Partnerships
          </h1>
          <p 
            style={{ 
              fontSize: '18px', 
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400',
              maxWidth: '560px'
            }}
          >
            Three structured tiers designed to support and manage your brand's sound.
          </p>
        </div>
      </section>

      {/* Tier Section - Equal Width Tiles */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* CORE Tier */}
            <div 
              className="border border-white/10 rounded-sm p-8"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              data-testid="tier-core"
            >
              <h3 
                className="text-white font-medium"
                style={{ fontSize: '20px', letterSpacing: '0.05em', marginBottom: '20px' }}
              >
                CORE
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '28px' }}>
                CORE establishes a consistent sound system for your space. It defines direction, cadence, and tone through structured monthly programming.
              </p>
              <p className="text-white font-medium" style={{ fontSize: '13px', letterSpacing: '0.03em', marginBottom: '16px' }}>
                Includes:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '10px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  One curated playlist per month
                </li>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '10px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  Custom sound identity consultation
                </li>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  Monthly refresh and sound strategy check-in
                </li>
              </ul>
            </div>

            {/* FLOW Tier */}
            <div 
              className="border border-white/10 rounded-sm p-8"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              data-testid="tier-flow"
            >
              <h3 
                className="text-white font-medium"
                style={{ fontSize: '20px', letterSpacing: '0.05em', marginBottom: '20px' }}
              >
                FLOW
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '28px' }}>
                FLOW expands your sound program with greater range and variation. It introduces rotating playlists and custom mixes while maintaining clear structure.
              </p>
              <p className="text-white font-medium" style={{ fontSize: '13px', letterSpacing: '0.03em', marginBottom: '16px' }}>
                Includes:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '10px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  Up to two rotating playlists per quarter
                </li>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '10px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  One custom curated DJ mix per quarter
                </li>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  Priority updates and support
                </li>
              </ul>
            </div>

            {/* WAVE Tier */}
            <div 
              className="border border-white/10 rounded-sm p-8"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              data-testid="tier-wave"
            >
              <h3 
                className="text-white font-medium"
                style={{ fontSize: '20px', letterSpacing: '0.05em', marginBottom: '20px' }}
              >
                WAVE
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '28px' }}>
                WAVE is a comprehensive sound partnership. It integrates expanded programming, custom mixes, and ongoing refinement into a fully managed system.
              </p>
              <p className="text-white font-medium" style={{ fontSize: '13px', letterSpacing: '0.03em', marginBottom: '16px' }}>
                Includes:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '10px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  Up to four rotating playlists per quarter
                </li>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '10px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  Up to two custom curated DJ mixes per quarter
                </li>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '10px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  Ongoing sound management and quarterly refinement
                </li>
                <li style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.4)' }}>–</span>
                  Priority support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* A La Carte Section */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <h2 
            className="text-white font-medium"
            style={{ fontSize: '28px', lineHeight: '1.2', marginBottom: '20px' }}
          >
            A La Carte — On-Demand Sound
          </h2>
          <p 
            style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '40px', maxWidth: '680px' }}
          >
            For one-time projects or custom requests, SOUNDWVV offers standalone sound services that can operate independently or complement an existing partnership.
          </p>
          
          <p className="text-white font-medium" style={{ fontSize: '14px', letterSpacing: '0.03em', marginBottom: '20px' }}>
            Available Services:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3" style={{ maxWidth: '700px' }}>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', padding: '8px 0' }}>Live DJ sets</p>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', padding: '8px 0' }}>Custom playlists and DJ mixes</p>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', padding: '8px 0' }}>Music consulting</p>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', padding: '8px 0' }}>Event series partnerships</p>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', padding: '8px 0' }}>DJ lessons</p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <h2 
            className="text-white font-medium"
            style={{ fontSize: '28px', lineHeight: '1.2', marginBottom: '48px' }}
          >
            How We Work
          </h2>
          
          <div style={{ maxWidth: '640px' }}>
            {/* Step 1 */}
            <div style={{ marginBottom: '48px' }}>
              <div className="flex items-center gap-4" style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.5)' }}>1</span>
                <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                <h3 className="text-white font-medium" style={{ fontSize: '18px' }}>Discovery</h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '52px' }}>
                We begin with a focused consultation to understand your brand, space, audience, and operational needs.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ marginBottom: '48px' }}>
              <div className="flex items-center gap-4" style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.5)' }}>2</span>
                <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                <h3 className="text-white font-medium" style={{ fontSize: '18px' }}>Sound Direction</h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '52px' }}>
                We define your tone, pacing, and programming structure based on how your space functions day to day.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ marginBottom: '48px' }}>
              <div className="flex items-center gap-4" style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.5)' }}>3</span>
                <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                <h3 className="text-white font-medium" style={{ fontSize: '18px' }}>Implementation</h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '52px' }}>
                Playlists and mixes are built and deployed in alignment with your schedule and environment.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex items-center gap-4" style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.5)' }}>4</span>
                <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                <h3 className="text-white font-medium" style={{ fontSize: '18px' }}>Ongoing Management</h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '52px' }}>
                We review, refine, and adjust based on performance, feedback, and seasonal shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ paddingTop: '40px', paddingBottom: '120px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '80px' }}>
            <div className="text-center">
              <h2 
                className="text-white font-medium"
                style={{ fontSize: '28px', lineHeight: '1.3', marginBottom: '16px' }}
              >
                Let's define your sound.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '32px' }}>
                Select a partnership or schedule a consultation to begin.
              </p>
              <button 
                onClick={() => navigate('/')}
                data-testid="start-consultation-btn"
                className="group bg-white text-black px-6 py-2.5 rounded-full font-medium text-[13px] uppercase tracking-wider hover:bg-white/90 transition-all inline-flex items-center gap-2"
              >
                Start Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
