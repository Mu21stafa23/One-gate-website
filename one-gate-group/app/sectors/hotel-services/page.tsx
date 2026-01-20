'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Image from 'next/image';
import hotelImage from '@/app/assets/images/sectors/hotel.jpg';

export default function HotelServicesPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Hotel Services",
      description: "Premium hospitality and accommodation solutions.",
      details: "We offer comprehensive hotel management services and hospitality solutions, delivering exceptional guest experiences and operational excellence.",
    },
    ar: {
      title: "خدمات الفنادق",
      description: "حلول ضيافة وإقامة متميزة.",
      details: "نحن نقدم خدمات إدارة فندقية شاملة وحلول ضيافة، ونقدم تجارب استثنائية للضيوف وتميز تشغيلي.",
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
              src={hotelImage}
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
