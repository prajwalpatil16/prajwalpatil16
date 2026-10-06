import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  MapPin,
  CheckCircle2,
  Copy,
  ExternalLink,
  FolderGit2
} from 'lucide-react';

export interface ContactPageProps {
  onBackToOverview?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToOverview }) => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [purpose, setPurpose] = useState('Hiring');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Copy Feedback Toast
  const [copyToast, setCopyToast] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyToast(`✓ ${label} copied to clipboard`);
    setTimeout(() => setCopyToast(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[var(--bg-paper)] text-[var(--text-charcoal)] py-16 sm:py-24 px-4 sm:px-6 md:px-8 select-none">
      {/* Toast Notification */}
      {copyToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121316] text-white px-4 py-2.5 rounded-xl border border-[#B52B27] shadow-xl font-mono-code text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{copyToast}</span>
        </div>
      )}

      <div className="max-w-[1100px] mx-auto space-y-10">
        {/* Header & Back Button */}
        <div className="space-y-4">
          {onBackToOverview && (
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#121316] bg-[#DBD3C5] font-mono-code text-xs font-bold text-[#121316] hover:bg-white transition-colors cursor-pointer"
            >
              ← BACK TO OVERVIEW
            </button>
          )}

          <div className="border-b-2 border-editorial-heavy pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono-code text-xs text-[#B52B27] uppercase tracking-widest font-bold block mb-1">
                CONTACT // REACH OUT
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#121316] font-extrabold uppercase tracking-tight leading-none">
                GET IN TOUCH
              </h1>
            </div>

            <div className="font-mono-code text-xs font-bold text-[#121316] bg-[#DBD3C5] px-3 py-1.5 rounded-lg border border-[#121316]">
              BENGALURU, INDIA
            </div>
          </div>

          <p className="font-sans-editorial text-sm sm:text-base text-[#4A4A52] max-w-2xl leading-relaxed">
            I am open to full-time Full Stack and backend-leaning software development roles, contract work, and engineering discussions. Feel free to send a message or reach out directly.
          </p>
        </div>

        {/* Main Grid: Form and Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Clean Contact Form */}
          <div className="lg:col-span-7 bg-[#ECE5D9] border-2 border-[#121316] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#121316]/25 pb-3">
              <span className="font-mono-code text-xs font-bold text-[#B52B27] uppercase tracking-wider block">
                MESSAGE FORM
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase leading-none text-[#121316] mt-0.5">
                SEND A MESSAGE
              </h2>
            </div>

            {isSubmitted ? (
              /* Success Confirmation */
              <div className="p-6 bg-white border border-[#121316] rounded-xl space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-500 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold uppercase text-[#121316]">
                    MESSAGE PREPARED
                  </h3>
                  <p className="font-sans-editorial text-xs sm:text-sm text-[#4A4A52]">
                    Thank you for reaching out, {name}. You can also send this directly via your email client:
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:prajwalgpatil2002@gmail.com?subject=${encodeURIComponent(
                      `[${purpose}] Inquiry from ${name}`
                    )}&body=${encodeURIComponent(
                      `Hi Prajwal,\n\n${message}\n\nFrom: ${name} (${email})\nCompany: ${company || 'N/A'}`
                    )}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#B52B27] text-white font-display text-base font-bold uppercase tracking-wider rounded-xl hover:bg-[#121316] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>OPEN IN EMAIL CLIENT</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-4 py-2.5 bg-[#DBD3C5] border border-[#121316] font-mono-code text-xs font-bold rounded-xl hover:bg-white transition-colors cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Purpose Dropdown */}
                <div className="space-y-1.5">
                  <label className="font-mono-code text-xs font-bold text-[#121316] uppercase block">
                    PURPOSE:
                  </label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#121316] rounded-lg font-mono-code text-xs text-[#121316] outline-none focus:border-[#B52B27] cursor-pointer"
                  >
                    <option value="Hiring">Hiring (Full-time role)</option>
                    <option value="Project">Project / Contract Work</option>
                    <option value="Just saying hi">Just saying hi / Networking</option>
                  </select>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono-code text-[11px] font-bold text-[#121316] uppercase block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#121316] rounded-lg font-mono-code text-xs text-[#121316] outline-none focus:border-[#B52B27]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono-code text-[11px] font-bold text-[#121316] uppercase block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#121316] rounded-lg font-mono-code text-xs text-[#121316] outline-none focus:border-[#B52B27]"
                    />
                  </div>
                </div>

                {/* Company (Optional) */}
                <div className="space-y-1.5">
                  <label className="font-mono-code text-[11px] font-bold text-[#121316] uppercase block">
                    COMPANY (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Acme Corp"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#121316] rounded-lg font-mono-code text-xs text-[#121316] outline-none focus:border-[#B52B27]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-mono-code text-[11px] font-bold text-[#121316] uppercase block">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please include details about your team, role, or project..."
                    className="w-full p-3.5 bg-white border border-[#121316] rounded-lg font-mono-code text-xs text-[#121316] outline-none focus:border-[#B52B27] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#B52B27] hover:bg-[#121316] text-white font-display text-base font-bold uppercase tracking-wider rounded-xl border-2 border-[#121316] transition-all shadow-sm cursor-pointer disabled:opacity-50 btn-press"
                >
                  {isSubmitting ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#ECE5D9] border-2 border-[#121316] rounded-2xl p-6 shadow-sm space-y-5">
              <div className="border-b border-[#121316]/25 pb-3">
                <span className="font-mono-code text-xs font-bold text-[#B52B27] uppercase tracking-wider block">
                  CONTACT DETAILS
                </span>
                <h3 className="font-display text-2xl font-extrabold text-[#121316] uppercase">
                  DIRECT INFO
                </h3>
              </div>

              {/* Email Card */}
              <div className="p-4 bg-white border border-[#121316] rounded-xl space-y-2">
                <div className="flex items-center justify-between text-[#4A4A52] font-mono-code text-[11px] font-bold">
                  <span className="flex items-center gap-1.5 text-[#B52B27]">
                    <Mail className="w-3.5 h-3.5" />
                    <span>EMAIL</span>
                  </span>
                </div>
                <div className="font-mono-code text-xs sm:text-sm font-bold text-[#121316] truncate">
                  prajwalgpatil2002@gmail.com
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => copyToClipboard('prajwalgpatil2002@gmail.com', 'Email')}
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#DBD3C5] hover:bg-[#121316] hover:text-white border border-[#121316] rounded font-mono-code text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY EMAIL</span>
                  </button>
                  <a
                    href="mailto:prajwalgpatil2002@gmail.com"
                    className="flex items-center justify-center p-1.5 px-3 bg-[#121316] text-white rounded border border-[#121316] font-mono-code text-xs font-bold hover:bg-[#B52B27] transition-colors"
                    title="Open Email Client"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 bg-white border border-[#121316] rounded-xl space-y-2">
                <div className="flex items-center justify-between text-[#4A4A52] font-mono-code text-[11px] font-bold">
                  <span className="flex items-center gap-1.5 text-[#B52B27]">
                    <Phone className="w-3.5 h-3.5" />
                    <span>PHONE</span>
                  </span>
                </div>
                <div className="font-mono-code text-xs sm:text-sm font-bold text-[#121316]">
                  +91 7019609440
                </div>
                <div className="flex gap-2 pt-1">
                  <a
                    href="tel:7019609440"
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#DBD3C5] hover:bg-[#121316] hover:text-white border border-[#121316] rounded font-mono-code text-xs font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard('+917019609440', 'Phone')}
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#DBD3C5] hover:bg-[#121316] hover:text-white border border-[#121316] rounded font-mono-code text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </button>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-2 pt-1 font-mono-code text-xs">
                <a
                  href="https://www.linkedin.com/in/prajwal-patil16/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-[#121316] rounded-xl hover:bg-[#121316] hover:text-white transition-all font-bold"
                >
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/prajwalpatil16"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-[#121316] rounded-xl hover:bg-[#121316] hover:text-white transition-all font-bold"
                >
                  <span className="flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 bg-[#ECE5D9] border-2 border-[#121316] rounded-xl flex items-center gap-3">
              <div className="p-2.5 bg-[#DBD3C5] border border-[#121316] rounded-lg">
                <MapPin className="w-5 h-5 text-[#B52B27]" />
              </div>
              <div className="font-mono-code text-xs">
                <div className="font-bold text-[#121316]">Bengaluru, Karnataka, India</div>
                <div className="text-[11px] text-[#4A4A52]">Open to On-site, Hybrid, and Remote Roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
