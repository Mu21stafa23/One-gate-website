'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Image from 'next/image';
import fishExportImage from '@/app/assets/images/sectors/Fish at market stock image_ Image of food, ocean, pisces - 13192441.jpg';

export default function FishExportPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Fish Export",
      description: "Quality seafood export with global reach.",
      details: "We specialize in seafood export services, delivering fresh and frozen fish products to international markets with the highest quality standards.",
    },
    ar: {
      title: "تصدير الأسماك",
      description: "تصدير المأكولات البحرية عالية الجودة مع انتشار عالمي.",
      details: "نحن متخصصون في خدمات تصدير المأكولات البحرية، ونقوم بتوصيل منتجات الأسماك الطازجة والمجمدة إلى الأسواق الدولية بأعلى معايير الجودة.",
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
          
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={fishExportImage}
              alt={text.title}
              fill
              className="object-cover"
              priority
            />
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
