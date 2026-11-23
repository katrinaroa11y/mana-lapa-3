import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { renderFormattedText } from '../utils/formatText';
import sessionNotesImg from '../assets/images/therapy_session_notes_1790166479933.jpg';
import sessionNotesWebp480 from '../assets/images/therapy_session_notes-480.webp';
import sessionNotesWebp800 from '../assets/images/therapy_session_notes-800.webp';
import sessionNotesWebp1200 from '../assets/images/therapy_session_notes-1200.webp';
import sessionNotesJpg480 from '../assets/images/therapy_session_notes-480.jpg';

const TEXT_STORAGE_KEY = 'katrina_about_text_v100';

const DEFAULT_ABOUT_TEXT = `Mani sauc Katrīna Rozenbaha, un es esmu **reģistrēta klīniskā psiholoģe**. Savā praksē esmu sniegusi atbalstu **vairāk nekā 1000 cilvēkiem**, konsultējot individuāli un vadot izglītojošas lekcijas par mentālo veselību un personīgo izaugsmi.

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Session Photo - TIKAI DATORA VERSIJĀ */}
          <Reveal direction="left" className="hidden lg:flex lg:col-span-5 justify-start">
            <div className="relative w-full max-w-[420px] lg:max-w-[460px] rounded-sm overflow-hidden shadow-[0_4px_24px_-4px_rgba(28,39,51,0.08)] aspect-[3/4] bg-[#F4EFEA]">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${sessionNotesWebp480} 480w, ${sessionNotesWebp800} 800w, ${sessionNotesWebp1200} 1200w`}
                  sizes="(max-width: 1280px) 420px, 460px"
                />
                <img
                  src={sessionNotesImg}
                  srcSet={`${sessionNotesJpg480} 480w, ${sessionNotesImg} 1200w`}
                  sizes="(max-width: 1280px) 420px, 460px"
                  alt="Četri cilvēki sarkanā laivā mierīgā ezerā pie meža un miglainu kalnu pakājes"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </Reveal>

          {/* Right Column: Copy & Headings */}
          <Reveal direction="right" className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Eyebrow */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-px bg-[#668261]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
                Par mani
              </span>
            </div>

            {/* Section Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-normal italic leading-[1.18] mb-8">
              Sveiks,
            </h2>

            {/* Formatted Paragraphs: 7% smaller on mobile, 10% smaller on desktop (18px), #373737 color */}
            <div className="space-y-6 text-[16.7px] sm:text-xl lg:text-[18px] leading-relaxed text-[#373737] font-normal text-justify">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="text-[16.7px] sm:text-xl lg:text-[18px] leading-relaxed text-[#373737] font-normal text-justify">
                  {renderFormattedText(para, 'font-semibold text-[#373737]')}
                </p>
              ))}
            </div>

            {/* Mobile/Tablet narrow (~2 cm) horizontal image strip below the text */}
            <div className="lg:hidden mt-8 relative w-full h-[76px] sm:h-[96px] rounded-sm overflow-hidden shadow-[0_4px_24px_-4px_rgba(28,39,51,0.08)] bg-[#F4EFEA]">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${sessionNotesWebp480} 480w, ${sessionNotesWebp800} 800w, ${sessionNotesWebp1200} 1200w`}
                  sizes="(max-width: 1024px) 100vw, 460px"
                />
                <img
                  src={sessionNotesImg}
                  srcSet={`${sessionNotesJpg480} 480w, ${sessionNotesImg} 1200w`}
                  sizes="(max-width: 1024px) 100vw, 460px"
                  alt="Četri cilvēki nelielā sarkanā laivā uz mierīga ezera ūdens"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_94%]"
                />
              </picture>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
