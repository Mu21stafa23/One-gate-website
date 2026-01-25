'use client'

import { useLanguage } from '@/app/context/LanguageContext';

const specificationsData = {
  en: {
    title: "Technical Specifications",
    specs: [
      "Temperature-controlled storage",
      "HACCP and ISO certified facilities",
      "Traceability and quality control",
      "Eco-friendly packaging options"
    ]
  },
  ar: {
    title: "المواصفات الفنية",
    specs: [
      "تخزين بدرجة حرارة مضبوطة",
      "منشآت معتمدة HACCP و ISO",
      "إمكانية التتبع ومراقبة الجودة",
      "خيارات تغليف صديقة للبيئة"
    ]
  }
};

export default function Specifications() {
  const { language } = useLanguage();
  const text = specificationsData[language];

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300">
        {text.specs.map((spec, idx) => (
          <li key={idx}>{spec}</li>
        ))}
      </ul>
    </div>
  );
}
