'use client';

import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '@/app/context/LanguageContext';
import AOS from 'aos';

export default function ContactSection() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("xdaekbez");
  const [showSuccess, setShowSuccess] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
    }
  }, [state.succeeded]);

  return (
    <div className="isolate bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 transition-colors duration-300">
      {/* Success Toast Notification */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border-l-4 border-green-500 animate-scale-in">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
                  <svg className="h-7 w-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {t('contact.successTitle') || 'Message Sent!'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('contact.success') || 'Thank you for contacting us! We will get back to you soon.'}
                </p>
              </div>
              <button
                onClick={() => setShowSuccess(false)}
                className="shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Close notification"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-3xl text-center">
        <h2 
          className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-4"
          data-aos="fade-up"
        >
          {t('contact.title')}
        </h2>
        <p 
          className="mt-4 text-xl text-gray-600 dark:text-gray-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t('contact.subtitle')}
        </p>
      </div>
      <form 
        onSubmit={handleSubmit} 
        method="POST" 
        className="mx-auto mt-20 max-w-4xl bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">
              {t('contact.firstName')}
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              className="block w-full rounded-xl bg-white dark:bg-gray-700 px-5 py-4 text-base text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 focus:border-yellow-400 focus:ring-0 transition-colors shadow-sm"
            />
            <ValidationError prefix="First name" field="firstName" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">
              {t('contact.lastName')}
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              className="block w-full rounded-xl bg-white dark:bg-gray-700 px-5 py-4 text-base text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 focus:border-yellow-400 focus:ring-0 transition-colors shadow-sm"
            />
            <ValidationError prefix="Last name" field="lastName" errors={state.errors} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">
              {t('contact.company')}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="block w-full rounded-xl bg-white dark:bg-gray-700 px-5 py-4 text-base text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 focus:border-yellow-400 focus:ring-0 transition-colors shadow-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">
              {t('contact.email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-xl bg-white dark:bg-gray-700 px-5 py-4 text-base text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 focus:border-yellow-400 focus:ring-0 transition-colors shadow-sm"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">
              {t('contact.phone')}
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="block w-full rounded-xl bg-white dark:bg-gray-700 px-5 py-4 text-base text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 focus:border-yellow-400 focus:ring-0 transition-colors shadow-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="block w-full rounded-xl bg-white dark:bg-gray-700 px-5 py-4 text-base text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 focus:border-yellow-400 focus:ring-0 transition-colors shadow-sm resize-none"
              placeholder="Tell us about your inquiry..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
        </div>
        <div className="mt-12">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-xl bg-yellow-400 hover:bg-yellow-500 px-8 py-5 text-lg font-bold text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
          >
            {state.submitting ? t('contact.sending') : t('contact.send')}
          </button>
        </div>
      </form>

      {/* Social Media Icons */}
      <div className="mt-16 flex justify-center items-center gap-8">
        {/* WhatsApp */}
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-300 dark:text-gray-400">WhatsApp</span>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
        >
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.154.232.17.326.016.093.036.306.02.472z"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-300 dark:text-gray-400">Telegram</span>
        </a>

        {/* Email */}
        <a
          href="mailto:info@onegategroup.com"
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
        >
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-300 dark:text-gray-400">Email</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
        >
          <div className="w-16 h-16 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-300 dark:text-gray-400">Instagram</span>
        </a>
      </div>
    </div>
  );
}
