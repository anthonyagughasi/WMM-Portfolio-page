import React from 'react';
import { CLIENT_LOGOS } from '../data/studioData';
import { BrandLogo } from './BrandLogo';

interface ClientStripProps {
  onSelectClient?: (brandName: string) => void;
}

export const ClientStrip: React.FC<ClientStripProps> = ({ onSelectClient }) => {
  return (
    <section id="clients" className="py-14 border-y border-[#FAAE17]/15 bg-[#1A0620]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-[#FAAE17] font-semibold">
            Trusted by Ambitious Brands Across Nigeria & International Markets
          </p>
        </div>

        {/* Brand Logos Grid with High-Contrast Luxury Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4 items-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => onSelectClient && onSelectClient(client.name)}
              title={`${client.name} — ${client.sector}`}
            >
              <div className="w-full h-20 sm:h-22">
                <BrandLogo
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full"
                />
              </div>
              <span className="mt-2 text-[11px] font-medium text-zinc-400 group-hover:text-[#FAAE17] transition-colors text-center truncate max-w-full">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
