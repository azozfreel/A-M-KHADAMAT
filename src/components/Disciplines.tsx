import React from 'react';
import {
  ShoppingBag,
  Globe,
  Megaphone,
  Zap,
  Check,
  Home,
  ArrowRight,
  ArrowLeft,
  Layers,
  Sparkles,
  Workflow,
  Search,
  Code2,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { disciplinesData } from '../data/content';
import { Language } from '../types';
import { ActivePage } from '../types/bank';

interface DisciplinesProps {
  lang: Language;
  onNavigatePage?: (page: ActivePage) => void;
  onInquireTopic?: (topic: string) => void;
}

export const Disciplines: React.FC<DisciplinesProps> = ({
  lang,
  onNavigatePage,
  onInquireTopic,
}) => {
  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-amber-400" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-amber-400" />;
    }
  };

  const processSteps = [
    {
      step: '01',
      titleAr: 'الدراسة والتحليل التجاري',
      titleEn: 'Market Research & Validation',
      descAr: 'تحليل سلوك الزبائن، فحص حجم الطلب على المنتجات، وتحديد ميزة العرض التنافسي.',
      descEn: 'Analyzing consumer behavior, validating market demand, and defining value propositions.'
    },
    {
      step: '02',
      titleAr: 'البناء وهندسة التجربة',
      titleEn: 'Platform Architecture & UX',
      descAr: 'تصميم المتجر أو المنصة الرقمية بأعلى معايير السرعة وسلاسة عملية الدفع والطلب.',
      descEn: 'Designing high-converting UI/UX, ultra-fast load speeds, and friction-free checkout.'
    },
    {
      step: '03',
      titleAr: 'الإطلاق واستراتيجيات التسويق',
      titleEn: 'Acquisition & Campaign Launch',
      descAr: 'تنفيذ خطط الإعلانات الموجهة وإنشاء المحتوى التسويقي لجلب زوار مهتمين ومستعدين للشراء.',
      descEn: 'Executing targeted ad strategies and compelling creative media for qualified customer acquisition.'
    },
    {
      step: '04',
      titleAr: 'التحسين والتوسع المستمر',
      titleEn: 'Optimization & Scaling',
      descAr: 'قراءة البيانات ومعدلات التحويل، خفض كلفة الاكتساب، وتوسيع العمليات لزيادة الإيرادات.',
      descEn: 'Data analytics, conversion rate optimization (CRO), lowering CAC, and operational scaling.'
    }
  ];

  const handleInquire = (title: string) => {
    if (onInquireTopic) {
      onInquireTopic(title);
    }
    if (onNavigatePage) {
      onNavigatePage('contact');
    }
  };

  return (
    <div className="py-28 pt-36 bg-[#0E1117] text-start min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <button
            onClick={() => onNavigatePage && onNavigatePage('home')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الرئيسية' : 'Home'}</span>
          </button>
          <span>/</span>
          <span className="text-amber-400 font-semibold">
            {lang === 'ar' ? 'مجالات العمل والخدمات' : 'Disciplines & Services'}
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-amber-400 text-xs font-medium mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'التخصصات والخدمات الرقمية' : 'Domains of Expertise'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight mb-4">
            {lang === 'ar' ? 'مجالات العمل والخدمات الرقمية' : 'Core Disciplines & Services'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            {lang === 'ar'
              ? 'حلول شاملة ومتخصصة تغطي تأسيس المتاجر الإلكترونية، إدارة المشاريع الرقمية، استراتيجيات التسويق بالمحتوى والإعلانات، وتقديم الاستشارات العملية لتحقيق نمو مستدام.'
              : 'End-to-end solutions covering modern e-commerce setup, digital business operations, high-converting customer acquisition, and pragmatic consulting.'}
          </p>
        </div>

        {/* 4 Detailed Disciplines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {disciplinesData.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/90 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center shadow-xs">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700/50 text-amber-400">
                    {item.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-100 mb-3">
                  {lang === 'ar' ? item.title : item.titleEn}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {lang === 'ar' ? item.description : item.descriptionEn}
                </p>

                {/* Scope deliverables / highlights */}
                <div className="space-y-3 pt-5 border-t border-slate-800/60 mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    {lang === 'ar' ? 'نطاق العمل والمخرجات:' : 'Key Deliverables & Scope:'}
                  </h4>
                  {(lang === 'ar' ? item.highlights : item.highlightsEn).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => handleInquire(lang === 'ar' ? item.title : item.titleEn)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  <span>{lang === 'ar' ? 'طلب استشارة أو مشروع في هذا المجال' : 'Inquire About This Service'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow & Process Methodology */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800/80">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold text-amber-400/90 tracking-wider uppercase mb-2 block font-mono">
              {lang === 'ar' ? 'منهجية العمل' : 'Our Workflow'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-3">
              {lang === 'ar' ? 'مراحل تنفيذ وتطوير أي مشروع' : 'Project Execution Methodology'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {lang === 'ar'
                ? 'خطوات عملية واضحة تضمن بناء مشاريع رقمية مربحة ومستقرة من اليوم الأول.'
                : 'A structured, battle-tested pipeline guaranteeing clarity, speed, and real-world results.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((p, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold font-mono text-amber-400/80 block mb-3">
                    {p.step}
                  </span>
                  <h3 className="text-sm font-bold text-slate-100 mb-2">
                    {lang === 'ar' ? p.titleAr : p.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {lang === 'ar' ? p.descAr : p.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-100 mb-1">
              {lang === 'ar' ? 'هل تود استعراض نماذج مشاريع فعلية؟' : 'Want to see actual working prototypes?'}
            </h3>
            <p className="text-xs text-slate-400">
              {lang === 'ar'
                ? 'تفضل بزيارة صفحة المشاريع والأعمال للاطلاع على نماذج المتاجر والحلول.'
                : 'Explore detailed mockups, case studies, and live platforms.'}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigatePage && onNavigatePage('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer"
            >
              <span>{lang === 'ar' ? 'صفحة الأعمال والمشاريع' : 'View Projects'}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onNavigatePage && onNavigatePage('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 transition-all cursor-pointer"
            >
              <span>{lang === 'ar' ? 'تواصل معي' : 'Contact'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
