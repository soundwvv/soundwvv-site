import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    console.log('LoadingScreen: Initializing Lottie animation...');
    
    // Try JSON first, fallback to .lottie
    const jsonUrl = 'https://customer-assets.emergentagent.com/job_beat-space/artifacts/9pz9qizr_Soundwav_Loop_WhiteLogo.json';
    const lottieUrl = 'https://customer-assets.emergentagent.com/job_beat-space/artifacts/x84ioh1w_Soundwav_Loop_WhiteLogo.lottie';

    fetch(jsonUrl)
      .then(response => {
        console.log('LoadingScreen: JSON fetch response:', response.status);
        if (!response.ok) throw new Error(`JSON fetch failed: ${response.status}`);
        return response.json();
      })
      .then(data => {
        console.log('LoadingScreen: JSON parsed successfully, data:', data);
        setAnimationData(data);
      })
      .catch(error => {
        console.error('LoadingScreen: JSON load failed, trying .lottie fallback:', error);
        return fetch(lottieUrl)
          .then(response => {
            console.log('LoadingScreen: .lottie fetch response:', response.status);
            return response.json();
          })
          .then(data => {
            console.log('LoadingScreen: .lottie parsed successfully');
            setAnimationData(data);
          })
          .catch(fallbackError => {
            console.error('LoadingScreen: Both JSON and .lottie failed to load:', fallbackError);
          });
      });

    // Loading duration (4.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 4500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  useEffect(() => {
    if (animationData) {
      console.log('LoadingScreen: Animation data loaded, Lottie should be rendering');
    }
  }, [animationData]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ display: isLoading ? 'flex' : 'none' }}
    >
      {/* Starry Wave Video Background - z-index: 0 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="https://customer-assets.emergentagent.com/job_beat-space/artifacts/13pn19bu_BLACKSTARRYWAVES10296176-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Lottie Animation - z-index: 2, centered, 270px */}
      {animationData ? (
        <div 
          ref={lottieRef}
          style={{ 
            position: 'absolute',
            width: '270px', 
            height: '270px',
            opacity: 1,
            zIndex: 2,
            display: 'block',
            visibility: 'visible'
          }}
        >
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
              renderer: 'svg'
            }}
            style={{ 
              width: '100%', 
              height: '100%',
              opacity: 1,
              background: 'transparent'
            }}
            onDOMLoaded={() => console.log('LoadingScreen: Lottie DOM loaded')}
            onComplete={() => console.log('LoadingScreen: Lottie animation complete')}
            onLoopComplete={() => console.log('LoadingScreen: Lottie loop complete')}
            onEnterFrame={() => {
              // Only log first frame to avoid spam
              if (!lottieRef.current?.logged) {
                console.log('LoadingScreen: Lottie is animating');
                if (lottieRef.current) lottieRef.current.logged = true;
              }
            }}
          />
        </div>
      ) : (
        <div style={{ position: 'absolute', color: 'white', zIndex: 2 }}>
          Loading animation...
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
