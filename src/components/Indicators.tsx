import React from 'react';
import { indicatorsData } from '../data/content';
import { Language } from '../types';

interface IndicatorsProps {
  lang: Language;
}

export const Indicators: React.FC<IndicatorsProps> = ({ lang }) => {
  return (
    <section className="py-24 border-t border-slate-800/60 text-start">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-amber-400/90 tracking-wider uppercase mb-2 block">
            {lang === 'ar' ? 'المعايير المهنية' : 'Standards'}
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-4">
            {lang === 'ar' ? 'مؤشرات الأداء والالتزام' : 'Operational Principles'}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            {lang === 'ar'
              ? 'معايير عمل واضحة تقوم على الانضباط، الجودة، والتطوير المستمر في كل مشروع.'
              : 'Clear operating principles rooted in discipline, craft, and continuous adaptation.'}
          </p>
        </div>

        {/* 4 Cards Grid - Calm & Professional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {indicatorsData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/70 hover:border-slate-700/80 transition-colors flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-mono text-amber-300/90 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/80">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-2">
                  {lang === 'ar' ? item.title : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {lang === 'ar' ? item.desc : item.descEn}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>{lang === 'ar' ? 'الحالة' : 'Status'}</span>
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  {lang === 'ar' ? 'معيار دائم' : 'Active'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
