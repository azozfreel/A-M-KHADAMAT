import React from 'react';
import { Target, BookOpen, Lightbulb, Hammer, Sparkles, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const pillars = [
    {
      icon: Target,
      titleAr: 'الطموح والوضوح',
      titleEn: 'Ambition & Clarity',
      descAr: 'الإيمان بأن الفرص في التجارة والأعمال الرقمية لا حدود لها لمن يمتلك رؤية دقيقة وإصراراً على التطوير دون تردد.',
      descEn: 'Relentless pursuit of high-impact digital leverage and refusing to settle for standard benchmarks.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/20'
    },
    {
      icon: BookOpen,
      titleAr: 'التعلم المستمر والمواكبة',
      titleEn: 'Continuous Learning',
      descAr: 'تحديث المهارات يومياً في سلوك المستهلك، خوارزميات التجارة الإلكترونية، وأحدث منصات التسويق الرقمي.',
      descEn: 'Disciplined daily study of consumer psychology, e-commerce mechanics, and emerging acquisition funnels.',
      color: 'text-amber-400',
      border: 'border-amber-500/20'
    },
    {
      icon: Lightbulb,
      titleAr: 'الابتكار والاختبار',
      titleEn: 'Innovation & Testing',
      descAr: 'الابتعاد عن الحلول المكررة وتجربة عروض تجارية مبتكرة، استراتيجيات إعلانية فعالة، ومسارات بيع سريعة.',
      descEn: 'Testing high-converting angles in commercial positioning, sales funnels, and customer retention.',
      color: 'text-teal-400',
      border: 'border-teal-500/20'
    },
    {
      icon: Hammer,
      titleAr: 'بناء المشاريع والعمل الرقمي',
      titleEn: 'Building & Execution',
      descAr: 'الانتقال الفوري من حيز الأفكار إلى بناء المتاجر الإلكترونية، تشغيل العمليات، وتقديم خدمات رقمية حقيقية.',
      descEn: 'Transforming abstract insights into functional online stores, digital services, and scalable ventures.',
      color: 'text-sky-400',
      border: 'border-sky-500/20'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0C11]/50 border-t border-b border-white/[0.04]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'النبذة والرؤية' : 'Identity & Vision'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            {lang === 'ar' ? 'من أنا؟' : 'Who Am I?'}
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {lang === 'ar'
              ? 'أنا أيوب الميسوري، رائد أعمال رقمي شغوف بعالم الإنترنت واستكشاف فرصه التجارية الواعدة. أعمل في مجالات التجارة الإلكترونية، بناء المشاريع الرقمية أونلاين، التسويق الرقمي، وتطوير المنتجات والخدمات على شبكة الإنترنت؛ بهدف خلق قيمة مستدامة وتحويل الأفكار الطموحة إلى مشاريع قائمة ومربحة.'
              : 'I am Ayoub El Maissouri, a digital entrepreneur operating across e-commerce, online venture architecture, digital marketing, and automated internet services. My focus is engineering real value, executing with discipline, and transforming ambitious commercial ideas into profitable operational reality.'}
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Story Box */}
          <div className="lg:col-span-7 bg-zinc-950/70 p-6 sm:p-8 rounded-2xl border border-white/[0.07] relative shadow-xl text-start">
            <div className="space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                {lang === 'ar'
                  ? 'لم أتعامل يوماً مع الإنترنت كمجرد مساحة للتصفح العابر، بل كمختبر مفتوح لبناء المشاريع وتأسيس مصادر الدخل الرقمية. أؤمن بأن القوة الحقيقية في العصر الحالي تكمن في القدرة على فهم احتياجات السوق، وبناء متاجر وعروض تجارية تلبي طلبات المشترين، واستخدام التسويق الرقمي للوصول إلى الجمهور المناسب.'
                  : 'I have never viewed the internet as a passive entertainment feed, but rather as an open laboratory for building businesses and launching autonomous digital engines. Modern leverage lies in understanding customer demand, launching seamless digital commerce platforms, and mastering traffic acquisition.'}
              </p>

              <p>
                {lang === 'ar'
                  ? 'منهجيتي في العمل تقوم على الانضباط والتنفيذ العملي بدلاً من الوعود النظرية. سواء كان الأمر يتعلق بإطلاق متجر إلكتروني جديد، تطوير مسار مبيعات لخدمة رقمية، أو إدارة حملة تسويقية، فإنني أضع الجودة، تجربة العميل، والتنفيذ السريع كركائز أساسية لا مساومة عليها.'
                  : 'My methodology centers on rigorous operational discipline and practical execution over theoretical noise. Whether launching a new e-commerce store, scaling a digital service funnel, or optimizing traffic, craft and rapid delivery are non-negotiable.'}
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-medium">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'تركيز كلي على التنفيذ الفعلي' : 'Pragmatic Execution'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'عقلية تجارية ونمو مستدام' : 'Commercial Growth Mindset'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-teal-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'بناء أصول ومتاجر رقمية' : 'Digital Retail Assets'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Philosophy Callout */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-6 sm:p-8 rounded-2xl border border-emerald-500/20 relative shadow-xl text-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <ShoppingBag className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              {lang === 'ar' ? 'تحويل الأفكار إلى نتائج ومبيعات' : 'From Concept to Profitable Scale'}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              {lang === 'ar'
                ? 'الأفكار بمفردها لا تكفي ما لم تقترن بمتجر فعلي، خطة تسويقية محكمة، ونظام استقبال وتوصيل طلبات يعتمد عليه. التركيز الدائم هو تحويل كل رؤية إلى خطة عمل تنتج قيمة تجارية قابلة للقياس.'
                : 'Raw ideas have zero enterprise value without execution systems. The constant objective is translating every ambition into tangible assets: a functioning store, high-intent funnels, and repeatable customer orders.'}
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.04]">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                {lang === 'ar' ? 'المبدأ الأساسي' : 'Guiding Maxim'}
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 italic">
                {lang === 'ar'
                  ? '“لا تخف من البداية، بل ابنِ متجرك ومشروعك الرقمي ونفّذ بانضباط يومي.”'
                  : '“Start building, deploy your digital venture, and execute with relentless daily discipline.”'}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-start">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-zinc-950/60 border ${item.border} hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group shadow-lg`}
              >
                <div className={`w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
