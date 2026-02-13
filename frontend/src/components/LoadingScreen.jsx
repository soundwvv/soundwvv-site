import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Try .lottie file first, fallback to JSON
    const lottieUrl = 'https://customer-assets.emergentagent.com/job_beat-space/artifacts/dce8yjj8_Soundwav_Loop_WhiteLogo.lottie';
    const jsonUrl = 'https://customer-assets.emergentagent.com/job_beat-space/artifacts/1z3iridx_Soundwav_Loop_WhiteLogo.json';

    // Attempt to load .lottie, but since lottie-react may not support it directly, fallback to JSON
    fetch(jsonUrl)
      .then(response => response.json())
      .then(data => {
        setAnimationData(data);
      })
      .catch(error => {
        console.error('Error loading animation:', error);
      });

    // Loading duration (4-5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 4500);

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
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/3lp46phi_BLACKSTARRYWAVES10296176-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Lottie Animation - Centered, explicit size, 100% opacity, high z-index */}
      {animationData && (
        <div 
          className="relative z-30" 
          style={{ 
            width: '300px', 
            height: '300px',
            opacity: 1.0
          }}
        >
          <Lottie 
            animationData={animationData} 
            loop={true}
            style={{ 
              width: '100%', 
              height: '100%',
              opacity: 1.0
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
