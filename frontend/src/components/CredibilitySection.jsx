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
    // Row 1: Terranea, Proper, Loews, Hilltop
    { id: 1, name: "Terranea Resort", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/9p5ez5jb_terranea%20resort.png", scale: 0.85 },
    { id: 2, name: "Proper Hotel", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/erlsu3da_properhotelsm.png", scale: 0.8 },
    { id: 3, name: "Loews Hotels", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/inuqzlh0_loews.png", scale: 0.75 },
    { id: 4, name: "Hilltop Coffee & Kitchen", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/ga7v94ag_hilltopcoffeekitchen.png", scale: 0.8 },
    // Row 2: Meta, NBPA, SoFi Stadium, Playboy
    { id: 5, name: "Meta", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/cn10147u_meta.png", scale: 0.7 },
    { id: 6, name: "NBA Players Association", logo: "https://customer-assets.emergentagent.com/job_08084b79-3026-4c9f-ad4a-3acbeed39eb1/artifacts/gwsdgmjy_nbpasecondary.png", scale: 0.75 },
    { id: 7, name: "SoFi Stadium", logo: "https://customer-assets.emergentagent.com/job_08084b79-3026-4c9f-ad4a-3acbeed39eb1/artifacts/k537y71w_sofistadium.png", scale: 0.8 },
    { id: 8, name: "Playboy", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/itvpzrj1_playboy.png", scale: 0.65 },
    // Row 3: Porsche, Tequila Patrón, Adidas, E.P. & L.P.
    { id: 9, name: "Porsche", logo: "https://customer-assets.emergentagent.com/job_08084b79-3026-4c9f-ad4a-3acbeed39eb1/artifacts/03c2dk7b_porschelogo%202.png", scale: 0.75 },
    { id: 10, name: "Tequila Patrón", logo: "https://customer-assets.emergentagent.com/job_08084b79-3026-4c9f-ad4a-3acbeed39eb1/artifacts/xgypdhw4_Patron_Tequila_Logo.png", scale: 0.9 },
    { id: 11, name: "Adidas", logo: "https://customer-assets.emergentagent.com/job_08084b79-3026-4c9f-ad4a-3acbeed39eb1/artifacts/jm8plkrg_Adidas_Logo.svg.png", scale: 0.55 },
    { id: 12, name: "E.P. & L.P.", logo: "https://customer-assets.emergentagent.com/job_beat-space/artifacts/i8w4fspy_eplp.png", scale: 0.8 }
  ];

  return (
    <section id="credibility" className="bg-black relative overflow-hidden">
      {/* Stats Section - Video as true background, no padding/margin top */}
      <div 
        ref={sectionRef} 
        className="relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url()',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0
        }}
      >
        {/* Background Video - True background, fills completely */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/rr9433ze_NighttimeDRONErooftop14297607_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle readability overlay only */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}></div>

        {/* Content */}
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-8 py-16 w-full">
          <div className="text-center mb-10">
            <h2 className="text-white text-4xl lg:text-5xl font-light tracking-tight">
              Our SOUND Track Record
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
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
      <div className="py-16 lg:py-20 max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-white text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            Trusted by Brand Partners
          </h2>
          <p className="text-white/60 text-lg font-light max-w-3xl mx-auto">
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
                className="object-contain"
                style={{ 
                  width: `${(client.scale || 0.8) * 100}%`, 
                  height: `${(client.scale || 0.8) * 100}%`,
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;