import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Github, 
  Globe,
  Mail,
  UserCheck
} from 'lucide-react';

export default function Navbar({ lang, setLang, t, onOpenContact, onOpenAuth }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', label: 'ENG', fullName: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'RU', fullName: 'Русский', flag: '🇷🇺' },
    { code: 'lv', label: 'LV', fullName: 'Latviešu', flag: '🇱🇻' },
  ];

  const currentLangObj = languages.find(l => l.code === lang) || languages[0];

  const navLinks = [
    { name: t.nav.features, href: '#bento' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.faq, href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-indigo-950/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Code<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300">Pulse</span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  AI 2.0
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/50 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Contact in Nav */}
            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-cyan-300 hover:text-cyan-200 rounded-full hover:bg-cyan-500/10 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.nav.contact}</span>
            </button>
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-white/10 rounded-xl hover:border-white/20 transition-all"
                aria-label="Select language"
              >
                <span className="text-sm">{currentLangObj.flag}</span>
                <span className="font-mono">{currentLangObj.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-36 rounded-2xl bg-slate-900/95 border border-white/10 p-1.5 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
                  >
                    {languages.map((langItem) => (
                      <button
                        key={langItem.code}
                        onClick={() => {
                          setLang(langItem.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                          lang === langItem.code
                            ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{langItem.flag}</span>
                          <span>{langItem.fullName}</span>
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 uppercase">
                          {langItem.label}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* GitHub Stars */}
            <a
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-xs bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700 font-mono">
                ★ {t.nav.githubStars}
              </span>
            </a>

            {/* Start Free CTA -> Opens Auth Modal */}
            <motion.button
              onClick={onOpenAuth}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs lg:text-sm font-semibold text-white rounded-xl overflow-hidden group bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/20 transition-all duration-200"
            >
              <span className="flex items-center gap-1.5">
                {t.nav.startFree}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </motion.button>
          </div>

          {/* Mobile Right Controls: Language + Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Lang Button */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-white/10 rounded-lg"
              >
                <span>{currentLangObj.flag}</span>
                <span className="font-mono text-[11px]">{currentLangObj.label}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-xl bg-slate-900 border border-white/10 p-1 shadow-2xl z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-2.5 py-1.5 text-xs flex items-center justify-between text-slate-200 hover:bg-white/5 rounded-lg"
                    >
                      <span>{l.flag} {l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-left text-base font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{t.nav.contact}</span>
              </button>

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg shadow-indigo-500/25"
                >
                  {t.nav.startFree}
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2 text-sm text-slate-400 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository (4.9k ★)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
