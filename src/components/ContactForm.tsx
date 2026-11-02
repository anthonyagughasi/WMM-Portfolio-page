import React, { useState } from 'react';
import { STUDIO_META } from '../data/studioData';
import { ContactFormData } from '../types';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles
} from 'lucide-react';

interface ContactFormProps {
  initialSector?: string;
  initialBrandContext?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialSector = 'Fragrance & Beauty',
  initialBrandContext = ''
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    brandName: '',
    email: '',
    phone: '',
    sector: initialSector,
    goal: 'Awareness',
    brief: initialBrandContext ? `Interested in a project similar to ${initialBrandContext}. ` : '',
    budgetRange: '₦3M - ₦10M ($2k - $7k)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Brief: ${formData.brandName || 'New Client'} — We Make Magic Studios`);
    const bodyContent = `Dear We Make Magic Studios Team,

Here is our structured project enquiry:

--------------------------------------------------
CLIENT DETAILS:
- Full Name: ${formData.fullName}
- Brand / Company: ${formData.brandName}
- Email: ${formData.email}
- Phone / WhatsApp: ${formData.phone}

PROJECT SPECIFICATIONS:
- Industry Sector: ${formData.sector}
- Primary Campaign Goal: ${formData.goal}
- Estimated Investment: ${formData.budgetRange}

WHAT WE WANT TO BE KNOWN FOR & BRIEF:
${formData.brief}
--------------------------------------------------

We look forward to receiving your structured direction.`;

    const body = encodeURIComponent(bodyContent);
    // Directly to info@wemakemagicstudios.com
    return `mailto:info@wemakemagicstudios.com?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello We Make Magic Studios,
My name is ${formData.fullName || 'Partner'} from *${formData.brandName || 'our brand'}*.

We would like to make an enquiry regarding a *${formData.sector}* project focused on *${formData.goal}*.
*Brief:* ${formData.brief || 'We would like to discuss our brand positioning and campaigns.'}

*Phone:* ${formData.phone}
*Email:* ${formData.email}`;

    return `https://wa.me/${STUDIO_META.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refCode = `WMM-${Date.now().toString().slice(-6)}`;
    setSubmissionRef(refCode);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger email directly to info@wemakemagicstudios.com
      const mailtoUrl = generateMailtoUrl();
      const mailLink = document.createElement('a');
      mailLink.href = mailtoUrl;
      mailLink.target = '_blank';
      mailLink.rel = 'noopener noreferrer';
      mailLink.click();
    }, 500);
  };

  const handleCopyBrief = () => {
    const textToCopy = `PROJECT BRIEF [Ref: ${submissionRef}]
Brand: ${formData.brandName}
Client: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Sector: ${formData.sector}
Goal: ${formData.goal}
Budget: ${formData.budgetRange}
Brief: ${formData.brief}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#1B0621]/90 border-t border-[#FAAE17]/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#FAAE17]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#FAAE17] font-semibold mb-3">
            Start a Project
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Tell us what you want to <span className="font-normal italic gold-gradient-text">be known for.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Share a few details and we will come back with a structured direction, not a price list.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Studio Contacts */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-2xl bg-[#25092E] border border-[#FAAE17]/20 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Studio Contacts
              </h3>
              
              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1F0825] border border-[#FAAE17]/30 text-[#FAAE17] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Phone & WhatsApp
                  </div>
                  <a
                    href={`tel:${STUDIO_META.phoneRaw}`}
                    className="text-base font-semibold text-white hover:text-[#FAAE17] transition-colors"
                  >
                    {STUDIO_META.phone}
                  </a>
                  <div className="mt-2">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#FAAE17]/15 text-[#FAAE17] hover:bg-[#FAAE17]/25 border border-[#FAAE17]/30 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Enquiry (+234 703 273 8365)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-[#1F0825] border border-[#FAAE17]/30 text-[#FAAE17] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Studio Emails
                  </div>
                  <a
                    href="mailto:info@wemakemagicstudios.com"
                    className="text-sm font-semibold text-white hover:text-[#FAAE17] block transition-colors"
                  >
                    info@wemakemagicstudios.com
                  </a>
                  <a
                    href="mailto:wemakemagicstudios@gmail.com"
                    className="text-xs text-zinc-400 hover:text-white block transition-colors mt-0.5"
                  >
                    wemakemagicstudios@gmail.com
                  </a>
                </div>
              </div>

              {/* Studio Physical Location */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-[#1F0825] border border-[#FAAE17]/30 text-[#FAAE17] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Studio Address
                  </div>
                  <p className="text-sm text-zinc-200 leading-snug">
                    {STUDIO_META.address}
                  </p>
                </div>
              </div>

            </div>

            {/* Social channels */}
            <div className="p-6 rounded-2xl bg-[#23092B]/80 border border-white/5">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-3">
                Follow The Studio
              </span>
              <div className="flex flex-wrap gap-2">
                {STUDIO_META.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-[#FAAE17]/20 hover:text-[#FAAE17] text-zinc-300 transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Response Commitment */}
            <div className="p-5 rounded-xl bg-[#1F0825] border border-[#FAAE17]/20 flex items-center gap-3 text-xs text-zinc-300">
              <Sparkles className="w-5 h-5 text-[#FAAE17] shrink-0" />
              <span>
                Every inquiry is reviewed personally by our strategy directors. You will receive a structured project roadmap within 24 business hours.
              </span>
            </div>

          </div>

          {/* Right Column: Project Submission Form */}
          <div className="lg:col-span-7">
            
            {isSubmitted ? (
              /* Success Receipt View */
              <div className="p-8 sm:p-10 rounded-2xl bg-[#270B30] border border-[#FAAE17]/40 shadow-2xl text-left animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#FAAE17]/20 text-[#FAAE17] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#FAAE17] mb-1">
                  <span>Enquiry Reference:</span>
                  <span className="font-bold">{submissionRef}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Thank you, {formData.fullName || 'Partner'}.
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  Your project brief for <strong className="text-white">{formData.brandName}</strong> has been structured and dispatched to <span className="text-[#FAAE17] font-semibold">info@wemakemagicstudios.com</span>. Our directors will review your brief and return with a structured roadmap.
                </p>

                {/* Instant Actions */}
                <div className="space-y-3 mb-8">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#1F0825] bg-[#FAAE17] hover:bg-[#e09b12] transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp (+234 703 273 8365)</span>
                  </a>

                  <button
                    onClick={handleCopyBrief}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    {copiedBrief ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedBrief ? 'Copied Brief to Clipboard!' : 'Copy Formatted Brief to Clipboard'}</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-zinc-400 hover:text-white underline"
                >
                  Edit or submit another project brief
                </button>
              </div>
            ) : (
              /* Input Form */
              <form
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-2xl bg-[#260A2E] border border-[#FAAE17]/25 shadow-2xl space-y-6"
              >
                <div className="border-b border-white/10 pb-4 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Start Your Project Direction
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      Share your goals and receive a structured direction from our directors
                    </p>
                  </div>
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#FAAE17] bg-[#FAAE17]/10 hover:bg-[#FAAE17]/20 border border-[#FAAE17]/30 transition-colors shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>

                {/* Name & Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Fatima Bello"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C0521] border border-white/10 focus:border-[#FAAE17] focus:ring-1 focus:ring-[#FAAE17] text-white text-sm outline-none transition-all placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Brand / Organization *
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      required
                      placeholder="e.g. Istanbul Luxury Scents"
                      value={formData.brandName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C0521] border border-white/10 focus:border-[#FAAE17] focus:ring-1 focus:ring-[#FAAE17] text-white text-sm outline-none transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="contact@yourbrand.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C0521] border border-white/10 focus:border-[#FAAE17] focus:ring-1 focus:ring-[#FAAE17] text-white text-sm outline-none transition-all placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C0521] border border-white/10 focus:border-[#FAAE17] focus:ring-1 focus:ring-[#FAAE17] text-white text-sm outline-none transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                {/* Sector & Goal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Industry Sector
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C0521] border border-white/10 focus:border-[#FAAE17] focus:ring-1 focus:ring-[#FAAE17] text-white text-sm outline-none transition-all"
                    >
                      <option value="Fragrance & Beauty">Fragrance & Beauty</option>
                      <option value="Furniture & Home">Furniture & Home</option>
                      <option value="Healthcare">Healthcare & Clinical</option>
                      <option value="Hospitality & Food">Hospitality & Dining</option>
                      <option value="Other">Other Category</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Primary Objective
                    </label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C0521] border border-white/10 focus:border-[#FAAE17] focus:ring-1 focus:ring-[#FAAE17] text-white text-sm outline-none transition-all"
                    >
                      <option value="Awareness">Awareness (Reputation & Reach)</option>
                      <option value="Engagement">Engagement (Community & Resonance)</option>
                      <option value="Conversion">Conversion (Sales & Client Enquiries)</option>
                      <option value="Integrated Department">Full Digital Department Support</option>
                    </select>
                  </div>
                </div>

                {/* Brief & What You Want to Be Known For */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Tell us what you want to be known for *
                  </label>
                  <textarea
                    name="brief"
                    required
                    rows={4}
                    placeholder="Describe your current market position, the emotion you want customers to feel, and the outcome you need."
                    value={formData.brief}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#1C0521] border border-white/10 focus:border-[#FAAE17] focus:ring-1 focus:ring-[#FAAE17] text-white text-sm outline-none transition-all placeholder:text-zinc-500 leading-relaxed"
                  />
                </div>

                {/* Action Buttons: Email Submit & WhatsApp Enquiry */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-semibold text-sm tracking-wide text-[#1F0825] bg-[#FAAE17] hover:bg-[#e09b12] transition-all shadow-xl shadow-[#FAAE17]/15 hover:shadow-[#FAAE17]/25 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-sm tracking-wide text-[#FAAE17] bg-[#FAAE17]/10 hover:bg-[#FAAE17]/20 border border-[#FAAE17]/30 transition-all hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
