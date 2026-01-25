'use client'

import { useLanguage } from '@/app/context/LanguageContext';

const aboutData = {
  en: {
    title: "About Fish Export",
    description: "We specialize in exporting premium seafood products, ensuring freshness and quality from source to destination. Our logistics and handling processes guarantee that our fish products meet international standards."
  },
  ar: {
    title: "عن تصدير الأسماك",
    description: "نحن متخصصون في تصدير منتجات المأكولات البحرية عالية الجودة، مع ضمان النضارة والجودة من المصدر إلى الوجهة. تضمن عملياتنا اللوجستية والتعامل أن منتجاتنا من الأسماك تلبي المعايير الدولية."
  }
};

export default function About() {
  const { language } = useLanguage();
  const text = aboutData[language];

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">{text.description}</p>
    </div>
  );
}
