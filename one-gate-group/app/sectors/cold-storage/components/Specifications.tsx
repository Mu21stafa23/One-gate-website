'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import { specificationsData } from '../data/specificationsData';

export default function Specifications() {
  const { language } = useLanguage();
  const text = specificationsData[language];

  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.500),transparent)] opacity-30 dark:opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-50 dark:bg-gray-900 shadow-xl ring-1 shadow-gray-200/50 dark:shadow-indigo-500/5 ring-gray-200/50 dark:ring-white/5 sm:mr-0 lg:mr-0 xl:origin-center" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {text.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {text.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {text.specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg group-hover:from-blue-500 group-hover:to-blue-600 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {spec.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-sm">
                  {spec.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {spec.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
