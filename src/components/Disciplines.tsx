import React, { useState } from 'react';
import { ShoppingBag, Globe, Megaphone, Zap, Quote, Sparkles } from 'lucide-react';
import { disciplinesData } from '../data/content';
import { Language, Discipline } from '../types';

interface DisciplinesProps {
  lang: Language;
}

export const Disciplines: React.FC<DisciplinesProps> = ({ lang }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>(disciplinesData[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getBorderColor = (id: string) => {
    switch (id) {
      case 'ecommerce':
        return 'hover:border-amber-500/40 group-hover:shadow-amber-950/20';
      case 'digital-business':
        return 'hover:border-sky-500/40 group-hover:shadow-sky-950/20';
      case 'digital-marketing':
        return 'hover:border-purple-500/40 group-hover:shadow-purple-950/20';
      case 'digital-services':
        return 'hover:border-emerald-500/40 group-hover:shadow-emerald-950/20';
      default:
        return 'hover:border-emerald-500/40';
    }
  };

  return (
    <section id="disciplines" className="py-24 relative overflow-hidden bg-[#08090D]">
      {/* Background radial soft light */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{lang === 'ar' ? 'المجالات والخبرات' : 'Disciplines & Focus Areas'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {lang === 'ar' ? 'مجالات العمل والتركيز' : 'Core Disciplines of Execution'}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            {lang === 'ar'
              ? 'مجموعة متكاملة من المهارات التجارية والتسويقية الرقمية التي تخدم هدفاً واحداً: بناء وتوسيع متاجر ومشاريع أونلاين ذات أثر ومردود حقيقي.'
              : 'A synergistic set of modern commercial, marketing, and digital capabilities focused on building and scaling high-performing online ventures.'}
          </p>
        </div>

        {/* Disciplines Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {disciplinesData.map((item, index) => {
            const isSelected = selectedDiscipline.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedDiscipline(item)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 bg-zinc-950/70 border transition-all duration-300 group flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-500/50 bg-gradient-to-b from-zinc-900/90 to-zinc-950 shadow-xl shadow-emerald-950/30 ring-1 ring-emerald-500/30'
                    : `border-white/[0.06] ${getBorderColor(item.id)} hover:bg-zinc-900/40`
                }`}
              >
                <div>
                  {/* Card Top: Index & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {lang === 'ar' ? item.title : item.titleEn}
                  </h3>

                  {/* Subtitle / Category text */}
                  <p className="text-xs text-emerald-400/90 font-medium tracking-wide mb-4">
                    {lang === 'ar' ? item.category : item.categoryEn}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {lang === 'ar' ? item.description : item.descriptionEn}
                  </p>

                  {/* Bullet list */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.05]">
                    {(lang === 'ar' ? item.highlights : item.highlightsEn).map((point, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom hint */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-zinc-400 group-hover:text-zinc-300">
                  <span>{lang === 'ar' ? 'فلسفة المجال' : 'Perspective'}</span>
                  <span className="text-emerald-400 text-xs font-bold">
                    {lang === 'ar' ? 'عرض الرؤية ←' : 'Read View →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Discipline Perspective Spotlight Box */}
        {selectedDiscipline && (
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10 text-start">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Quote className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-emerald-400 font-semibold tracking-wider block mb-1">
                    {lang === 'ar' ? 'رؤية أيوب في' : 'Ayoub’s Stance on'} {lang === 'ar' ? selectedDiscipline.title : selectedDiscipline.titleEn}
                  </span>
                  <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
                    “{lang === 'ar' ? selectedDiscipline.quote : selectedDiscipline.quoteEn}”
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="text-xs text-zinc-400">
                  {lang === 'ar' ? 'انقر على أي بطاقة لعرض الرؤية' : 'Click any discipline to view thesis'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
