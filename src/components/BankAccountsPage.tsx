import React, { useState, useEffect } from 'react';
import {
  CreditCard,
  Copy,
  Check,
  Building2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Lock,
  MessageCircle,
  Sparkles,
  Info,
  ExternalLink
} from 'lucide-react';
import { bankService } from '../services/bankService';
import { BankAccount } from '../types/bank';
import { Language } from '../types';

interface BankAccountsPageProps {
  lang: Language;
  onNavigateHome: () => void;
  onNavigateAdmin: () => void;
}

export const BankAccountsPage: React.FC<BankAccountsPageProps> = ({
  lang,
  onNavigateHome,
  onNavigateAdmin,
}) => {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setAccounts(bankService.getActiveAccounts());
  }, []);

  const handleCopyRib = (id: string, rib: string) => {
    // Remove spaces before copying for clean paste or keep formatted
    const cleanRib = rib.replace(/\s+/g, '');
    navigator.clipboard.writeText(cleanRib);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const isRTL = lang === 'ar';
  const ArrowBackIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.08] transition-colors"
          >
            <ArrowBackIcon className="w-4 h-4" />
            <span>{lang === 'ar' ? 'العودة إلى الموقع الرئيسي' : 'Back to Home'}</span>
          </button>

          <button
            onClick={onNavigateAdmin}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-zinc-400 hover:text-emerald-300 bg-zinc-950 hover:bg-zinc-900 border border-white/[0.06] hover:border-emerald-500/30 transition-all"
            title="دخول المسؤول لإضافة وتعديل الحسابات"
          >
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'ar' ? 'لوحة تحكم المسؤول' : 'Admin Portal'}</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'ar' ? 'بيانات التحويل البنكي المعتمدة' : 'Official Banking & RIB Directory'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {lang === 'ar' ? 'الحسابات والريبات البنكية' : 'Bank Accounts & RIB Details'}
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'الحسابات البنكية الرسمية لأيوب الميسوري لإجراء التحويلات المباشرة لمعاملات المشاريع، التجارة الإلكترونية، الخدمات الرقمية، والاستشارات.'
              : 'Verified bank accounts and RIB information for direct transfers related to digital ventures, e-commerce, and consultations.'}
          </p>
        </div>

        {/* Bank Cards Grid */}
        {accounts.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-zinc-950/80 border border-white/[0.08]">
            <Building2 className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === 'ar' ? 'لا توجد حسابات بنكية نشطة حالياً' : 'No Active Bank Accounts'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              {lang === 'ar' ? 'يمكن للمسؤول إضافة حسابات بنكية جديدة من لوحة التحكم.' : 'The administrator can add bank accounts from the admin portal.'}
            </p>
            <button
              onClick={onNavigateAdmin}
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              {lang === 'ar' ? 'الدخول كمسؤول لإضافة حساب' : 'Log in as Admin to Add Account'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {accounts.map((account) => {
              const isCopied = copiedId === account.id;
              return (
                <div
                  key={account.id}
                  className="rounded-3xl bg-zinc-950/90 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative group overflow-hidden"
                >
                  {/* Subtle top card glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    {/* Header: Bank Name & Currency badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {account.bankName}
                          </h3>
                          {account.accountType && (
                            <span className="text-xs text-zinc-400 block mt-0.5">
                              {account.accountType}
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 shrink-0">
                        {account.currency}
                      </span>
                    </div>

                    {/* Account Holder Name */}
                    <div className="mb-5 p-3 rounded-xl bg-black/40 border border-white/[0.04]">
                      <span className="text-[11px] font-mono text-zinc-400 block mb-0.5">
                        {lang === 'ar' ? 'اسم صاحب الحساب (Titulaire)' : 'Account Holder'}
                      </span>
                      <span className="text-sm font-bold text-zinc-200">
                        {account.accountHolder}
                      </span>
                    </div>

                    {/* RIB (Relevé d'Identité Bancaire) Box with 1-Click Copy */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                          {lang === 'ar' ? 'الريب البنكي (RIB / 24 أرقام)' : 'RIB (24 Digits / Bank Code)'}
                        </span>
                        {isCopied && (
                          <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 animate-in fade-in">
                            <Check className="w-3.5 h-3.5" />
                            <span>{lang === 'ar' ? 'تم النسخ بنجاح!' : 'Copied!'}</span>
                          </span>
                        )}
                      </div>

                      <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-white/[0.1] hover:border-emerald-500/50 flex items-center justify-between gap-3 transition-colors">
                        <span className="font-mono text-sm sm:text-base font-bold text-white tracking-widest break-all select-all">
                          {account.rib}
                        </span>

                        <button
                          onClick={() => handleCopyRib(account.id, account.rib)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-500 text-zinc-950'
                              : 'bg-zinc-800 hover:bg-zinc-700 text-white'
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

                    {/* SWIFT / BIC if available */}
                    {account.swift && (
                      <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-black/30 border border-white/[0.04] mb-3">
                        <span className="font-mono text-zinc-400">SWIFT / BIC Code</span>
                        <span className="font-mono font-bold text-zinc-200">{account.swift}</span>
                      </div>
                    )}

                    {/* Notes / Instructions */}
                    {account.notes && (
                      <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/[0.04] text-xs text-zinc-400 flex items-start gap-2">
                        <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{account.notes}</p>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Send WhatsApp confirmation button */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] text-zinc-400">
                      {lang === 'ar' ? 'بعد إتمام التحويل' : 'After Transfer'}
                    </span>

                    <a
                      href={`https://wa.me/212660177093?text=${encodeURIComponent(
                        `السلام عليكم أيوب، قمت بإجراء تحويل بنكي إلى حسابكم في ${account.bankName}، وأود إرسال وصل العملية.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'إرسال وصل التحويل عبر واتساب' : 'Send Receipt via WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Security & Instructions Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/60 border border-white/[0.06] text-xs sm:text-sm text-zinc-400 space-y-3">
          <div className="flex items-center gap-2 text-white font-bold">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>{lang === 'ar' ? 'إرشادات هامة بخصوص التحويلات البنكية' : 'Important Transfer Guidelines'}</span>
          </div>
          <ul className="list-disc list-inside space-y-1.5 text-zinc-400 pr-2">
            <li>
              {lang === 'ar'
                ? 'يرجى كتابة اسمكم أو رقم المعاملة في خانة سبب التحويل (Motif du virement).'
                : 'Please include your full name or reference in the transfer reason.'}
            </li>
            <li>
              {lang === 'ar'
                ? 'بعد إتمام التحويل بنجاح، يُرجى تصوير الوصل وإرساله عبر الواتساب لتأكيد الاستلام فوراً.'
                : 'Send the transaction confirmation screenshot via WhatsApp for instant validation.'}
            </li>
            <li>
              {lang === 'ar'
                ? 'هذه الحسابات معتمدة وموثوقة حصرياً بالاسم الرسمي لأيوب الميسوري.'
                : 'These accounts are officially registered under Ayoub El Meysouri.'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
