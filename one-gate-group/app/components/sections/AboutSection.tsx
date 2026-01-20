'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import { useEffect } from 'react';
import AOS from 'aos';

export default function AboutSection() {
  const { t } = useLanguage();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 
          className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
        >
          {t('about.title')}
        </h2>
        <p 
          className="text-lg text-gray-700 mb-4 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          {t('about.paragraph1')}
        </p>
        <p 
          className="text-lg text-gray-700 mb-4 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          {t('about.paragraph2')}
        </p>
      </div>
    </section>
  );
}
