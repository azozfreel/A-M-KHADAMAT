import React from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Globe, Megaphone, Zap, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient Futuristic Background Meshes */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Modern Digital Business Wave Growth SVG in background */}
      <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none opacity-20 overflow-hidden">
        <svg
          viewBox="0 0 1440 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
        >
          <path
            d="M0 220C180 180 360 210 540 160C720 110 900 130 1080 80C1260 30 1380 50 1440 20"
            stroke="url(#growthGradient)"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <path
            d="M0 240C180 200 360 230 540 180C720 130 900 150 1080 100C1260 50 1380 70 1440 40L1440 260L0 260Z"
            fill="url(#growthFill)"
          />
          <defs>
            <linearGradient id="growthGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="0.5" stopColor="#10B981" />
              <stop offset="1" stopColor="#E2B857" />
            </linearGradient>
            <linearGradient id="growthFill" x1="720" y1="40" x2="720" y2="260" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" stopOpacity="0.06" />
              <stop offset="1" stopColor="#08090D" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-8 backdrop-blur-md shadow-lg shadow-emerald-950/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>
            {lang === 'ar'
              ? 'متاح لبناء وتطوير المشاريع الرقمية والمتاجر الإلكترونية'
              : 'Available for e-commerce ventures & digital business scaling'}
          </span>
        </div>

        {/* Primary Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-5">
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {lang === 'ar' ? 'أيوب الميسوري' : 'Ayoub El Maissouri'}
          </span>
        </h1>

        {/* Subtitle / Professional Title */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide text-zinc-300 mb-8 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="text-emerald-400 font-semibold">Digital Entrepreneur</span>
          <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
          <span className="text-amber-300/90 font-medium">E-Commerce</span>
          <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
          <span className="text-teal-300 font-medium">Digital Business</span>
          <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
          <span className="text-sky-300 font-medium">Marketing &amp; Growth</span>
        </p>

        {/* Bio Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300/95 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
          {lang === 'ar'
            ? '“أبني وأطوّر المشاريع الرقمية، وأعمل في مجالات التجارة الإلكترونية، الأعمال أونلاين، والتسويق الرقمي والخدمات الرقمية، مع التركيز على تحويل الأفكار إلى مشاريع وفرص حقيقية ومربحة على الإنترنت.”'
            : '“I build and scale modern digital ventures, operating across e-commerce, online businesses, digital marketing, and web services—with a laser focus on turning ideas into profitable, high-impact internet opportunities.”'}
        </p>

        {/* Two CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          {/* Primary CTA: Explore Work */}
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>{lang === 'ar' ? 'استكشف أعمالي' : 'Explore My Work'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>

          {/* Secondary CTA: Get in Touch */}
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-zinc-500 shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 backdrop-blur-sm cursor-pointer"
          >
            <span>{lang === 'ar' ? 'تواصل معي' : 'Get In Touch'}</span>
          </button>
        </div>

        {/* Feature Strip / Key Mindsets */}
        <div className="pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-4 text-start">
          <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-white/[0.04] backdrop-blur-xs">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{lang === 'ar' ? 'التجارة الإلكترونية' : 'E-Commerce'}</span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug">
              {lang === 'ar' ? 'بناء وتشغيل متاجر رقمية ذات تحويل ومبيعات عالية' : 'High-converting online store architecture'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-white/[0.04] backdrop-blur-xs">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{lang === 'ar' ? 'المشاريع أونلاين' : 'Online Ventures'}</span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug">
              {lang === 'ar' ? 'إطلاق مصادر دخل وأصول رقمية مستقلة' : 'Scalable digital assets & automated systems'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-white/[0.04] backdrop-blur-xs">
            <div className="flex items-center gap-2 text-teal-400 mb-1">
              <Megaphone className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{lang === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing'}</span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug">
              {lang === 'ar' ? 'مسارات تحويل واكتساب عملاء عبر منصات التواصل' : 'Customer acquisition funnels & social reach'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-white/[0.04] backdrop-blur-xs">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{lang === 'ar' ? 'الخدمات الرقمية' : 'Digital Services'}</span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug">
              {lang === 'ar' ? 'تحويل الأفكار والمهارات إلى قيمة تشغيلية مستدامة' : 'Transforming visions into operational value'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
