'use client'

import { useLanguage } from '@/app/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 animate-fade-in-delay">
          {t('hero.subtitle')}
        </p>
        
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 animate-fade-in-delay-2">
          {t('hero.cta')}
        </button>
      </div>
    </div>
  );
}
