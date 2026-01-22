'use client'

import Navbar from '@/app/components/layout/Navbar'
import Divider from '@/app/components/ui/Divider'
import { useLanguage } from '@/app/context/LanguageContext'
import { useEffect } from 'react'
import AOS from 'aos'

export default function Hero() {
  const { t } = useLanguage()
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <div className="relative w-full min-h-screen h-screen flex items-center justify-center overflow-hidden bg-[url('/images/hero/hero%20sudan.jpg')] bg-cover bg-center sm:bg-fixed">
        <Navbar />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0 transition-colors duration-300" />
        
        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-0">
          <div className="max-w-4xl text-center w-full">
            <h1 
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-shadow-white leading-tight mb-6 sm:mb-8 px-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t('hero.title')}
            </h1>
            {/* About Company Button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
              <a 
                href="#about"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-lg text-white text-base sm:text-lg font-semibold hover:bg-gray-200 hover:text-black transition-all duration-300 w-full sm:w-auto sm:min-w-64 max-w-xs sm:max-w-none"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span>{t('hero.cta')}</span>
              </a>
              <a 
                href="#contact"
                className="text-white text-xl sm:text-2xl font-bold underline hover:text-yellow-400 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Be With Us
              </a>
            </div>
          </div>
        </div>

      </div>
      <Divider textKey="divider.aboutUs" />
    </>
  )
}
