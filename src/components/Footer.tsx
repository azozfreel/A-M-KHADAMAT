import React from 'react';
import { ArrowUp, CreditCard, Lock, Sparkles } from 'lucide-react';
import { Language, Theme } from '../types';
import { ActivePage, LegalDocType } from '../types/bank';

interface FooterProps {
  lang: Language;
  theme?: Theme;
  onNavigatePage: (page: ActivePage) => void;
  onNavigateLegal?: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  theme = 'dark',
  onNavigatePage,
  onNavigateLegal,
}) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: ActivePage; labelAr: string; labelEn: string }[] = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'about', labelAr: 'من أنا', labelEn: 'About' },
    { id: 'disciplines', labelAr: 'مجالات العمل', labelEn: 'Disciplines' },
    { id: 'projects', labelAr: 'الأعمال والمشاريع', labelEn: 'Projects' },
    { id: 'banks', labelAr: 'الحسابات البنكية', labelEn: 'Bank Accounts' },
    { id: 'contact', labelAr: 'تواصل معي', labelEn: 'Contact' },
  ];

  const legalLinks: { id: LegalDocType; labelAr: string; labelEn: string }[] = [
    { id: 'terms', labelAr: 'الشروط والأحكام', labelEn: 'Terms & Conditions' },
    { id: 'privacy', labelAr: 'سياسة الخصوصية', labelEn: 'Privacy Policy' },
    { id: 'copyright', labelAr: 'حقوق الملكية الفكرية', labelEn: 'Copyright' },
    { id: 'legal-notice', labelAr: 'الإشعارات القانونية', labelEn: 'Legal Notice' },
    { id: 'cookies', labelAr: 'ملفات تعريف الارتباط', labelEn: 'Cookies' },
  ];

  return (
    <footer
      className={`py-16 border-t relative text-center transition-colors ${
        isDark ? 'bg-[#0B0D13] border-slate-800/70' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo Monogram */}
          <button
            onClick={() => onNavigatePage('home')}
            className={`w-11 h-11 rounded-2xl border flex items-center justify-center font-bold text-sm shadow-xs cursor-pointer ${
              isDark
                ? 'bg-slate-900 border-slate-800 text-amber-400'
                : 'bg-white border-slate-200 text-amber-600'
            }`}
          >
            AM
          </button>

          {/* Name & Title */}
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold tracking-tight ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'أيوب الميسوري' : 'Ayoub El Maissouri'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-mono">
              Digital Entrepreneur • E-Commerce • Online Business
            </p>
          </div>

          {/* Quick statement */}
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed font-normal">
            {lang === 'ar'
              ? 'بناء وتطوير المشاريع الرقمية والمتاجر الإلكترونية المعاصرة بانضباط وإبداع مستمر.'
              : 'Architecting high-leverage digital ventures through disciplined market execution.'}
          </p>

          {/* Main Pages Navigation in Footer */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigatePage(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`transition-colors cursor-pointer ${
                  isDark
                    ? 'text-slate-300 hover:text-amber-300'
                    : 'text-slate-600 hover:text-amber-600'
                }`}
              >
                {lang === 'ar' ? item.labelAr : item.labelEn}
              </button>
            ))}
          </nav>

          {/* Navigation Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                onNavigatePage('banks');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang === 'ar' ? 'الحسابات والتحويلات البنكية' : 'Bank Accounts & RIBs'}</span>
            </button>

            <button
              onClick={() => {
                onNavigatePage('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-900/40 hover:bg-slate-800/60 text-slate-400 hover:text-slate-200 border-slate-800/60'
                  : 'bg-white hover:bg-slate-100 text-slate-500 border-slate-200'
              }`}
              title="لوحة تحكم المسؤول لإدارة وتعديل الريبات"
            >
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>{lang === 'ar' ? 'بوابة المسؤول' : 'Admin Portal'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200 shadow-xs'
              }`}
            >
              <span>{lang === 'ar' ? 'العودة للأعلى' : 'Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Legal Links */}
          {onNavigateLegal && (
            <div
              className={`pt-5 border-t w-full max-w-3xl mx-auto ${
                isDark ? 'border-slate-800/70' : 'border-slate-200'
              }`}
            >
              <nav className="flex flex-wrap items-center justify-center gap-y-2.5 gap-x-5 text-xs text-slate-400 font-medium">
                {legalLinks.map((item, idx) => (
                  <React.Fragment key={item.id}>
                    <button
                      onClick={() => onNavigateLegal(item.id)}
                      className="hover:text-amber-500 transition-colors cursor-pointer"
                    >
                      {lang === 'ar' ? item.labelAr : item.labelEn}
                    </button>
                    {idx < legalLinks.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600 select-none">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          )}

          {/* Copyright notice */}
          <div
            className={`pt-5 border-t w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 ${
              isDark ? 'border-slate-800/70' : 'border-slate-200'
            }`}
          >
            <span>
              © {new Date().getFullYear()}{' '}
              {lang === 'ar'
                ? 'أيوب الميسوري. جميع الحقوق محفوظة.'
                : 'Ayoub El Maissouri. All rights reserved.'}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {lang === 'ar' ? 'العلامة الشخصية الرقمية' : 'Personal Brand Edition'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
