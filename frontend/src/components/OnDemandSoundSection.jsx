import React from 'react';

const OnDemandSoundSection = () => {
  const services = [
    'Live DJ Sets',
    'Custom Playlists + DJ Mixes',
    'Music Consulting',
    'Event Series Partnerships'
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column: Title and Description */}
          <div>
            <h2 className="text-white text-4xl lg:text-5xl font-light mb-6 tracking-tight">
              On-Demand Sound
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              A la carte services for brands and spaces seeking one-off support — from live DJ sets to custom playlists, music consulting, and event partnerships.
            </p>
          </div>

          {/* Right Column: Services List */}
          <div>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li 
                  key={index} 
                  className="text-white/80 text-lg lg:text-xl font-light hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white/40 rounded-full mr-4 flex-shrink-0"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnDemandSoundSection;