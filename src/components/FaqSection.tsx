import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/practiceData';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = () => {
  const [openId, setOpenId] = useState<string | null>(
    FAQS.length > 0 ? FAQS[0].id : null
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="buj" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E3DDD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-4 justify-center">
            <span className="w-6 h-px bg-[#668261]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
              Biežāk uzdotie jautājumi (BUJ)
            </span>
            <span className="w-6 h-px bg-[#668261]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-normal leading-[1.18] mb-5">
          Jautājumi un atbildes
          </h2>

          <p className="text-base sm:text-lg text-[#455260] leading-relaxed">
            Atbildes uz biežāk uzdotajiem jautājumiem par konsultāciju gaitu,
            formu, apmaksu un konfidencialitāti.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-sm bg-[#FAF8F5] border border-[#E3DDD3] overflow-hidden transition-all duration-200 hover:border-[#1C2733]/30"
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none group cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#1C2733] group-hover:text-[#668261] transition-colors leading-snug">
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-sm bg-[#FFFFFF] border border-[#D1C9BC] flex items-center justify-center shrink-0 text-[#668261] transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-[#668261] text-[#FAF8F5] border-[#668261]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-[#455260] leading-[1.8] border-t border-[#E3DDD3]/70 pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-14 p-7 sm:p-8 rounded-sm bg-[#FAF8F5] border border-[#E3DDD3] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_2px_12px_-3px_rgba(28,39,51,0.03)]">

          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-medium text-[#1C2733] mb-1">
              Palika neatbildēts jautājums?
            </h4>

            <p className="text-sm text-[#6E7D8C]">
              Raksti man uz e-pastu
            </p>
          </div>

          <a
            id="faq-ask-question-btn"
            href="#kontakti"
            className="inline-flex items-center space-x-2 bg-[#668261] hover:bg-[#546E50] text-[#FAF8F5] px-6 py-3 rounded-md text-sm font-medium tracking-wide transition-all shrink-0 border border-[#668261] hover:border-[#546E50]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Sazināties ar Katrīnu</span>
          </a>
        </div>

      </div>
    </section>
  );
};
