import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { X, Check, ArrowRight, Layers, Target, Sliders } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onStartProject: (sector: string, brandTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onStartProject
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-3xl bg-[#25092E] border border-[#FAAE17]/30 rounded-2xl shadow-2xl overflow-hidden z-10 text-left my-8">
        
        {/* Top gold line */}
        <div className="h-1 bg-gradient-to-r from-[#FAAE17] via-[#FFF0D0] to-[#FAAE17]" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
              <BrandLogo
                src={caseStudy.logoUrl}
                alt={caseStudy.brandName}
                className="w-full h-full shadow-md"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FAAE17] uppercase mb-1">
                <span>{caseStudy.sector}</span>
                <span aria-hidden="true">·</span>
                <span>Case Study</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {caseStudy.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                {caseStudy.highlightMetric}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          
          {/* Summary / Positioning */}
          <div className="p-4 rounded-xl bg-[#1C0622] border border-[#FAAE17]/15 text-sm sm:text-base text-zinc-200 leading-relaxed italic">
            "{caseStudy.summary}"
          </div>

          {/* The Brief */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FAAE17]">
              <Target className="w-4 h-4" />
              <span>The Brief</span>
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed bg-[#2D0D36]/40 p-4 rounded-xl border border-white/5">
              {caseStudy.brief}
            </p>
          </div>

          {/* What We Built */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FAAE17]">
              <Layers className="w-4 h-4" />
              <span>What We Built</span>
            </div>
            <div className="space-y-2.5">
              {caseStudy.whatWeBuilt.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#2D0D36]/60 border border-white/5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FAAE17]/20 text-[#FAAE17] shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* How We Run It */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FAAE17]">
              <Sliders className="w-4 h-4" />
              <span>How We Run It</span>
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed bg-[#2D0D36]/40 p-4 rounded-xl border border-white/5">
              {caseStudy.howWeRunIt}
            </p>
          </div>

        </div>

        {/* Modal Footer with Action */}
        <div className="p-6 border-t border-white/10 bg-[#1D0624] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            Have a project in <strong className="text-white">{caseStudy.sector}</strong>?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              Back to Work
            </button>
            <button
              onClick={() => {
                onClose();
                onStartProject(caseStudy.sector, caseStudy.title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-[#1F0825] bg-[#FAAE17] hover:bg-[#e09b12] rounded-lg shadow-md transition-colors whitespace-nowrap"
            >
              <span>Start Similar Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
