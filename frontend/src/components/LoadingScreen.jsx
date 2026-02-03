import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading duration (3 seconds)
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
        <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/ay9ymt33_BLACKSTARRYWAVES10296176-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Logo Animation - Smaller and Centered */}
      <div className="relative z-10 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-64 h-64 md:w-80 md:h-80 object-contain"
        >
          <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/iscafoyd_Soundwav_Loop_WhiteLogo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default LoadingScreen;
