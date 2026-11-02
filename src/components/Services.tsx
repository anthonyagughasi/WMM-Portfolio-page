import React, { useState } from 'react';
import { DISCIPLINES } from '../data/studioData';
import { Compass, Film, TrendingUp, Palette, Code2, CheckCircle2, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-[#FAAE17]" />,
  Film: <Film className="w-6 h-6 text-[#FAAE17]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#FAAE17]" />,
  Palette: <Palette className="w-6 h-6 text-[#FAAE17]" />,
  Code2: <Code2 className="w-6 h-6 text-[#FAAE17]" />,
};

export const Services: React.FC = () => {
  const [activeDiscipline, setActiveDiscipline] = useState<string>(DISCIPLINES[0].id);

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#FAAE17] font-semibold mb-3">
            Services & Disciplines
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Five disciplines. <span className="font-normal italic gold-gradient-text">One structured system.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Every project is planned operationally before it is priced, so strategy, production and management are never separate conversations.
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DISCIPLINES.map((item) => {
            const isSelected = activeDiscipline === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveDiscipline(item.id)}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer border relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#290C33] border-[#FAAE17]/40 shadow-xl shadow-black/40'
                    : 'bg-[#230A2B]/70 hover:bg-[#270C30] border-white/5 hover:border-[#FAAE17]/25'
                }`}
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAAE17]/5 rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100" />

                {/* Editorial Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#1F0825] border border-[#FAAE17]/20 shadow-inner">
                      {iconMap[item.iconName] || <Compass className="w-6 h-6 text-[#FAAE17]" />}
                    </div>
                    <span className="font-mono text-sm tracking-widest text-[#FAAE17] font-semibold">
                      {item.number}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="p-2 rounded-lg bg-white/5 group-hover:bg-[#FAAE17]/20 text-zinc-400 group-hover:text-[#FAAE17] transition-all"
                    title={`Consult on ${item.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Title & Summary */}
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Deliverables List */}
                <div className="pt-6 border-t border-white/10 space-y-2.5">
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                    Core Deliverables
                  </p>
                  <ul className="space-y-2">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-[#FAAE17] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Flow Callout */}
        <div className="mt-12 p-6 rounded-xl bg-[#25092D] border border-[#FAAE17]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-300">
            <span className="font-semibold text-white">Need an integrated department?</span> We operate as the external creative and digital marketing department for luxury and healthcare brands.
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1F0825] bg-[#FAAE17] hover:bg-[#e09b12] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Schedule Briefing
          </a>
        </div>

      </div>
    </section>
  );
};
