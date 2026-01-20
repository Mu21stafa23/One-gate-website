'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
      // Keep LTR layout for both languages - only change text content
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Keep LTR layout for both languages - only change text content
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translations
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      sector: 'Sector',
      location: 'Location',
      contact: 'Contact Us',
    },
    hero: {
      title: '40 YEARS IN THE FIELD OF DEVELOPING COMMERCIAL, SERVICE PROJECTS',
      subtitle: 'Your trusted partner for comprehensive business solutions',
      cta: 'About US',
    },
    about: {
      title: 'About One Gate Group',
      paragraph1: 'One Gate Group is a leading holding company specializing in providing comprehensive solutions across multiple sectors. With over two decades of experience, we\'ve grown to become a trusted partner for businesses seeking growth and success.',
      paragraph2: 'Our expertise spans across seven major sectors: airport services, cold storage, fish export, fruits and vegetables, hotel services, marketing and advertising, and meat processing. We\'re committed to delivering excellence and driving sustainable growth for our partners.',
    },
    sectors: {
      title: 'Our Sectors',
      subtitle: 'We operate across multiple industries to serve diverse business needs',
      airport: 'Airport Services',
      airportDesc: 'Comprehensive aviation support services',
      hotel: 'Hotel Services',
      hotelDesc: 'Premium hospitality management',
      coldStorage: 'Cold Storage',
      coldStorageDesc: 'State-of-the-art refrigeration facilities',
      fishExport: 'Fish Export',
      fishExportDesc: 'Quality seafood export solutions',
      fruitsVeg: 'Fruits & Vegetables',
      fruitsVegDesc: 'Fresh produce distribution',
      meatProcessing: 'Meat Processing',
      meatProcessingDesc: 'Advanced meat processing facilities',
      marketing: 'Marketing & Advertising',
      marketingDesc: 'Creative marketing solutions',
    },
    partners: {
      title: 'Our Partners',
      subtitle: 'Trusted by leading organizations worldwide',
    },
    locations: {
      title: 'Our Locations',
      subtitle: 'Find us at Khartoum, Sudan.',
      legend: 'Khartoum International Airport',
      companyLocation: 'Company Location',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with One Gate Group for any inquiries or partnerships.',
      firstName: 'First name',
      lastName: 'Last name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone number',
      country: 'Country',
      message: 'Message',
      send: 'Let\'s talk',
      agreeToPolicy: 'By selecting this, you agree to our',
      privacyPolicy: 'privacy policy',
      sending: 'Sending...',
    },
    divider: {
      aboutUs: 'About Us',
      sector: 'Sector',
      partner: 'Partner',
      locations: 'Our Locations',
      contactUs: 'Contact Us',
    },
    footer: {
      company: 'One Gate Group',
      description: 'Your trusted partner for comprehensive business solutions across multiple sectors in Djibouti and the region.',
      quickLinks: 'Quick Links',
      ourSectors: 'Our Sectors',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      home: 'Home',
      about: 'About Us',
      sectors: 'Our Sectors',
      companies: 'Companies',
      contact: 'Contact',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      sector: 'القطاعات',
      location: 'المواقع',
      contact: 'اتصل بنا',
    },
    hero: {
      title: '40 عامًا في مجال تطوير المشاريع التجارية والخدمية',
      subtitle: 'شريكك الموثوق لحلول الأعمال الشاملة',
      cta: 'من نحن',
    },
    about: {
      title: 'حول مجموعة وان جيت',
      paragraph1: 'مجموعة وان جيت هي شركة قابضة رائدة متخصصة في تقديم حلول شاملة عبر قطاعات متعددة. مع أكثر من عقدين من الخبرة، نمونا لنصبح شريكًا موثوقًا للشركات التي تسعى للنمو والنجاح.',
      paragraph2: 'تمتد خبرتنا عبر سبعة قطاعات رئيسية: خدمات المطارات، التخزين البارد، تصدير الأسماك، الفواكه والخضروات، خدمات الفنادق، التسويق والإعلان، ومعالجة اللحوم. نحن ملتزمون بتقديم التميز ودفع النمو المستدام لشركائنا.',
    },
    sectors: {
      title: 'قطاعاتنا',
      subtitle: 'نعمل في صناعات متعددة لخدمة احتياجات الأعمال المتنوعة',
      airport: 'خدمات المطارات',
      airportDesc: 'خدمات دعم الطيران الشاملة',
      hotel: 'خدمات الفنادق',
      hotelDesc: 'إدارة الضيافة المتميزة',
      coldStorage: 'التخزين البارد',
      coldStorageDesc: 'مرافق تبريد حديثة',
      fishExport: 'تصدير الأسماك',
      fishExportDesc: 'حلول تصدير المأكولات البحرية عالية الجودة',
      fruitsVeg: 'الفواكه والخضروات',
      fruitsVegDesc: 'توزيع المنتجات الطازجة',
      meatProcessing: 'معالجة اللحوم',
      meatProcessingDesc: 'مرافق معالجة اللحوم المتقدمة',
      marketing: 'التسويق والإعلان',
      marketingDesc: 'حلول تسويقية إبداعية',
    },
    partners: {
      title: 'شركاؤنا',
      subtitle: 'موثوق بها من قبل المنظمات الرائدة في جميع أنحاء العالم',
    },
    locations: {
      title: 'مواقعنا',
      subtitle: 'اعثر علينا في الخرطوم، السودان.',
      legend: 'مطار الخرطوم الدولي',
      companyLocation: 'موقع الشركة',
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'تواصل مع مجموعة وان جيت لأي استفسارات أو شراكات.',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      company: 'الشركة',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      country: 'الدولة',
      message: 'الرسالة',
      send: 'دعنا نتحدث',
      agreeToPolicy: 'من خلال تحديد هذا، فإنك توافق على',
      privacyPolicy: 'سياسة الخصوصية',
      sending: 'جارٍ الإرسال...',
    },
    divider: {
      aboutUs: 'من نحن',
      sector: 'القطاعات',
      partner: 'الشركاء',
      locations: 'مواقعنا',
      contactUs: 'اتصل بنا',
    },
    footer: {
      company: 'مجموعة وان جيت',
      description: 'شريكك الموثوق لحلول الأعمال الشاملة في قطاعات متعددة في جيبوتي والمنطقة.',
      quickLinks: 'روابط سريعة',
      ourSectors: 'قطاعاتنا',
      contactInfo: 'معلومات الاتصال',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.',
      home: 'الرئيسية',
      about: 'من نحن',
      sectors: 'قطاعاتنا',
      companies: 'الشركات',
      contact: 'اتصل بنا',
    },
  },
};
