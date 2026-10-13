import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Globe,
  Megaphone,
  Zap,
  Check,
  Workflow,
  Sparkles,
  ArrowUpRight,
  CreditCard,
  MessageCircle
} from 'lucide-react';
import { Language, Theme } from '../types';
import { ActivePage } from '../types/bank';
import { disciplinesData } from '../data/content';

interface DisciplinesPageProps {
  lang: Language;
  theme: Theme;
  onNavigatePage: (page: ActivePage) => void;
  onInquireService: (serviceName: string) => void;
}

export const DisciplinesPage: React.FC<DisciplinesPageProps> = ({
  lang,
  theme,
  onNavigatePage,
  onInquireService,
}) => {
  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const isDark = theme === 'dark';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-amber-500" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-amber-500" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-amber-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      default:
        return <ShoppingBag className="w-6 h-6 text-amber-500" />;
    }
  };

  const processSteps = [
    {
      step: '01',
      titleAr: 'دراسة الفكرة وتحديد الفرصة',
      titleEn: 'Discovery & Market Analysis',
      descAr: 'تحليل سلوك الجمهور المستهدف، التحقق من حجم الطلب، وتحديد نموذج الربح الأنسب.',
      descEn: 'Analyzing target audience behavior, validating market demand, and identifying optimum unit economics.'
    },
    {
      step: '02',
      titleAr: 'الهندسة والتصميم وتجربة المستخدم',
      titleEn: 'UX/UI Architecture & Funnel Design',
      descAr: 'تصميم واجهة متجر متطورة وسريعة، تركز على سهولة التصفح ورفع معدل التحويل إلى أقصى حد.',
      descEn: 'Designing high-conversion store interfaces, frictionless checkout pathways, and clear product positioning.'
    },
    {
      step: '03',
      titleAr: 'الربط التقني وبوابات الدفع والتوريد',
      titleEn: 'Technical Integration & Logistics',
      descAr: 'تكامل المنصات وبوابات الدفع الرقمية، وأتمتة مسارات التوريد وإدارة الطلبات وخدمة الزبائن.',
      descEn: 'Integrating payment gateways, inventory sync, order fulfillment automation, and customer support.'
    },
    {
      step: '04',
      titleAr: 'الإطلاق، التسويق، والتحسين المستمر',
      titleEn: 'Launch, Scale & CRO Optimization',
      descAr: 'إطلاق الحملات التسويقية، قياس الأداء بدقة، واختبار العروض لزيادة المبيعات والربحية.',
      descEn: 'Deploying acquisition campaigns, telemetry tracking, split-testing offers, and scaling profitable assets.'
    }
  ];

  return (
    <div className="pt-32 pb-24 text-start">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs mb-8">
          <button
            onClick={() => onNavigatePage('home')}
            className={`hover:underline cursor-pointer ${
              isDark ? 'text-slate-400 hover:text-amber-400' : 'text-slate-500 hover:text-amber-600'
            }`}
          >
            {lang === 'ar' ? 'الرئيسية' : 'Home'}
          </button>
          <span className={isDark ? 'text-slate-600' : 'text-slate-300'}>/</span>
          <span className="text-amber-500 font-semibold">
            {lang === 'ar' ? 'مجالات العمل والخدمات' : 'Disciplines & Services'}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase mb-2 block">
            {lang === 'ar' ? 'الخبرات والخدمات الرقمية' : 'Expertise & Capabilities'}
          </span>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'مجالات العمل والتطوير' : 'Core Disciplines & Services'}
          </h1>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'ar'
              ? 'حلول متكاملة لبناء وتوسيع المتاجر والمشاريع الرقمية وتحقيق أفضل النتائج التجارية المستدامة على الإنترنت.'
              : 'End-to-end solutions for building, scaling, and optimizing modern e-commerce stores and digital ventures.'}
          </p>
        </div>

        {/* Detailed Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {disciplinesData.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-colors ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                  : 'bg-white border-slate-200/90 hover:border-amber-400/60 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isDark ? 'bg-slate-800 text-amber-400' : 'bg-amber-50 text-amber-600'
                    }`}
                  >
                    {getIcon(item.iconName)}
                  </div>

                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full ${
                      isDark
                        ? 'bg-slate-800 text-slate-300'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {lang === 'ar' ? item.category : item.categoryEn}
                  </span>
                </div>

                <h2
                  className={`text-xl sm:text-2xl font-bold mb-3 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  {lang === 'ar' ? item.title : item.titleEn}
                </h2>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {lang === 'ar' ? item.description : item.descriptionEn}
                </p>

                {/* Highlights list */}
                <div
                  className={`p-4 rounded-2xl border space-y-2.5 mb-6 ${
                    isDark
                      ? 'bg-slate-950/50 border-slate-800/60'
                      : 'bg-slate-50 border-slate-200/70'
                  }`}
                >
                  <span className="text-[11px] font-semibold text-amber-500 block uppercase tracking-wider mb-1">
                    {lang === 'ar' ? 'أبرز عناصر ونطاق العمل' : 'Key Capabilities'}
                  </span>
                  {(lang === 'ar' ? item.highlights : item.highlightsEn).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Guiding Quote */}
                <p
                  className={`text-xs italic mb-6 pl-3 border-l-2 border-amber-500/60 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  “{lang === 'ar' ? item.quote : item.quoteEn}”
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => onInquireService(lang === 'ar' ? item.title : item.titleEn)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-xs"
                >
                  <span>{lang === 'ar' ? 'طلب استشارة لهذه الخدمة' : 'Inquire This Service'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigatePage('projects')}
                  className={`text-xs font-medium hover:underline cursor-pointer ${
                    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang === 'ar' ? 'أمثلة عملية' : 'Case Studies'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Methodology Process */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase mb-2 block">
              {lang === 'ar' ? 'منهجية العمل' : 'Execution Methodology'}
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'كيف نحول الفكرة إلى مشروع ناجح؟' : 'How We Execute Ventures'}
            </h2>
            <p
              className={`text-xs sm:text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {lang === 'ar'
                ? 'مسار واضح ومحدد من أربع مراحل يضمن أعلى جودة وسرعة في التنفيذ.'
                : 'A disciplined four-phase pipeline guaranteeing quality and rapid delivery.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((st, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800/70'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <span className="text-xl font-bold font-mono text-amber-500 block mb-2">
                  {st.step}
                </span>
                <h3
                  className={`text-base font-bold mb-2 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  {lang === 'ar' ? st.titleAr : st.titleEn}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {lang === 'ar' ? st.descAr : st.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          className={`p-8 sm:p-10 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark
              ? 'bg-slate-900/50 border-slate-800/80'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold mb-2 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'هل تريد إطلاق متجرك أو مشروعك الرقمي؟' : 'Ready to build your digital store?'}
            </h3>
            <p
              className={`text-xs sm:text-sm max-w-xl ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {lang === 'ar'
                ? 'تواصل معي مباشرة لمناقشة المتطلبات، اختيار الحلول المناسبة، وبدء التنفيذ.'
                : 'Get in touch directly to discuss requirements, architecture, and deployment.'}
            </p>
          </div>

          <button
            onClick={() => onNavigatePage('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تواصل معي الآن' : 'Get In Touch'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
