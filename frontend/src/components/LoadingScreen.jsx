import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie JSON animation
    fetch('https://customer-assets.emergentagent.com/job_beat-space/artifacts/c384i480_Soundwav_Loop_WhiteLogo.json')
      .then(response => response.json())
      .then(data => {
        setAnimationData(data);
      })
      .catch(error => console.error('Error loading animation:', error));

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
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/n4d7d21v_BLACKSTARRYWAVES10296176-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Lottie Animation - Centered with explicit size and high z-index */}
      {animationData && (
        <div className="relative z-20" style={{ width: '400px', height: '400px' }}>
          <Lottie 
            animationData={animationData} 
            loop={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
