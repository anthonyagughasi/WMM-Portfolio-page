import React, { useState, useEffect } from 'react';
import { STUDIO_META } from '../data/studioData';
import { Menu, X, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Method', href: '#method' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${STUDIO_META.phoneRaw}?text=${encodeURIComponent(
    'Hello We Make Magic Studios, I would like to make an enquiry about a project.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1F0825]/95 backdrop-blur-md border-b border-[#FAAE17]/20 shadow-lg shadow-black/20 py-3'
          : 'bg-[#1F0825]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: [Brand wordmark/logo] — [Nav links] — [Actions] */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Official Studio Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="We Make Magic Studios Home"
          >
            <img
              src={STUDIO_META.logoUrl}
              alt="We Make Magic Studios"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FAAE17] transition-colors duration-200 whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FAAE17] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: WhatsApp Enquiry & Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#FAAE17] bg-[#FAAE17]/10 hover:bg-[#FAAE17]/20 border border-[#FAAE17]/30 rounded-lg transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-[#FAAE17]/10"
              title="Chat with We Make Magic Studios on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FAAE17]" />
              <span>WhatsApp Enquiry</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#1F0825] bg-[#FAAE17] hover:bg-[#e09b12] rounded-lg transition-all duration-200 shadow-md shadow-[#FAAE17]/15 hover:shadow-[#FAAE17]/30 whitespace-nowrap shrink-0"
            >
              Start a Project
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-[#FAAE17]/20 mt-3 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-zinc-200 hover:text-[#FAAE17] hover:bg-white/5 rounded-md"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FAAE17] bg-[#FAAE17]/10 border border-[#FAAE17]/30 rounded-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
