import React, { useState } from 'react';
import {
  Send,
  Mail,
  CheckCircle,
  Copy,
  MessageCircle,
  Instagram,
  ExternalLink,
  Check,
  CreditCard,
  Building2,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react';
import { Language, Theme } from '../types';
import { ActivePage } from '../types/bank';

interface ContactPageProps {
  lang: Language;
  theme: Theme;
  preselectedTopic?: string;
  onNavigatePage: (page: ActivePage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  theme,
  preselectedTopic,
  onNavigatePage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedTopic || '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = 'Aelmaissouri@gmail.com';
  const whatsappNumber = '+212 660-177093';
  const instagramUrl = 'https://instagram.com/ayoub.elmaissouri?dlrf=eGEyeGZ6MGtpcmx3';

  const isDark = theme === 'dark';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Construct WhatsApp URL with prefilled message
      const text = `السلام عليكم أيوب،\nاسمي: ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone || 'غير محدد'}\nالخدمة: ${formData.service || 'عام'}\nالرسالة: ${formData.message}`;
      const waUrl = `https://wa.me/212660177093?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 600);
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
          <span className="text-amber-500 font-semibold">{lang === 'ar' ? 'تواصل معي' : 'Contact'}</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase mb-2 block">
            {lang === 'ar' ? 'قنوات التواصل المباشرة' : 'Direct Channels'}
          </span>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'تواصل معي مباشرة' : 'Get In Touch'}
          </h1>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'ar'
              ? 'سواء كان لديك استفسار حول التجارة الإلكترونية، فكرة مشروع جديد، أو رغبة في بدء تعاون عملي، يسعدني تواصلك المباشر.'
              : 'Whether you are launching an e-commerce venture, exploring digital platforms, or seeking consultation—reach out directly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Direct Card */}
            <a
              href="https://wa.me/212660177093"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl border block transition-all group ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/80'
                  : 'bg-white border-slate-200 hover:border-emerald-500/50 shadow-xs hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium text-emerald-500 px-2.5 py-0.5 rounded-full bg-emerald-500/10">
                  {lang === 'ar' ? 'استجابة سريعة' : 'Instant Reply'}
                </span>
              </div>
              <h3
                className={`text-base font-bold mb-1 group-hover:text-emerald-500 transition-colors ${
                  isDark ? 'text-slate-100' : 'text-slate-900'
                }`}
              >
                {lang === 'ar' ? 'واتساب المباشر' : 'WhatsApp Chat'}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mb-2">{whatsappNumber}</p>
              <span className="text-xs font-semibold text-emerald-500 inline-flex items-center gap-1">
                <span>{lang === 'ar' ? 'فتح المحادثة الفورية' : 'Open WhatsApp'}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* Email Card */}
            <div
              className={`p-6 rounded-2xl border transition-colors ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`text-xs font-medium px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                    copiedEmail
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : isDark
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>{lang === 'ar' ? 'تم النسخ' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>{lang === 'ar' ? 'نسخ البريد' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
              <h3
                className={`text-base font-bold mb-1 ${
                  isDark ? 'text-slate-100' : 'text-slate-900'
                }`}
              >
                {lang === 'ar' ? 'البريد الإلكتروني الرسمي' : 'Official Email'}
              </h3>
              <a
                href={`mailto:${emailAddress}`}
                className="text-xs sm:text-sm font-mono text-amber-500 hover:underline break-all block mb-1"
              >
                {emailAddress}
              </a>
              <span className="text-[11px] text-slate-400">
                {lang === 'ar' ? 'للمراسلات الرسمية والاتفاقيات' : 'For formal proposals and inquiries'}
              </span>
            </div>

            {/* Instagram Card */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl border block transition-all group ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800 hover:border-pink-500/40 hover:bg-slate-900/80'
                  : 'bg-white border-slate-200 hover:border-pink-500/40 shadow-xs hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium text-pink-500 px-2.5 py-0.5 rounded-full bg-pink-500/10">
                  {lang === 'ar' ? 'حساب رسمي' : 'Official Page'}
                </span>
              </div>
              <h3
                className={`text-base font-bold mb-1 group-hover:text-pink-500 transition-colors ${
                  isDark ? 'text-slate-100' : 'text-slate-900'
                }`}
              >
                {lang === 'ar' ? 'إنستغرام' : 'Instagram'}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mb-2">@ayoub.elmaissouri</p>
              <span className="text-xs font-semibold text-pink-500 inline-flex items-center gap-1">
                <span>{lang === 'ar' ? 'زيارة الملف الشخصي' : 'View Profile'}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* Bank Accounts Shortcut Card */}
            <div
              className={`p-6 rounded-2xl border flex items-center justify-between gap-4 ${
                isDark
                  ? 'bg-slate-900/40 border-slate-800'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold ${
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    }`}
                  >
                    {lang === 'ar' ? 'الحسابات البنكية (RIB)' : 'Official Bank Accounts'}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {lang === 'ar' ? 'لإجراء التحويلات المعتمدة' : 'For direct project payments'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigatePage('banks')}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer shrink-0 shadow-xs"
              >
                {lang === 'ar' ? 'عرض الحسابات' : 'View RIBs'}
              </button>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 sm:p-10 rounded-3xl border ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="mb-6">
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-1.5 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  {lang === 'ar' ? 'إرسال طلب استشارة أو مشروع' : 'Send Project Inquiry'}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {lang === 'ar'
                    ? 'املأ النموذج أدناه لتصلك رسالة تأكيد مباشرة عبر الواتساب والبريد.'
                    : 'Fill out the form to initiate direct correspondence.'}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4
                    className={`text-lg font-bold mb-2 ${
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    }`}
                  >
                    {lang === 'ar' ? 'تم تجهيز رسالتك بنجاح!' : 'Inquiry Ready!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-5 leading-relaxed">
                    {lang === 'ar'
                      ? 'تم فتح محادثة الواتساب المباشرة برقم +212 660-177093 لإرسال تفاصيل مشروعك إلى أيوب الميسوري فوراً.'
                      : 'Your message has been formatted for WhatsApp dispatch.'}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    {lang === 'ar' ? 'إرسال استفسار آخر' : 'Send Another'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        className={`block text-xs font-medium mb-1.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'ar' ? 'مثال: محمد العمري' : 'e.g. John Doe'}
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-hidden focus:ring-2 focus:ring-amber-400/30 transition-all ${
                          isDark
                            ? 'bg-slate-950/60 border-slate-800 text-slate-100 placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className={`block text-xs font-medium mb-1.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        {lang === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-hidden focus:ring-2 focus:ring-amber-400/30 transition-all ${
                          isDark
                            ? 'bg-slate-950/60 border-slate-800 text-slate-100 placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label
                        className={`block text-xs font-medium mb-1.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        {lang === 'ar' ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+212 ..."
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-hidden focus:ring-2 focus:ring-amber-400/30 transition-all ${
                          isDark
                            ? 'bg-slate-950/60 border-slate-800 text-slate-100 placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Topic / Service */}
                    <div>
                      <label
                        className={`block text-xs font-medium mb-1.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        {lang === 'ar' ? 'مجال الاستفسار أو الخدمة' : 'Service / Topic'}
                      </label>
                      <input
                        type="text"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        placeholder={lang === 'ar' ? 'التجارة الإلكترونية، متجر رقمي...' : 'E-commerce, digital venture...'}
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-hidden focus:ring-2 focus:ring-amber-400/30 transition-all ${
                          isDark
                            ? 'bg-slate-950/60 border-slate-800 text-slate-100 placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className={`block text-xs font-medium mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {lang === 'ar' ? 'تفاصيل الفكرة أو المشروع *' : 'Project Details *'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'ar'
                          ? 'اكتب نبذة عن مشروعك أو استفسارك، وما ترغب في تحقيقه...'
                          : 'Describe your idea, timeline, and requirements...'
                      }
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-hidden focus:ring-2 focus:ring-amber-400/30 transition-all resize-none ${
                        isDark
                          ? 'bg-slate-950/60 border-slate-800 text-slate-100 placeholder-slate-600'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 transition-all cursor-pointer shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>{lang === 'ar' ? 'جاري المعالجة...' : 'Processing...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{lang === 'ar' ? 'إرسال الرسالة وبدء المحادثة' : 'Send Inquiry'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
