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
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'commerce':
        return <ShoppingCart className="w-5 h-5 text-amber-400" />;
      case 'marketing':
        return <Megaphone className="w-5 h-5 text-teal-400" />;
      case 'execution':
        return <Hammer className="w-5 h-5 text-sky-400" />;
      case 'learning':
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const currentPillar = philosophyPillars[activePillarIndex];

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-[#08090D]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
            {lang === 'ar' ? 'فلسفة العمل والدافع' : 'Operating Philosophy & Synergy'}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
            {lang === 'ar' ? 'لماذا أعمل بهذه المجالات؟' : 'Why Operate Across These Disciplines?'}
          </h2>

          {/* Core Philosophy Quote Block */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/80 via-zinc-950 to-zinc-950 border border-emerald-500/20 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase block mb-3">
              {lang === 'ar' ? 'الرؤية الجوهرية' : 'Core Conviction'}
            </span>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed mb-4">
              “{lang === 'ar'
                ? 'الإنترنت ليس مجرد مكان للعمل، بل مساحة لبناء شيء حقيقي ومستدام.'
                : 'The internet is not merely a place to work; it is an open canvas to build something enduring and real.'}”
            </blockquote>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
              {lang === 'ar'
                ? 'النجاح الرقمي الحديث لا يأتي من الاعتماد على جانب واحد، بل من دمج خمس قوى أساسية تتضافر معاً لإنشاء مشاريع ومتاجر قابلة للتوسع والنمو المستمر.'
                : 'Modern digital enterprise requires the compounding intersection of five core pillars to engineer resilient, scalable commercial ventures.'}
            </p>
          </div>
        </div>

        {/* The 5 Pillars Synergy Equation Formula */}
        <div className="mb-14 p-4 rounded-2xl bg-zinc-950/80 border border-white/[0.06] flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-white shadow-lg">
          <span className="text-emerald-400">{lang === 'ar' ? 'التكنولوجيا' : 'Technology'}</span>
          <span className="text-zinc-600">+</span>
          <span className="text-amber-400">{lang === 'ar' ? 'التجارة الإلكترونية' : 'E-Commerce'}</span>
          <span className="text-zinc-600">+</span>
          <span className="text-teal-400">{lang === 'ar' ? 'التسويق الرقمي' : 'Marketing'}</span>
          <span className="text-zinc-600">+</span>
          <span className="text-sky-400">{lang === 'ar' ? 'التنفيذ والتشغيل' : 'Operations'}</span>
          <span className="text-zinc-600">+</span>
          <span className="text-purple-400">{lang === 'ar' ? 'التعلم المستمر' : 'Continuous Learning'}</span>
          <span className="text-emerald-400 mx-1">=</span>
          <span className="text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-500/30 font-extrabold">
            {lang === 'ar' ? 'مشاريع رقمية ومتاجر قابلة للتوسع' : 'Scalable Digital Ventures'}
          </span>
        </div>

        {/* Interactive 5 Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {philosophyPillars.map((item, index) => {
            const isSelected = activePillarIndex === index;
            return (
              <button
                key={item.id}
                onClick={() => setActivePillarIndex(index)}
                className={`p-4 rounded-2xl border text-start transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 border-emerald-500/50 shadow-lg shadow-emerald-950/30 ring-1 ring-emerald-500/20'
                    : 'bg-zinc-950/60 border-white/[0.06] hover:bg-zinc-900/60 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-black/50 flex items-center justify-center">
                    {getPillarIcon(item.id)}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">
                    {lang === 'ar' ? item.title : item.titleEn}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-snug line-clamp-1">
                    {lang === 'ar' ? item.subtitle : item.subtitleEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Deep Dive Card */}
        {currentPillar && (
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-white/[0.08] relative overflow-hidden shadow-xl text-start">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0">
                  {getPillarIcon(currentPillar.id)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                      {lang === 'ar' ? 'الركيزة رقم 0' : 'Pillar 0'}{activePillarIndex + 1}
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-400">
                      {lang === 'ar' ? currentPillar.subtitle : currentPillar.subtitleEn}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {lang === 'ar' ? currentPillar.title : currentPillar.titleEn}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
                    {lang === 'ar' ? currentPillar.description : currentPillar.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="shrink-0 p-4 rounded-xl bg-black/40 border border-white/[0.05] text-xs text-zinc-400 max-w-xs">
                <span className="text-emerald-400 font-bold block mb-1">
                  {lang === 'ar' ? 'الأثر في المعادلة' : 'Synergy Effect'}
                </span>
                {lang === 'ar'
                  ? 'يتكامل هذا المبدأ مع باقي الركائز لضمان بناء عمل منظم، متجر ناجح، ومبيعات مستمرة.'
                  : 'Compounding this principle across the other four anchors repeatable sales and sustainable operational delivery.'}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
