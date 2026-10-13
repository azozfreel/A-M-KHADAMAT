import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Briefcase,
  ExternalLink,
  Sparkles,
  Layers,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { projectsData } from '../data/content';
import { Project, Language } from '../types';
import { ActivePage } from '../types/bank';
import { ProjectMockupVisual } from './ProjectMockupVisual';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  lang: Language;
  onInquireProject: (projectTitle: string) => void;
  onNavigatePage?: (page: ActivePage) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  lang,
  onInquireProject,
  onNavigatePage,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    { id: 'all', labelAr: 'الكل (جميع الأعمال)', labelEn: 'All Projects' },
    { id: 'ecommerce', labelAr: 'التجارة الإلكترونية', labelEn: 'E-Commerce' },
    { id: 'business', labelAr: 'الأعمال الرقمية', labelEn: 'Digital Business' },
    { id: 'marketing', labelAr: 'التسويق والمحتوى', labelEn: 'Marketing & Media' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.discipline === activeFilter);

  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleInquireFromCard = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    onInquireProject(lang === 'ar' ? project.title : project.titleEn);
    if (onNavigatePage) {
      onNavigatePage('contact');
    }
  };

  return (
    <div className="py-28 pt-36 bg-[#0E1117] text-start min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <span className="text-amber-400 font-semibold">
            {lang === 'ar' ? 'الأعمال والمشاريع' : 'Featured Projects'}
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-amber-400 text-xs font-medium mb-4 shadow-xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'معرض النماذج والمشاريع الحية' : 'Portfolio & Case Studies'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight mb-4">
            {lang === 'ar' ? 'أعمالي ومشاريعي الرقمية' : 'Featured Projects & Case Studies'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            {lang === 'ar'
              ? 'نماذج وتطبيقات عملية تجسد بناء المتاجر الإلكترونية الحديثة، مسارات التحويل وجلب العملاء، وتطوير المنتجات الرقمية وفق أعلى معايير الجودة.'
              : 'Applied prototypes and commercial case models demonstrating modern e-commerce stores, acquisition funnels, and digital assets.'}
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center justify-start mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-800 text-amber-300 font-semibold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {lang === 'ar' ? filter.labelAr : filter.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/90 transition-all flex flex-col overflow-hidden shadow-xs cursor-pointer"
            >
              {/* Project Visual Mockup */}
              <div className="h-52 w-full overflow-hidden border-b border-slate-800/70 relative">
                <ProjectMockupVisual
                  type={project.imagePlaceholderType}
                  accentColor={project.accentColor}
                />
                <div className="absolute top-3 end-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs border border-slate-800 text-[10px] font-mono text-amber-300">
                  {lang === 'ar' ? 'عرض التفاصيل' : 'Preview'}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2.5">
                    <span className="text-amber-400 font-medium">
                      {lang === 'ar' ? project.disciplineLabel : project.disciplineLabelEn}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>2026</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors leading-snug">
                    {lang === 'ar' ? project.title : project.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {lang === 'ar' ? project.tagline : project.taglineEn}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-amber-300 flex items-center gap-1">
                    <span>{lang === 'ar' ? 'تفاصيل النموذج' : 'View Details'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </span>

                  <button
                    onClick={(e) => handleInquireFromCard(project, e)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-amber-300 hover:text-slate-950 hover:bg-amber-400 transition-colors bg-slate-800/80 border border-slate-700/60"
                  >
                    {lang === 'ar' ? 'طلب مشروع مماثل' : 'Inquire Similar'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-start">
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              {lang === 'ar' ? 'هل لديك فكرة مشروع أو ترغب في إطلاق متجرك الخاص؟' : 'Have a custom concept or want to launch your store?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              {lang === 'ar'
                ? 'يسعدني مناقشة تفاصيل مشروعك وتحويل فكرتك إلى منصة رقمية واقعية ومربحة.'
                : 'I would be delighted to review your requirements and construct a viable, profitable digital platform.'}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onNavigatePage && onNavigatePage('contact')}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>{lang === 'ar' ? 'ابدأ محادثة / تواصل معي' : 'Start Project Discussion'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        onInquireAboutProject={(title) => {
          setIsModalOpen(false);
          onInquireProject(title);
          if (onNavigatePage) onNavigatePage('contact');
        }}
      />
    </div>
  );
};
