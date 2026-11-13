import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import BentoGrid from './components/BentoGrid';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AuthModal from './components/AuthModal';
import { translations } from './translations';

export default function App() {
  // Default language is 'en' as requested
  const [lang, setLang] = useState('en');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const t = translations[lang] || translations.en;

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleOpenAuth = () => setIsAuthOpen(true);
  const handleCloseAuth = () => setIsAuthOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation with language switcher, contact button & auth trigger */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t}
        onOpenContact={handleOpenContact}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Content Sections with translated content */}
      <main className="flex-1">
        <Hero 
          t={t.hero} 
          onOpenAuth={handleOpenAuth} 
        />
        <TrustedBy 
          t={t.trustedBy} 
        />
        <BentoGrid 
          t={t.bento} 
        />
        <HowItWorks 
          t={t.howItWorks} 
        />
        <Pricing 
          t={t.pricing} 
          onOpenAuth={handleOpenAuth} 
        />
        <FAQ 
          t={t.faq} 
          onOpenContact={handleOpenContact}
        />
        <CTA 
          t={t.cta} 
          onOpenAuth={handleOpenAuth} 
        />
      </main>

      {/* Footer */}
      <Footer 
        t={t.footer} 
        onOpenContact={handleOpenContact}
      />

      {/* Contact Modal (with personal data processing consent checkbox) */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={handleCloseContact} 
        t={t.contactModal} 
      />

      {/* Auth Modal (triggered by "Start Free" / "Начать бесплатно") */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={handleCloseAuth} 
        t={t.authModal} 
      />
    </div>
  );
}
