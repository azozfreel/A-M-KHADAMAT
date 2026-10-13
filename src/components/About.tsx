import React from 'react';
import {
  Target,
  BookOpen,
  Lightbulb,
  Hammer,
  CheckCircle2,
  Home,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  TrendingUp,
  Compass,
  Award,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { Language } from '../types';
import { ActivePage } from '../types/bank';

interface AboutProps {
  lang: Language;
  onNavigatePage?: (page: ActivePage) => void;
}

export const About: React.FC<AboutProps> = ({ lang, onNavigatePage }) => {
  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const pillars = [
    {
      icon: Target,
      titleAr: 'الطموح والوضوح',
      titleEn: 'Ambition & Clarity',
      descAr: 'خطة واضحة وإصرار مستمر على بناء مشاريع رقمية ذات جدوى وقيمة حقيقية.',
      descEn: 'Clear strategy and persistent focus on building viable, high-value digital ventures.'
    },
    {
      icon: BookOpen,
      titleAr: 'التعلم والتطور المستمر',
      titleEn: 'Continuous Learning',
      descAr: 'مواكبة يومية لسلوك المستهلكين، تقنيات التجارة الحديثة، وأحدث استراتيجيات النمو.',
      descEn: 'Daily study of consumer behavior, e-commerce mechanics, and growth strategies.'
    },
    {
      icon: Lightbulb,
      titleAr: 'الابتكار والاختبار',
      titleEn: 'Innovation & Testing',
      descAr: 'تطوير عروض تجارية مبتكرة ومسارات تحويل سلسة تضمن أفضل تجربة للمستخدم.',
      descEn: 'Refining high-converting offers, smooth checkout flows, and user experiences.'
    },
    {
      icon: Hammer,
      titleAr: 'التنفيذ والعمل الواقعي',
      titleEn: 'Execution & Building',
      descAr: 'الانتقال الفوري من الأفكار النظرية إلى إطلاق المتاجر وتشغيل المشاريع بنجاح.',
      descEn: 'Transforming ideas into functioning online stores and operational business assets.'
    }
  ];

  const milestones = [
    {
      year: '2022',
      titleAr: 'الانطلاق في التجارة الرقمية',
      titleEn: 'Entering Digital E-Commerce',
      descAr: 'تأسيس أول متجر إلكتروني واستكشاف مسارات المنتجات وسلاسل الإمداد والتسويق الرقمي.',
      descEn: 'Launching initial e-commerce operations, exploring product research, and unit economics.'
    },
    {
      year: '2023 - 2024',
      titleAr: 'تطوير المشاريع وتوسيع المبيعات',
      titleEn: 'Scaling & Funnel Optimization',
      descAr: 'بناء استراتيجيات تسويق بالمحتوى والإعلانات الموجهة مع تحسين تجربة الشراء ومعدلات التحويل.',
      descEn: 'Mastering conversion funnels, targeted media campaigns, and customer retention systems.'
    },
    {
      year: '2025 - 2026',
      titleAr: 'بناء منظومة الأعمال الرقمية',
      titleEn: 'Integrated Venture Ecosystem',
      descAr: 'التوسع نحو إطلاق حلول متكاملة، تقديم استشارات تجارية، وإدارة عمليات المشاريع أونلاين بكفاءة.',
      descEn: 'Architecting end-to-end digital ventures, advisory services, and operational scalability.'
    }
  ];

  const coreStrengths = [
    {
      labelAr: 'هندسة المتاجر الإلكترونية',
      labelEn: 'E-Commerce Store Architecture',
      detailAr: 'تصميم وبناء متاجر سريعة، متوافقة مع الهواتف، ومحسنة للتحويل (Conversion Rate Optimization).'
    },
    {
      labelAr: 'التسويق وجلب العملاء',
      labelEn: 'Customer Acquisition & Growth',
      detailAr: 'بناء حملات إعلانية مربحة وصناعة محتوى تسويقي مقنع يستهدف الجمهور المناسب بدقة.'
    },
    {
      labelAr: 'تطوير المنتجات والعروض',
      labelEn: 'Offer Creation & Positioning',
      detailAr: 'صياغة عروض تجارية قوية وفريدة تمنح المتجر تفوقاً تنافسياً واضحاً في السوق.'
    },
    {
      labelAr: 'إدارة العمليات والمدفوعات',
      labelEn: 'Operations & Payment Integrity',
      detailAr: 'ربط بوابات الدفع، متابعة التحويلات البنكية المغربية والدولية، وتنسيق خدمات ما بعد البيع.'
    }
  ];

  return (
    <div className="py-28 pt-36 bg-[#0E1117] text-start min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <button
            onClick={() => onNavigatePage && onNavigatePage('home')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الرئيسية' : 'Home'}</span>
          </button>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{lang === 'ar' ? 'من أنا' : 'About Me'}</span>
        </div>

        {/* Section Hero Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-amber-400 text-xs font-medium mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'سيرة ورؤية رائد الأعمال الرقمي' : 'Digital Entrepreneur Bio & Vision'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight mb-5 leading-tight">
            {lang === 'ar' ? 'أيوب الميسوري — بناء المشاريع بوضوح وانضباط' : 'Ayoub El Maissouri — Discipline & Clear Execution'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            {lang === 'ar'
              ? 'رائد أعمال رقمي مغربي، أعمل على بناء وإطلاق المشاريع التجارية على الإنترنت وتطوير المتاجر الإلكترونية وحلول التسويق الحديثة، مع التركيز التام على القيمة المضافة والنتائج الواقعية.'
              : 'A digital entrepreneur based in Morocco, focused on architecting online commercial ventures, high-converting e-commerce stores, and data-driven growth funnels.'}
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800/80">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{lang === 'ar' ? 'فلسفتي في ريادة الأعمال الرقمية' : 'My Entrepreneurial Philosophy'}</span>
            </h2>

            <p>
              {lang === 'ar'
                ? 'أتعامل مع شبكة الإنترنت كمجال مفتوح للإنتاج وبناء الأصول المستقلة. لست من مؤيدي الحلول السطحية أو الوعود البراقة، بل أؤمن بالعمل الممنهج القائم على فهم رغبات الزبائن وصياغة عروض لا يمكن رفضها.'
                : 'I approach the digital space as an ecosystem for disciplined production and tangible asset creation. Rather than chasing short-term trends, I prioritize robust market fundamentals, deep customer empathy, and compelling offer mechanics.'}
            </p>

            <p>
              {lang === 'ar'
                ? 'في كل مشروع أبدأه، أضع تجربة العميل وجودة التنفيذ في المقام الأول. من تصميم واجهة المتجر وسرعة التصفح، إلى سلاسة إتمام الطلب ومصداقية الدفع والتسليم، كل تفصيل يصنع فارقاً جوهرياً.'
                : 'Across every venture, frictionless user experience and meticulous execution are top priorities. From instant page performance and smooth checkout flows to transparent payment terms, every detail counts.'}
            </p>

            <div className="pt-2 space-y-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{lang === 'ar' ? 'التركيز على الربحية المستدامة ونمو المشاريع' : 'Focus on sustained profitability & scalable systems'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{lang === 'ar' ? 'شفافية كاملة في التعاملات المالية والبنكية' : 'Full transparency in commercial and banking operations'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{lang === 'ar' ? 'التطوير المستمر للأدوات والتقنيات المعاصرة' : 'Continuous iteration with contemporary technologies'}</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars List */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center text-amber-400 shrink-0 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-100 mb-1">
                        {lang === 'ar' ? item.titleAr : item.titleEn}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {lang === 'ar' ? item.descAr : item.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Competencies & Skills */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-3">
              {lang === 'ar' ? 'القدرات والمهارات المحورية' : 'Core Capabilities & Strengths'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {lang === 'ar'
                ? 'المهارات العملية التي أوظفها يومياً في بناء وإدارة المتاجر والمشاريع الرقمية.'
                : 'Applied disciplines deployed daily to engineer, scale, and optimize commercial platforms.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreStrengths.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <h3 className="text-sm font-bold text-slate-100">
                      {lang === 'ar' ? item.labelAr : item.labelEn}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'ar' ? item.detailAr : item.detailAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones / Journey */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>{lang === 'ar' ? 'محطات المسيرة والتطور' : 'Milestones & Evolution'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/70">
                <span className="text-xs font-mono font-bold text-amber-400 block mb-1">
                  {m.year}
                </span>
                <h3 className="text-sm font-bold text-slate-100 mb-2">
                  {lang === 'ar' ? m.titleAr : m.titleEn}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'ar' ? m.descAr : m.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guiding Quote */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center mb-12">
          <p className="text-sm sm:text-base text-slate-200 font-medium italic leading-relaxed max-w-2xl mx-auto">
            {lang === 'ar'
              ? '“الإنترنت ليس مجرد مكان للعمل، بل بيئة لبناء مشاريع حقيقية ومستدامة عبر وضوح الرؤية والانضباط اليومي في التنفيذ.”'
              : '“The internet is an open landscape to build enduring ventures through vision and relentless daily execution.”'}
          </p>
          <span className="block text-xs text-amber-400/90 font-mono mt-3">
            — {lang === 'ar' ? 'أيوب الميسوري' : 'Ayoub El Maissouri'}
          </span>
        </div>

        {/* Direct Action Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-800/60">
          <button
            onClick={() => onNavigatePage && onNavigatePage('disciplines')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer"
          >
            <span>{lang === 'ar' ? 'تصفح مجالات العمل والخدمات' : 'Explore Disciplines'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigatePage && onNavigatePage('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all cursor-pointer"
          >
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            <span>{lang === 'ar' ? 'معرض الأعمال والمشاريع' : 'View Projects'}</span>
          </button>

          <button
            onClick={() => onNavigatePage && onNavigatePage('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'تواصل معي' : 'Contact Me'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
