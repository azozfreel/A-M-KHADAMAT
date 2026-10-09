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
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0A0C11] border border-white/[0.1] rounded-3xl shadow-2xl overflow-y-auto z-10 text-start flex flex-col">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0A0C11]/90 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accentColor }} />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              {lang === 'ar' ? project.disciplineLabel : project.disciplineLabelEn}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Visual Showcase Banner */}
          <div className="h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-white/[0.08] relative shadow-inner">
            <ProjectMockupVisual type={project.imagePlaceholderType} accentColor={project.accentColor} />
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
              {lang === 'ar' ? project.title : project.titleEn}
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {lang === 'ar' ? project.tagline : project.taglineEn}
            </p>
          </div>

          {/* Overview */}
          <div className="p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06]">
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
              {lang === 'ar' ? 'نظرة عامة على المشروع' : 'Project Overview'}
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {lang === 'ar' ? project.overview : project.overviewEn}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-400 mb-2">
                <AlertCircle className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'ar' ? 'التحدي والمعضلة' : 'The Core Challenge'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {lang === 'ar' ? project.challenge : project.challengeEn}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'ar' ? 'الحل والاستراتيجية' : 'Strategy & Execution'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {lang === 'ar' ? project.solution : project.solutionEn}
              </p>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3 font-semibold">
              {lang === 'ar' ? 'أهم المخرجات ونقاط التنفيذ' : 'Key Deliverables & Execution Points'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(lang === 'ar' ? project.deliverables : project.deliverablesEn).map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05] flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span className="text-xs text-zinc-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-zinc-950/90 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
          <span className="text-xs text-zinc-400 text-center sm:text-start">
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
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-400 to-teal-300 text-zinc-950 hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'تواصل بخصوص هذا المشروع' : 'Inquire About This'}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.08] transition-colors"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
