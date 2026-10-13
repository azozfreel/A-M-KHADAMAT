import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { DisciplinesPage } from './components/DisciplinesPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ContactPage } from './components/ContactPage';
import { BankAccountsPage } from './components/BankAccountsPage';
import { AdminPortal } from './components/AdminPortal';
import { LegalPages } from './components/LegalPages';
import { CookieBanner } from './components/CookieBanner';
import { Footer } from './components/Footer';
import { Language, Theme } from './types';
import { ActivePage, LegalDocType } from './types/bank';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('ayoub_theme') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark';
  });

  const [currentPage, setCurrentPage] = useState<ActivePage>('home');
  const [inquiryTopic, setInquiryTopic] = useState<string>('');

  // Synchronize HTML dir & lang
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Synchronize Theme class and localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    localStorage.setItem('ayoub_theme', theme);
  }, [theme]);

  // Synchronize URL Hash navigation
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      const legalDocs: LegalDocType[] = ['terms', 'privacy', 'copyright', 'legal-notice', 'cookies'];

      if (!hash || hash === 'home' || hash === 'main') {
        setCurrentPage('home');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'disciplines' || hash === 'services') {
        setCurrentPage('disciplines');
      } else if (hash === 'projects' || hash === 'portfolio') {
        setCurrentPage('projects');
      } else if (hash === 'banks' || hash === 'ribs') {
        setCurrentPage('banks');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'admin') {
        setCurrentPage('admin');
      } else if (legalDocs.includes(hash as LegalDocType)) {
        setCurrentPage(hash as LegalDocType);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigatePage = (page: ActivePage) => {
    setCurrentPage(page);
    if (page === 'home' || page === 'main') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquireProject = (projectTitle: string) => {
    setInquiryTopic(projectTitle);
    handleNavigatePage('contact');
  };

  const handleInquireService = (serviceName: string) => {
    setInquiryTopic(serviceName);
    handleNavigatePage('contact');
  };

  const isLegalPage = ['terms', 'privacy', 'copyright', 'legal-notice', 'cookies'].includes(
    currentPage
  );

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-250 ${
        theme === 'dark' ? 'bg-[#0D0F14] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* Top Fixed Header with Navigation and Controls */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Main Pages Router (كل قسم في صفحة مخصصة ومنظمة) */}
      <main className="flex-grow">
        {(currentPage === 'home' || currentPage === 'main') && (
          <HomePage
            lang={lang}
            theme={theme}
            onNavigatePage={handleNavigatePage}
            onInquireProject={handleInquireProject}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            lang={lang}
            theme={theme}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'disciplines' && (
          <DisciplinesPage
            lang={lang}
            theme={theme}
            onNavigatePage={handleNavigatePage}
            onInquireService={handleInquireService}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            lang={lang}
            theme={theme}
            onNavigatePage={handleNavigatePage}
            onInquireProject={handleInquireProject}
          />
        )}

        {currentPage === 'banks' && (
          <BankAccountsPage
            lang={lang}
            theme={theme}
            onNavigateHome={() => handleNavigatePage('home')}
            onNavigateAdmin={() => handleNavigatePage('admin')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            lang={lang}
            theme={theme}
            preselectedTopic={inquiryTopic}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'admin' && (
          <AdminPortal
            lang={lang}
            theme={theme}
            onNavigateHome={() => handleNavigatePage('home')}
            onNavigateBanks={() => handleNavigatePage('banks')}
          />
        )}

        {isLegalPage && (
          <LegalPages
            currentDoc={currentPage as LegalDocType}
            onChangeDoc={(doc: LegalDocType) => handleNavigatePage(doc)}
            onNavigateHome={() => handleNavigatePage('home')}
            lang={lang}
            theme={theme}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        theme={theme}
        onNavigatePage={handleNavigatePage}
        onNavigateLegal={(doc: LegalDocType) => handleNavigatePage(doc)}
      />

      {/* GDPR / Cookie Banner */}
      <CookieBanner
        lang={lang}
        onViewPolicy={() => handleNavigatePage('cookies')}
      />
    </div>
  );
}
