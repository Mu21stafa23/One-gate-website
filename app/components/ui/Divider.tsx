'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import { useEffect } from 'react';
import AOS from 'aos';

interface DividerProps {
  textKey: string;
}

export default function Divider({ textKey }: DividerProps) {
  const { t } = useLanguage();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  
  return (
    <div className="bg-white dark:bg-gray-900 py-12 lg:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="relative flex items-center justify-center"
          data-aos="fade-up"
        >
          {/* Black line */}
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-black dark:bg-gray-600"></div>
          
          {/* Text in the middle */}
          <span className="relative bg-white dark:bg-gray-900 px-6 text-lg lg:text-xl font-bold text-black dark:text-white">
            {t(textKey)}
          </span>
        </div>
      </div>
    </div>
  );
}
