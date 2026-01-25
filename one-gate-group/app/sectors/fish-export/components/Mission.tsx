'use client'

import { useLanguage } from '@/app/context/LanguageContext';

const missionData = {
  en: {
    title: "Our Mission",
    description: "To deliver the freshest and highest quality seafood to global markets, while maintaining sustainable practices and exceeding customer expectations."
  },
  ar: {
    title: "مهمتنا",
    description: "تقديم المأكولات البحرية الأكثر نضارة وجودة للأسواق العالمية، مع الحفاظ على ممارسات الاستدامة وتجاوز توقعات العملاء."
  }
};

export default function Mission() {
  const { language } = useLanguage();
  const text = missionData[language];

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">{text.description}</p>
    </div>
  );
}
