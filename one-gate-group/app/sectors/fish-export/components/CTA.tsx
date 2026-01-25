'use client'

import { useLanguage } from '@/app/context/LanguageContext';

const ctaData = {
  en: {
    title: "Export with Us",
    description: "Contact us today to learn more about our seafood export solutions and how we can help you reach global markets.",
    button: "Contact Us"
  },
  ar: {
    title: "صدر معنا",
    description: "تواصل معنا اليوم لمعرفة المزيد عن حلول تصدير المأكولات البحرية وكيف يمكننا مساعدتك للوصول إلى الأسواق العالمية.",
    button: "اتصل بنا"
  }
};

export default function CTA() {
  const { language } = useLanguage();
  const text = ctaData[language];

  return (
    <div className="py-8 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{text.description}</p>
      <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
        {text.button}
      </a>
    </div>
  );
}
