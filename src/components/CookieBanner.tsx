import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';
import { Language } from '../types';

interface CookieBannerProps {
  lang: Language;
  onViewPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang, onViewPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ayoub_cookie_consent_v1');
    if (!consent) {
      // Show with slight smooth delay
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ayoub_cookie_consent_v1', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ayoub_cookie_consent_v1', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom duration-300">
      <div className="p-5 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-md text-start relative overflow-hidden">
        {/* Subtle accent border */}
        <div className="absolute top-0 right-0 left-0 h-[2px] bg-amber-400/80" />

        <div className="flex items-start gap-3.5 mb-3.5">
          <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-amber-400 shrink-0">
            <Cookie className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100">
              {lang === 'ar' ? 'ملفات تعريف الارتباط والخصوصية' : 'Cookies & Privacy Notice'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mt-1 font-normal">
              {lang === 'ar'
                ? 'يستخدم هذا الموقع ملفات تعريف الارتباط الوظيفية الأساسية لحفظ تفضيلات اللغة وضمان أمان وسرعة التصفح دون أي تتبع إعلاني.'
                : 'This website uses essential functional cookies to store language preferences and optimize performance without ad tracking.'}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-800/80">
          <button
            onClick={onViewPolicy}
            className="text-xs text-slate-400 hover:text-amber-300 underline underline-offset-2 transition-colors cursor-pointer"
          >
            {lang === 'ar' ? 'عرض سياسة الكوكيز' : 'Cookie Policy'}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-200 bg-slate-800/80 border border-slate-700/60 transition-colors cursor-pointer"
            >
              {lang === 'ar' ? 'الأساسية فقط' : 'Essential Only'}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs cursor-pointer"
            >
              {lang === 'ar' ? 'موافق' : 'Accept'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
