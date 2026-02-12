import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationData, setAnimationData] = useState(null);
  const [useLottieFile, setUseLottieFile] = useState(true);

  useEffect(() => {
    // Try to use .lottie file first, fallback to JSON
    const lottieUrl = 'https://customer-assets.emergentagent.com/job_beat-space/artifacts/43439lba_Soundwav_V4_WhiteLogo.lottie';
    const jsonUrl = 'https://customer-assets.emergentagent.com/job_beat-space/artifacts/gp0bbfk8_Soundwav_Loop_WhiteLogo.json';

    // Try .lottie file first
    fetch(lottieUrl)
      .then(response => {
        if (!response.ok) throw new Error('Lottie file failed');
        return response.blob();
      })
      .then(blob => {
        // .lottie files can be used directly with lottie-web
        // For now, fallback to JSON as lottie-react may not support .lottie directly
        throw new Error('Using JSON fallback');
      })
      .catch(() => {
        // Fallback to JSON
        setUseLottieFile(false);
        return fetch(jsonUrl)
          .then(response => response.json())
          .then(data => {
            setAnimationData(data);
          });
      })
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
      {/* Starry Wave Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/zpoxeqjy_BLACKSTARRYWAVES10296176-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Lottie Animation - Centered with explicit size and high z-index, transparent background */}
      {animationData && (
        <div className="relative z-20" style={{ width: '500px', height: '500px' }}>
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
