import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Target,
  BookOpen,
  Lightbulb,
  Hammer,
  CheckCircle2,
  Briefcase,
  Compass,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  FolderKanban,
  Mail
} from 'lucide-react';
import { Language, Theme } from '../types';
import { ActivePage } from '../types/bank';

interface AboutPageProps {
  lang: Language;
  theme: Theme;
  onNavigatePage: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  lang,
  theme,
  onNavigatePage
}) => {
  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const isDark = theme === 'dark';

  const pillars = [
    {
      icon: Target,
      titleAr: 'الطموح والوضوح',
      titleEn: 'Ambition & Clarity',
      descAr: 'خطة واضحة وإصرار مستمر على بناء مشاريع رقمية ذات جدوى وقيمة حقيقية وقابلة للتوسع.',
      descEn: 'Clear strategy and persistent focus on building viable, high-value, scalable ventures.'
    },
    {
      icon: BookOpen,
      titleAr: 'التعلم والتطور المستمر',
      titleEn: 'Continuous Learning',
      descAr: 'مواكبة يومية لسلوك المستهلكين، تقنيات التجارة الحديثة، وأحدث استراتيجيات النمو والتحويل.',
      descEn: 'Daily study of consumer behavior, e-commerce mechanics, and high-conversion growth strategies.'
    },
    {
      icon: Lightbulb,
      titleAr: 'الابتكار والاختبار',
      titleEn: 'Innovation & Testing',
      descAr: 'تطوير عروض تجارية مبتكرة ومسارات تسوق وتجربة مستخدم سلسة خالية من التعقيد.',
      descEn: 'Refining high-converting offers, smooth checkout flows, and frictionless user experiences.'
    },
    {
      icon: Hammer,
      titleAr: 'التنفيذ والعمل الواقعي',
      titleEn: 'Execution & Building',
      descAr: 'الانتقال الفوري من الأفكار النظرية إلى إطلاق المتاجر وتشغيل المشاريع بنجاح على أرض الواقع.',
      descEn: 'Transforming theoretical ideas into functioning online stores and operational business assets.'
    }
  ];

  const milestones = [
    {
      period: '2023 - 2024',
      titleAr: 'الانطلاق في التجارة الإلكترونية والتسويق الرقمي',
      titleEn: 'Entry into Digital Commerce & Marketing',
      descAr: 'تأسيس المتاجر الأولى، دراسة قنوات الإعلانات المدفوعة، وبناء مسارات التحويل للمنتجات الاستهلاكية.',
      descEn: 'Launching initial online stores, mastering paid acquisition channels, and designing product sales funnels.'
    },
    {
      period: '2024 - 2025',
      titleAr: 'توسيع العمليات وبناء النماذج الرقمية المستقلة',
      titleEn: 'Scaling Operations & Systems',
      descAr: 'تحسين تجارب المستخدم (UX/UI)، تطبيق أفضل ممارسات التوريد والدفع، وأتمتة خدمة العملاء.',
      descEn: 'Refining store interfaces, optimizing supply chains and fulfillment, and automating client communication.'
    },
    {
      period: '2025 - 2026',
      titleAr: 'العلامة الشخصية وبناء المشاريع المتكاملة',
      titleEn: 'Personal Brand & Full Venture Architecture',
      descAr: 'تطوير حلول رقمية مؤتمتة، خدمات التجارة الإلكترونية، والتعاون مع الشركاء لبناء مشاريع ناجحة.',
      descEn: 'Building integrated digital ventures, client advisory, and modern web assets with sustainable ROI.'
    }
  ];

  return (
    <div className="pt-32 pb-24 text-start">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
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
          <span className="text-amber-500 font-semibold">{lang === 'ar' ? 'من أنا' : 'About'}</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase mb-2 block">
            {lang === 'ar' ? 'السيرة والرؤية الشخصية' : 'Personal Profile & Vision'}
          </span>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'نبذة عن أيوب الميسوري' : 'About Ayoub El Maissouri'}
          </h1>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'ar'
              ? 'رائد أعمال رقمي مغربي، أعمل على بناء وإطلاق المشاريع على شبكة الإنترنت، وتطوير المتاجر الإلكترونية وحلول التسويق الحديثة.'
              : 'Moroccan digital entrepreneur architecting and launching online businesses, high-converting e-commerce stores, and performance marketing.'}
          </p>
        </div>

        {/* Narrative & Story Section */}
        <div
          className={`p-8 sm:p-10 rounded-3xl border mb-14 ${
            isDark
              ? 'bg-slate-900/40 border-slate-800/80'
              : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed">
              <h2
                className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-slate-100' : 'text-slate-900'
                }`}
              >
                {lang === 'ar' ? 'رؤيتي في عالم الأعمال الرقمية' : 'My Perspective on Digital Ventures'}
              </h2>

              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                {lang === 'ar'
                  ? 'أتعامل مع الإنترنت كمساحة مفتوحة للإنتاج وبناء المشاريع المستقلة. أؤمن بأن النجاح في العصر الحالي يتطلب فهماً عميقاً لاحتياجات السوق، وبناء متاجر وعروض تجارية تلبي طلبات العملاء بكفاءة وسلاسة.'
                  : 'I view the digital realm as an open canvas for independent enterprise. Real value stems from identifying underserved customer needs and engineering frictionless buying experiences.'}
              </p>

              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                {lang === 'ar'
                  ? 'منهجيتي في العمل تقوم على الانضباط والتحسين المستمر. لا أكتفي بالتخطيط النظري، بل أركز دائماً على التنفيذ السريع، مراقبة مؤشرات الأداء، وتحسين تجربة الشراء لضمان استدامة المشاريع.'
                  : 'My work is guided by discipline and constant refinement. I bypass theoretical abstractions to focus on execution speed, data-driven optimization, and high client retention.'}
              </p>

              <div className="pt-3 flex flex-col gap-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-amber-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {lang === 'ar'
                      ? 'التركيز على القيمة الحقيقية والعائد الاستثماري (ROI)'
                      : 'Obsession with real value and measurable ROI'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-amber-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {lang === 'ar'
                      ? 'بناء متاجر ومنظومات قابلة للنمو والتطوير المستمر'
                      : 'Building scalable e-commerce infrastructure'}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-slate-950/60 border-slate-800'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3
                  className={`text-base font-bold mb-2 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  {lang === 'ar' ? 'الموقع الجغرافي والنشاط' : 'Location & Operations'}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {lang === 'ar'
                    ? 'مقره في المملكة المغربية، مع نشاط ممتد عبر شبكة الإنترنت في الأسواق العربية والدولية.'
                    : 'Based in Morocco, operating digital ventures across regional and international markets.'}
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-slate-950/60 border-slate-800'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3
                  className={`text-base font-bold mb-2 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  {lang === 'ar' ? 'معايير النزاهة والالتزام' : 'Integrity & Transparency'}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {lang === 'ar'
                    ? 'الوضوح التام في الاتفاقيات، شروط العمل الموثوقة، والبيانات البنكية الرسمية المعتمدة.'
                    : 'Uncompromising clarity in venture agreements, reliable terms, and verified banking details.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Section */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'الركائز الأربع للعمل والانضباط' : 'The Four Execution Pillars'}
            </h2>
            <p
              className={`text-xs sm:text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {lang === 'ar'
                ? 'المبادئ الأساسية التي توجه كل مشروع وقرار تجاري أتخذه.'
                : 'The foundational pillars that guide every decision and project.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-colors ${
                    isDark
                      ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                      : 'bg-white border-slate-200/90 hover:border-amber-400/60 shadow-xs'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      isDark ? 'bg-slate-800 text-amber-400' : 'bg-amber-50 text-amber-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className={`text-base font-bold mb-2 ${
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    }`}
                  >
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {lang === 'ar' ? item.descAr : item.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Timeline / Milestones */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'محطات التطور والمسار' : 'Milestones & Evolution'}
            </h2>
            <p
              className={`text-xs sm:text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {lang === 'ar'
                ? 'رحلة التطوير المستمر وبناء الأصول الرقمية والمتاجر عبر السنوات.'
                : 'The ongoing journey of building digital assets and scalable businesses.'}
            </p>
          </div>

          <div className="space-y-4">
            {milestones.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800/70'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div>
                  <span className="text-xs font-mono font-bold text-amber-500 block mb-1">
                    {item.period}
                  </span>
                  <h3
                    className={`text-base font-bold mb-1.5 ${
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    }`}
                  >
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {lang === 'ar' ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guiding Quote Card */}
        <div
          className={`p-8 rounded-3xl border text-center mb-16 ${
            isDark
              ? 'bg-slate-900/50 border-slate-800/80'
              : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <Sparkles className="w-6 h-6 text-amber-500 mx-auto mb-3" />
          <p
            className={`text-base sm:text-lg italic font-medium max-w-2xl mx-auto leading-relaxed mb-3 ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}
          >
            {lang === 'ar'
              ? '“الإنترنت ليس مجرد مكان للعمل، بل بيئة لبناء مشاريع حقيقية ومستدامة عبر وضوح الرؤية والانضباط في التنفيذ.”'
              : '“The internet is not merely a workplace; it is an arena to build enduring ventures through clear vision and disciplined execution.”'}
          </p>
          <span className="text-xs text-amber-500 font-semibold font-mono">
            — {lang === 'ar' ? 'أيوب الميسوري' : 'Ayoub El Maissouri'}
          </span>
        </div>

        {/* Next Step Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigatePage('disciplines')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-xs"
          >
            <Compass className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تصفح مجالات العمل والخدمات' : 'View Disciplines & Services'}</span>
          </button>

          <button
            onClick={() => onNavigatePage('projects')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              isDark
                ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800'
                : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-xs'
            }`}
          >
            <FolderKanban className="w-4 h-4 text-amber-500" />
            <span>{lang === 'ar' ? 'استكشف الأعمال والمشاريع' : 'Explore Projects'}</span>
          </button>

          <button
            onClick={() => onNavigatePage('contact')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              isDark
                ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800'
                : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-xs'
            }`}
          >
            <Mail className="w-4 h-4 text-emerald-500" />
            <span>{lang === 'ar' ? 'تواصل معي' : 'Contact Me'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
