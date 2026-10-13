import React, { useState } from 'react';
import { Cpu, ShoppingCart, Megaphone, Hammer, BookOpen, Sparkles } from 'lucide-react';
import { philosophyPillars } from '../data/content';
import { Language } from '../types';

interface PhilosophyProps {
  lang: Language;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'tech':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'commerce':
        return <ShoppingCart className="w-4 h-4 text-amber-400" />;
      case 'marketing':
        return <Megaphone className="w-4 h-4 text-amber-400" />;
      case 'execution':
        return <Hammer className="w-4 h-4 text-amber-400" />;
      case 'learning':
        return <BookOpen className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  const currentPillar = philosophyPillars[activePillarIndex];

  return (
    <section id="philosophy" className="py-24 border-t border-slate-800/60 text-start">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-amber-400/90 tracking-wider uppercase mb-2 block">
            {lang === 'ar' ? 'فلسفة العمل' : 'Philosophy'}
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-6">
            {lang === 'ar' ? 'لماذا أعمل بهذه المجالات؟' : 'Why Operate Across These Disciplines?'}
          </h2>

          {/* Core Philosophy Quote Block - Minimalist & Elegant */}
          <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center shadow-xs">
            <span className="text-xs font-mono text-amber-400/90 uppercase tracking-wider block mb-2.5">
              {lang === 'ar' ? 'الرؤية الجوهرية' : 'Core Conviction'}
            </span>

            <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 leading-relaxed mb-3.5">
              “{lang === 'ar'
                ? 'الإنترنت ليس مجرد مكان للعمل، بل مساحة لبناء شيء حقيقي ومستدام.'
                : 'The internet is not merely a place to work; it is an open canvas to build something enduring and real.'}”
            </blockquote>

            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              {lang === 'ar'
                ? 'النجاح الرقمي يتحقق من خلال تكامل خمس ركائز أساسية لتأسيس مشاريع ومتاجر ذات نمو مستقر.'
                : 'Modern digital enterprise thrives through the compounding balance of five operational pillars.'}
            </p>
          </div>
        </div>

        {/* 5 Pillars Synergy Equation Formula - Clean Text */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-300 font-medium">
          <span className="text-slate-200">{lang === 'ar' ? 'التكنولوجيا' : 'Technology'}</span>
          <span className="text-slate-600">+</span>
          <span className="text-slate-200">{lang === 'ar' ? 'التجارة الإلكترونية' : 'E-Commerce'}</span>
          <span className="text-slate-600">+</span>
          <span className="text-slate-200">{lang === 'ar' ? 'التسويق الرقمي' : 'Marketing'}</span>
          <span className="text-slate-600">+</span>
          <span className="text-slate-200">{lang === 'ar' ? 'التنفيذ والتشغيل' : 'Operations'}</span>
          <span className="text-slate-600">+</span>
          <span className="text-slate-200">{lang === 'ar' ? 'التعلم المستمر' : 'Learning'}</span>
          <span className="text-slate-500 mx-1">=</span>
          <span className="text-slate-950 font-semibold px-2.5 py-1 rounded-md bg-amber-400">
            {lang === 'ar' ? 'مشاريع رقمية قابلة للتوسع' : 'Scalable Ventures'}
          </span>
        </div>

        {/* 5 Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {philosophyPillars.map((item, index) => {
            const isSelected = activePillarIndex === index;
            return (
              <button
                key={item.id}
                onClick={() => setActivePillarIndex(index)}
                className={`p-4 rounded-2xl border text-start transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 border-slate-600 shadow-xs ring-1 ring-slate-600'
                    : 'bg-slate-900/40 border-slate-800/70 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center">
                    {getPillarIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-100 mb-0.5">
                    {lang === 'ar' ? item.title : item.titleEn}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {lang === 'ar' ? item.subtitle : item.subtitleEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Card */}
        {currentPillar && (
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-800/90 flex items-center justify-center shrink-0 shadow-xs">
                {getPillarIcon(currentPillar.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400/90 block mb-1">
                  {lang === 'ar' ? currentPillar.title : currentPillar.titleEn}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  {lang === 'ar' ? currentPillar.description : currentPillar.descriptionEn}
                </p>
              </div>
            </div>

            <div className="shrink-0 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 text-xs text-slate-400 max-w-xs">
              <span className="text-slate-200 font-semibold block mb-0.5">
                {lang === 'ar' ? 'التكامل التشغيلي' : 'Synergy Value'}
              </span>
              {lang === 'ar'
                ? 'يتكامل هذا المبدأ لضمان بناء عمل منظم، متجر ناجح، ومبيعات مستمرة.'
                : 'Anchors repeatable sales and sustainable operational delivery.'}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
