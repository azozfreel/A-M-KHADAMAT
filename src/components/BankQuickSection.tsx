import React from 'react';
import { Building2, ShieldCheck, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface BankQuickSectionProps {
  lang: Language;
  onNavigateBanks: () => void;
}

export const BankQuickSection: React.FC<BankQuickSectionProps> = ({ lang, onNavigateBanks }) => {
  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 border-t border-zinc-800/40 text-start">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/60 text-zinc-300 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ar' ? 'معاملات بنكية موثوقة' : 'Official Banking Directory'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#F1F3F7]">
              {lang === 'ar' ? 'الحسابات والتحويلات البنكية (RIB)' : 'Official Bank Accounts & RIB'}
            </h3>

            <p className="text-sm text-zinc-400 max-w-lg leading-relaxed">
              {lang === 'ar'
                ? 'حسابات بنكية رسمية ومعتمدة باسم أيوب الميسوري لدفع الفواتير، معاملات المتاجر، وتطوير المشاريع الرقمية بأمان وسلاسة.'
                : 'Verified official bank accounts and RIB details under Ayoub El Maissouri for smooth and secure commercial transfers.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onNavigateBanks}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-950 bg-[#F1F3F7] hover:bg-white transition-all cursor-pointer shadow-sm"
            >
              <Building2 className="w-4 h-4 text-zinc-800" />
              <span>{lang === 'ar' ? 'عرض تفاصيل الحسابات والـ RIB' : 'View Bank Accounts & RIB'}</span>
              <ArrowIcon className="w-4 h-4 text-zinc-800" />
            </button>

            <a
              href="https://wa.me/212660177093?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%A3%D9%8A%D9%88%D8%A8%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%AA%D8%AD%D9%88%D9%8A%D9%84%20%D8%A7%D9%84%D8%A8%D9%86%D9%83%D9%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-zinc-200 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'ar' ? 'تأكيد التحويل عبر واتساب' : 'Confirm via WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
