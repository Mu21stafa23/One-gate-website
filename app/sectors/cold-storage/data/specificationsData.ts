import { Thermometer, Package, Wind, ClipboardList, Zap, Users, Droplets, Building2, Shield } from 'lucide-react';

export const specificationsData = {
  en: {
    title: "Technical Specifications for Cold Storage Rooms",
    subtitle: "Complete technical specifications, equipment, and internal layout details",
    specs: [
      {
        icon: Shield,
        title: "Insulation",
        description: "Sandwich Panel thermal insulation",
        details: "Complete thermal insulation for walls, ceilings, and floors using Sandwich Panel technology"
      },
      {
        icon: Package,
        title: "Automated Movement",
        description: "Baggage Handling System",
        details: "Cylindrical conveyor system for container movement to reduce human presence and prevent contamination"
      },
      {
        icon: Droplets,
        title: "Flooring",
        description: "Epoxy coating with drainage system",
        details: "Internationally certified Epoxy flooring with internal cleaning and water drainage system"
      },
      {
        icon: Thermometer,
        title: "Temperature Control",
        description: "5°C to 17°C electronic control",
        details: "Additional cooling units for electronic temperature adjustment per veterinary quarantine directives. Meat freezing units for long-term storage during flight delays"
      },
      {
        icon: Building2,
        title: "Administrative Setup",
        description: "One-stop window system",
        details: "Establishment of one-stop offices (Customs, Veterinary Quarantine, Civil Aviation) and X-Scanner system installation"
      },
      {
        icon: ClipboardList,
        title: "Internal Layout",
        description: "Specialized cold storage rooms",
        details: "Carcass Chilling rooms (-10°C), Cold Storage (-20°C), Butchering Room (15°C), Production Room (18°C), and sanitary facilities"
      }
    ]
  },
  ar: {
    title: "المواصفات الفنية لغرف التبريد",
    subtitle: "المواصفات الفنية الكاملة والتجهيزات وبيانات المخطط الداخلي",
    specs: [
      {
        icon: Shield,
        title: "العزل",
        description: "عزل حراري من نوع Sandwich Panel",
        details: "يجب أن تكون الوحدة معزولة حرارياً بالكامل للحوائط والأسقف والأرضيات باستخدام تقنية Sandwich Panel"
      },
      {
        icon: Package,
        title: "التحريك الآلي",
        description: "نظام مناولة الأمتعة",
        details: "إنشاء ناقل أسطواني (Baggage Handling System) لتحريك الحاويات لتقليل التواجد البشري ومنع التلوث"
      },
      {
        icon: Droplets,
        title: "الأرضيات",
        description: "دهان Epoxy مع نظام صرف",
        details: "دهان الأرضيات بمادة Epoxy المجازة عالمياً مع نظام نظافة وتصريف مياه داخلي"
      },
      {
        icon: Thermometer,
        title: "التحكم في درجة الحرارة",
        description: "تحكم إلكتروني من 5 إلى 17 درجة مئوية",
        details: "وحدات تبريد إضافية لضبط الحرارة بين 5 إلى 17 درجة مئوية إلكترونياً (حسب توجيهات الحجر البيطري). توفير وحدات تجميد لحوم للتخزين الطويل في حال تأخر الرحلات"
      },
      {
        icon: Building2,
        title: "التجهيزات الإدارية",
        description: "نظام النافذة الواحدة",
        details: "تأسيس مكاتب بنظام النافذة الواحدة (جمارك، حجر بيطري، طيران مدني) وتركيب نظام الماسح الضوئي (X-Scanner)"
      },
      {
        icon: ClipboardList,
        title: "المخطط الداخلي",
        description: "غرف تبريد متخصصة",
        details: "غرف تبريد الذبائح (-10 مئوية)، مخزن بارد (-20 مئوية)، غرفة التقطيع (15 مئوية)، غرفة الإنتاج (18 مئوية)، والمرافق الصحية"
      }
    ]
  }
};
