import React, { useState, useRef, useEffect } from 'react';

const DESKTOP_VIDEO = "https://customer-assets.emergentagent.com/job_beat-space/artifacts/rip6bogn_soundwvv_preloader_final2.mp4";
const MOBILE_VIDEO = "https://customer-assets.emergentagent.com/job_d91838e6-2221-4b52-bbec-8bfd0dff6b70/artifacts/yax1cmwo_Untitled%20design%20%281%29.mp4";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeOut = useRef(() => {});
  fadeOut.current = () => {
    if (!isLoading) return;
    setIsLoading(false);
    setTimeout(() => onLoadingComplete(), 450);
  };

  useEffect(() => {
    // Fallback: if video never fires 'ended' (e.g. load failure), exit after 8s
    const fallback = setTimeout(() => fadeOut.current(), 8000);
    return () => clearTimeout(fallback);
  }, []);

  const handleVideoEnded = () => fadeOut.current();

  const handleVideoError = () => {
    setVideoError(true);
    setIsLoading(false);
    setTimeout(() => onLoadingComplete(), 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-[450ms] ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Full-screen video layer */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            ref={videoRef}
            key={isMobile ? 'mobile' : 'desktop'}
            autoPlay
            muted
            playsInline
            onError={handleVideoError}
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover"
          >
            <source src={isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <span className="text-white text-2xl md:text-3xl font-bold tracking-wider animate-pulse px-6">
              SOUNDWVV
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
