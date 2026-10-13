import React from 'react';
import {
  ShieldCheck,
  FileText,
  Lock,
  Scale,
  Cookie,
  ArrowRight,
  ArrowLeft,
  Mail,
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { legalDocumentsData } from '../data/legalContent';
import { LegalDocType } from '../types/bank';
import { Language, Theme } from '../types';

interface LegalPagesProps {
  currentDoc: LegalDocType;
  onChangeDoc: (doc: LegalDocType) => void;
  onNavigateHome: () => void;
  lang: Language;
  theme?: Theme;
}

export const LegalPages: React.FC<LegalPagesProps> = ({
  currentDoc,
  onChangeDoc,
  onNavigateHome,
  lang,
  theme = 'dark',
}) => {
  const document = legalDocumentsData[currentDoc] || legalDocumentsData.terms;
  const isDark = theme === 'dark';

  const tabs: { id: LegalDocType; labelAr: string; labelEn: string; icon: React.ElementType }[] = [
    { id: 'terms', labelAr: 'الشروط والأحكام', labelEn: 'Terms & Conditions', icon: Scale },
    { id: 'privacy', labelAr: 'سياسة الخصوصية', labelEn: 'Privacy Policy', icon: Lock },
    { id: 'copyright', labelAr: 'حقوق الملكية الفكرية', labelEn: 'Copyright', icon: ShieldCheck },
    { id: 'legal-notice', labelAr: 'الإشعارات القانونية', labelEn: 'Legal Notice', icon: FileText },
    { id: 'cookies', labelAr: 'ملفات تعريف الارتباط', labelEn: 'Cookies', icon: Cookie },
  ];

  const isRTL = lang === 'ar';
  const ArrowBackIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div
      className={`min-h-screen pt-32 pb-24 relative overflow-hidden text-start ${
        isDark ? 'bg-[#0E1117] text-slate-200' : 'bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* Background ambient gentle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
              isDark
                ? 'text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border-slate-800'
                : 'text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border-slate-200 shadow-xs'
            }`}
          >
            <ArrowBackIcon className="w-4 h-4" />
            <span>{lang === 'ar' ? 'العودة إلى الموقع الرئيسي' : 'Return to Home'}</span>
          </button>
        </div>

        {/* Legal Selector Tabs */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div
            className={`inline-flex items-center gap-1.5 p-1.5 rounded-2xl border backdrop-blur-md ${
              isDark ? 'bg-slate-900/80 border-slate-800/80' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentDoc === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onChangeDoc(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-slate-800 text-amber-300 border border-slate-700/80 shadow-xs'
                        : 'bg-amber-400 text-slate-950 font-semibold shadow-xs'
                      : isDark
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? tab.labelAr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Document Container Card */}
        <div
          className={`p-8 sm:p-12 rounded-3xl border shadow-2xl relative ${
            isDark ? 'bg-slate-900/50 border-slate-800/80' : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          {/* Header */}
          <div
            className={`border-b pb-8 mb-8 ${
              isDark ? 'border-slate-800/80' : 'border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {lang === 'ar' ? 'آخر تحديث: ' : 'Last Updated: '} {document.lastUpdated}
              </span>
            </div>

            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              {lang === 'ar' ? document.titleAr : document.titleEn}
            </h1>

            <p
              className={`text-xs sm:text-sm leading-relaxed font-normal ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {lang === 'ar' ? document.subtitleAr : document.subtitleEn}
            </p>
          </div>

          {/* Sections Body */}
          <div className="space-y-8">
            {document.sections.map((section, sIndex) => (
              <div key={sIndex} className="space-y-3">
                <h2
                  className={`text-base sm:text-lg font-bold flex items-center gap-2.5 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{section.title}</span>
                </h2>

                <div
                  className={`space-y-2.5 pr-4 text-xs sm:text-sm leading-relaxed font-normal ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Direct Support & Questions Footer Box */}
          <div
            className={`mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl border ${
              isDark
                ? 'border-slate-800/80 bg-slate-950/60 border-slate-800/60'
                : 'border-slate-200 bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isDark ? 'bg-slate-800/90 text-amber-400' : 'bg-amber-100 text-amber-700'
                }`}
              >
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span
                  className={`text-xs font-bold block ${
                    isDark ? 'text-slate-200' : 'text-slate-900'
                  }`}
                >
                  {lang === 'ar' ? 'هل لديك أي استفسار قانوني؟' : 'Questions regarding these terms?'}
                </span>
                <span
                  className={`text-[11px] ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {lang === 'ar' ? 'يمكنك التواصل المباشر مع أيوب الميسوري عبر البريد الرسمي' : 'Contact Ayoub directly at'}
                </span>
              </div>
            </div>

            <a
              href="mailto:Aelmaissouri@gmail.com"
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                isDark
                  ? 'text-amber-300 hover:text-white bg-slate-900 hover:bg-slate-800 border-slate-800'
                  : 'text-amber-700 hover:text-amber-900 bg-white hover:bg-slate-100 border-slate-200 shadow-xs'
              }`}
            >
              Aelmaissouri@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
