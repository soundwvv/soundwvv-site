import React, { useState, useRef, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Start fade out at 4.0 seconds (video is 4.5s long)
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 450); // 0.45s fade duration
    }, 4000); // Start fading at 4.0 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // Handle video error - skip loading immediately
  const handleVideoError = () => {
    setVideoError(true);
    setIsLoading(false);
    setTimeout(() => {
      onLoadingComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-[450ms] ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Layer 1: Full-screen star background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0a0a0f 50%, #000000 100%)',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Layer 2: Centered logo/video */}
      <div className="absolute inset-0 flex items-center justify-center">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onError={handleVideoError}
            className="w-[65%] h-auto md:w-full md:h-full md:object-cover"
            style={{ maxWidth: '100vw' }}
          >
            <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/rip6bogn_soundwvv_preloader_final2.mp4" type="video/mp4" />
          </video>
        ) : (
          <span className="text-white text-2xl md:text-3xl font-bold tracking-wider animate-pulse px-6">
            SOUNDWVV
          </span>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
