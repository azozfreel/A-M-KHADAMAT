import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Disciplines } from './components/Disciplines';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { Indicators } from './components/Indicators';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BankAccountsPage } from './components/BankAccountsPage';
import { AdminPortal } from './components/AdminPortal';
import { LegalPages } from './components/LegalPages';
import { CookieBanner } from './components/CookieBanner';
import { Language } from './types';
import { ActivePage, LegalDocType } from './types/bank';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [currentPage, setCurrentPage] = useState<ActivePage>('main');
  const [inquiryTopic, setInquiryTopic] = useState<string>('');

  // Synchronize HTML attributes with language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Sync with URL Hash (#banks, #admin, #terms, #privacy, #copyright, #legal-notice, #cookies)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      const legalDocs: LegalDocType[] = ['terms', 'privacy', 'copyright', 'legal-notice', 'cookies'];

      if (hash === 'banks' || hash === 'ribs') {
        setCurrentPage('banks');
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

  // Track active section for navigation on main page
  useEffect(() => {
    if (currentPage !== 'main') return;

    const sectionIds = ['hero', 'about', 'disciplines', 'projects', 'philosophy', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleNavigatePage = (page: ActivePage) => {
    setCurrentPage(page);
    if (page === 'main') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquireProject = (projectTitle: string) => {
    setInquiryTopic(projectTitle);
    if (currentPage !== 'main') {
      setCurrentPage('main');
    }
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const isLegalPage = ['terms', 'privacy', 'copyright', 'legal-notice', 'cookies'].includes(currentPage);

  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* Sticky Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        activeSection={activeSection}
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'main' && (
          <>
            {/* Hero Section */}
            <Hero lang={lang} />

            {/* About Section */}
            <About lang={lang} />

            {/* Disciplines Section */}
            <Disciplines lang={lang} />

            {/* Projects / Portfolio Section */}
            <Projects
              lang={lang}
              onInquireProject={handleInquireProject}
            />

            {/* Philosophy Section */}
            <Philosophy lang={lang} />

            {/* Indicators Section */}
            <Indicators lang={lang} />

            {/* Call to Action Section */}
            <CTASection lang={lang} />

            {/* Contact Section */}
            <Contact
              lang={lang}
              preselectedTopic={inquiryTopic}
              onNavigateBanks={() => handleNavigatePage('banks')}
            />
          </>
        )}

        {currentPage === 'banks' && (
          <BankAccountsPage
            lang={lang}
            onNavigateHome={() => handleNavigatePage('main')}
            onNavigateAdmin={() => handleNavigatePage('admin')}
          />
        )}

        {currentPage === 'admin' && (
          <AdminPortal
            lang={lang}
            onNavigateHome={() => handleNavigatePage('main')}
            onNavigateBanks={() => handleNavigatePage('banks')}
          />
        )}

        {isLegalPage && (
          <LegalPages
            currentDoc={currentPage as LegalDocType}
            onChangeDoc={(doc) => handleNavigatePage(doc)}
            onNavigateHome={() => handleNavigatePage('main')}
            lang={lang}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigateBanks={() => handleNavigatePage('banks')}
        onNavigateAdmin={() => handleNavigatePage('admin')}
        onNavigateLegal={(doc) => handleNavigatePage(doc)}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner
        lang={lang}
        onViewPolicy={() => handleNavigatePage('cookies')}
      />
    </div>
  );
}
