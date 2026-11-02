/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientStrip } from './components/ClientStrip';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Method } from './components/Method';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { CaseStudy } from './types';
import { CASE_STUDIES, STUDIO_META } from './data/studioData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [formInitialSector, setFormInitialSector] = useState('Fragrance & Beauty');
  const [formBrandContext, setFormBrandContext] = useState('');

  const handleStartProjectFromCase = (sector: string, brandTitle: string) => {
    setFormInitialSector(sector);
    setFormBrandContext(brandTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectClient = (brandName: string) => {
    const matchingStudy = CASE_STUDIES.find(
      (c) => c.brandName.toLowerCase().includes(brandName.toLowerCase()) || 
             c.title.toLowerCase().includes(brandName.toLowerCase())
    );
    if (matchingStudy) {
      setActiveCaseStudy(matchingStudy);
    } else {
      const workElem = document.getElementById('work');
      if (workElem) workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingWhatsAppUrl = `https://wa.me/${STUDIO_META.phoneRaw}?text=${encodeURIComponent(
    'Hello We Make Magic Studios, I would like to make an enquiry about a project.'
  )}`;

  return (
    <div className="min-h-screen bg-[#1F0825] text-white selection:bg-[#FAAE17] selection:text-[#1F0825] flex flex-col relative">
      {/* Navigation Top Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Statement & Presence */}
        <Hero />

        {/* 2. Client Brands Logo Showcase Strip */}
        <ClientStrip onSelectClient={handleSelectClient} />

        {/* 3. Four Disciplines & Services */}
        <Services />

        {/* 4. Portfolio & Selected Work with Sector Filters */}
        <Portfolio onSelectCaseStudy={(study) => setActiveCaseStudy(study)} />

        {/* 5. The Studio Method & Goal Architecture */}
        <Method />

        {/* 6. Client Testimonials */}
        <Testimonials />

        {/* 7. Start a Project Inquiry Form */}
        <ContactForm 
          initialSector={formInitialSector} 
          initialBrandContext={formBrandContext} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onStartProject={handleStartProjectFromCase}
      />

      {/* Floating WhatsApp Quick Enquiry Button */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#FAAE17] hover:bg-[#e09b12] text-[#1F0825] font-semibold text-xs sm:text-sm rounded-full shadow-2xl shadow-black/60 hover:shadow-[#FAAE17]/30 transition-all duration-200 hover:scale-105"
        title="WhatsApp Enquiry (+234 703 273 8365)"
      >
        <MessageSquare className="w-4 h-4 text-[#1F0825]" />
        <span className="hidden sm:inline">WhatsApp Enquiry</span>
      </a>
    </div>
  );
}
