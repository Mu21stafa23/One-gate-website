import { useLanguage } from '@/app/context/LanguageContext';

const content = {
  en: {
    title: 'Partnership & Investment Model',
    intro: 'We welcome:',
    partners: ['Food sector investors', 'International distribution partners', 'Importers & wholesalers', 'Supply chains & central markets'],
    future: 'With future expansion opportunities in:',
    opportunities: ['Increasing production capacity', 'Entering new markets', 'Developing value-added products']
  },
  ar: {
    title: 'نموذج الشراكة والاستثمار',
    intro: 'نفتح المجال أمام:',
    partners: ['مستثمرين في قطاع الغذاء', 'شركاء توزيع دوليين', 'مستوردين وتجار جملة', 'سلاسل إمداد وأسواق مركزية'],
    future: 'مع فرص توسع مستقبلية في:',
    opportunities: ['زيادة الطاقة الإنتاجية', 'دخول أسواق جديدة', 'تطوير منتجات ذات قيمة مضافة']
  }
};

export default function PartnershipInvestment() {
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
          {t.partners.map((p, i) => <li key={i}>{p}</li>)}
        </ul>

        <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">{t.future}</p>
        <ul className="list-disc text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
          {t.opportunities.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
      </div>
    </div>
  );
}