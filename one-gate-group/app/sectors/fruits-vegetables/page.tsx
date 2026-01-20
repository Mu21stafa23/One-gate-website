'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Image from 'next/image';
import fruitsVegetablesImage from '@/app/assets/images/sectors/How To Plan A Vegetable Garden In 7 Easy Steps.jpg';

export default function FruitsVegetablesPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Fruits & Vegetables",
      description: "Fresh produce distribution and export services.",
      details: "We provide comprehensive distribution and export services for fresh fruits and vegetables, ensuring farm-to-market excellence.",
    },
    ar: {
      title: "الفواكه والخضروات",
      description: "خدمات توزيع وتصدير المنتجات الطازجة.",
      details: "نحن نقدم خدمات شاملة لتوزيع وتصدير الفواكه والخضروات الطازجة، مما يضمن التميز من المزرعة إلى السوق.",
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
              src={fruitsVegetablesImage}
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
