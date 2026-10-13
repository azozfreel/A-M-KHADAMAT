import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Filter,
  Layers,
  Sparkles,
  ExternalLink,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { projectsData } from '../data/content';
import { Project, Language, Theme } from '../types';
import { ActivePage } from '../types/bank';
import { ProjectMockupVisual } from './ProjectMockupVisual';
import { ProjectModal } from './ProjectModal';

interface ProjectsPageProps {
  lang: Language;
  theme: Theme;
  onNavigatePage: (page: ActivePage) => void;
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  lang,
  theme,
  onNavigatePage,
  onInquireProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const isDark = theme === 'dark';

  const filters = [
    { id: 'all', labelAr: 'الكل', labelEn: 'All Projects' },
    { id: 'ecommerce', labelAr: 'التجارة الإلكترونية', labelEn: 'E-Commerce' },
    { id: 'business', labelAr: 'الأعمال الرقمية', labelEn: 'Digital Business' },
    { id: 'marketing', labelAr: 'التسويق والمحتوى', labelEn: 'Marketing & Media' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.discipline === activeFilter);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
            {lang === 'ar' ? 'الأعمال والمشاريع' : 'Projects'}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase mb-2 block">
            {lang === 'ar' ? 'معرض الأعمال والنماذج' : 'Case Studies & Prototypes'}
          </span>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'مشاريعي وأعمالي الواقعية' : 'Featured Projects'}
          </h1>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'ar'
              ? 'نماذج وتطبيقات عملية في مجالات التجارة الإلكترونية، مسارات التسويق والتحويل، وتشغيل المتاجر الرقمية.'
              : 'Applied case models across modern digital retail, conversion funnels, and online commerce.'}
          </p>
        </div>

        {/* Filter Segmented Bar */}
        <div className="flex items-center justify-center mb-12">
          <div
            className={`inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl border ${
              isDark
                ? 'bg-slate-900/80 border-slate-800'
                : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-slate-800 text-amber-300 shadow-xs'
                        : 'bg-amber-400 text-slate-950 shadow-xs'
                      : isDark
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {lang === 'ar' ? filter.labelAr : filter.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-3xl border overflow-hidden flex flex-col justify-between transition-all ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700/90'
                  : 'bg-white border-slate-200/90 hover:border-amber-400/60 shadow-xs hover:shadow-md'
              }`}
            >
              {/* Thumbnail Mockup Preview */}
              <div
                onClick={() => handleOpenProject(project)}
                className="h-48 w-full overflow-hidden border-b border-slate-800/60 cursor-pointer relative"
              >
                <ProjectMockupVisual
                  type={project.imagePlaceholderType}
                  accentColor={project.accentColor}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2.5">
                    <span className="text-amber-500 font-medium">
                      {lang === 'ar' ? project.disciplineLabel : project.disciplineLabelEn}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>2026</span>
                  </div>

                  <h3
                    onClick={() => handleOpenProject(project)}
                    className={`text-base sm:text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors cursor-pointer leading-snug ${
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    }`}
                  >
                    {lang === 'ar' ? project.title : project.titleEn}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {lang === 'ar' ? project.tagline : project.taglineEn}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-1.5 mb-6">
                    {(lang === 'ar' ? project.deliverables : project.deliverablesEn)
                      .slice(0, 2)
                      .map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{d}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>{lang === 'ar' ? 'عرض تفاصيل المشروع' : 'View Case Details'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onInquireProject(project.title)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {lang === 'ar' ? 'طلب مماثل' : 'Inquire'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Call to Action */}
        <div
          className={`p-8 sm:p-10 rounded-3xl border text-center ${
            isDark
              ? 'bg-slate-900/50 border-slate-800/80'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-3 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'هل تود بناء مشروع مخصص لعلامتك؟' : 'Need a custom venture built?'}
          </h2>
          <p
            className={`text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'ar'
              ? 'يمكنك مراسلتي بمواصفات متجرك أو مشروعك وسأقوم بدراسة الفكرة وتقديم خطة التنفيذ المناسبة.'
              : 'Send me your project specifications and I will evaluate the blueprint with an execution plan.'}
          </p>
          <button
            onClick={() => onNavigatePage('contact')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تواصل معي لبدء مشروعك' : 'Start Your Project'}</span>
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        onInquireAboutProject={onInquireProject}
      />
    </div>
  );
};
