import React from 'react';
import { ArrowRight, Sparkles, MapPin, Globe2, Layers } from 'lucide-react';
import { STUDIO_META } from '../data/studioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 radial-plum-glow pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[#FAAE17]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#4A1559]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative hairline grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#FAAE17 1px, transparent 1px), linear-gradient(90deg, #FAAE17 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Studio Category & Presence - Zero-Pill Typography */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-widest text-[#FAAE17] uppercase mb-6">
            <span>Abuja, Nigeria</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Beauty, Furniture, Healthcare, Hospitality</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Serving Nigeria & International Markets</span>
          </div>

          {/* Marquee Emotional Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] text-balance">
            We build brands people{' '}
            <span className="italic font-normal gold-gradient-text">feel</span> before they buy.
          </h1>

          {/* Studio Subheading */}
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
            A premium creative and marketing studio. Strategy, cinematic content and digital campaigns, run as one structured system for brands that want to be remembered.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-[#1F0825] bg-[#FAAE17] hover:bg-[#e09b12] rounded-xl shadow-lg shadow-[#FAAE17]/20 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FAAE17]/40 rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              Explore Selected Work
            </a>
          </div>

          {/* Operational Statement Card Strip */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#270B30]/90 border border-[#FAAE17]/20 backdrop-blur-md text-left shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FAAE17]/5 rounded-bl-full pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-[#FAAE17]/15 pb-4 md:pb-0 md:pr-6">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FAAE17] uppercase mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>The Operating Principle</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  One studio. Five disciplines working as one team.
                </h3>
              </div>

              <div className="md:col-span-7">
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Every project is planned operationally before it is priced, so strategy, production and management are never separate conversations.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400 font-mono">
                  <span className="text-[#FAAE17]/90 font-medium">01. Strategy & PR</span>
                  <span>·</span>
                  <span className="text-[#FAAE17]/90 font-medium">02. Cinematic Production</span>
                  <span>·</span>
                  <span className="text-[#FAAE17]/90 font-medium">03. Digital Campaigns</span>
                  <span>·</span>
                  <span className="text-[#FAAE17]/90 font-medium">04. Brand & Design</span>
                  <span>·</span>
                  <span className="text-[#FAAE17]/90 font-medium">05. Tech Consultation</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
