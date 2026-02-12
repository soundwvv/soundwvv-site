import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie JSON animation
    fetch('https://customer-assets.emergentagent.com/job_beat-space/artifacts/qjtgsuow_Soundwav_Loop_WhiteLogo.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));

    // Loading duration (4-4.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 4250);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Lottie Animation */}
      {animationData && (
        <div className="relative z-10 w-96 h-96 md:w-[32rem] md:h-[32rem]">
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
