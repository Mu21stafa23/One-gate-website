import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import Products from './Products';
import QualityProcessing from './QualityProcessing';
import LogisticsExport from './LogisticsExport';
import PartnershipInvestment from './PartnershipInvestment';
import Divider from '@/app/components/ui/Divider';

export default function About() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-white dark:bg-gray-900" dir="rtl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.500),transparent)] opacity-30 dark:opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-50 dark:bg-gray-900 shadow-xl ring-1 shadow-gray-200/50 dark:shadow-indigo-500/5 ring-gray-200/50 dark:ring-white/5 sm:mr-0 lg:mr-0 xl:origin-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="0"><AboutUs /></div>
          <Divider textKey="divider.whyChooseUs" />
          <div data-aos="fade-up" data-aos-delay="100"><WhyChooseUs /></div>
          <Divider textKey="divider.products" />
          <div data-aos="fade-up" data-aos-delay="200"><Products /></div>
          <Divider textKey="divider.qualityProcessing" />
          <div data-aos="fade-up" data-aos-delay="300"><QualityProcessing /></div>
          <Divider textKey="divider.logisticsExport" />
          <div data-aos="fade-up" data-aos-delay="400"><LogisticsExport /></div>
          <Divider textKey="divider.partnershipInvestment" />
          <div data-aos="fade-up" data-aos-delay="500"><PartnershipInvestment /></div>
        </div>
      </div>
    </section>
  );
}
