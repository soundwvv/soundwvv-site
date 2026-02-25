import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-white text-4xl lg:text-5xl font-light mb-8 tracking-tight">
              About SOUNDWVV
            </h2>
            
            <p className="text-white/60 text-lg font-light leading-relaxed mb-6" style={{ maxWidth: '540px' }}>
              SOUNDWVV is a DJ-led music studio curating sound for hospitality spaces, retail environments, brands, and live events. We approach music with structure and intention, guided by DJ expertise rather than automated playlists. Each music program is designed to support the rhythm and identity of a space over time.
            </p>

            {/* Styled CTA Button */}
            <Link 
              to="/about"
              className="group inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-all"
            >
              <span>About SOUNDWVV</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: DJ Silhouette Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-mid-purple/20 to-mid-pink/20 blur-2xl rounded-lg"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/ehztbvec_SDOTsilhouette.jpg"
                alt="DJ performing"
                className="relative rounded-lg shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
