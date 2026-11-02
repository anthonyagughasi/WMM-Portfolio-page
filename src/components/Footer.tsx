import React from 'react';
import { STUDIO_META } from '../data/studioData';
import { ArrowUp, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${STUDIO_META.phoneRaw}?text=${encodeURIComponent(
    'Hello We Make Magic Studios, I would like to make an enquiry about a project.'
  )}`;

  return (
    <footer className="bg-[#17041B] border-t border-white/10 pt-16 pb-12 relative text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <img
                src={STUDIO_META.logoUrl}
                alt="We Make Magic Studios"
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-zinc-300 max-w-sm leading-relaxed">
              We build brands people feel before they buy. Strategy, cinematic content and digital campaigns run as one structured system.
            </p>
            <div className="text-xs text-[#FAAE17] font-medium">
              Abuja, Nigeria · Serving Local & International Markets
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-white block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#FAAE17] transition-colors">
                  Services & Disciplines
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#FAAE17] transition-colors">
                  Selected Work & Case Studies
                </a>
              </li>
              <li>
                <a href="#method" className="hover:text-[#FAAE17] transition-colors">
                  The Studio Method
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#FAAE17] transition-colors">
                  Client Brands
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAAE17] transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Studio Inquiry */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-white block">
              Studio Inquiry
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {STUDIO_META.address}
            </p>
            <div className="text-xs space-y-1">
              <div>
                <a href={`mailto:${STUDIO_META.primaryEmail}`} className="text-white hover:text-[#FAAE17] transition-colors">
                  {STUDIO_META.primaryEmail}
                </a>
              </div>
              <div>
                <a href={`tel:${STUDIO_META.phoneRaw}`} className="text-zinc-300 hover:text-[#FAAE17] transition-colors">
                  {STUDIO_META.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#FAAE17] bg-[#FAAE17]/10 hover:bg-[#FAAE17]/20 border border-[#FAAE17]/30 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FAAE17]" />
                <span>WhatsApp Enquiry (+234 703 273 8365)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 We Make Magic Studios. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 transition-colors">
              {STUDIO_META.website}
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-400 hover:text-[#FAAE17] transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
