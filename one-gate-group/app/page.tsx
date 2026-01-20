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
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <Divider textKey="divider.sector" />
        <section id="sectors">
          <SectorsSection />
        </section>
        <Divider textKey="divider.partner" />
        <PartnersSection />
        <Divider textKey="divider.locations" />
        <section id="locations">
          <LocationsSection />
        </section>
        <Divider textKey="divider.contactUs" />
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </>
  );
}
