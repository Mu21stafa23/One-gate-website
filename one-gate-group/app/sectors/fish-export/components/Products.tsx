import { useLanguage } from '@/app/context/LanguageContext';

const content = {
  en: {
    title: 'Our Products',
    intro: 'We offer a wide range of fish to meet the needs of different markets:',
    marine: 'Marine fish: Tuna – Sardine – Grouper – Kingfish – Shaour – and more',
    nile: 'Nile fish: Tilapia – Catfish – Bayad – Qashr Bayad',
    available: 'All products are available as:',
    types: ['Fresh', 'Frozen', 'Fillet', 'With certified export specifications']
  },
  ar: {
    title: 'منتجاتنا',
    intro: 'نوفر مجموعة واسعة من الأسماك لتلبية احتياجات الأسواق المختلفة:',
    marine: 'الأسماك البحرية: تونة – سردين – هامور – كنعـد – شعور – وغيرها',
    nile: 'الأسماك النيلية: بلطي – قرموط – بياض – قشر بياض',
    available: 'جميع المنتجات متاحة بأشكال:',
    types: ['طازجة', 'مجمدة', 'فيليه', 'وبمواصفات تصديرية معتمدة']
  }
};

export default function Products() {
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
          <li>{t.marine}</li>
          <li>{t.nile}</li>
        </ul>

        <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">{t.available}</p>
        <ul className="list-disc text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
          {t.types.map((type, i) => <li key={i}>{type}</li>)}
        </ul>
      </div>
    </div>
  );
}