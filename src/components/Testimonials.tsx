import React from 'react';
import { TESTIMONIALS } from '../data/studioData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-[#1B0621]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#FAAE17] font-semibold mb-3">
            Client Voices & Executive Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What clients say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#25092E] border border-white/10 hover:border-[#FAAE17]/30 transition-all duration-300 flex flex-col justify-between relative shadow-lg"
            >
              <Quote className="w-8 h-8 text-[#FAAE17]/30 mb-6" />
              
              <blockquote className="text-base sm:text-lg text-zinc-200 font-normal leading-relaxed mb-6 italic">
                "{item.quote}"
              </blockquote>

              <div className="pt-4 border-t border-white/10">
                <div className="text-base font-bold text-white tracking-tight">
                  {item.client}
                </div>
                {item.role && (
                  <div className="text-xs text-[#FAAE17] font-medium mt-0.5">
                    {item.role}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
