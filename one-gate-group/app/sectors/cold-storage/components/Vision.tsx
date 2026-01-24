'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import { Telescope } from 'lucide-react';
import { visionData } from '../data/visionData';

export default function Vision() {
  const { language } = useLanguage();
  const text = visionData[language];

  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.500),transparent)] opacity-30 dark:opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-50 dark:bg-gray-900 shadow-xl ring-1 shadow-gray-200/50 dark:shadow-indigo-500/5 ring-gray-200/50 dark:ring-white/5 sm:mr-0 lg:mr-0 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <Telescope className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{text.title}</h2>
        </div>
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 dark:text-white sm:text-2xl/9">
            <p>
              "{text.description}"
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
