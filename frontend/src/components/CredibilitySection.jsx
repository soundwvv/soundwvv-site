import React, { useState, useEffect, useRef } from 'react';

const CredibilitySection = () => {
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 'stat1',
      number: 20,
      suffix: '+',
      label: "Years in Music",
      color: "#d987ff"
    },
    {
      id: 'stat2',
      number: 200,
      suffix: '+',
      label: "Venues & Events",
      color: "#ff84e4"
    },
    {
      id: 'stat3',
      number: 500,
      suffix: '+',
      label: "Live Sets",
      color: "#88a2ff"
    }
  ];

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.number / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                setCounts(prev => ({ ...prev, [stat.id]: stat.number }));
                clearInterval(timer);
              } else {
                setCounts(prev => ({ ...prev, [stat.id]: Math.floor(current) }));
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const clients = [
    { id: 1, name: "Terranea Resort", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/9p5ez5jb_terranea%20resort.png" },
    { id: 2, name: "NBA Players Association", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/aiuc64g8_nbaplayersassociation.png" },
    { id: 3, name: "Hilltop Coffee & Kitchen", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/ga7v94ag_hilltopcoffeekitchen.png" },
    { id: 4, name: "Proper Hotel", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/erlsu3da_properhotelsm.png" },
    { id: 5, name: "E.P. & L.P.", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/i8w4fspy_eplp.png" },
    { id: 6, name: "Meta", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/cn10147u_meta.png" },
    { id: 7, name: "Loews Hotels", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/inuqzlh0_loews.png" },
    { id: 8, name: "Playboy", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/itvpzrj1_playboy.png" }
  ];

  return (
    <section id="credibility" className="py-16 lg:py-20 bg-black relative overflow-hidden">
      {/* Stats Section with Video Background - Video fills entire section, content moved up */}
      <div ref={sectionRef} className="relative mb-16 min-h-[60vh]">
        {/* Background Video - full coverage with defined height */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/rr9433ze_NighttimeDRONErooftop14297607_3840_2160_24fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        {/* Content - positioned slightly above center */}
        <div className="relative max-w-[1920px] mx-auto px-6 lg:px-8 flex flex-col justify-center min-h-[60vh] py-12">
          <div className="text-center mb-8">
            <h2 className="text-white text-4xl lg:text-5xl font-light tracking-tight">
              Our SOUND Track Record
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center"
              >
                <div 
                  className="text-6xl lg:text-7xl font-light mb-3"
                  style={{ color: stat.color }}
                >
                  {counts[stat.id]}{stat.suffix}
                </div>
                <div className="text-white text-lg uppercase tracking-wider font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Partners Section */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-white text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            Trusted by Brand Partners
          </h2>
          <p className="text-white/60 text-lg lg:text-xl max-w-3xl mx-auto">
            Selected venues and global brand environments we've supported.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.id}
              className="aspect-square bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all hover:transform hover:scale-105 group flex items-center justify-center p-6"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;