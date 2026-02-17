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
      
      {/* SECTION 1 - HERO */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-black border-b border-white/5">
        <div className="max-w-[1150px] mx-auto px-6 lg:px-8">
          <h1 className="text-white text-6xl lg:text-7xl xl:text-8xl font-light mb-12 tracking-tight leading-none">
            About SOUNDWVV
          </h1>
          <div className="max-w-[700px]">
            <p className="text-white/80 text-xl lg:text-2xl font-light leading-relaxed">
              A DJ-led studio specializing in music direction and programming for global brands, hospitality venues, retail spaces, and live events.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - POSITIONING */}
      <section className="py-24 lg:py-32 bg-[#111111] border-b border-white/5">
        <div className="max-w-[1150px] mx-auto px-6 lg:px-8">
          <h2 className="text-white text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight leading-tight max-w-[900px]">
            More than just playlists. More than just DJ bookings.
          </h2>
          <div className="max-w-[700px] space-y-6 text-white/70 text-lg lg:text-xl font-light leading-relaxed">
            <p>
              SOUNDWVV focuses on how music functions inside a space — how it supports the brand, shapes the atmosphere, and aligns with how the space is meant to be experienced.
            </p>
            <p>
              We design music programs structured for daily use and long-term consistency.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOW WE WORK */}
      <section className="py-24 lg:py-32 bg-black border-b border-white/5">
        <div className="max-w-[1150px] mx-auto px-6 lg:px-8">
          <h2 className="text-white text-4xl lg:text-5xl font-light mb-16 tracking-tight">
            How We Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tile 1 */}
            <div className="bg-[#151515] border border-white/10 p-8 lg:p-10 h-full">
              <div className="mb-6">
                <Circle size={32} strokeWidth={1} className="text-white/50" />
              </div>
              <h3 className="text-white text-xl lg:text-2xl font-light mb-4">
                Context First
              </h3>
              <p className="text-white/60 text-base lg:text-lg font-light leading-relaxed">
                We study the space, the audience, and the brand before building anything.
              </p>
            </div>

            {/* Tile 2 */}
            <div className="bg-[#151515] border border-white/10 p-8 lg:p-10 h-full">
              <div className="mb-6">
                <Layers size={32} strokeWidth={1} className="text-white/50" />
              </div>
              <h3 className="text-white text-xl lg:text-2xl font-light mb-4">
                Structured Programming
              </h3>
              <p className="text-white/60 text-base lg:text-lg font-light leading-relaxed">
                Music is mapped to time of day, flow, and use — not trends.
              </p>
            </div>

            {/* Tile 3 */}
            <div className="bg-[#151515] border border-white/10 p-8 lg:p-10 h-full">
              <div className="mb-6">
                <RefreshCw size={32} strokeWidth={1} className="text-white/50" />
              </div>
              <h3 className="text-white text-xl lg:text-2xl font-light mb-4">
                Ongoing Direction
              </h3>
              <p className="text-white/60 text-base lg:text-lg font-light leading-relaxed">
                Sound is reviewed and refined as the space evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - EXPERIENCE (FEATURE SECTION) */}
      <section className="py-24 lg:py-32 bg-[#111111] border-b border-white/5">
        <div className="max-w-[1150px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left: Image (60% - 3 columns) */}
            <div className="lg:col-span-3 relative">
              <img
                src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/9yxn5sf7_SDOTsilhouette.jpg"
                alt="DJ performing"
                className="w-full h-full min-h-[500px] lg:min-h-[600px] object-cover"
              />
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-white/10"></div>

            {/* Right: Text (40% - remaining space) */}
            <div className="lg:col-span-1 flex items-center lg:pl-12 pt-12 lg:pt-0">
              <div className="max-w-[450px]">
                <h2 className="text-white text-3xl lg:text-4xl font-light mb-8 tracking-tight leading-tight">
                  Grounded in real-world experience.
                </h2>
                <div className="space-y-6 text-white/70 text-base lg:text-lg font-light leading-relaxed">
                  <p>
                    SOUNDWVV draws from years of music curation and DJ experience across hospitality venues, live events, and established global brands.
                  </p>
                  <p>
                    From intimate spaces to international stages, the focus has remained the same — music designed to serve the space, the brand, and the people inside it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - CTA */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-[1150px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight">
            Let's design how your space sounds.
          </h2>
          <button 
            onClick={() => navigate('/')}
            className="group bg-white text-black px-10 py-4 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-all inline-flex items-center gap-3"
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