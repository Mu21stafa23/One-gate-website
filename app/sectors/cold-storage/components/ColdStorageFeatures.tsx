'use client'

import { useLanguage } from '@/app/context/LanguageContext';
import { Snowflake, ThermometerSnowflake, Shield, Clock, Truck, FileCheck } from 'lucide-react';

export default function ColdStorageFeatures() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Features & Services",
      features: [
        {
          icon: ThermometerSnowflake,
          title: "Temperature Control",
          description: "Precise temperature management from -25°C to +15°C"
        },
        {
          icon: Clock,
          title: "24/7 Monitoring",
          description: "Round-the-clock surveillance and temperature monitoring"
        },
        {
          icon: Shield,
          title: "Food Safety Certified",
          description: "Compliant with HACCP and international food safety standards"
        },
        {
          icon: Snowflake,
          title: "Multiple Zones",
          description: "Separate zones for frozen, chilled, and fresh products"
        },
        {
          icon: Truck,
          title: "Logistics Support",
          description: "Integrated logistics and distribution services"
        },
        {
          icon: FileCheck,
          title: "Full Traceability",
          description: "Complete documentation and tracking systems"
        }
      ]
    },
    ar: {
      title: "ميزاتنا وخدماتنا",
      features: [
        {
          icon: ThermometerSnowflake,
          title: "التحكم في درجة الحرارة",
          description: "إدارة دقيقة لدرجة الحرارة من -25 درجة مئوية إلى +15 درجة مئوية"
        },
        {
          icon: Clock,
          title: "مراقبة على مدار الساعة",
          description: "مراقبة ومتابعة درجة الحرارة على مدار الساعة"
        },
        {
          icon: Shield,
          title: "معتمد لسلامة الأغذية",
          description: "متوافق مع HACCP والمعايير الدولية لسلامة الأغذية"
        },
        {
          icon: Snowflake,
          title: "مناطق متعددة",
          description: "مناطق منفصلة للمنتجات المجمدة والمبردة والطازجة"
        },
        {
          icon: Truck,
          title: "دعم لوجستي",
          description: "خدمات لوجستية وتوزيع متكاملة"
        },
        {
          icon: FileCheck,
          title: "إمكانية التتبع الكاملة",
          description: "أنظمة توثيق وتتبع كاملة"
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-12 text-center">
          {text.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {text.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-transparent dark:border-gray-700"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
