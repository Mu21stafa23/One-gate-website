'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import { useEffect } from 'react';
import AOS from 'aos';

export default function LocationsSection() {
  const { t } = useLanguage();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  
  // Khartoum International Airport coordinates
  const latitude = 15.5897;
  const longitude = 32.5532;

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p 
            className="text-lg text-gray-700 dark:text-gray-300 mb-8"
            data-aos="fade-up"
          >
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Map Container */}
        <div 
          className="relative border-4 border-gray-800 dark:border-gray-600 rounded-lg overflow-hidden transition-colors duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Legend */}
          <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10 max-w-xs transition-colors duration-300">
            <h3 className="font-bold text-lg mb-4 dark:text-white">{t('locations.legend')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{t('locations.companyLocation')}</span>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Khartoum+International+Airport,Sudan&zoom=15`}
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Khartoum International Airport - Company Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
