import React from 'react';
import { ArrowRight, Circle, Layers, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* SECTION 1 - HERO (Centered, Minimal) */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl font-light mb-8 tracking-tight">
            About SOUNDWVV
          </h1>
          <p className="text-white/70 text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            A DJ-led studio specializing in music direction and programming for global brands, hospitality venues, retail spaces, and live events.
          </p>
        </div>
      </section>

      {/* SECTION 2 - POSITIONING (Left Aligned) */}
      <section className="py-20 lg:py-28 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-light mb-8 tracking-tight">
            More than just playlists. More than just DJ bookings.
          </h2>
          <div className="space-y-6 text-white/70 text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
            <p>
              SOUNDWVV focuses on how music functions inside a space — how it supports the brand, shapes the atmosphere, and aligns with how the space is meant to be experienced.
            </p>
            <p>
              We design music programs that are structured for daily use and long-term consistency.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOW WE WORK */}
      <section className="py-20 lg:py-28 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-light mb-16 tracking-tight text-center">
            How We Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Circle size={40} strokeWidth={1} className="text-white/60" />
              </div>
              <h3 className="text-white text-xl lg:text-2xl font-light mb-4">
                Context First
              </h3>
              <p className="text-white/70 text-base lg:text-lg font-light leading-relaxed">
                We study the space, the audience, and the brand before building anything.
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Layers size={40} strokeWidth={1} className="text-white/60" />
              </div>
              <h3 className="text-white text-xl lg:text-2xl font-light mb-4">
                Structured Programming
              </h3>
              <p className="text-white/70 text-base lg:text-lg font-light leading-relaxed">
                Music is mapped to time of day, flow, and use — not trends.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <RefreshCw size={40} strokeWidth={1} className="text-white/60" />
              </div>
              <h3 className="text-white text-xl lg:text-2xl font-light mb-4">
                Ongoing Direction
              </h3>
              <p className="text-white/70 text-base lg:text-lg font-light leading-relaxed">
                Sound is reviewed and refined as the space evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - EXPERIENCE */}
      <section className="py-20 lg:py-28 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: DJ Silhouette Image */}
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/w6vnircz_SDOTsilhouette.jpg"
                alt="DJ performing"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg"
              />
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-light mb-8 tracking-tight">
                Grounded in real-world experience.
              </h2>
              <div className="space-y-6 text-white/70 text-lg lg:text-xl font-light leading-relaxed">
                <p>
                  SOUNDWVV draws from years of hands-on music curation and DJ experience across hospitality venues, live events, and established global brands.
                </p>
                <p>
                  From intimate spaces to international stages, the focus has remained the same — music designed to serve the space, the brand, and the people inside it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - CLOSING TRANSITION (Centered) */}
      <section className="py-20 lg:py-28 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight">
            Let's design how your space sounds.
          </h2>
          <button 
            onClick={() => navigate('/services')}
            className="group bg-white text-black px-10 py-5 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-all inline-flex items-center gap-3"
          >
            Explore Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;