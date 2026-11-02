import React, { useState } from 'react';
import { CASE_STUDIES, SECTOR_FILTERS } from '../data/studioData';
import { CaseStudy, Sector } from '../types';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectCaseStudy }) => {
  const [selectedSector, setSelectedSector] = useState<Sector>('All');

  const filteredStudies = selectedSector === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.sector === selectedSector);

  return (
    <section id="work" className="py-24 md:py-32 relative bg-[#1B0621]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#FAAE17] font-semibold mb-3">
              Selected Work Across Brands We Run
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Crafted with intention. <span className="font-normal italic gold-gradient-text">Run as a system.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed">
              Open a case to see the brief, what we built and how the work is managed. Filter by sector below.
            </p>
          </div>

          <div className="text-xs text-zinc-400 font-mono">
            Showing <span className="text-[#FAAE17] font-bold">{filteredStudies.length}</span> portfolio records
          </div>
        </div>

        {/* Sector Filter Bar - Interactive Functional Buttons (§1.A) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#25092E] border border-[#FAAE17]/20 rounded-xl mb-12 max-w-fit shadow-md">
          {SECTOR_FILTERS.map((sector) => {
            const isActive = selectedSector === sector;
            return (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#FAAE17] text-[#1F0825] font-semibold shadow-sm'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {sector}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="group bg-[#260B2F]/80 hover:bg-[#2C0D36] border border-white/10 hover:border-[#FAAE17]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle gold glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#FAAE17]/5 rounded-full blur-2xl group-hover:bg-[#FAAE17]/10 transition-colors pointer-events-none" />

              <div>
                {/* Logo and Sector Tag */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 shrink-0">
                    <BrandLogo
                      src={study.logoUrl}
                      alt={study.brandName}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#FAAE17]">
                      {study.sectorLabel}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {study.highlightMetric}
                    </div>
                  </div>
                </div>

                {/* Title & One Liner */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#FAAE17] transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                  {study.summary}
                </p>

                {/* Deliverables Snippet */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                    Key Highlights
                  </span>
                  {study.whatWeBuilt.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FAAE17] shrink-0 mt-1.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                  {study.whatWeBuilt.length > 2 && (
                    <div className="text-[11px] text-[#FAAE17]/80 font-medium pt-1">
                      +{study.whatWeBuilt.length - 2} more operational deliverables
                    </div>
                  )}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-[#FAAE17] transition-colors">
                <span>Open case study</span>
                <div className="p-1.5 rounded-md bg-white/5 group-hover:bg-[#FAAE17] group-hover:text-[#1F0825] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Direct WhatsApp Callout for Portfolio */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#2A0D32] to-[#200827] border border-[#FAAE17]/25 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Want to review our private brand decks & campaign reels?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              We share confidential performance breakdowns, raw footage cuts, and influencer rate sheets directly with verified business leaders.
            </p>
          </div>
          <a
            href="https://wa.me/2347032738365?text=Hello%20We%20Make%20Magic%20Studios%2C%20I%20would%20like%20to%20request%20your%20private%20portfolio%20and%20case%20study%20decks."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#1F0825] bg-[#FAAE17] hover:bg-[#e09b12] rounded-xl transition-all shadow-md whitespace-nowrap shrink-0"
          >
            <span>Request Private Reel Deck</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
