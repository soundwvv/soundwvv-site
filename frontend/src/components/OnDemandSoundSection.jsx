import React from 'react';

const OnDemandSoundSection = () => {
  const services = [
    'Live DJ sets',
    'Custom Playlists + DJ Mixes',
    'Music Consulting',
    'Event Series Partnerships'
  ];

  return (
    <section className="py-6 lg:py-8 bg-[#0a0a0a]">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-4xl lg:text-5xl font-light mb-4 tracking-tight">
            On-Demand Sound
          </h2>
          <p className="text-white/60 text-lg lg:text-xl font-light mb-6">
            A la carte services for custom one-off needs.
          </p>
          
          {/* Consistent bullet list with tighter spacing */}
          <ul className="text-white/80 text-lg lg:text-xl space-y-1.5 mb-5">
            {services.map((service, index) => (
              <li key={index} className="hover:text-white transition-colors flex items-center justify-center">
                <span className="mr-2">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>

          {/* Supporting line */}
          <p className="text-white/50 text-sm lg:text-base">
            Ideal for one-time activations and custom builds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnDemandSoundSection;