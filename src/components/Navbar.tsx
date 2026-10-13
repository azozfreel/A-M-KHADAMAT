import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Globe,
  CreditCard,
  Lock,
  Sun,
  Moon
} from 'lucide-react';
import { Language, Theme } from '../types';
import { ActivePage } from '../types/bank';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  currentPage: ActivePage;
  onNavigatePage: (page: ActivePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
  currentPage,
  onNavigatePage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home' as ActivePage, labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'about' as ActivePage, labelAr: 'من أنا', labelEn: 'About' },
    { id: 'disciplines' as ActivePage, labelAr: 'مجالات العمل', labelEn: 'Disciplines' },
    { id: 'projects' as ActivePage, labelAr: 'الأعمال والمشاريع', labelEn: 'Projects' },
    { id: 'banks' as ActivePage, labelAr: 'الحسابات البنكية', labelEn: 'Bank Accounts' },
    { id: 'contact' as ActivePage, labelAr: 'تواصل معي', labelEn: 'Contact' },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    setMobileMenuOpen(false);
    onNavigatePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    onNavigatePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? isDark
            ? 'bg-[#0D0F14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-xs py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={handleLogoClick}
            className="group flex items-center gap-3 text-start focus:outline-hidden cursor-pointer"
            aria-label="الرئيسية"
          >
            <div
              className={`w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-sm tracking-wider transition-colors shadow-xs ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-amber-400 group-hover:border-slate-700'
                  : 'bg-amber-50 border-amber-200 text-amber-600 group-hover:border-amber-300'
              }`}
            >
              <span>AM</span>
            </div>
            <div>
              <span
                className={`block font-bold text-base tracking-tight leading-none transition-colors ${
                  isDark
                    ? 'text-slate-100 group-hover:text-white'
                    : 'text-slate-900 group-hover:text-amber-700'
                }`}
              >
                {lang === 'ar' ? 'أيوب الميسوري' : 'Ayoub El Maissouri'}
              </span>
              <span
                className={`block text-[11px] font-medium tracking-wider mt-1 uppercase ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {lang === 'ar' ? 'رائد أعمال رقمي' : 'Digital Entrepreneur'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-xs ${
              isDark
                ? 'bg-slate-900/70 border-slate-800/80'
                : 'bg-white/80 border-slate-200 shadow-xs'
            }`}
          >
            {navLinks.map((link) => {
              const isActive =
                currentPage === link.id ||
                (link.id === 'home' && (currentPage === 'main' || currentPage === 'home'));

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? isDark
                        ? 'bg-slate-800 text-amber-300 font-semibold shadow-xs'
                        : 'bg-amber-400 text-slate-950 font-semibold shadow-xs'
                      : isDark
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.id === 'banks' && <CreditCard className="w-3.5 h-3.5 opacity-70" />}
                  <span>{lang === 'ar' ? link.labelAr : link.labelEn}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Theme Switch + Lang Switch + Admin lock + Contact CTA */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Dark / Light Mode Switcher (دعني أغير بين الوضع الداكن والعادي) */}
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-900/60 hover:bg-slate-800 text-amber-400 border-slate-800'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
              }`}
              title={
                isDark
                  ? lang === 'ar'
                    ? 'التحويل إلى الوضع العادي (فاتح)'
                    : 'Switch to Light Mode'
                  : lang === 'ar'
                  ? 'التحويل إلى الوضع الداكن'
                  : 'Switch to Dark Mode'
              }
              aria-label="Toggle theme mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border-slate-800'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
              }`}
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5 opacity-70" />
              <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
            </button>

            {/* Admin Portal Shortcut Lock */}
            <button
              onClick={() => onNavigatePage(currentPage === 'admin' ? 'home' : 'admin')}
              className={`p-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                currentPage === 'admin'
                  ? 'bg-amber-400 text-slate-950 border-amber-300'
                  : isDark
                  ? 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 border-slate-800'
                  : 'bg-white hover:bg-slate-100 text-slate-500 border-slate-200 shadow-xs'
              }`}
              title={lang === 'ar' ? 'دخول المسؤول (Admin Portal)' : 'Admin Portal'}
              aria-label="Admin Portal"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => onNavigatePage('contact')}
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-xs cursor-pointer"
            >
              <span>{lang === 'ar' ? 'تواصل معي' : "Let's Talk"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Actions: Theme + Menu */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-xl text-xs border ${
                isDark
                  ? 'bg-slate-900 text-amber-400 border-slate-800'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onToggleLang}
              className={`p-2 rounded-xl text-xs font-bold border ${
                isDark
                  ? 'bg-slate-900 text-slate-300 border-slate-800'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
              aria-label="Toggle language"
            >
              <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isDark
                  ? 'bg-slate-900 text-slate-300 border-slate-800'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
              aria-label="قائمة التصفح"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden border-b px-5 pt-4 pb-6 mt-3 space-y-3 shadow-xl animate-in slide-in-from-top duration-200 ${
            isDark ? 'bg-[#0D0F14] border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                currentPage === link.id ||
                (link.id === 'home' && (currentPage === 'main' || currentPage === 'home'));

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-start px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? isDark
                        ? 'bg-slate-800 text-amber-300 font-semibold'
                        : 'bg-amber-50 text-amber-700 font-semibold'
                      : isDark
                      ? 'text-slate-300 hover:bg-slate-800/60'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{lang === 'ar' ? link.labelAr : link.labelEn}</span>
                  {link.id === 'banks' && <CreditCard className="w-4 h-4 text-amber-500" />}
                </button>
              );
            })}
          </nav>

          <div
            className={`pt-2 border-t flex flex-col gap-2 ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigatePage('admin');
              }}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <Lock className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang === 'ar' ? 'لوحة تحكم المسؤول (إدارة الريبات)' : 'Admin Portal'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
