'use client'

import Image from 'next/image';
import coldStorageImage from '@/app/assets/images/sectors/Residential and Industrial Cooling Systems _ Fogco.jpg';
import { useLanguage } from '@/app/context/LanguageContext';
import { heroData } from '../data/heroData';

export default function Hero() {
  const { language } = useLanguage();
  const text = heroData[language];

  return (
    <section className="relative isolate h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)] opacity-30" />
      <div className="absolute inset-y-0 right-1/2 -z-20 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-50 shadow-xl ring-1 shadow-gray-200/50 ring-gray-200/50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={coldStorageImage}
          alt={text.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            {text.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-medium">
            {text.subtitle}
          </p>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8">
            {text.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white text-base sm:text-lg font-medium hover:underline hover:text-blue-300 transition-colors duration-200"
            >
              Contact Us
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
