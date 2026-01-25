'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import oneGateGroupLogo from '@/app/assets/images/logos/logo onegate.png';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1; // Increase by 1% every 50ms to reach 100% in 5 seconds
      });
    }, 50);

    // After 4.5 seconds, start fade out
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    // After 5 seconds (including fade), call onFinish
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="animate-pulse">
          <Image
            src={oneGateGroupLogo}
            alt="One Gate Group"
            width={400}
            height={200}
            priority
            className="w-auto h-auto max-w-md"
          />
        </div>
        
        {/* Welcome Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 animate-pulse">
          Welcome
        </h1>
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-linear-to-r from-blue-500 to-blue-700 transition-all duration-100 ease-linear rounded-full w-(--progress)"
            style={{ '--progress': `${progress}%` } as React.CSSProperties}
          ></div>
        </div>
      </div>
    </div>
  );
}
