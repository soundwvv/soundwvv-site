import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <h2 className="section-heading text-white mb-8">
              About SOUNDWVV
            </h2>
            
            <p className="body-large text-mid-grey leading-relaxed">
              SOUNDWVV is a DJ-led music studio curating sound for hospitality spaces, retail environments, brands, and live events. We approach music with structure and intention, guided by DJ expertise rather than automated playlists. Each music program is designed to support the rhythm and identity of a space over time.
            </p>
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
