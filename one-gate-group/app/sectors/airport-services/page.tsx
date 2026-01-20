'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Image from 'next/image';
import airportImage from '@/app/assets/images/sectors/Airport Shuttles Service in Auckland _ Airport Auckland Transport.jpg';

export default function AirportServicesPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Airport Services",
      description: "Comprehensive aviation and ground handling services.",
      details: "We provide professional airport services including ground handling, passenger services, cargo handling, and aviation support services.",
    },
    ar: {
      title: "خدمات المطارات",
      description: "خدمات طيران وخدمات أرضية شاملة.",
      details: "نقدم خدمات مطارات احترافية تشمل الخدمات الأرضية وخدمات الركاب والشحن وخدمات دعم الطيران.",
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
              src={airportImage}
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
