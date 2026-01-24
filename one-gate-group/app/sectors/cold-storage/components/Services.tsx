'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const { language } = useLanguage();
  const text = servicesData[language];

  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.500),transparent)] opacity-30 dark:opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-50 dark:bg-gray-900 shadow-xl ring-1 shadow-gray-200/50 dark:shadow-indigo-500/5 ring-gray-200/50 dark:ring-white/5 sm:mr-0 lg:mr-0 xl:origin-center" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {text.title}
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {text.subtitle}
          </p>
        </div>
        <div className="mx-auto mt-10 sm:mt-12 lg:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {text.services.map((service, index) => (
            <div 
              key={index}
              className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm p-8 hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-gray-800/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-7 text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400 flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
