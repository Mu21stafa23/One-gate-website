"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Divider from '@/app/components/ui/Divider';
import PartnersSection from '@/app/components/sections/PartnersSection';
import LocationsSection from '@/app/components/sections/LocationsSection';
import Hero from './components/Hero';
import About from './components/About';
import CTA from './components/CTA';

export default function FishExportPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Divider textKey="divider.whoWeAre" />
        <section id="about">
          <About />
        </section>
        <Divider textKey="divider.partner" />
        <section id="partners" className="relative isolate overflow-hidden bg-white dark:bg-gray-900" data-aos="fade-up">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.500),transparent)] opacity-30 dark:opacity-10" />
          <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-50 dark:bg-gray-900 shadow-xl ring-1 shadow-gray-200/50 dark:shadow-indigo-500/5 ring-gray-200/50 dark:ring-white/5 sm:mr-0 lg:mr-0 xl:origin-center" />
          <PartnersSection />
        </section>
        <Divider textKey="divider.locations" />
        <section id="locations" className="relative isolate overflow-hidden bg-white dark:bg-gray-900" data-aos="fade-up">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.500),transparent)] opacity-30 dark:opacity-10" />
          <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-50 dark:bg-gray-900 shadow-xl ring-1 shadow-gray-200/50 dark:shadow-indigo-500/5 ring-gray-200/50 dark:ring-white/5 sm:mr-0 lg:mr-0 xl:origin-center" />
          <LocationsSection />
        </section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
