'use client'

import Image from 'next/image';
import Link from 'next/link';
import { partnersData } from '@/app/data/partnersData';
import { useLanguage } from '@/app/context/LanguageContext';
import { useEffect } from 'react';
import AOS from 'aos';

export default function PartnersSection() {
  const { t } = useLanguage();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            {t('partners.title')}
          </h2>
          <p 
            className="text-lg text-gray-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Logo Loop Container */}
        <div 
          className="relative overflow-hidden py-8"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{ pointerEvents: 'none' }}
        >
          {/* Scrolling Logos */}
          <div className="flex animate-scroll gap-16 items-center min-w-max" style={{ animationPlayState: 'running' }}>
            {/* First set of logos */}
            {partnersData.partners.map((partner) => (
              <div
                key={`${partner.id}-1`}
                className="flex-shrink-0"
              >
                <div className="relative h-24 w-44">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partnersData.partners.map((partner) => (
              <div
                key={`${partner.id}-2`}
                className="flex-shrink-0"
              >
                <div className="relative h-24 w-44">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
