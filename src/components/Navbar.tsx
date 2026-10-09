import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, Sparkles, CreditCard, Lock } from 'lucide-react';
import { Language } from '../types';
import { ActivePage } from '../types/bank';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  activeSection: string;
  currentPage: ActivePage;
  onNavigatePage: (page: ActivePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  activeSection,
  currentPage,
  onNavigatePage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', labelAr: 'الرئيسية', labelEn: 'Home', isPage: false },
    { id: 'about', labelAr: 'من أنا', labelEn: 'About', isPage: false },
    { id: 'disciplines', labelAr: 'المجالات', labelEn: 'Expertise', isPage: false },
    { id: 'projects', labelAr: 'الأعمال', labelEn: 'Projects', isPage: false },
    { id: 'banks', labelAr: 'الحسابات البنكية', labelEn: 'Bank Accounts', isPage: true },
    { id: 'contact', labelAr: 'تواصل معي', labelEn: 'Contact', isPage: false },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if (link.isPage) {
      onNavigatePage('banks');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage !== 'main') {
        onNavigatePage('main');
        setTimeout(() => {
          const el = document.getElementById(link.id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(link.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (currentPage !== 'main') {
      onNavigatePage('main');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090D]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={handleLogoClick}
            className="group flex items-center gap-3 text-start focus:outline-none cursor-pointer"
            aria-label="الرئيسية"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-zinc-800 to-zinc-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-base tracking-wider group-hover:border-emerald-400 transition-colors shadow-lg shadow-emerald-950/20">
              <span>AM</span>
            </div>
            <div>
              <span className="block text-white font-bold text-lg tracking-tight leading-none group-hover:text-emerald-400 transition-colors">
                {lang === 'ar' ? 'أيوب الميسوري' : 'Ayoub El Maissouri'}
              </span>
              <span className="block text-[11px] text-zinc-400 font-medium tracking-wider mt-1 uppercase">
                {lang === 'ar' ? 'رائد أعمال رقمي' : 'Digital Entrepreneur'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-zinc-950/40 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = link.isPage
                ? currentPage === 'banks'
                : currentPage === 'main' && activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm'
                      : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.id === 'banks' && <CreditCard className="w-3 h-3 text-emerald-400" />}
                  <span>{lang === 'ar' ? link.labelAr : link.labelEn}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Language Switch + Admin lock + Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Admin Portal Shortcut Lock Button */}
            <button
              onClick={() => onNavigatePage(currentPage === 'admin' ? 'main' : 'admin')}
              className={`p-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                currentPage === 'admin'
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 border-white/[0.08]'
              }`}
              title={lang === 'ar' ? 'دخول المسؤول (Admin Portal)' : 'Admin Portal'}
              aria-label="Admin Portal"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/[0.08] transition-colors cursor-pointer"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => {
                if (currentPage !== 'main') onNavigatePage('main');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 hover:from-emerald-300 hover:to-teal-100 transition-all duration-200 shadow-md shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>{lang === 'ar' ? 'لنبدأ الحديث' : "Let's Talk"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onNavigatePage(currentPage === 'admin' ? 'main' : 'admin')}
              className="p-2 rounded-lg text-xs text-zinc-400 hover:text-emerald-400 bg-zinc-900 border border-white/10"
              aria-label="Admin"
            >
              <Lock className="w-4 h-4" />
            </button>
            <button
              onClick={onToggleLang}
              className="p-2 rounded-lg text-xs text-zinc-300 bg-zinc-900 border border-white/10"
              aria-label="Toggle language"
            >
              <span className="font-bold">{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-white/10"
              aria-label="فتح القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0C11] border-b border-zinc-800/80 px-5 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="w-full text-start px-4 py-2.5 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors flex items-center justify-between"
              >
                <span>{lang === 'ar' ? link.labelAr : link.labelEn}</span>
                {link.id === 'banks' && <CreditCard className="w-4 h-4 text-emerald-400" />}
              </button>
            ))}
          </nav>

          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigatePage('admin');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-zinc-300 bg-zinc-900 border border-white/[0.08]"
            >
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ar' ? 'لوحة تحكم المسؤول (إدارة الريبات)' : 'Admin Portal'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
