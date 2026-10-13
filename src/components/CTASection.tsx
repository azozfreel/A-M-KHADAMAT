import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface CTASectionProps {
  lang: Language;
}

export const CTASection: React.FC<CTASectionProps> = ({ lang }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 border-t border-slate-800/60 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/50 border border-slate-800/80 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-36 bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-semibold text-amber-400/90 tracking-wider uppercase mb-3 block">
            {lang === 'ar' ? 'بناء وتطوير المشاريع' : 'Collaboration'}
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-4">
            {lang === 'ar' ? 'هل لديك فكرة أو مشروع؟' : 'Have a Concept in Mind?'}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            {lang === 'ar'
              ? '“إذا كنت تبحث عن شخص يساعدك في بناء متجر إلكتروني، تطوير مشروع رقمي، التسويق الإلكتروني أو الخدمات الرقمية، دعنا نتحدث.”'
              : '“If you are looking for someone to collaborate with on building an online store, scaling a digital venture, or digital marketing—let’s talk.”'}
          </p>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-sm hover:shadow-amber-400/10"
          >
            <span>{lang === 'ar' ? 'تواصل معي' : 'Get In Touch'}</span>
            <ArrowIcon className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
};
