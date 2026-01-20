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
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[url('/images/hero/hero%20sudan.jpg')] bg-cover bg-center bg-fixed">
        <Navbar />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-12">
          <div className="max-w-4xl text-center">
            <h1 
              className="text-white text-7xl font-bold text-shadow-white leading-tight mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t('hero.title')}
            </h1>
            {/* About Company Button */}
            <button 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white rounded-lg text-white text-lg font-semibold hover:bg-gray-200 hover:text-black transition-all duration-300 min-w-64"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span>{t('hero.cta')}</span>
            </button>
          </div>
        </div>

      </div>
      <Divider textKey="divider.aboutUs" />
    </>
  )
}
