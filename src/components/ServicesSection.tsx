import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/practiceData';
import { Clock, MapPin, Check, Calendar } from 'lucide-react';
import { renderFormattedText } from '../utils/formatText';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="pakalpojumi" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E3DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-px bg-[#668261]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
              Pakalpojumi
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-normal leading-[1.18]">
            Atbalsta iespējas
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="relative rounded-sm flex flex-col justify-between transition-all duration-300 bg-[#FAF8F5] border border-[#E3DDD3] p-7 sm:p-8 shadow-[0_2px_12px_-3px_rgba(28,39,51,0.04)] hover:border-[#1C2733]/40 hover:shadow-[0_6px_20px_-4px_rgba(28,39,51,0.08)]"
            >
              <div>
                {/* Top Badge & Price */}
                <div className="h-8 mb-5 flex justify-between items-center gap-2">
                  <span className="inline-block px-2.5 py-1 rounded-sm text-[11px] font-mono uppercase tracking-wider bg-[#FFFFFF] text-[#668261] border border-[#D1C9BC]">
                    {service.tag}
                  </span>

                  {service.price && (
                    <span className="text-xl font-serif text-[#1C2733] font-normal">
                      {service.price}
                    </span>
                  )}
                </div>

                {/* Service Title & Subtitle - fixed unified height so duration & format block top edge aligns across all columns */}
                <div className="min-h-[105px] md:h-[160px] lg:h-[145px] xl:h-[135px] flex flex-col justify-start mb-5">
                  <h3 className="font-serif text-2xl font-normal text-[#1C2733] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E7D8C] leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                {/* Duration & Format - unified height and matching body font */}
                <div className="h-[80px] flex flex-col justify-center space-y-2 mb-6 text-xs sm:text-sm text-[#3A4753] bg-[#FFFFFF] p-3.5 rounded-sm border border-[#E3DDD3]">
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-4 h-4 text-[#668261] shrink-0" />
                    <span className="leading-none">{service.duration}</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <MapPin className="w-4 h-4 text-[#668261] shrink-0" />
                    <span className="leading-none">{service.format}</span>
                  </div>
                </div>

                {/* Description (if present) */}
                {service.description && (
                  <p className="text-sm text-[#455260] mb-5 leading-relaxed">
                    {renderFormattedText(service.description)}
                  </p>
                )}

                {/* Benefits - divider line removed as requested */}
                <div className="space-y-2.5 mb-8">
                  {service.benefits.map((benefit, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#3A4753]"
                    >
                      <Check className="w-4 h-4 text-[#668261] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
