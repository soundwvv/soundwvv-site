import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Fade out duration
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Starry Wave Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/iscafoyd_Soundwav_Loop_WhiteLogo.mp4" type="video/mp4" />
      </video>

      {/* Logo Animation Overlay */}
      <div className="relative z-10 flex flex-col items-center">
        {/* The video already contains the logo, so we just need to display it */}
        <div className="text-white text-6xl font-bold tracking-wider animate-pulse">
          {/* Logo is in the video */}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
