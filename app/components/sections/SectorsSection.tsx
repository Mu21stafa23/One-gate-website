'use client'

import Image from 'next/image';
import Link from 'next/link';
import { sectorsData } from '@/app/data/sectorsData';
import { useLanguage } from '@/app/context/LanguageContext';
import { useEffect } from 'react';
import AOS from 'aos';

export default function SectorsSection() {
  const { t } = useLanguage();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  
  // Map sector IDs to translation keys
  const getSectorTranslation = (sectorId: number) => {
    const translationMap: { [key: number]: { name: string; desc: string } } = {
      1: { name: 'sectors.airport', desc: 'sectors.airportDesc' },
      2: { name: 'sectors.coldStorage', desc: 'sectors.coldStorageDesc' },
      3: { name: 'sectors.fishExport', desc: 'sectors.fishExportDesc' },
      4: { name: 'sectors.fruitsVeg', desc: 'sectors.fruitsVegDesc' },
      5: { name: 'sectors.hotel', desc: 'sectors.hotelDesc' },
      6: { name: 'sectors.marketing', desc: 'sectors.marketingDesc' },
    };
    return translationMap[sectorId];
  };
  
  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4"
            data-aos="fade-up"
          >
            {t('sectors.title')}
          </h2>
          <p 
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t('sectors.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsData.sectors.map((sector, index) => (
            <Link 
              key={sector.id}
              href={sector.href}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-80 block"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gray-800">
                <Image
                  src={sector.image}
                  alt={sector.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center p-6 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  {t(getSectorTranslation(sector.id).name)}
                </h3>
                <p className="text-base lg:text-lg opacity-90">
                  {t(getSectorTranslation(sector.id).desc)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
