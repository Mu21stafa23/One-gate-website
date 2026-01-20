'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import oneGateGroupLogo from '@/app/assets/images/logos/logo onegate.png'
import { useLanguage } from '@/app/context/LanguageContext'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navbarNavigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.sector'), href: '#sectors' },
    { name: t('nav.location'), href: '#locations' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav aria-label="Global" className="flex h-16 items-center justify-between">
        {/* Logo on the left */}
        <div className="flex">
          <Link href="/" className="">
            <span className="sr-only">One Gate Group</span>
            <Image 
              src={oneGateGroupLogo}
              alt="One Gate Group"
              width={800}
              height={140}
              className={`h-36 w-auto bg-transparent transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'} hover:saturate-200 hover:hue-rotate-45`}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Navigation links in the center */}
        <div className="hidden lg:flex lg:gap-x-12 flex-1 justify-center">
          {navbarNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-base font-semibold uppercase border-b-2 border-transparent hover:border-yellow-400 transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80'}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Language switcher on the right */}
        <div className="hidden lg:flex">
          <button
            onClick={toggleLanguage}
            className={`text-base font-semibold flex items-center gap-1 uppercase border-b-2 border-transparent hover:border-yellow-400 transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80'}`}
          >
            {language === 'en' ? 'العربية' : 'English'}
            <ChevronDownIcon className="size-4" />
          </button>
        </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/30">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">One Gate Group</span>
              <Image 
                  src={oneGateGroupLogo}
                  alt="One Gate Group"
                  width={350}
                  height={140}
                  className="h-32 w-auto bg-transparent brightness-0 invert hover:saturate-200 hover:hue-rotate-45 transition-all"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-600"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="space-y-2">
              {navbarNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLanguage()
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-100"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
