import React, { useEffect, useRef, useState } from 'react';

const BridgeSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image - Fades in after text */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1500 ease-out ${
          isVisible ? 'opacity-100 delay-700' : 'opacity-0'
        }`}
      >
        <img
          src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/k3euz6wn_LuxuryHospitalityHeroImage.jpg"
          alt="Luxury hospitality space"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Text Content - Fades in first - Stacked format */}
      <div 
        className={`relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-tight">
          Curated sound for brands.
          <br />
          Designed with purpose.
          <br />
          Built for the space.
        </p>
      </div>
    </section>
  );
};

export default BridgeSection;
