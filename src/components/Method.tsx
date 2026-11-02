import React, { useState } from 'react';
import { STRATEGIC_GOALS, STRATEGIC_PILLARS } from '../data/studioData';
import { Target, Heart, Eye, MessageSquare, Zap, ArrowRight, ShieldCheck, Sparkles, Cpu } from 'lucide-react';

export const Method: React.FC = () => {
  const [selectedGoalId, setSelectedGoalId] = useState<'awareness' | 'engagement' | 'conversion'>('awareness');

  const currentGoal = STRATEGIC_GOALS.find((g) => g.id === selectedGoalId) || STRATEGIC_GOALS[0];

  return (
    <section id="method" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#FAAE17] font-semibold mb-3">
            The Studio Method
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Every campaign starts with <span className="font-normal italic gold-gradient-text">a goal and an emotion.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Choose the goal. We build the plan around the one outcome that matters most, then align every piece of content to it.
          </p>
        </div>

        {/* Interactive Goal Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Left Column: 3 Goal Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {STRATEGIC_GOALS.map((goal) => {
              const isSelected = goal.id === selectedGoalId;
              return (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoalId(goal.id)}
                  className={`p-5 rounded-xl text-left transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#2E0E37] border-[#FAAE17] shadow-lg shadow-black/30 translate-x-1'
                      : 'bg-[#22092A]/70 hover:bg-[#270B30] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isSelected
                          ? 'bg-[#FAAE17] text-[#1F0825]'
                          : 'bg-white/5 text-zinc-400 group-hover:text-white'
                      }`}
                    >
                      {goal.id === 'awareness' && <Eye className="w-4 h-4" />}
                      {goal.id === 'engagement' && <MessageSquare className="w-4 h-4" />}
                      {goal.id === 'conversion' && <Zap className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-base font-bold text-white tracking-tight">
                        {goal.label}
                      </div>
                      <div className="text-xs text-zinc-400 truncate max-w-[200px]">
                        {goal.heading}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#FAAE17] translate-x-1' : 'text-zinc-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Goal Strategic Deep Dive */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-2xl bg-[#280C32] border border-[#FAAE17]/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAAE17]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FAAE17] uppercase mb-2">
                <Target className="w-4 h-4" />
                <span>Primary Goal Objective</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                {currentGoal.heading}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                {currentGoal.description}
              </p>

              {/* Tactical Blueprint */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                  How We Execute This Outcome
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentGoal.tactics.map((tactic, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#1F0825]/60 border border-white/5">
                      <ShieldCheck className="w-4 h-4 text-[#FAAE17] shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-200 leading-relaxed">{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">
                Outcome-aligned creative architecture
              </span>
              <a
                href="#contact"
                className="text-xs font-semibold text-[#FAAE17] hover:underline inline-flex items-center gap-1"
              >
                <span>Plan your {currentGoal.label} campaign</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Four Studio Method Pillars */}
        <div className="pt-6 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-widest text-[#FAAE17] font-semibold mb-2">
              Strategic Principles
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Four rules behind every campaign we run
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#240A2C] border border-white/5 hover:border-[#FAAE17]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#FAAE17] font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                    {pillar.highlight}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
