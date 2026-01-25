'use client'

import { useLanguage } from '@/app/context/LanguageContext';

const servicesData = {
  en: {
    title: "Our Services",
    items: [
      "Fresh and frozen fish export",
      "Custom packaging solutions",
      "International logistics and shipping",
      "Quality assurance and compliance"
    ]
  },
  ar: {
    title: "خدماتنا",
    items: [
      "تصدير الأسماك الطازجة والمجمدة",
      "حلول التعبئة المخصصة",
      "الخدمات اللوجستية والشحن الدولي",
      "ضمان الجودة والامتثال"
    ]
  }
};

export default function Services() {
  const { language } = useLanguage();
  const text = servicesData[language];

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300">
        {text.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
