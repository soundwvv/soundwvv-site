import React from 'react';
import { ArrowRight, Headphones, ListMusic, MessageSquare, Calendar, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesPage = () => {
  const navigate = useNavigate();

  const tiers = [
    {
      name: 'CORE',
      description: 'CORE establishes a consistent sound system for your space. It defines direction, cadence, and tone through structured monthly programming.',
      includes: [
        'One curated playlist per month',
        'Custom sound identity consultation',
        'Monthly refresh and sound strategy check-in'
      ]
    },
    {
      name: 'FLOW',
      description: 'FLOW expands your sound program with greater range and variation. It introduces rotating playlists and custom mixes while maintaining clear structure.',
      includes: [
        'Up to two rotating playlists per quarter',
        'One custom curated DJ mix per quarter',
        'Priority updates and support'
      ]
    },
    {
      name: 'WAVE',
      description: 'WAVE is a comprehensive sound partnership. It integrates expanded programming, custom mixes, and ongoing refinement into a fully managed system.',
      includes: [
        'Up to four rotating playlists per quarter',
        'Up to two custom curated DJ mixes per quarter',
        'Ongoing sound management and quarterly refinement',
        'Priority support'
      ]
    }
  ];

  const aLaCarteServices = [
    { name: 'Live DJ sets', icon: Headphones },
    { name: 'Custom playlists and DJ mixes', icon: ListMusic },
    { name: 'Music consulting', icon: MessageSquare },
    { name: 'Event series partnerships', icon: Calendar },
    { name: 'DJ lessons', icon: GraduationCap }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We begin with a focused consultation to understand your brand, space, audience, and operational needs.'
    },
    {
      number: '2',
      title: 'Sound Direction',
      description: 'We define your tone, pacing, and programming structure based on how your space functions day to day.'
    },
    {
      number: '3',
      title: 'Implementation',
      description: 'Playlists and mixes are built and deployed in alignment with your schedule and environment.'
    },
    {
      number: '4',
      title: 'Ongoing Management',
      description: 'We review, refine, and adjust based on performance, feedback, and seasonal shifts.'
    }
  ];

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
            {tiers.map((tier, index) => (
              <div 
                key={tier.name}
                className="border border-white/10 rounded-sm p-8"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                data-testid={`tier-${tier.name.toLowerCase()}`}
              >
                <h3 
                  className="text-white font-medium"
                  style={{ 
                    fontSize: '20px', 
                    letterSpacing: '0.05em',
                    marginBottom: '20px'
                  }}
                >
                  {tier.name}
                </h3>
                <p 
                  style={{ 
                    fontSize: '15px', 
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.65)',
                    marginBottom: '28px'
                  }}
                >
                  {tier.description}
                </p>
                <p 
                  className="text-white font-medium"
                  style={{ 
                    fontSize: '13px', 
                    letterSpacing: '0.03em',
                    marginBottom: '16px'
                  }}
                >
                  Includes:
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {tier.includes.map((item, i) => (
                    <li 
                      key={i}
                      style={{ 
                        fontSize: '14px', 
                        lineHeight: '1.5',
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginBottom: '10px',
                        paddingLeft: '16px',
                        position: 'relative'
                      }}
                    >
                      <span 
                        style={{ 
                          position: 'absolute', 
                          left: 0, 
                          color: 'rgba(255, 255, 255, 0.4)' 
                        }}
                      >
                        –
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A La Carte Section */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <h2 
            className="text-white font-medium"
            style={{ 
              fontSize: '28px', 
              lineHeight: '1.2',
              marginBottom: '20px'
            }}
          >
            A La Carte — On-Demand Sound
          </h2>
          <p 
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '40px',
              maxWidth: '680px'
            }}
          >
            For one-time projects or custom requests, SOUNDWVV offers standalone sound services that can operate independently or complement an existing partnership.
          </p>
          
          <p 
            className="text-white font-medium"
            style={{ 
              fontSize: '14px', 
              letterSpacing: '0.03em',
              marginBottom: '20px'
            }}
          >
            Available Services:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" style={{ maxWidth: '800px' }}>
            {aLaCarteServices.map((service, index) => (
              <div 
                key={service.name}
                className="flex items-center gap-3"
                style={{ padding: '12px 0' }}
              >
                <service.icon 
                  size={18} 
                  style={{ color: 'rgba(255, 255, 255, 0.4)', flexShrink: 0 }} 
                />
                <span 
                  style={{ 
                    fontSize: '15px', 
                    color: 'rgba(255, 255, 255, 0.7)' 
                  }}
                >
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <h2 
            className="text-white font-medium"
            style={{ 
              fontSize: '28px', 
              lineHeight: '1.2',
              marginBottom: '48px'
            }}
          >
            How We Work
          </h2>
          
          <div style={{ maxWidth: '640px' }}>
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                style={{ 
                  marginBottom: index < processSteps.length - 1 ? '48px' : 0 
                }}
              >
                <div className="flex items-center gap-4" style={{ marginBottom: '12px' }}>
                  <span 
                    className="text-white font-medium"
                    style={{ 
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {step.number}
                  </span>
                  <div 
                    style={{ 
                      width: '20px', 
                      height: '1px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)' 
                    }} 
                  />
                  <h3 
                    className="text-white font-medium"
                    style={{ fontSize: '18px' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p 
                  style={{ 
                    fontSize: '15px', 
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.6)',
                    paddingLeft: '52px'
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ paddingTop: '40px', paddingBottom: '120px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <div 
            style={{ 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '80px'
            }}
          >
            <div className="text-center">
              <h2 
                className="text-white font-medium"
                style={{ 
                  fontSize: '28px', 
                  lineHeight: '1.3',
                  marginBottom: '16px'
                }}
              >
                Let's define your sound.
              </h2>
              <p 
                style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '32px'
                }}
              >
                Select a partnership or schedule a consultation to begin.
              </p>
              <button 
                onClick={() => navigate('/#contact')}
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
