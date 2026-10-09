import React from 'react';
import { Shield, Sparkles, Zap, Layers, RefreshCw } from 'lucide-react';
import { indicatorsData } from '../data/content';
import { Language } from '../types';

interface IndicatorsProps {
  lang: Language;
}

export const Indicators: React.FC<IndicatorsProps> = ({ lang }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0A0C11]/50 border-t border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
            {lang === 'ar' ? 'منهجية ومعايير العمل' : 'Execution Principles & Indicators'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {lang === 'ar' ? 'مؤشرات الأداء والالتزام المهني' : 'Operational Pillars & Focus'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {lang === 'ar'
              ? 'نبتعد عن الأرقام التسويقية الوهمية؛ المعيار الحقيقي هو وضوح الرؤية، الانضباط في إدارة المخاطر، والقيمة الفعلية المقدمة في كل مشروع.'
              : 'Rejecting fabricated marketing statistics in favor of transparent execution metrics: disciplined risk, verified craft, and continuous self-evolution.'}
          </p>
        </div>

        {/* 4 Authentic Indicator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {indicatorsData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-950/70 border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 font-semibold px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/20">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {lang === 'ar' ? item.title : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {lang === 'ar' ? item.desc : item.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>{lang === 'ar' ? 'حالة المعيار' : 'Status'}</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {lang === 'ar' ? 'مطبّق دائماً' : 'Active Standard'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
