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
  Youtube,
  ExternalLink,
  Sparkles,
  Check,
  CreditCard
} from 'lucide-react';
import { socialLinksData } from '../data/content';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
  preselectedTopic?: string;
  onNavigateBanks?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ lang, preselectedTopic, onNavigateBanks }) => {
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
    // Simulate swift modern transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 900);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-4 h-4 text-pink-400" />;
      case 'Video':
        return <Video className="w-4 h-4 text-cyan-400" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4 text-sky-400" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4 text-zinc-300" />;
      case 'Youtube':
        return <Youtube className="w-4 h-4 text-rose-500" />;
      case 'Send':
        return <Send className="w-4 h-4 text-sky-400" />;
      case 'MessageCircle':
        return <MessageCircle className="w-4 h-4 text-emerald-400" />;
      default:
        return <ExternalLink className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#08090D] border-t border-white/[0.04]">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{lang === 'ar' ? 'تواصل معي' : 'Direct Channels'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {lang === 'ar' ? 'دعنا نبدأ حواراً هادفاً' : 'Let’s Start a Strategic Dialogue'}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            {lang === 'ar'
              ? 'سواء كان لديك مشروع جديد ترغب في تطويره، استفسار حول التجارة والتصميم، أو فرصة شراكة رقمية، يسعدني تواصلك الدائم.'
              : 'Whether you are launching a digital venture, seeking collaboration in commerce & design, or exploring partnership—reach out directly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Channels Grid (lg: 5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-start">
            {/* Quick Contact Card */}
            <div className="p-6 rounded-3xl bg-zinc-950/80 border border-white/[0.08] shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'معلومات التواصل المباشر' : 'Direct Contact'}</span>
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {lang === 'ar'
                  ? 'أحرص على الرد على كافة الرسائل والاستفسارات الجادة في أقرب وقت ممكن.'
                  : 'I prioritize reviewing every substantive inquiry with care and focus.'}
              </p>

              {/* Email Address with Copy Button */}
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-zinc-200 truncate">
                    {emailPlaceholder}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white flex items-center gap-1.5 shrink-0 transition-colors"
                  title="نسخ البريد الإلكتروني"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{lang === 'ar' ? 'تم النسخ' : 'Copied'}</span>
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
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'ar' ? 'محادثة سريعة عبر واتساب (+212 660-177093)' : 'Quick Chat on WhatsApp'}</span>
              </a>

              {/* Direct Bank Accounts Page Link */}
              {onNavigateBanks && (
                <button
                  type="button"
                  onClick={onNavigateBanks}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.08] hover:border-emerald-500/30 text-zinc-300 hover:text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ar' ? 'عرض الحسابات والريبات البنكية الرسمية' : 'View Official Bank Accounts & RIBs'}</span>
                </button>
              )}
            </div>

            {/* Editable Social Media Channels List as requested */}
            <div className="p-6 rounded-3xl bg-zinc-950/80 border border-white/[0.08] shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {lang === 'ar' ? 'حسابات التواصل الاجتماعي' : 'Social Media Channels'}
                </h4>
                <span className="text-[10px] text-zinc-400 font-mono">
                  {lang === 'ar' ? 'روابط قابلة للتحديث' : 'Verified Handles'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {socialLinksData.map((channel) => (
                  <a
                    key={channel.id}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/[0.04] hover:border-white/10 flex items-center justify-between transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-black/50 flex items-center justify-center shrink-0">
                        {getSocialIcon(channel.icon)}
                      </div>
                      <div className="overflow-hidden">
                        <span className="block text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                          {channel.name}
                        </span>
                        <span className="block text-[10px] text-zinc-400 font-mono truncate leading-tight mt-0.5">
                          {channel.handle}
                        </span>
                      </div>
                    </div>

                    <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-white shrink-0 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (lg: 7 cols) */}
          <div className="lg:col-span-7 bg-zinc-950/90 p-6 sm:p-9 rounded-3xl border border-white/[0.08] shadow-2xl relative text-start">
            <h3 className="text-xl font-bold text-white mb-2">
              {lang === 'ar' ? 'أرسل رسالة مباشرة' : 'Send a Direct Message'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              {lang === 'ar'
                ? 'املأ النموذج أدناه لتحديد تفاصيل فكرتك أو مشروعك وسأقوم بالرد عليك سريعاً.'
                : 'Fill out the details below to share your concept or venture scope.'}
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {lang === 'ar' ? 'تم استلام رسالتك بنجاح!' : 'Message Received Successfully!'}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  {lang === 'ar'
                    ? 'شكراً لتواصلك يا أيها الصديق. سيتم مراجعة تفاصيل رسالتك والرد عليك عبر بريدك الإلكتروني في أقرب وقت.'
                    : 'Thank you for reaching out. Your message has been logged, and I will get back to your email shortly.'}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 hover:bg-emerald-900 transition-colors"
                >
                  {lang === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {lang === 'ar' ? 'الاسم الكامل' : 'Full Name'} <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'ar' ? 'مثال: محمد العمري' : 'e.g. John Doe'}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={lang === 'ar' ? 'name@example.com' : 'name@example.com'}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-colors"
                  />
                </div>

                {/* Service / Subject Field */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {lang === 'ar' ? 'مجال أو نوع المشروع (اختياري)' : 'Project Scope / Topic (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    placeholder={
                      lang === 'ar'
                        ? 'مثال: متجر إلكتروني، مشروع رقمي، تسويق، خدمات أونلاين...'
                        : 'e.g. E-Commerce Store, Online Venture, Digital Marketing...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    {lang === 'ar' ? 'تفاصيل الرسالة أو الفكرة' : 'Message or Project Details'} <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'ar'
                        ? 'اكتب نبذة مختصرة عن هدفك أو استفسارك هنا...'
                        : 'Describe your vision, timeline, or inquiry here...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 text-zinc-950 hover:brightness-105 shadow-xl shadow-emerald-500/20 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                      <span>{lang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
