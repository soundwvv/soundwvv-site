import React from 'react';
import { stats, clients } from '../mock';
import { TrendingUp } from 'lucide-react';

const CredibilitySection = () => {
  return (
    <section id="credibility" className="section-padding bg-black">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp size={28} className="text-mid-pink" />
              <span className="caption text-mid-pink uppercase tracking-widest">By The Numbers</span>
            </div>
            <h2 className="section-heading text-white">
              Proven Track Record
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center p-8 bg-dark-grey/10 border border-white/10 rounded-lg hover:border-white/20 transition-all hover:transform hover:scale-105"
              >
                <div 
                  className="text-5xl lg:text-6xl font-bold mb-3"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-mid-grey body-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div>
          <div className="text-center mb-12">
            <span className="caption text-mid-purple uppercase tracking-widest mb-4 block">Trusted By</span>
            <h2 className="section-heading text-white mb-6">
              Brand Partners
            </h2>
            <p className="body-large text-mid-grey max-w-3xl mx-auto">
              We've had the privilege of collaborating with industry-leading brands 
              to create memorable sonic experiences worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="aspect-square bg-dark-grey/10 border border-white/10 rounded-lg overflow-hidden hover:border-mid-purple/50 transition-all hover:transform hover:scale-105 group flex items-center justify-center p-6"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter brightness-90 group-hover:brightness-100"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="body-medium text-mid-grey">
              Join the growing list of brands elevating their identity through sound.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
