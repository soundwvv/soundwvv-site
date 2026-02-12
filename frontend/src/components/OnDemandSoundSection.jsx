import React from 'react';

const OnDemandSoundSection = () => {
  const services = [
    'Live DJ sets',
    'Custom Playlists + DJ Mixes',
    'Music Consulting',
    'Event Series Partnerships'
  ];

  return (
    <section className="section-padding bg-black border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-4xl lg:text-5xl font-light mb-4 tracking-tight">
            On-Demand Sound
          </h2>
          <p className="text-white/60 text-lg lg:text-xl font-light mb-8">
            A la carte services for custom one-off needs.
          </p>
          
          {/* Horizontal list with separators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-white/80 text-base lg:text-lg">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <span className="hover:text-white transition-colors cursor-default">
                  {service}
                </span>
                {index < services.length - 1 && (
                  <span className="text-white/30">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnDemandSoundSection;