import { useLanguage } from '@/app/context/LanguageContext';

const content = {
  en: {
    title: 'Quality & Processing',
    intro: 'We rely on modern systems for:',
    steps: ['Sorting & cleaning', 'Quick freezing', 'Packing & packaging', 'Cold storage & transport'],
    commitment: 'With full commitment to:',
    requirements: ['Food safety', 'Health certificates', 'Importing country requirements']
  },
  ar: {
    title: 'الجودة والمعالجة',
    intro: 'نعتمد أنظمة حديثة في:',
    steps: ['الفرز والتنظيف', 'التجميد السريع', 'التعبئة والتغليف', 'التخزين والنقل المبرد'],
    commitment: 'مع الالتزام الكامل باشتراطات:',
    requirements: ['السلامة الغذائية', 'الشهادات الصحية', 'متطلبات الدول المستوردة']
  }
};

export default function QualityProcessing() {
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
          {t.steps.map((step, i) => <li key={i}>{step}</li>)}
        </ul>

        <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">{t.commitment}</p>
        <ul className="list-disc text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
          {t.requirements.map((req, i) => <li key={i}>{req}</li>)}
        </ul>
      </div>
    </div>
  );
}