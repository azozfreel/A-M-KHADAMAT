import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { projectsData } from '../data/content';
import { Project, Language } from '../types';
import { ProjectMockupVisual } from './ProjectMockupVisual';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  lang: Language;
  onInquireProject: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, onInquireProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0A0C11]/80 border-t border-b border-white/[0.04]">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'ar' ? 'معرض الأعمال والنماذج' : 'Portfolio & Case Studies'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {lang === 'ar' ? 'مشاريعي وأعمالي' : 'Featured Projects & Frameworks'}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            {lang === 'ar'
              ? 'نماذج وتطبيقات عملية في مجالات التداول، التجارة الإلكترونية، تصميم الهويات البصرية، والأنظمة الرقمية الموجهة للنمو.'
              : 'Applied case models and operational prototypes across quantitative markets, e-commerce stores, brand systems, and digital engines.'}
          </p>
        </div>

        {/* Filter Bar (Segmented Interactive Control) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-md">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {lang === 'ar' ? filter.labelAr : filter.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-zinc-950/70 border border-white/[0.07] hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:-translate-y-1"
            >
              {/* Project Visual Preview Thumbnail */}
              <div
                onClick={() => handleOpenProject(project)}
                className="h-52 w-full overflow-hidden border-b border-white/[0.06] cursor-pointer relative group-hover:brightness-105 transition-all"
              >
                <ProjectMockupVisual
                  type={project.imagePlaceholderType}
                  accentColor={project.accentColor}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Top Subtle Overlay Tag */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[11px] font-mono text-zinc-300 bg-black/75 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-xs">
                    {lang === 'ar' ? 'نموذج تطبيقي' : 'Prototype'}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between text-start">
                <div>
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2.5">
                    <span className="text-emerald-400 font-semibold">
                      {lang === 'ar' ? project.disciplineLabel : project.disciplineLabelEn}
                    </span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span>2026</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => handleOpenProject(project)}
                    className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors cursor-pointer leading-snug"
                  >
                    {lang === 'ar' ? project.title : project.titleEn}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {lang === 'ar' ? project.tagline : project.taglineEn}
                  </p>
                </div>

                {/* Action button: عرض المشروع */}
                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{lang === 'ar' ? 'عرض المشروع' : 'View Project'}</span>
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-[11px] text-zinc-400 font-mono">
                    {lang === 'ar' ? 'تفاصيل كاملة' : 'Full Specs'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-zinc-400 max-w-xl mx-auto">
            {lang === 'ar'
              ? 'كل مشروع يمثل منهجية حقيقية مطبقة في ضبط الجودة، صياغة الاستراتيجيات، وتنفيذ الحلول الرقمية بدقة عالية.'
              : 'Each showcase represents a structured execution methodology applied in risk management, brand systems, and online venture development.'}
          </p>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        onInquireAboutProject={onInquireProject}
      />
    </section>
  );
};
