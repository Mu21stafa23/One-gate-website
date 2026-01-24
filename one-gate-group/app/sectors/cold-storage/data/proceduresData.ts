import { Warehouse, Plane, Scale, ScanLine, ClipboardCheck, Snowflake, Package, Truck, Container } from 'lucide-react';

export const proceduresData = {
  en: {
    title: "Handling Procedures for Refrigerated Goods",
    subtitle: "Comprehensive procedures for handling refrigerated goods from warehouse to loading",
    procedures: [
      {
        icon: Warehouse,
        title: "Warehouse Upon Receipt",
        steps: [
          "Initial product reception at warehouse",
          "Documentation verification",
          "Temperature check upon arrival"
        ]
      },
      {
        icon: Plane,
        title: "Ground Handling Service",
        steps: [
          "Airport ground handling operations",
          "Cargo transfer procedures",
          "Equipment mobilization"
        ]
      },
      {
        icon: Scale,
        title: "Weighing Procedures",
        steps: [
          "Accurate weight measurement",
          "Weight documentation",
          "Verification against manifests"
        ]
      },
      {
        icon: ScanLine,
        title: "X-Ray Scanner",
        steps: [
          "Security scanning procedures",
          "Customs clearance preparation",
          "Image analysis and verification"
        ]
      },
      {
        icon: ClipboardCheck,
        title: "Jurisdiction Inspection",
        steps: [
          "Veterinary quarantine inspection",
          "Customs examination",
          "Compliance verification"
        ]
      },
      {
        icon: Snowflake,
        title: "Refrigerated Safety Room",
        steps: [
          "Temperature-controlled holding area",
          "Quality preservation",
          "Pre-freezing preparation"
        ]
      },
      {
        icon: Package,
        title: "Freezing Room",
        steps: [
          "Deep freezing procedures",
          "Long-term storage for delayed flights",
          "Temperature monitoring -20°C"
        ]
      },
      {
        icon: Container,
        title: "Baggage Handling System",
        steps: [
          "Automated container movement",
          "Cylindrical conveyor system",
          "Reduced human contact"
        ]
      },
      {
        icon: Truck,
        title: "Loading onto Cargo Containers",
        steps: [
          "Final loading procedures",
          "Temperature verification",
          "Secure cargo placement"
        ]
      }
    ]
  },
  ar: {
    title: "إجراءات التعامل مع السلع المبردة",
    subtitle: "إجراءات شاملة للتعامل مع السلع المبردة من المستودع إلى التحميل",
    procedures: [
      {
        icon: Warehouse,
        title: "المستودع عند الاستلام",
        steps: [
          "استلام المنتج الأولي في المستودع",
          "التحقق من الوثائق",
          "فحص درجة الحرارة عند الوصول"
        ]
      },
      {
        icon: Plane,
        title: "خدمة المناولة الأرضية",
        steps: [
          "عمليات المناولة الأرضية بالمطار",
          "إجراءات نقل الشحن",
          "تعبئة المعدات"
        ]
      },
      {
        icon: Scale,
        title: "إجراءات الوزن",
        steps: [
          "قياس الوزن الدقيق",
          "توثيق الوزن",
          "التحقق من البيانات"
        ]
      },
      {
        icon: ScanLine,
        title: "المسح الضوئي (X-Ray Scanner)",
        steps: [
          "إجراءات المسح الأمني",
          "تحضير التخليص الجمركي",
          "تحليل الصور والتحقق"
        ]
      },
      {
        icon: ClipboardCheck,
        title: "فحص دوائر الاختصاص",
        steps: [
          "فحص الحجر البيطري",
          "فحص الجمارك",
          "التحقق من الامتثال"
        ]
      },
      {
        icon: Snowflake,
        title: "غرفة السلامة المبردة",
        steps: [
          "منطقة حفظ يتم التحكم في درجة حرارتها",
          "الحفاظ على الجودة",
          "تحضير ما قبل التجميد"
        ]
      },
      {
        icon: Package,
        title: "غرفة التجميد",
        steps: [
          "إجراءات التجميد العميق",
          "التخزين طويل الأجل للرحلات المتأخرة",
          "مراقبة درجة الحرارة -20 درجة مئوية"
        ]
      },
      {
        icon: Container,
        title: "نظام مناولة الأمتعة",
        steps: [
          "حركة الحاويات الآلية",
          "نظام الناقل الأسطواني",
          "تقليل التواجد البشري"
        ]
      },
      {
        icon: Truck,
        title: "التحميل على حاويات الشحن",
        steps: [
          "إجراءات التحميل النهائية",
          "التحقق من درجة الحرارة",
          "وضع الشحن الآمن"
        ]
      }
    ]
  }
};
