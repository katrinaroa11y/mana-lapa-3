import React from 'react';
import { Reveal } from './Reveal';
import { SERVICES } from '../data/practiceData';
import Clock from 'lucide-react/dist/esm/icons/clock';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Banknote from 'lucide-react/dist/esm/icons/banknote';
import Check from 'lucide-react/dist/esm/icons/check';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import { renderFormattedText } from '../utils/formatText';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="pakalpojumi" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E3DDD3]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-px bg-[#668261]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
              Pakalpojumi
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-semibold leading-[1.18]">
            Atbalsta iespējas
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-6">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.id}
              delayMs={index * 120}
              className="relative rounded-sm flex flex-col justify-between transition-all duration-300 bg-[#FAF8F5] border border-[#E3DDD3] px-6 pb-6 pt-7 lg:px-5 lg:pb-6 lg:pt-7 xl:px-6 xl:pb-7 xl:pt-8 shadow-[0_2px_12px_-3px_rgba(28,39,51,0.04)] hover:border-[#1C2733]/40 hover:shadow-[0_6px_20px_-4px_rgba(28,39,51,0.08)]"
            >
              <div>
                {/* Service Title - 7% larger, single line, top-aligned with increased spacing below */}
                <div className="lg:h-[38px] xl:h-[44px] 2xl:h-[46px] flex items-start justify-center mb-7">
                  <h3 className="font-serif text-[22px] sm:text-[32px] lg:text-[21.5px] xl:text-[26px] 2xl:text-[28px] sm:whitespace-nowrap font-semibold text-[#1C2733] leading-snug text-center">
                    {service.title}
                  </h3>
                </div>

                {/* Duration, Format & Price */}
                <div className="lg:min-h-[112px] flex flex-col justify-start space-y-2 mb-6 text-sm text-[#455260] font-normal bg-[#FFFFFF] p-4 rounded-sm border border-[#E3DDD3]">
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-4 h-4 text-[#668261] shrink-0" />
                    <span className="leading-snug">{service.duration}</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <MapPin className="w-4 h-4 text-[#668261] shrink-0" />
                    <span className="leading-snug">{service.format}</span>
                  </div>

                  {service.price && (
                    <div className="flex items-center space-x-2.5">
                      <Banknote className="w-4 h-4 text-[#668261] shrink-0" />
                      <span className="leading-snug">{service.price}</span>
                    </div>
                  )}
                </div>

                {/* Description (if present) */}
                {service.description && (
                  <p className="text-base sm:text-lg text-[#1C2733] mb-5 leading-relaxed text-justify">
                    {renderFormattedText(service.description)}
                  </p>
                )}

                {/* Benefits */}
                <div className="space-y-3.5 mb-8">
                  {service.benefits.map((benefit, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start space-x-3 text-base sm:text-lg text-[#1C2733]"
                    >
                      <Check className="w-5 h-5 text-[#668261] shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2">
                <button
                  id={`service-book-btn-${service.id}`}
                  onClick={() => {
                    if (service.id === 'nodarbibas-un-lekcijas') {
                      const elem =
                        document.getElementById('nosutit-zinu') ||
                        document.getElementById('kontakti');

                      elem?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    } else {
                      onOpenBooking(service.id);
                    }
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-md font-medium text-sm tracking-wide transition-all bg-[#e08e69] hover:bg-[#cb7c57] text-[#FAF8F5] border border-[#e08e69] hover:border-[#cb7c57] cursor-pointer shadow-xs hover:shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>
                    {service.id === 'nodarbibas-un-lekcijas'
                      ? 'Pieteikties'
                      : 'Pieteikties uz sesiju'}
                  </span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
