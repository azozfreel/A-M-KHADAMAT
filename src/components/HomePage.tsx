import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  User,
  Layers,
  FolderKanban,
  CreditCard,
  Mail,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Building2,
  Sparkles
} from 'lucide-react';
import { Language, Theme } from '../types';
import { ActivePage } from '../types/bank';
import { projectsData } from '../data/content';
import { ProjectMockupVisual } from './ProjectMockupVisual';

interface HomePageProps {
  lang: Language;
  theme: Theme;
  onNavigatePage: (page: ActivePage) => void;
  onInquireProject: (title: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  theme,
  onNavigatePage,
  onInquireProject,
}) => {
  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const isDark = theme === 'dark';

  const featuredProject = projectsData[0];

  const pageNavCards = [
    {
      id: 'about' as ActivePage,
      titleAr: 'من أنا — السيرة والرؤية',
      titleEn: 'About Me — Story & Vision',
      descAr: 'التعرف على مسيرة أيوب الميسوري، فلسفته في ريادة الأعمال الرقمية والمبادئ الأساسية.',
      descEn: 'Learn about Ayoub El Maissouri, digital business philosophy, and core execution principles.',
      icon: User,
      badgeAr: 'نبذة شخصية',
      badgeEn: 'Bio & Journey'
    },
    {
      id: 'disciplines' as ActivePage,
      titleAr: 'مجالات العمل والخدمات',
      titleEn: 'Disciplines & Services',
      descAr: 'التجارة الإلكترونية، المشاريع الرقمية، التسويق والنمو، والخدمات والاستشارات التقنية.',
      descEn: 'E-commerce architecture, online venture building, digital marketing, and advisory.',
      icon: Layers,
      badgeAr: '4 مجالات رئيسية',
      badgeEn: '4 Domains'
    },
    {
      id: 'projects' as ActivePage,
      titleAr: 'الأعمال والمشاريع الواقعية',
      titleEn: 'Featured Projects',
      descAr: 'نماذج وتطبيقات عملية لمتاجر إلكترونية ناجحة، مسارات تحويل، ومنصات رقمية متكاملة.',
      descEn: 'Live applied showcases of high-converting e-commerce stores and digital platforms.',
      icon: FolderKanban,
      badgeAr: 'نماذج حية',
      badgeEn: 'Live Showcase'
    },
    {
      id: 'banks' as ActivePage,
      titleAr: 'الحسابات والتحويلات البنكية',
      titleEn: 'Bank Accounts & RIBs',
      descAr: 'بيانات الحسابات البنكية المغربية المعتمدة (RIB) لتسديد مستحقات المشاريع والخدمات.',
      descEn: 'Official verified Moroccan bank accounts and RIB directory for secure client transfers.',
      icon: CreditCard,
      badgeAr: 'حسابات معتمدة',
      badgeEn: 'Official RIB'
    },
    {
      id: 'contact' as ActivePage,
      titleAr: 'تواصل معي مباشرة',
      titleEn: 'Get In Touch',
      descAr: 'بدء محادثة واتساب فورية، إرسال بريد رسمي، أو طلب دراسة مشروعك الجديد.',
      descEn: 'Start an instant WhatsApp chat, send an inquiry, or request a venture consultation.',
      icon: Mail,
      badgeAr: 'استجابة سريعة',
      badgeEn: 'Fast Reply'
    }
  ];

  const stats = [
    {
      num: '4+',
      labelAr: 'مجالات تخصص رقمية',
      labelEn: 'Core Digital Disciplines'
    },
    {
      num: '100%',
      labelAr: 'انضباط وجودة تنفيذ',
      labelEn: 'Execution Discipline'
    },
    {
      num: '24/7',
      labelAr: 'جاهزية للمشاريع والشراكات',
      labelEn: 'Venture Readiness'
    },
    {
      num: 'المغرب',
      labelAr: 'المنطلق والتغطية العالمية',
      labelEn: 'Based in Morocco'
    }
  ];

  return (
    <div className="pt-28 pb-20 text-start">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Soft Ambient Background Lighting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div
            className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full blur-3xl ${
              isDark ? 'bg-amber-500/[0.05]' : 'bg-amber-400/[0.08]'
            }`}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Availability Status Badge */}
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium mb-6 transition-colors ${
              isDark
                ? 'bg-slate-900/80 border border-slate-800 text-slate-300'
                : 'bg-white border border-slate-200 text-slate-700 shadow-xs'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>
              {lang === 'ar'
                ? 'متاح لبناء وتطوير المشاريع الرقمية والمتاجر الإلكترونية'
                : 'Available for digital ventures & e-commerce development'}
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.15] mb-5 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'أيوب الميسوري' : 'Ayoub El Maissouri'}
          </h1>

          {/* Subtitle / Focus Disciplines */}
          <p
            className={`text-sm sm:text-base md:text-lg font-medium mb-6 flex flex-wrap items-center justify-center gap-2.5 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span className="text-amber-500 font-semibold">Digital Entrepreneur</span>
            <span className={isDark ? 'text-slate-700' : 'text-slate-300'} aria-hidden="true">•</span>
            <span>E-Commerce</span>
            <span className={isDark ? 'text-slate-700' : 'text-slate-300'} aria-hidden="true">•</span>
            <span>Digital Business</span>
            <span className={isDark ? 'text-slate-700' : 'text-slate-300'} aria-hidden="true">•</span>
            <span>Marketing & Growth</span>
          </p>

          {/* Mission Statement */}
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {lang === 'ar'
              ? 'أبني وأطوّر المشاريع الرقمية، وأعمل في مجالات التجارة الإلكترونية، الأعمال أونلاين، والتسويق الرقمي، مع التركيز على تحويل الأفكار إلى مشاريع واقعية ومستدامة.'
              : 'I architect and scale digital ventures across e-commerce, online businesses, and digital marketing—focusing on turning ideas into viable, sustainable reality.'}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onNavigatePage('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-sm hover:shadow-amber-400/20"
            >
              <span>{lang === 'ar' ? 'استكشف الأعمال والمشاريع' : 'Explore Projects'}</span>
              <ArrowIcon className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={() => onNavigatePage('contact')}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-xs'
              }`}
            >
              <span>{lang === 'ar' ? 'تواصل معي مباشرة' : 'Get In Touch'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border ${
            isDark
              ? 'bg-slate-900/40 border-slate-800/70'
              : 'bg-white border-slate-200/80 shadow-xs'
          }`}
        >
          {stats.map((st, i) => (
            <div key={i} className="text-center p-3">
              <span className="block text-2xl sm:text-3xl font-bold text-amber-500 mb-1">
                {st.num}
              </span>
              <span
                className={`text-xs sm:text-sm font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {lang === 'ar' ? st.labelAr : st.labelEn}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Structured Pages Hub (تقسيم صفحات الموقع) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase mb-2 block">
            {lang === 'ar' ? 'خريطة الموقع' : 'Explore Sections'}
          </span>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'تصفح أقسام الموقع المنظمة' : 'Organized Site Pages'}
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'ar'
              ? 'تم تقسيم الموقع إلى صفحات متخصصة ومستقلة لتسهيل التصفح والوصول إلى كافة المعلومات والخدمات بكل راحة.'
              : 'The platform is divided into dedicated, focused pages to provide clarity, comfort, and direct access.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pageNavCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onNavigatePage(card.id)}
                className={`group p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                    : 'bg-white border-slate-200/90 hover:border-amber-400/60 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isDark
                          ? 'bg-slate-800 text-amber-400 group-hover:bg-amber-400/10'
                          : 'bg-amber-50 text-amber-600 group-hover:bg-amber-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${
                        isDark
                          ? 'bg-slate-800/80 text-slate-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {lang === 'ar' ? card.badgeAr : card.badgeEn}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 transition-colors ${
                      isDark
                        ? 'text-slate-100 group-hover:text-amber-300'
                        : 'text-slate-900 group-hover:text-amber-600'
                    }`}
                  >
                    {lang === 'ar' ? card.titleAr : card.titleEn}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {lang === 'ar' ? card.descAr : card.descEn}
                  </p>
                </div>

                <div
                  className={`pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isDark
                      ? 'border-slate-800/70 text-slate-300 group-hover:text-amber-300'
                      : 'border-slate-100 text-slate-700 group-hover:text-amber-600'
                  }`}
                >
                  <span>{lang === 'ar' ? 'الانتقال إلى الصفحة' : 'Open Page'}</span>
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Spotlight Project */}
      {featuredProject && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div
            className={`rounded-3xl border overflow-hidden transition-colors ${
              isDark
                ? 'bg-slate-900/50 border-slate-800/80'
                : 'bg-white border-slate-200/90 shadow-sm'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Mockup Preview */}
              <div className="lg:col-span-6 h-64 sm:h-80 overflow-hidden relative border-b lg:border-b-0 lg:border-r border-slate-800/60">
                <ProjectMockupVisual
                  type={featuredProject.imagePlaceholderType}
                  accentColor={featuredProject.accentColor}
                />
              </div>

              {/* Information */}
              <div className="lg:col-span-6 p-8 sm:p-10">
                <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase mb-2 block">
                  {lang === 'ar' ? 'مشروع مسلّط عليه الضوء' : 'Spotlight Showcase'}
                </span>

                <h3
                  className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  {lang === 'ar' ? featuredProject.title : featuredProject.titleEn}
                </h3>

                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {lang === 'ar' ? featuredProject.overview : featuredProject.overviewEn}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigatePage('projects')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-xs"
                  >
                    <span>{lang === 'ar' ? 'عرض كافة المشاريع' : 'View All Projects'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onInquireProject(featuredProject.title)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <span>{lang === 'ar' ? 'طلب مشروع مماثل' : 'Inquire Similar'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bank Quick Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          className={`p-8 sm:p-10 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
            isDark
              ? 'bg-slate-900/40 border-slate-800/80'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                isDark ? 'bg-slate-800 text-amber-400' : 'bg-amber-50 text-amber-600'
              }`}
            >
              <Building2 className="w-6 h-6" />
            </div>

            <div>
              <h3
                className={`text-xl font-bold mb-1.5 ${
                  isDark ? 'text-slate-100' : 'text-slate-900'
                }`}
              >
                {lang === 'ar' ? 'الحسابات البنكية المعتمدة' : 'Official Bank Accounts'}
              </h3>
              <p
                className={`text-xs sm:text-sm max-w-xl leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {lang === 'ar'
                  ? 'إذا كنت تريد تحويل مستحقات مشروع أو معاملة رقمية، يمكنك الاطلاع على الريبات البنكية الرسمية المسجلة باسم أيوب الميسوري ونسخها بنقرة واحدة.'
                  : 'View official verified bank accounts and copy RIB details directly for secure project transactions.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigatePage('banks')}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-xs"
            >
              <CreditCard className="w-4 h-4" />
              <span>{lang === 'ar' ? 'فتح صفحة الحسابات البنكية' : 'View Bank Accounts'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Direct Contact Teaser Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`p-10 rounded-3xl border ${
            isDark
              ? 'bg-slate-900/50 border-slate-800/80'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div
            className={`w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
              isDark ? 'bg-slate-800 text-amber-400' : 'bg-amber-50 text-amber-600'
            }`}
          >
            <MessageCircle className="w-6 h-6 text-emerald-500" />
          </div>

          <h3
            className={`text-2xl sm:text-3xl font-bold mb-3 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'هل لديك فكرة مشروع أو استفسار؟' : 'Have a project in mind?'}
          </h3>

          <p
            className={`text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'ar'
              ? 'يسعدني التواصل معك ومناقشة تفاصيل الفكرة، سواء عبر الواتساب المباشر أو البريد الإلكتروني.'
              : 'I would be delighted to discuss details with you directly via WhatsApp or official email.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="https://wa.me/212660177093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'ar' ? 'محادثة واتساب فورية' : 'Chat on WhatsApp'}</span>
            </a>

            <button
              onClick={() => onNavigatePage('contact')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              <Mail className="w-4 h-4 text-amber-500" />
              <span>{lang === 'ar' ? 'صفحة التواصل الكاملة' : 'Contact Page'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
