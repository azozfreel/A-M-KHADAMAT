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
import { Language } from '../types';

interface LegalPagesProps {
  currentDoc: LegalDocType;
  onChangeDoc: (doc: LegalDocType) => void;
  onNavigateHome: () => void;
  lang: Language;
}

export const LegalPages: React.FC<LegalPagesProps> = ({
  currentDoc,
  onChangeDoc,
  onNavigateHome,
  lang,
}) => {
  const document = legalDocumentsData[currentDoc] || legalDocumentsData.terms;

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
    <div className="min-h-screen bg-[#08090D] text-zinc-100 pt-28 pb-20 relative overflow-hidden text-start">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.08] transition-colors cursor-pointer"
          >
            <ArrowBackIcon className="w-4 h-4" />
            <span>{lang === 'ar' ? 'العودة إلى الموقع الرئيسي' : 'Return to Home'}</span>
          </button>
        </div>

        {/* Legal Selector Tabs */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentDoc === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onChangeDoc(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
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
        <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-zinc-950/90 border border-white/[0.08] shadow-2xl relative">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-8 mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {lang === 'ar' ? 'آخر تحديث: ' : 'Last Updated: '} {document.lastUpdated}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
              {lang === 'ar' ? document.titleAr : document.titleEn}
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {lang === 'ar' ? document.subtitleAr : document.subtitleEn}
            </p>
          </div>

          {/* Sections Body */}
          <div className="space-y-8">
            {document.sections.map((section, sIndex) => (
              <div key={sIndex} className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{section.title}</span>
                </h2>

                <div className="space-y-2.5 pr-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Direct Support & Questions Footer Box */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-black/40 border border-white/[0.04]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center text-emerald-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">
                  {lang === 'ar' ? 'هل لديك أي استفسار قانوني؟' : 'Questions regarding these terms?'}
                </span>
                <span className="text-[11px] text-zinc-400">
                  {lang === 'ar' ? 'يمكنك التواصل المباشر مع أيوب الميسوري عبر البريد الرسمي' : 'Contact Ayoub directly at'}
                </span>
              </div>
            </div>

            <a
              href="mailto:Aelmaissouri@gmail.com"
              className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] transition-colors"
            >
              Aelmaissouri@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
