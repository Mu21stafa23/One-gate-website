'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export default function MeatProcessingPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Meat Processing",
      description: "Quality meat processing and distribution services.",
      details: "We provide professional meat processing, packaging, and distribution services with strict adherence to food safety and quality standards.",
    },
    ar: {
      title: "معالجة اللحوم",
      description: "خدمات معالجة وتوزيع اللحوم عالية الجودة.",
      details: "نحن نقدم خدمات احترافية لمعالجة اللحوم وتعبئتها وتوزيعها مع الالتزام الصارم بمعايير سلامة الأغذية والجودة.",
    }
  };

  const text = content[language];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{text.title}</h1>
            <p className="text-xl text-gray-600">{text.description}</p>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">{text.details}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
