import React from 'react';
import { ArrowLeft, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
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
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#08090D] via-[#0B0D14] to-[#08090D]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-zinc-950/80 border border-emerald-500/30 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Subtle decorative accents */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'دعوة للتعاون وبناء المشاريع' : 'Let’s Build Something Remarkable'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
            {lang === 'ar' ? 'هل لديك فكرة أو مشروع؟' : 'Have a Venture or Concept in Mind?'}
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            {lang === 'ar'
              ? '“إذا كنت تبحث عن شخص يساعدك في بناء متجر إلكتروني، تطوير مشروع رقمي، التسويق الإلكتروني أو الخدمات الرقمية، دعنا نتحدث.”'
              : '“If you are looking for someone to collaborate with on building an online store, scaling a digital venture, e-commerce systems, or digital marketing—let’s talk.”'}
          </p>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-sm font-black text-zinc-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 hover:from-emerald-300 hover:to-teal-100 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <span>{lang === 'ar' ? 'تواصل معي' : 'Get In Touch'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
