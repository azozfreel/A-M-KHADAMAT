import React, { useState, useEffect } from 'react';
import {
  Lock,
  Unlock,
  Key,
  Plus,
  Trash2,
  Edit2,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  Building2,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  LogOut,
  RefreshCw,
  Copy,
  ExternalLink,
  ShieldCheck,
  X
} from 'lucide-react';
import { bankService } from '../services/bankService';
import { BankAccount } from '../types/bank';
import { Language } from '../types';

interface AdminPortalProps {
  lang: Language;
  onNavigateHome: () => void;
  onNavigateBanks: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  lang,
  onNavigateHome,
  onNavigateBanks,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Bank management state
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingAccount, setEditingAccount] = useState<BankAccount | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Password change state
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [passChangeError, setPassChangeError] = useState('');

  // Form State for new or editing bank
  const [formData, setFormData] = useState({
    bankName: '',
    accountHolder: 'أيوب الميسوري (Ayoub El Maissouri)',
    rib: '',
    swift: '',
    currency: 'MAD' as 'MAD' | 'USD' | 'EUR',
    accountType: 'حساب جاري رقمي',
    notes: 'يرجى إرسال وصل التحويل بعد إتمام العملية.',
    isActive: true,
  });

  const popularBankSuggestions = [
    'CIH Bank',
    'Attijariwafa Bank',
    'Bank of Africa (BMCE)',
    'Banque Populaire',
    'Société Générale Maroc',
    'BMCI',
    'CFG Bank',
    'Wise / Revolut',
  ];

  useEffect(() => {
    if (isAuthenticated) {
      loadAccounts();
    }
  }, [isAuthenticated]);

  const loadAccounts = () => {
    setAccounts(bankService.getAccounts());
  };

  const showNotification = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (bankService.verifyPassword(passwordInput)) {
      setIsAuthenticated(true);
      setLoginError('');
      setPasswordInput('');
    } else {
      setLoginError('كلمة المرور غير صحيحة. حاول مرة أخرى (الافتراضية: ayoub2026)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const formatRibInput = (val: string) => {
    // Only numbers, group nicely
    const digits = val.replace(/\D/g, '').slice(0, 24);
    // Format into groups: 3 - 3 - 16 - 2
    return digits;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.bankName.trim() || !formData.rib.trim()) {
      alert('يرجى إدخال اسم البنك ورقم الريب');
      return;
    }

    if (editingAccount) {
      bankService.updateAccount(editingAccount.id, formData);
      showNotification('تم تحديث بيانات الحساب البنكي بنجاح');
      setEditingAccount(null);
    } else {
      bankService.addAccount(formData);
      showNotification('تم إضافة الريب البنكي بنجاح وتثبيته في صفحة الموقع!');
      setIsAddingNew(false);
    }

    // Reset form
    setFormData({
      bankName: '',
      accountHolder: 'أيوب الميسوري (Ayoub El Meysouri)',
      rib: '',
      swift: '',
      currency: 'MAD',
      accountType: 'حساب جاري رقمي',
      notes: 'يرجى إرسال وصل التحويل بعد إتمام العملية.',
      isActive: true,
    });

    loadAccounts();
  };

  const handleEditClick = (account: BankAccount) => {
    setEditingAccount(account);
    setFormData({
      bankName: account.bankName,
      accountHolder: account.accountHolder,
      rib: account.rib,
      swift: account.swift || '',
      currency: account.currency,
      accountType: account.accountType || '',
      notes: account.notes || '',
      isActive: account.isActive,
    });
    setIsAddingNew(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`هل أنت متأكد من حذف الحساب: ${name}؟`)) {
      bankService.deleteAccount(id);
      loadAccounts();
      showNotification('تم حذف الحساب البنكي');
    }
  };

  const handleToggleStatus = (id: string) => {
    bankService.toggleActive(id);
    loadAccounts();
    showNotification('تم تعديل حالة ظهور الحساب');
  };

  const handleResetDefaults = () => {
    if (confirm('هل ترغب في إعادة ضبط الحسابات إلى القائمة الافتراضية؟')) {
      bankService.resetDefaults();
      loadAccounts();
      showNotification('تمت استعادة الحسابات الافتراضية');
    }
  };

  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bankService.changePassword(oldPass, newPass)) {
      setShowChangePasswordModal(false);
      setOldPass('');
      setNewPass('');
      setPassChangeError('');
      showNotification('تم تغيير كلمة مرور المسؤول بنجاح!');
    } else {
      setPassChangeError('كلمة المرور الحالية غير صحيحة، أو كلمة المرور الجديدة أقل من 4 أحرف.');
    }
  };

  const isRTL = lang === 'ar';
  const ArrowBackIcon = isRTL ? ArrowRight : ArrowLeft;

  // -------------------------------------------------------------
  // Unauthenticated: Password Protected Gate Screen
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#08090D] text-zinc-100 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute w-[500px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-white/[0.08] shadow-2xl relative z-10 text-center">
          {/* Lock Icon */}
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6 shadow-xl shadow-emerald-950/30">
            <Lock className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-black text-white mb-2">
            {lang === 'ar' ? 'منطقة المسؤول المحمية' : 'Admin Security Gateway'}
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 mb-8 leading-relaxed">
            {lang === 'ar'
              ? 'هذه الصفحة مخصصة للمسؤول فقط لإضافة وإدارة أرقام الريب البنكية وأسماء البنوك.'
              : 'Authorized access only. Log in to manage bank RIBs and display settings.'}
          </p>

          <form onSubmit={handleLogin} className="space-y-5 text-start">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-2">
                {lang === 'ar' ? 'كلمة مرور المسؤول (Passcode)' : 'Admin Password'}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-emerald-500/60 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 left-3 sm:left-auto sm:right-3 flex items-center text-zinc-400 hover:text-white"
                  aria-label="إظهار/إخفاء كلمة المرور"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {loginError && (
                <p className="text-xs text-rose-400 mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{loginError}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-400 to-teal-300 text-zinc-950 hover:brightness-105 shadow-xl shadow-emerald-500/20 transition-all cursor-pointer"
            >
              {lang === 'ar' ? 'تسجيل الدخول إلى لوحة التحكم' : 'Authenticate & Enter'}
            </button>
          </form>

          {/* Default password hint */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-zinc-400">
            <span>{lang === 'ar' ? 'كلمة المرور الافتراضية للموقع: ' : 'Default passcode: '}</span>
            <code className="text-emerald-400 font-mono font-bold bg-zinc-900 px-2 py-0.5 rounded">ayoub2026</code>
          </div>

          <div className="mt-4">
            <button
              onClick={onNavigateHome}
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              ← {lang === 'ar' ? 'الرجوع إلى الموقع الرئيسي' : 'Return to Home'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // Authenticated: Full Admin Dashboard
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 pt-28 pb-20 relative overflow-hidden text-start">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-zinc-950 px-5 py-2.5 rounded-full font-bold text-xs shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top duration-200">
          <Check className="w-4 h-4" />
          <span>{successToast}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.06] transition-colors"
            >
              <ArrowBackIcon className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'الموقع الرئيسي' : 'Home'}</span>
            </button>

            <button
              onClick={onNavigateBanks}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 border border-emerald-500/20 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'معاينة صفحة الحسابات العامة' : 'View Public Page'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowChangePasswordModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-white/[0.06]"
            >
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'تغيير كلمة المرور' : 'Change Password'}</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-rose-400 hover:text-rose-300 bg-rose-950/30 border border-rose-500/20"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'تسجيل الخروج' : 'Logout'}</span>
            </button>
          </div>
        </div>

        {/* Header Title & Quick Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'لوحة تحكم المسؤول المعتمدة' : 'Verified Admin Dashboard'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {lang === 'ar' ? 'إدارة الريبات والحسابات البنكية' : 'Bank Accounts & RIB Management'}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              {lang === 'ar'
                ? 'أضف أي بنك أو ريب تريده، وسيظهر فوراً في صفحة الحسابات البنكية داخل الموقع.'
                : 'Add, update, or remove bank RIBs that appear instantly on the public website.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-zinc-950 border border-white/[0.08] text-center">
              <span className="block text-xl font-bold text-white">{accounts.length}</span>
              <span className="text-[10px] text-zinc-400 uppercase font-mono">
                {lang === 'ar' ? 'إجمالي الحسابات' : 'Total Banks'}
              </span>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 text-center">
              <span className="block text-xl font-bold text-emerald-400">
                {accounts.filter((a) => a.isActive).length}
              </span>
              <span className="text-[10px] text-zinc-400 uppercase font-mono">
                {lang === 'ar' ? 'حسابات نشطة' : 'Active Public'}
              </span>
            </div>

            <button
              onClick={() => {
                setEditingAccount(null);
                setIsAddingNew(!isAddingNew);
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs bg-gradient-to-r from-emerald-400 to-teal-300 text-zinc-950 hover:brightness-105 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{isAddingNew ? (lang === 'ar' ? 'إلغاء الإضافة' : 'Cancel') : (lang === 'ar' ? 'إضافة ريب بنكي جديد' : 'Add Bank RIB')}</span>
            </button>
          </div>
        </div>

        {/* Add / Edit Bank Form Accordion */}
        {isAddingNew && (
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-emerald-500/40 shadow-2xl relative animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {editingAccount
                      ? (lang === 'ar' ? 'تعديل بيانات الحساب البنكي' : 'Edit Bank Account')
                      : (lang === 'ar' ? 'إضافة ريب بنكي جديد' : 'Add New Bank Account')}
                  </h3>
                  <span className="text-xs text-zinc-400">
                    {lang === 'ar' ? 'ستظهر هذه البيانات مباشرة للزوار والعملاء' : 'Changes reflect on the public page'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsAddingNew(false);
                  setEditingAccount(null);
                }}
                className="p-1.5 rounded-full text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Suggestions Chips */}
            <div className="mb-6">
              <span className="block text-xs font-semibold text-zinc-400 mb-2">
                {lang === 'ar' ? 'بنوك شائعة (انقر للتعبئة السريعة):' : 'Quick Suggestions:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {popularBankSuggestions.map((bank) => (
                  <button
                    key={bank}
                    type="button"
                    onClick={() => setFormData({ ...formData, bankName: bank })}
                    className="px-3 py-1 rounded-lg text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-emerald-300 border border-white/[0.06] transition-colors"
                  >
                    + {bank}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Bank Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {lang === 'ar' ? 'اسم البنك' : 'Bank Name'} <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.bankName}
                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    placeholder="مثال: Attijariwafa Bank أو CIH Bank"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Account Holder Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {lang === 'ar' ? 'اسم صاحب الحساب (Titulaire)' : 'Account Holder Name'} <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.accountHolder}
                    onChange={(e) => setFormData({ ...formData, accountHolder: e.target.value })}
                    placeholder="أيوب الميسوري"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* RIB Number */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-zinc-300">
                    {lang === 'ar' ? 'رقم الريب البنكي (RIB / 24 رقماً أو كود الحساب)' : 'RIB (24 digits)'}{' '}
                    <span className="text-emerald-400">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {formData.rib.replace(/\s+/g, '').length} / 24 {lang === 'ar' ? 'رقماً' : 'digits'}
                  </span>
                </div>
                <input
                  type="text"
                  required
                  value={formData.rib}
                  onChange={(e) => setFormData({ ...formData, rib: e.target.value })}
                  placeholder="230 780 45678901234567 89"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-emerald-300 font-mono text-base font-bold tracking-wider focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Currency */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {lang === 'ar' ? 'العملة' : 'Currency'}
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) =>
                      setFormData({ ...formData, currency: e.target.value as 'MAD' | 'USD' | 'EUR' })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="MAD">MAD (درهم مغربي)</option>
                    <option value="EUR">EUR (يورو)</option>
                    <option value="USD">USD (دولار أمريكي)</option>
                  </select>
                </div>

                {/* SWIFT / BIC */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {lang === 'ar' ? 'كود السويفت (SWIFT / BIC)' : 'SWIFT / BIC (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={formData.swift}
                    onChange={(e) => setFormData({ ...formData, swift: e.target.value.toUpperCase() })}
                    placeholder="CIHBMAMC"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Account Type */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {lang === 'ar' ? 'نوع الحساب (تصنيف)' : 'Account Type'}
                  </label>
                  <input
                    type="text"
                    value={formData.accountType}
                    onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                    placeholder="حساب جاري رقمي"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-2">
                  {lang === 'ar' ? 'تعليمات وملاحظات للعميل عند التحويل' : 'Transfer Notes for Clients'}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="مثال: يرجى إرسال وصل التحويل عبر واتساب بعد إتمام العملية."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              {/* Active Toggle */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="isActiveToggle"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
                <label htmlFor="isActiveToggle" className="text-xs text-zinc-300 cursor-pointer">
                  {lang === 'ar' ? 'تفعيل الحساب وإظهاره فوراً في صفحة الموقع' : 'Publish and show on website'}
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-bold text-xs bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  {editingAccount
                    ? (lang === 'ar' ? 'حفظ التعديلات' : 'Save Changes')
                    : (lang === 'ar' ? 'تأكيد وإضافة الريب البنكي' : 'Confirm & Add Bank RIB')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingAccount(null);
                  }}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.08]"
                >
                  {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Existing Banks List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'ar' ? 'قائمة الحسابات البنكية المضافة' : 'Registered Bank Accounts'}</span>
            </h3>
            <button
              onClick={handleResetDefaults}
              className="text-[11px] text-zinc-400 hover:text-zinc-300 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{lang === 'ar' ? 'استعادة الحسابات الافتراضية' : 'Reset Defaults'}</span>
            </button>
          </div>

          {accounts.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-zinc-950 border border-white/[0.06]">
              <p className="text-sm text-zinc-400">
                {lang === 'ar' ? 'لم يتم إضافة أي حساب بعد. اضغط على "إضافة ريب بنكي جديد" بالأعلى.' : 'No bank accounts added yet.'}
              </p>
            </div>
          ) : (
            accounts.map((acc) => (
              <div
                key={acc.id}
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <h4 className="text-base font-bold text-white">{acc.bankName}</h4>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold ${
                        acc.isActive
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {acc.isActive ? (lang === 'ar' ? 'نشط وظاهر للعامة' : 'Active') : (lang === 'ar' ? 'مخفي' : 'Hidden')}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-300">
                      {acc.currency}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 font-mono">
                    <span className="text-zinc-400">{lang === 'ar' ? 'صاحب الحساب: ' : 'Holder: '}</span>
                    <span className="text-zinc-300">{acc.accountHolder}</span>
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider bg-black/50 px-2.5 py-1 rounded-lg border border-white/[0.06]">
                      {acc.rib}
                    </span>
                    {acc.swift && (
                      <span className="text-xs font-mono text-zinc-400">SWIFT: {acc.swift}</span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
                  <button
                    onClick={() => handleToggleStatus(acc.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      acc.isActive
                        ? 'bg-zinc-900 text-zinc-300 hover:text-white'
                        : 'bg-emerald-950 text-emerald-300 hover:bg-emerald-900'
                    }`}
                  >
                    {acc.isActive ? (lang === 'ar' ? 'إخفاء' : 'Hide') : (lang === 'ar' ? 'إظهار' : 'Show')}
                  </button>

                  <button
                    onClick={() => handleEditClick(acc)}
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                    title="تعديل الحساب"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(acc.id, acc.bankName)}
                    className="p-2 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 hover:text-rose-200 transition-colors"
                    title="حذف الحساب"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md p-6 rounded-3xl bg-zinc-950 border border-white/[0.1] shadow-2xl relative text-start">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Key className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'تغيير كلمة مرور المسؤول' : 'Change Admin Password'}</span>
            </h3>

            <p className="text-xs text-zinc-400 mb-5">
              {lang === 'ar'
                ? 'أدخل كلمة المرور الحالية ثم كلمة المرور الجديدة للحفاظ على أمان بياناتك.'
                : 'Enter current and new password to secure your portal.'}
            </p>

            <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  {lang === 'ar' ? 'كلمة المرور الحالية' : 'Current Password'}
                </label>
                <input
                  type="password"
                  required
                  value={oldPass}
                  onChange={(e) => setOldPass(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  {lang === 'ar' ? 'كلمة المرور الجديدة' : 'New Password'}
                </label>
                <input
                  type="password"
                  required
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] text-white text-sm"
                />
              </div>

              {passChangeError && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{passChangeError}</span>
                </p>
              )}

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
                >
                  {lang === 'ar' ? 'حفظ كلمة المرور الجديدة' : 'Update Password'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowChangePasswordModal(false);
                    setPassChangeError('');
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.08]"
                >
                  {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
