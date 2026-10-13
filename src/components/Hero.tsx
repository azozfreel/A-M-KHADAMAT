import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { ActivePage } from '../types/bank';

interface HeroProps {
  lang: Language;
  onNavigatePage?: (page: ActivePage) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onNavigatePage }) => {
  const handleProjectsClick = () => {
    if (onNavigatePage) {
      onNavigatePage('projects');
    } else {
      const element = document.getElementById('projects');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (onNavigatePage) {
      onNavigatePage('contact');
    } else {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Soothing Ambient Background Warmth - Gentle & Restful */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-slate-600/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability Badge - Quiet & Restful */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>
            {lang === 'ar'
              ? 'متاح لبناء وتطوير المشاريع الرقمية والمتاجر الإلكترونية'
              : 'Available for digital ventures & e-commerce development'}
          </span>
        </div>

        {/* Primary Name - Elegant & Soft on the Eyes */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-100 tracking-tight leading-[1.2] mb-5">
          {lang === 'ar' ? 'أيوب الميسوري' : 'Ayoub El Maissouri'}
        </h1>

        {/* Subtitle - Clean & Dignified */}
        <p className="text-sm sm:text-base md:text-lg font-medium text-slate-400 mb-6 flex flex-wrap items-center justify-center gap-2.5">
          <span className="text-amber-300/90 font-semibold">Digital Entrepreneur</span>
          <span className="text-slate-600" aria-hidden="true">•</span>
          <span className="text-slate-300">E-Commerce</span>
          <span className="text-slate-600" aria-hidden="true">•</span>
          <span className="text-slate-300">Digital Business</span>
          <span className="text-slate-600" aria-hidden="true">•</span>
          <span className="text-slate-400">Marketing &amp; Growth</span>
        </p>

        {/* Bio Paragraph - High Readability, No Harsh Contrast */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          {lang === 'ar'
            ? 'أبني وأطوّر المشاريع الرقمية، وأعمل في مجالات التجارة الإلكترونية، الأعمال أونلاين، والتسويق الرقمي، مع التركيز على تحويل الأفكار إلى مشاريع واقعية ومستدامة.'
            : 'I build and scale modern digital ventures across e-commerce, online businesses, and digital marketing—focusing on turning ideas into viable, sustainable reality.'}
        </p>

        {/* Action Buttons - Warm, Tactile & Comfortable */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={handleProjectsClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-sm hover:shadow-amber-400/10"
          >
            <span>{lang === 'ar' ? 'استكشف أعمالي ومشاريعي' : 'Explore My Projects'}</span>
            <ArrowIcon className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={handleContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition-all cursor-pointer"
          >
            <span>{lang === 'ar' ? 'تواصل معي مباشرة' : 'Get In Touch'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
