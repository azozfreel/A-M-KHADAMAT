import React from 'react';
import { ArrowUp, CreditCard, Lock, ShieldCheck, Scale, FileText, Cookie } from 'lucide-react';
import { Language } from '../types';
import { LegalDocType } from '../types/bank';

interface FooterProps {
  lang: Language;
  onNavigateBanks?: () => void;
  onNavigateAdmin?: () => void;
  onNavigateLegal?: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigateBanks,
  onNavigateAdmin,
  onNavigateLegal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const legalLinks: { id: LegalDocType; labelAr: string; labelEn: string }[] = [
    { id: 'terms', labelAr: 'الشروط والأحكام', labelEn: 'Terms & Conditions' },
    { id: 'privacy', labelAr: 'سياسة الخصوصية', labelEn: 'Privacy Policy' },
    { id: 'copyright', labelAr: 'حقوق الملكية الفكرية', labelEn: 'Copyright' },
    { id: 'legal-notice', labelAr: 'الإشعارات القانونية', labelEn: 'Legal Notice' },
    { id: 'cookies', labelAr: 'ملفات تعريف الارتباط', labelEn: 'Cookies' },
  ];

  return (
    <footer className="py-14 bg-[#06070A] border-t border-white/[0.06] relative text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo Monogram */}
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-emerald-400 font-bold text-lg shadow-lg">
            AM
          </div>

          {/* Name & Title */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {lang === 'ar' ? 'أيوب الميسوري' : 'Ayoub El Maissouri'}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              Digital Entrepreneur • E-Commerce • Online Business
            </p>
          </div>

          {/* Quick statement */}
          <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
            {lang === 'ar'
              ? 'بناء وتطوير المشاريع الرقمية المعاصرة بانضباط وإبداع مستمر.'
              : 'Architecting high-leverage digital ventures through disciplined market execution and refined creative craft.'}
          </p>

          {/* Navigation Action Links: Bank Accounts & Admin Gate & Back to top */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {onNavigateBanks && (
              <button
                onClick={onNavigateBanks}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-emerald-300 bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.06] transition-colors cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'ar' ? 'الحسابات والتحويلات البنكية' : 'Bank Accounts & RIBs'}</span>
              </button>
            )}

            {onNavigateAdmin && (
              <button
                onClick={onNavigateAdmin}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900/40 hover:bg-zinc-900 border border-white/[0.04] transition-colors cursor-pointer"
                title="لوحة تحكم المسؤول لإدارة وتعديل الريبات"
              >
                <Lock className="w-3 h-3 text-zinc-400" />
                <span>{lang === 'ar' ? 'بوابة المسؤول' : 'Admin Portal'}</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.06] transition-colors cursor-pointer"
            >
              <span>{lang === 'ar' ? 'العودة للأعلى' : 'Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Dedicated Legal Links Row (Clean unboxed typographic links) */}
          {onNavigateLegal && (
            <div className="pt-4 border-t border-white/[0.04] w-full max-w-3xl mx-auto">
              <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-3">
                {lang === 'ar' ? 'الشفافية والصفحات القانونية' : 'Legal & Compliance'}
              </span>

              <nav className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-zinc-400 font-medium">
                {legalLinks.map((item, idx) => (
                  <React.Fragment key={item.id}>
                    <button
                      onClick={() => onNavigateLegal(item.id)}
                      className="hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {lang === 'ar' ? item.labelAr : item.labelEn}
                    </button>
                    {idx < legalLinks.length - 1 && (
                      <span aria-hidden="true" className="text-zinc-600 select-none">·</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          )}

          {/* Copyright notice */}
          <div className="pt-6 border-t border-white/[0.04] w-full flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
            <span>
              © {new Date().getFullYear()} {lang === 'ar' ? 'أيوب الميسوري. جميع الحقوق محفوظة.' : 'Ayoub El Maissouri. All rights reserved.'}
            </span>
            <span className="font-mono text-[11px] text-zinc-400">
              {lang === 'ar' ? 'العلامة الشخصية الرقمية' : 'Personal Brand Edition'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
