import React, { useState } from 'react';
import {
  Send,
  Mail,
  CheckCircle,
  Copy,
  MessageCircle,
  Instagram,
  Video,
  Linkedin,
  Twitter,
  ExternalLink,
  Check,
  CreditCard,
  Home
} from 'lucide-react';
import { socialLinksData } from '../data/content';
import { Language } from '../types';
import { ActivePage } from '../types/bank';

interface ContactProps {
  lang: Language;
  preselectedTopic?: string;
  onNavigateBanks?: () => void;
  onNavigatePage?: (page: ActivePage) => void;
}

export const Contact: React.FC<ContactProps> = ({
  lang,
  preselectedTopic,
  onNavigateBanks,
  onNavigatePage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedTopic || '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailPlaceholder = 'Aelmaissouri@gmail.com';
  const whatsappNumber = '+212 660-177093';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 600);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-4 h-4 text-amber-400" />;
      case 'Video':
        return <Video className="w-4 h-4 text-zinc-300" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4 text-zinc-300" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4 text-zinc-300" />;
      case 'Send':
        return <Send className="w-4 h-4 text-zinc-300" />;
      case 'MessageCircle':
        return <MessageCircle className="w-4 h-4 text-emerald-400" />;
      default:
        return <ExternalLink className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <div id="contact" className="py-28 pt-36 bg-[#0E1117] text-start min-h-screen">
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
          <span className="text-amber-400 font-semibold">{lang === 'ar' ? 'تواصل معي' : 'Contact'}</span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-400/90 tracking-wider uppercase mb-2 block font-mono">
            {lang === 'ar' ? 'قنوات التواصل المباشر' : 'Direct Communication'}
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight mb-4">
            {lang === 'ar' ? 'تواصل مع أيوب الميسوري' : 'Get In Touch with Ayoub'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {lang === 'ar'
              ? 'سواء كان لديك مشروع جديد، رغبة في تأسيس متجر إلكتروني، أو استفسار حول الخدمات الرقمية، يسعدني تواصلك المباشر.'
              : 'Whether you are launching a new digital store or seeking consultation, reach out directly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Contact Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-slate-100">
                {lang === 'ar' ? 'معلومات التواصل المباشر' : 'Direct Channels'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {lang === 'ar'
                  ? 'أحرص على الرد على كافة الرسائل والاستفسارات الجادة في أقرب وقت.'
                  : 'I prioritize reviewing every substantive inquiry with care and focus.'}
              </p>

              {/* Email Address with Copy Button */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/90 flex items-center justify-center shrink-0 text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {emailPlaceholder}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  title="نسخ البريد الإلكتروني"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400">{lang === 'ar' ? 'منسوخ' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'نسخ' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href="https://wa.me/212660177093?text=Hello%20Ayoub,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-xs sm:text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'محادثة سريعة عبر واتساب (+212 660-177093)' : 'WhatsApp Chat (+212 660-177093)'}</span>
              </a>

              {/* Direct Bank Accounts Page Link */}
              {onNavigateBanks && (
                <button
                  type="button"
                  onClick={onNavigateBanks}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                >
                  <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'ar' ? 'عرض الحسابات والريبات البنكية الرسمية' : 'Official Bank Accounts & RIBs'}</span>
                </button>
              )}
            </div>

            {/* Social Media Channels */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-xs">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3.5">
                {lang === 'ar' ? 'حسابات التواصل' : 'Social Channels'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {socialLinksData.map((channel) => (
                  <a
                    key={channel.id}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/70 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                        {getSocialIcon(channel.icon)}
                      </div>
                      <div className="truncate">
                        <span className="block text-xs font-medium text-slate-200 group-hover:text-amber-300 truncate">
                          {channel.name}
                        </span>
                      </div>
                    </div>

                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-xs">
            <h3 className="text-base font-bold text-slate-100 mb-1">
              {lang === 'ar' ? 'أرسل رسالة مباشرة' : 'Send a Message'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 font-normal">
              {lang === 'ar'
                ? 'املأ النموذج أدناه لتحديد تفاصيل فكرتك أو مشروعك وسأقوم بالرد عليك سريعاً.'
                : 'Fill out the form below to share details about your inquiry.'}
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 text-center space-y-3.5">
                <div className="w-12 h-12 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-100">
                  {lang === 'ar' ? 'تم استلام رسالتك بنجاح' : 'Message Sent Successfully'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                  {lang === 'ar'
                    ? 'شكراً لتواصلك. سيتم مراجعة رسالتك والرد عليك عبر بريدك الإلكتروني.'
                    : 'Thank you for reaching out. I will get back to your email shortly.'}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {lang === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'ar' ? 'الاسم' : 'Name'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {lang === 'ar' ? 'الموضوع أو نوع المشروع (اختياري)' : 'Topic (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    placeholder={
                      lang === 'ar'
                        ? 'مثال: متجر إلكتروني، مشروع رقمي، تسويق...'
                        : 'e.g. E-Commerce Store, Online Venture...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {lang === 'ar' ? 'الرسالة' : 'Message'} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'ar'
                        ? 'اكتب رسالتك أو استفسارك هنا...'
                        : 'Describe your vision or inquiry here...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all cursor-pointer shadow-sm hover:shadow-amber-400/10 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{lang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>{lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
