'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Image from 'next/image';
import marketingImage from '@/app/assets/images/sectors/Social Media Marketing.jpg';

export default function MarketingAdvertisingPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Marketing & Advertising",
      description: "Comprehensive strategies to boost your brand presence.",
      details: "We provide full-service marketing and advertising solutions including digital marketing, brand strategy, creative campaigns, and media planning.",
    },
    ar: {
      title: "التسويق والإعلان",
      description: "استراتيجيات شاملة لتعزيز حضور علامتك التجارية.",
      details: "نحن نقدم حلول تسويق وإعلان متكاملة بما في ذلك التسويق الرقمي واستراتيجية العلامة التجارية والحملات الإبداعية وتخطيط الوسائط.",
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
              src={marketingImage}
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
