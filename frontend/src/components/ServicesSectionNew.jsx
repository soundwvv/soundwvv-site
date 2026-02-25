import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSectionNew = () => {
  const [activeService, setActiveService] = useState('CORE');

  const services = {
    CORE: {
      title: 'CORE',
      subtitle: '– The Foundation',
      description: 'Establish your sound identity through curated playlists and focused music direction.',
      image: 'https://customer-assets.emergentagent.com/job_beat-space/artifacts/q9mweq12_Core2.jpg'
    },
    FLOW: {
      title: 'FLOW',
      subtitle: '– The Evolution',
      description: 'Ongoing curation and refinement for hospitality, retail, and event venue environments.',
      image: 'https://customer-assets.emergentagent.com/job_beat-space/artifacts/0hktpn29_Flow2.jpg'
    },
    WAVE: {
      title: 'WAVE',
      subtitle: '– The Experience',
      description: 'A fully developed sound environment — deeper programming, custom mixes, and evolving direction.',
      image: 'https://customer-assets.emergentagent.com/job_beat-space/artifacts/b47wwx7j_WAVE10.jpg'
    }
  };

  return (
    <section id="services" className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Service Navigation */}
        <div className="flex flex-col justify-between p-8 lg:p-12 xl:p-16">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-white text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Services
            </h2>
            <p className="text-white/60 text-lg font-light">
              Tiered sound programs tailored to the needs of each space.
            </p>
          </div>

          {/* Service Tiers - Further reduced + hover underline effect */}
          <div className="space-y-0 flex-grow">
            {Object.entries(services).map(([key, service], index) => (
              <div key={key} className={`border-b border-white/10 ${index === 0 ? 'border-t border-white/10' : ''}`}>
                <button
                  onClick={() => setActiveService(key)}
                  onMouseEnter={() => setActiveService(key)}
                  className="w-full text-left py-8 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <h3 className={`text-3xl lg:text-4xl xl:text-5xl font-light mb-2 transition-colors ${
                        activeService === key ? 'text-white' : 'text-white/40'
                      }`}>
                        {service.title}
                      </h3>
                      {/* Hover underline that slides in from left */}
                      <div className={`h-px bg-white/60 transition-all duration-300 origin-left ${
                        activeService === key ? 'scale-x-100' : 'scale-x-0'
                      }`}></div>
                      <p className={`text-xs lg:text-sm transition-colors mt-2 ${
                        activeService === key ? 'text-white/70' : 'text-white/30'
                      }`}>
                        {service.subtitle}
                      </p>
                    </div>
                    <ChevronRight 
                      size={28} 
                      className={`transition-all ${
                        activeService === key ? 'text-white translate-x-2' : 'text-white/40'
                      }`}
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Link 
              to="/services"
              className="group bg-white text-black px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-all inline-flex items-center gap-3 w-auto"
            >
              View Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Side - Service Details */}
        <div className="relative min-h-[50vh] lg:min-h-screen">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeService === key ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

              <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-white text-sm uppercase tracking-widest">{service.title}</span>
                  </div>
                  <p className="text-white text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionNew;