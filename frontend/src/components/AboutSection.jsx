import React from 'react';
import { aboutContent } from '../mock';
import { Waves, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <Waves size={28} className="text-mid-purple" />
              <span className="caption text-mid-purple uppercase tracking-widest">Who We Are</span>
            </div>
            
            <h2 className="section-heading text-white mb-6">
              {aboutContent.title}
            </h2>
            
            <p className="body-large text-mid-grey mb-8 leading-relaxed">
              {aboutContent.description}
            </p>

            <div className="bg-dark-grey/10 border border-mid-purple/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3 mb-3">
                <Target size={24} className="text-mid-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Our Mission</h3>
                  <p className="body-medium text-mid-grey leading-relaxed">
                    {aboutContent.mission}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-mid-grey">
              <Heart size={20} className="text-mid-pink" />
              <p className="body-small italic">Music is the universal language that connects brands with hearts.</p>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-mid-purple/20 to-mid-pink/20 blur-2xl rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1571266028243-d220c6e87e24?w=800&h=600&fit=crop&q=80"
                alt="DJ performing at event"
                className="relative rounded-lg shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <p className="text-white font-medium">Creating unforgettable sonic experiences</p>
                <p className="text-mid-grey text-sm mt-1">One beat at a time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
