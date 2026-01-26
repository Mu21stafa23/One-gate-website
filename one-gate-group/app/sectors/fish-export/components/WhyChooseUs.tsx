
"use client"

import { useLanguage } from '@/app/context/LanguageContext';

const items = {
  en: [
    {
      title: 'Diverse Fish Sources (Marine & Nile)',
      description: 'Supplying multiple markets with both marine and Nile resources, ensuring supply diversity.'
    },
    {
      title: 'High & Scalable Export Capacity',
      description: 'Our infrastructure supports large export volumes with the ability to scale as needed.'
    },
    {
      title: 'Strict Commitment to Global Quality',
      description: 'We apply internationally certified quality and health protocols to ensure product safety.'
    },
    {
      title: 'Operational Expertise in Export & Logistics',
      description: 'Our teams are trained in packing, cooling, and international shipping procedures.'
    },
    {
      title: 'Stable & Growing Demand Abroad',
      description: 'A marketing network and distribution partners enable stable entry into new markets.'
    },
  ],
  ar: [
    {
      title: 'تنوع مصادر الأسماك (بحرية ونيلية)',
      description: 'تغطية أسواق متعددة من موارد بحرية ونيلية مع ضمان تنوع الإمدادات.'
    },
    {
      title: 'قدرة تصديرية عالية وقابلة للتوسع',
      description: 'بنيتنا التحتية تدعم أحجام تصدير كبيرة مع إمكانية التوسع حسب الطلب.'
    },
    {
      title: 'التزام صارم بمعايير الجودة العالمية',
      description: 'نطبق بروتوكولات جودة وصحة معتمدة دوليًا لضمان سلامة المنتجات.'
    },
    {
      title: 'خبرة تشغيلية في التصدير والخدمات اللوجستية',
      description: 'فرق تشغيلية مدربة على إجراءات التعبئة والتبريد والشحن الدولي.'
    },
    {
      title: 'طلب متزايد ومستقر في الأسواق الخارجية',
      description: 'شبكة تسويق وشركاء توزيع تتيح دخول أسواق جديدة بثبات.'
    },
  ]
};

const sectionTitle = {
  en: 'Why Invest With Us?',
  ar: 'لماذا الاستثمار معنا؟'
};
const sectionDesc = {
  en: 'Discover why we are a trusted partner in the fish export market.',
  ar: 'اكتشف الأسباب التي تجعلنا شريكًا موثوقًا في سوق تصدير الأسماك.'
};

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  return (
    <section className="relative isolate overflow-hidden bg-[#101828] px-6 py-24 sm:py-32" dir={dir}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-white mb-6">{sectionTitle[language]}</h2>
          <p className="mt-4 text-xl text-gray-200 mb-10">{sectionDesc[language]}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 xl:gap-16 justify-center items-stretch">
          {items[language].map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-gray-700 bg-[#1A2233] shadow-xl p-10 min-h-[280px] max-w-[400px] mx-auto"
              dir={dir}
            >
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white text-2xl font-bold mr-4">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-lg text-gray-300 flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}