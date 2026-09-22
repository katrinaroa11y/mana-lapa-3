import React, { useState } from 'react';
import { motion } from 'motion/react';
import { renderFormattedText } from '../utils/formatText';

const TEXT_STORAGE_KEY = 'katrina_about_text_v99';

const DEFAULT_ABOUT_TEXT = `**Mani sauc Katrīna Rozenbaha**, un es esmu **reģistrēta klīniskā psiholoģe**. Savā praksē esmu sniegusi atbalstu **vairāk nekā 1000 cilvēkiem**, konsultējot individuāli un vadot izglītojošas lekcijas par mentālo veselību un personīgo izaugsmi.

Es ticu, ka **ikvienam cilvēkam piemīt iekšējie resursi un daudzas stiprās puses**, taču nereti to ir grūti saskatīt vienatnē. Un vēl grūtāk - sarežģītos un sāpīgos dzīves posmos. Mans mērķis ir radīt **drošu un atbalstošu vidi**, kurā katrs cilvēks var brīvi runāt par sev svarīgo, iepazīt savus iekšējos resursus, atklāt jaunas iespējas savas mentālās veselības stiprināšanai un veidot ceļu uz pārmaiņām.

Savā darbā apvienoju empātisku un pieņemošu attieksmi ar **zinātniski pamatotām metodēm**, pielāgojot konsultēšanas procesu katra cilvēka individuālajām vajadzībām un mērķiem.`;

export const AboutSection: React.FC = () => {
  const [aboutText] = useState(() => {
    try {
      const saved = localStorage.getItem(TEXT_STORAGE_KEY);
      if (saved) {
        return saved;
      }
    } catch (e) {
      console.error('Kļūda ielādējot Par mani tekstu:', e);
    }
    return DEFAULT_ABOUT_TEXT;
  });

  const paragraphs = aboutText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section
      id="par-mani"
      className="relative py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E3DDD3]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          {/* Section Eyebrow */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-px bg-[#668261]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
              Par mani
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-normal leading-[1.18] mb-8">
            Empātisks un profesionāls psihologa atbalsts.
          </h2>

          {/* Formatted Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg leading-[1.85] text-[#455260] font-normal">
            {paragraphs.map((para, idx) => (
              <p key={idx} className={idx === 0 ? 'text-[#1C2733] font-normal text-lg sm:text-xl leading-relaxed' : ''}>
                {renderFormattedText(para)}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
