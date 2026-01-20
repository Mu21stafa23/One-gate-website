'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Image from 'next/image';
import coldStorageImage from '@/app/assets/images/sectors/Residential and Industrial Cooling Systems _ Fogco.jpg';

export default function ColdStoragePage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Cold Storage",
      description: "State-of-the-art temperature-controlled storage solutions.",
      details: "Our cold storage facilities offer advanced temperature-controlled environments for preserving perishable goods, ensuring quality and freshness.",
    },
    ar: {
      title: "التخزين البارد",
      description: "حلول تخزين متطورة يتم التحكم في درجة حرارتها.",
      details: "توفر منشآت التخزين البارد لدينا بيئات متقدمة يتم التحكم في درجة حرارتها للحفاظ على السلع القابلة للتلف، مما يضمن الجودة والنضارة.",
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
              src={coldStorageImage}
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
