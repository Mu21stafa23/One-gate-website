'use client'

import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import AboutSection from './components/sections/AboutSection';
import Divider from './components/ui/Divider';
import SectorsSection from './components/sections/SectorsSection';
import PartnersSection from './components/sections/PartnersSection';
import LocationsSection from './components/sections/LocationsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import SplashScreen from './components/layout/SplashScreen';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash has been shown in this session
    const hasShownSplash = sessionStorage.getItem('hasShownSplash');
    if (hasShownSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashFinish = () => {
    sessionStorage.setItem('hasShownSplash', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <>
      <Navbar />
      <main className="transition-colors duration-300">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="dark:bg-gray-900">
          <AboutSection />
        </section>
        <Divider textKey="divider.sector" />
        <section id="sectors" className="dark:bg-gray-900">
          <SectorsSection />
        </section>
        <Divider textKey="divider.partner" />
        <PartnersSection />
        <Divider textKey="divider.locations" />
        <section id="locations" className="dark:bg-gray-900">
          <LocationsSection />
        </section>
        <Divider textKey="divider.contactUs" />
        <section id="contact" className="dark:bg-gray-900">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </>
  );
}
