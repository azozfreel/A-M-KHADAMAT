import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Layers, Sparkles } from 'lucide-react';
import { Project, Language } from '../types';
import { ProjectMockupVisual } from './ProjectMockupVisual';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onInquireAboutProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  lang,
  onInquireAboutProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#11141D] border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto z-10 text-start flex flex-col">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#11141D]/95 backdrop-blur-md border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {lang === 'ar' ? project.disciplineLabel : project.disciplineLabelEn}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Visual Showcase Banner */}
          <div className="h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-slate-800/80 relative shadow-inner">
            <ProjectMockupVisual type={project.imagePlaceholderType} accentColor={project.accentColor} />
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2 leading-tight">
              {lang === 'ar' ? project.title : project.titleEn}
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              {lang === 'ar' ? project.tagline : project.taglineEn}
            </p>
          </div>

          {/* Overview */}
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/70">
            <h4 className="text-xs font-mono text-amber-400/90 uppercase tracking-wider mb-2 font-semibold">
              {lang === 'ar' ? 'نظرة عامة على المشروع' : 'Project Overview'}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {lang === 'ar' ? project.overview : project.overviewEn}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/70">
              <div className="flex items-center gap-2 text-slate-300 mb-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'ar' ? 'التحدي والمعضلة' : 'The Core Challenge'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {lang === 'ar' ? project.challenge : project.challengeEn}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/70">
              <div className="flex items-center gap-2 text-slate-300 mb-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'ar' ? 'الحل والاستراتيجية' : 'Strategy & Execution'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {lang === 'ar' ? project.solution : project.solutionEn}
              </p>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-semibold">
              {lang === 'ar' ? 'أهم المخرجات ونقاط التنفيذ' : 'Key Deliverables & Execution Points'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(lang === 'ar' ? project.deliverables : project.deliverablesEn).map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-950/90 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
          <span className="text-xs sm:text-sm text-slate-400 text-center sm:text-start">
            {lang === 'ar'
              ? 'هل ترغب في تطبيق استراتيجية أو بناء مشروع مشابه؟'
              : 'Interested in implementing a similar strategy or project?'}
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onInquireAboutProject(lang === 'ar' ? project.title : project.titleEn);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'تواصل بخصوص هذا المشروع' : 'Inquire About This'}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
