import React from 'react';
import { services } from '../mock';
import { Music2, ListMusic, Radio, Headphones, ArrowRight } from 'lucide-react';

const iconMap = {
  Music2: Music2,
  ListMusic: ListMusic,
  Radio: Radio,
  Headphones: Headphones
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-dark-grey/5">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="caption text-mid-purple uppercase tracking-widest mb-4 block">What We Do</span>
          <h2 className="section-heading text-white mb-6">
            Our Services
          </h2>
          <p className="body-large text-mid-grey max-w-3xl mx-auto">
            From intimate brand activations to large-scale events, we deliver tailored sonic experiences 
            that amplify your message and create lasting impressions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="project-card group cursor-pointer"
                style={{ backgroundColor: service.color }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <IconComponent size={40} className="text-black opacity-80" />
                  </div>
                  
                  <h3 className="card-heading text-black mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="body-medium text-black/70 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-black font-medium group-hover:gap-3 gap-2 transition-all">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="body-medium text-mid-grey mb-6">
            Need a custom solution? Let's craft something unique together.
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="cta-button large"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
