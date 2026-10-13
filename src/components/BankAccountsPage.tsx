import React, { useState, useEffect } from 'react';
import {
  Building2,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Lock,
  MessageCircle,
  Info
} from 'lucide-react';
import { bankService } from '../services/bankService';
import { BankAccount } from '../types/bank';
import { Language, Theme } from '../types';

interface BankAccountsPageProps {
  lang: Language;
  theme?: Theme;
  onNavigateHome: () => void;
  onNavigateAdmin: () => void;
}

export const BankAccountsPage: React.FC<BankAccountsPageProps> = ({
  lang,
  theme = 'dark',
  onNavigateHome,
  onNavigateAdmin,
}) => {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const isDark = theme === 'dark';

  useEffect(() => {
    setAccounts(bankService.getActiveAccounts());
  }, []);

  const handleCopyRib = (id: string, rib: string) => {
    const cleanRib = rib.replace(/\s+/g, '');
    navigator.clipboard.writeText(cleanRib);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const isRTL = lang === 'ar';
  const ArrowBackIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen pt-32 pb-24 text-start">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Top Bar */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b ${
            isDark ? 'border-slate-800/70' : 'border-slate-200'
          }`}
        >
          <button
            onClick={onNavigateHome}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
              isDark
                ? 'text-slate-300 hover:text-white bg-slate-900/80 border-slate-800'
                : 'text-slate-700 hover:text-slate-900 bg-white border-slate-200 shadow-xs'
            }`}
          >
            <ArrowBackIcon className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'العودة إلى الموقع الرئيسي' : 'Back to Home'}</span>
          </button>

          <button
            onClick={onNavigateAdmin}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
              isDark
                ? 'text-slate-400 hover:text-slate-200 bg-slate-900/80 border-slate-800'
                : 'text-slate-600 hover:text-slate-900 bg-white border-slate-200 shadow-xs'
            }`}
            title="دخول المسؤول"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'بوابة المسؤول' : 'Admin Portal'}</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase mb-2 block">
            {lang === 'ar' ? 'بيانات التحويل المعتمدة' : 'Official Banking Directory'}
          </span>

          <h1
            className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'الحسابات والريبات البنكية' : 'Bank Accounts & RIB Details'}
          </h1>

          <p
            className={`text-sm sm:text-base leading-relaxed font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'ar'
              ? 'الحسابات البنكية الرسمية لأيوب الميسوري لإجراء التحويلات المباشرة لمعاملات المشاريع، التجارة الإلكترونية، والخدمات الرقمية.'
              : 'Verified bank accounts and RIB information for direct transfers related to digital ventures and e-commerce.'}
          </p>
        </div>

        {/* Bank Cards Grid */}
        {accounts.length === 0 ? (
          <div
            className={`p-10 text-center rounded-2xl border shadow-xs ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <Building2 className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3
              className={`text-base font-bold mb-1 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'لا توجد حسابات بنكية نشطة حالياً' : 'No Active Accounts'}
            </h3>
            <p
              className={`text-xs sm:text-sm mb-5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {lang === 'ar' ? 'يمكن للمسؤول إضافة حسابات جديدة من لوحة التحكم.' : 'The administrator can add bank accounts.'}
            </p>
            <button
              onClick={onNavigateAdmin}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all cursor-pointer shadow-xs"
            >
              {lang === 'ar' ? 'دخول المسؤول' : 'Log in as Admin'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {accounts.map((account) => {
              const isCopied = copiedId === account.id;
              return (
                <div
                  key={account.id}
                  className={`rounded-2xl border p-6 flex flex-col justify-between shadow-xs transition-colors ${
                    isDark
                      ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700/80'
                      : 'bg-white border-slate-200 hover:border-amber-400/60'
                  }`}
                >
                  <div>
                    {/* Header: Bank Name & Currency badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                            isDark
                              ? 'bg-slate-800/90 border-slate-700/60 text-amber-400'
                              : 'bg-amber-50 border-amber-200 text-amber-600'
                          }`}
                        >
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h3
                            className={`text-base font-bold ${
                              isDark ? 'text-slate-100' : 'text-slate-900'
                            }`}
                          >
                            {account.bankName}
                          </h3>
                          {account.accountType && (
                            <span
                              className={`text-xs block ${
                                isDark ? 'text-slate-400' : 'text-slate-500'
                              }`}
                            >
                              {account.accountType}
                            </span>
                          )}
                        </div>
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold shrink-0 ${
                          isDark
                            ? 'bg-slate-800 text-amber-300'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {account.currency}
                      </span>
                    </div>

                    {/* Account Holder Name */}
                    <div
                      className={`mb-3.5 p-3 rounded-xl border ${
                        isDark
                          ? 'bg-slate-950/70 border-slate-800/70'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <span
                        className={`text-[11px] font-mono block mb-0.5 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {lang === 'ar' ? 'اسم صاحب الحساب' : 'Account Holder'}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-semibold ${
                          isDark ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {account.accountHolder}
                      </span>
                    </div>

                    {/* RIB Box with 1-Click Copy */}
                    <div className="mb-3.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-xs font-mono font-medium ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {lang === 'ar' ? 'الريب البنكي (RIB)' : 'RIB (24 digits)'}
                        </span>
                        {isCopied && (
                          <span className="text-xs font-medium text-amber-500 flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>{lang === 'ar' ? 'تم النسخ' : 'Copied'}</span>
                          </span>
                        )}
                      </div>

                      <div
                        className={`p-3 rounded-xl border flex items-center justify-between gap-2.5 ${
                          isDark
                            ? 'bg-slate-950/80 border-slate-800'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span
                          className={`font-mono text-xs sm:text-sm font-bold tracking-wider break-all select-all ${
                            isDark ? 'text-slate-100' : 'text-slate-900'
                          }`}
                        >
                          {account.rib}
                        </span>

                        <button
                          onClick={() => handleCopyRib(account.id, account.rib)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 shrink-0 transition-colors cursor-pointer ${
                            isCopied
                              ? 'bg-amber-400 text-slate-950'
                              : isDark
                              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                              : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                          }`}
                          title="نسخ رقم الريب البنكي"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>{lang === 'ar' ? 'منسوخ' : 'Copied'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>{lang === 'ar' ? 'نسخ' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* SWIFT if available */}
                    {account.swift && (
                      <div
                        className={`flex items-center justify-between text-xs py-2 px-3 rounded-xl border mb-2.5 ${
                          isDark
                            ? 'bg-slate-950/50 border-slate-800/60'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span className={`font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          SWIFT Code
                        </span>
                        <span
                          className={`font-mono font-medium ${
                            isDark ? 'text-slate-200' : 'text-slate-800'
                          }`}
                        >
                          {account.swift}
                        </span>
                      </div>
                    )}

                    {/* Notes */}
                    {account.notes && (
                      <div
                        className={`p-3 rounded-xl border text-xs flex items-start gap-2 ${
                          isDark
                            ? 'bg-slate-950/50 border-slate-800/60 text-slate-400'
                            : 'bg-amber-50/50 border-amber-200/60 text-slate-600'
                        }`}
                      >
                        <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{account.notes}</p>
                      </div>
                    )}
                  </div>

                  {/* WhatsApp button */}
                  <div
                    className={`mt-5 pt-3.5 border-t flex items-center justify-between ${
                      isDark ? 'border-slate-800/60' : 'border-slate-200'
                    }`}
                  >
                    <span
                      className={`text-[11px] ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {lang === 'ar' ? 'بعد التحويل' : 'After Transfer'}
                    </span>

                    <a
                      href={`https://wa.me/212660177093?text=${encodeURIComponent(
                        `السلام عليكم أيوب، قمت بإجراء تحويل بنكي إلى حسابكم في ${account.bankName}، وأود إرسال وصل العملية.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                        isDark
                          ? 'text-slate-300 hover:text-amber-300'
                          : 'text-slate-700 hover:text-amber-600'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{lang === 'ar' ? 'إرسال الوصل عبر واتساب' : 'Send Receipt'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Transfer Guidelines Box - Clean & Subtle */}
        <div
          className={`p-6 rounded-2xl border text-xs sm:text-sm space-y-2.5 ${
            isDark
              ? 'bg-slate-900/40 border-slate-800/80 text-slate-400'
              : 'bg-white border-slate-200 text-slate-600 shadow-xs'
          }`}
        >
          <div
            className={`flex items-center gap-2 font-semibold ${
              isDark ? 'text-slate-200' : 'text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>{lang === 'ar' ? 'إرشادات هامة بخصوص التحويل البنكي' : 'Transfer Guidelines'}</span>
          </div>
          <ul
            className={`list-disc list-inside space-y-1.5 pr-1 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <li>
              {lang === 'ar'
                ? 'يرجى كتابة اسمكم أو رقم المعاملة في خانة سبب التحويل (Motif du virement).'
                : 'Please include your full name or reference in the transfer reason.'}
            </li>
            <li>
              {lang === 'ar'
                ? 'بعد إتمام التحويل، يُرجى تصوير الوصل وإرساله عبر الواتساب لتأكيد الاستلام.'
                : 'Send the transaction confirmation screenshot via WhatsApp for validation.'}
            </li>
            <li>
              {lang === 'ar'
                ? 'هذه الحسابات معتمدة وموثوقة حصرياً باسم أيوب الميسوري (Ayoub El Maissouri).'
                : 'These accounts are officially registered under Ayoub El Maissouri.'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
