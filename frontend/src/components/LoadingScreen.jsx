import React, { useState, useRef, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-[450ms] ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/rip6bogn_soundwvv_preloader_final2.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingScreen;
