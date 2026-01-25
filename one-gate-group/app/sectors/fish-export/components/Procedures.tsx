'use client'

import { useLanguage } from '@/app/context/LanguageContext';

const proceduresData = {
  en: {
    title: "Export Procedures",
    steps: [
      "Sourcing and quality inspection",
      "Custom packaging and labeling",
      "Cold chain logistics",
      "Documentation and compliance",
      "International shipping"
    ]
  },
  ar: {
    title: "إجراءات التصدير",
    steps: [
      "التوريد وفحص الجودة",
      "التعبئة والتغليف المخصص",
      "الخدمات اللوجستية لسلسلة التبريد",
      "التوثيق والامتثال",
      "الشحن الدولي"
    ]
  }
};

export default function Procedures() {
  const { language } = useLanguage();
  const text = proceduresData[language];

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
      <ol className="list-decimal pl-6 text-lg text-gray-700 dark:text-gray-300">
        {text.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
