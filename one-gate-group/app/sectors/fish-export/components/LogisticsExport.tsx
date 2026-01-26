import { useLanguage } from '@/app/context/LanguageContext';

const content = {
  en: {
    title: 'Export & Logistics Services',
    intro: 'We provide comprehensive solutions for export and logistics, including:',
    items: ['Sea & air shipping', 'Cold chain management', 'On-time delivery', 'Flexibility for large orders']
  },
  ar: {
    title: 'التصدير والخدمات اللوجستية',
    intro: 'نقدم حلول شاملة للتصدير والخدمات اللوجستية تشمل:',
    items: ['شحن بحري وجوي', 'إدارة سلسلة التبريد (Cold Chain)', 'التزام بمواعيد التسليم', 'مرونة في تلبية الطلبات الكبيرة']
  }
};

export default function LogisticsExport() {
  const { language } = useLanguage();
  const t = content[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 text-center" dir={dir}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
        {t.title}
      </h2>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
        {t.intro}
      </p>

      <div className={`mt-8 max-w-xl mx-auto text-${dir === 'rtl' ? 'right' : 'left'}`} style={{ direction: dir }}>
        <ul className="list-disc text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
          {t.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}