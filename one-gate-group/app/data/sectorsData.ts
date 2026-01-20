import airportImage from '@/app/assets/images/sectors/Airport Shuttles Service in Auckland _ Airport Auckland Transport.jpg';
import coldStorageImage from '@/app/assets/images/sectors/Residential and Industrial Cooling Systems _ Fogco.jpg';
import fishExportImage from '@/app/assets/images/sectors/Fish at market stock image_ Image of food, ocean, pisces - 13192441.jpg';
import fruitsVegetablesImage from '@/app/assets/images/sectors/How To Plan A Vegetable Garden In 7 Easy Steps.jpg';
import hotelImage from '@/app/assets/images/sectors/hotel.jpg';
import marketingImage from '@/app/assets/images/sectors/Social Media Marketing.jpg';

export const sectorsData = {
  title: "OUR SECTORS",
  subtitle: "Explore the core sectors we operate in to help businesses succeed in today's competitive environment.",
  sectors: [
    {
      id: 1,
      name: "Airport Services",
      description: "Comprehensive aviation and ground handling services.",
      image: airportImage,
      href: "/sectors/airport-services.com"
    },
    {
      id: 2,
      name: "Cold Storage",
      description: "State-of-the-art temperature-controlled storage solutions.",
      image: coldStorageImage,
      href: "/sectors/cold-storage.com"
    },
    {
      id: 3,
      name: "Fish Export",
      description: "Quality seafood export with global reach.",
      image: fishExportImage,
      href: "/sectors/fish-export.com"
    },
    {
      id: 4,
      name: "Fruits & Vegetables",
      description: "Fresh produce distribution and export services.",
      image: fruitsVegetablesImage,
      href: "/sectors/fruits-vegetables.com"
    },
    {
      id: 5,
      name: "Hotel Services",
      description: "Premium hospitality and accommodation solutions.",
      image: hotelImage,
      href: "/sectors/hotel-services.com"
    },
    {
      id: 6,
      name: "Marketing & Advertising",
      description: "Comprehensive strategies to boost your brand presence.",
      image: marketingImage,
      href: "/sectors/marketing-advertising.com"
    }
  ]
};
