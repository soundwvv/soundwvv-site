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
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-[450ms] flex items-center justify-center ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onError={handleVideoError}
          className="w-[75%] h-auto max-w-full md:w-full md:h-full object-contain md:object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/rip6bogn_soundwvv_preloader_final2.mp4" type="video/mp4" />
        </video>
      ) : (
        <span className="text-white text-2xl md:text-3xl font-bold tracking-wider animate-pulse px-6">
          SOUNDWVV
        </span>
      )}
    </div>
  );
};

export default LoadingScreen;
