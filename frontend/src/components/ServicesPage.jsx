import React from 'react';
import { ArrowRight, Circle, Activity, Layers, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesPage = () => {
  return (
    <div className="bg-black min-h-screen" data-testid="services-page">
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ paddingTop: '140px', paddingBottom: '72px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <h1 
            className="text-white font-medium"
            style={{ 
              fontSize: '36px', 
              lineHeight: '1.15',
              letterSpacing: '-0.015em',
              marginBottom: '18px'
            }}
          >
            Partnerships
          </h1>
          <p 
            style={{ 
              fontSize: '17px', 
              lineHeight: '1.55',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '400',
              maxWidth: '640px'
            }}
          >
            Each partnership starts with a focused 60-day implementation phase to define and build your sound system, then transitions into structured tiers that support and refine your brand's sound over time.
          </p>
        </div>
      </section>

      {/* Tier Section - Equal Width Tiles */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* CORE Tier */}
            <div 
              className="border border-white/10 rounded-sm p-8 transition-all duration-[220ms] ease-out hover:border-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:scale-[1.02]"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              data-testid="tier-core"
            >
              <h3 
                className="text-white font-medium"
                style={{ fontSize: '22px', letterSpacing: '0.06em', marginBottom: '20px' }}
              >
                CORE
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '28px' }}>
                Establishes a consistent sound system for your space. Defines direction, cadence, and tone through structured monthly programming.
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
                  Monthly refresh and strategy check-in
                </li>
              </ul>
            </div>

            {/* FLOW Tier */}
            <div 
              className="border border-white/10 rounded-sm p-8 transition-all duration-[220ms] ease-out hover:border-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:scale-[1.02]"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              data-testid="tier-flow"
            >
              <h3 
                className="text-white font-medium"
                style={{ fontSize: '22px', letterSpacing: '0.06em', marginBottom: '20px' }}
              >
                FLOW
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '28px' }}>
                Expands your sound program with greater range and variation. Introduces rotating playlists and custom mixes while maintaining clear structure.
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
              className="border border-white/10 rounded-sm p-8 transition-all duration-[220ms] ease-out hover:border-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:scale-[1.02]"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              data-testid="tier-wave"
            >
              <h3 
                className="text-white font-medium"
                style={{ fontSize: '22px', letterSpacing: '0.06em', marginBottom: '20px' }}
              >
                WAVE
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '28px' }}>
                Integrates expanded programming and live elements to deliver our most comprehensive sound partnership.
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
                  Dedicated partnership and priority response
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
          
          <p className="text-white font-medium" style={{ fontSize: '15px', letterSpacing: '0.03em', marginBottom: '24px' }}>
            Available Services:
          </p>
          
          {/* Service Tiles Grid - 3 top, 2 bottom */}
          <div style={{ maxWidth: '720px' }}>
            {/* Top row - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div 
                className="border border-white/8 rounded-sm px-5 py-4 transition-all duration-200 ease-out hover:border-white/20 hover:bg-white/[0.03]"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)' }}
              >
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Live DJ sets</span>
              </div>
              <div 
                className="border border-white/8 rounded-sm px-5 py-4 transition-all duration-200 ease-out hover:border-white/20 hover:bg-white/[0.03]"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)' }}
              >
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', whiteSpace: 'nowrap' }}>Custom playlists + DJ mixes</span>
              </div>
              <div 
                className="border border-white/8 rounded-sm px-5 py-4 transition-all duration-200 ease-out hover:border-white/20 hover:bg-white/[0.03]"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)' }}
              >
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Music consulting</span>
              </div>
            </div>
            {/* Bottom row - 2 columns centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ maxWidth: '480px' }}>
              <div 
                className="border border-white/8 rounded-sm px-5 py-4 transition-all duration-200 ease-out hover:border-white/20 hover:bg-white/[0.03]"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)' }}
              >
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Event partnerships</span>
              </div>
              <div 
                className="border border-white/8 rounded-sm px-5 py-4 transition-all duration-200 ease-out hover:border-white/20 hover:bg-white/[0.03]"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)' }}
              >
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>DJ lessons</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section style={{ paddingBottom: '75px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <h2 
            className="text-white font-medium"
            style={{ fontSize: '28px', lineHeight: '1.2', marginBottom: '48px' }}
          >
            How We Work
          </h2>
          
          <div style={{ maxWidth: '640px' }}>
            {/* Step 1 - Discovery */}
            <div style={{ marginBottom: '48px' }}>
              <div className="flex items-center gap-4" style={{ marginBottom: '12px' }}>
                <Circle 
                  size={18} 
                  strokeWidth={1.5}
                  style={{ color: 'rgba(255, 255, 255, 0.5)', flexShrink: 0 }} 
                />
                <h3 className="text-white font-medium" style={{ fontSize: '18px' }}>Discovery</h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '34px' }}>
                We begin with a focused consultation to understand your brand, space, audience, and operational needs.
              </p>
            </div>

            {/* Step 2 - Sound Direction */}
            <div style={{ marginBottom: '48px' }}>
              <div className="flex items-center gap-4" style={{ marginBottom: '12px' }}>
                <Activity 
                  size={18} 
                  strokeWidth={1.5}
                  style={{ color: 'rgba(255, 255, 255, 0.5)', flexShrink: 0 }} 
                />
                <h3 className="text-white font-medium" style={{ fontSize: '18px' }}>Sound Direction</h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '34px' }}>
                We define your tone, pacing, and programming structure based on how your space functions daily.
              </p>
            </div>

            {/* Step 3 - Implementation */}
            <div style={{ marginBottom: '48px' }}>
              <div className="flex items-center gap-4" style={{ marginBottom: '12px' }}>
                <Layers 
                  size={18} 
                  strokeWidth={1.5}
                  style={{ color: 'rgba(255, 255, 255, 0.5)', flexShrink: 0 }} 
                />
                <h3 className="text-white font-medium" style={{ fontSize: '18px' }}>Implementation</h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '34px', maxWidth: '540px' }}>
                Playlists and mixes are built and deployed in alignment with your schedule and environment.
              </p>
            </div>

            {/* Step 4 - Ongoing Management */}
            <div>
              <div className="flex items-center gap-4" style={{ marginBottom: '12px' }}>
                <RefreshCw 
                  size={18} 
                  strokeWidth={1.5}
                  style={{ color: 'rgba(255, 255, 255, 0.5)', flexShrink: 0 }} 
                />
                <h3 className="text-white font-medium" style={{ fontSize: '18px' }}>Ongoing Management</h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '34px' }}>
                We review, refine, and adjust based on performance, feedback, and seasonal shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ paddingTop: '40px', paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '72px', paddingBottom: '12px' }}>
            <div className="text-center">
              <h2 
                className="text-white font-medium"
                style={{ fontSize: '28px', lineHeight: '1.3', marginBottom: '32px' }}
              >
                Let's define your sound.
              </h2>
              <a 
                href="https://tally.so/r/rj6245"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="start-consultation-btn"
                className="group bg-white text-black px-6 py-2.5 rounded-full font-medium text-[13px] uppercase tracking-wider hover:bg-white/90 transition-all inline-flex items-center gap-2"
              >
                Start Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
