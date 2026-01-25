'use client'

import { useLanguage } from '@/app/context/LanguageContext';

const visionData = {
  en: {
    title: "Our Vision",
    description: "To be the leading provider of high-quality seafood exports, recognized for our commitment to sustainability, freshness, and customer satisfaction."
  },
  ar: {
    title: "رؤيتنا",
    description: "أن نكون المزود الرائد لتصدير المأكولات البحرية عالية الجودة، مع الالتزام بالاستدامة والنضارة ورضا العملاء."
  }
};

export default function Vision() {
  const { language } = useLanguage();
  const text = visionData[language];

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">{text.description}</p>
    </div>
  );
}
