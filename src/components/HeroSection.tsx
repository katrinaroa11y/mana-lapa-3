import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowDown, LockKeyhole, ScrollText, Fingerprint } from 'lucide-react';

const DEFAULT_PORTRAIT = '/psihologe-riga-katrina-rozenbaha-prakse.jpg';
const STORAGE_KEY = 'katrina_custom_hero_portrait';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [portraitSrc, setPortraitSrc] = useState<string>(DEFAULT_PORTRAIT);

  useEffect(() => {
    const updateFromStorage = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && !saved.includes('katrina_portrait.jpg')) {
        setPortraitSrc(saved);
      } else {
        setPortraitSrc(DEFAULT_PORTRAIT);
      }
    };

    updateFromStorage();
    window.addEventListener('hero-portrait-updated', updateFromStorage);
    window.addEventListener('storage', updateFromStorage);

    return () => {
      window.removeEventListener('hero-portrait-updated', updateFromStorage);
      window.removeEventListener('storage', updateFromStorage);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF8F5] border-b border-[#E3DDD3]">
      {/* Subtle Architectural Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/calming_hero_bg_1785157949576.jpg"
          alt="Mierīgs un atbalstošs fons"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-12 mix-blend-multiply filter saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Practice Category Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <span className="w-8 h-px bg-[#668261]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
                Shēmu terapija | EMDR | Klīniskā psiholoģija
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C2733] tracking-tight leading-[1.12] mb-6"
            >
              Palīdzu radīt <br />
              <span className="italic text-[#668261] font-normal">
                paliekošas pārmaiņas.
              </span>
            </motion.h1>

            {/* Subtitle / Intro Statement */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="text-base sm:text-lg text-[#455260] font-normal max-w-xl leading-relaxed mb-9"
            >
              Klīniskās psiholoģes konsultācijas trauksmes, stresa, depresijas, izdegšanas, attiecību problēmu un citu emocionālu grūtību risināšanai. Konsultācijas attālināti visā Latvijā.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 lg:mb-12"
            >
              <button
                id="hero-booking-cta"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center space-x-2.5 bg-[#e08e69] hover:bg-[#cb7c57] text-[#FAF8F5] py-3.5 px-7 rounded-md font-medium text-sm sm:text-base tracking-wide transition-all cursor-pointer border border-[#e08e69] hover:border-[#cb7c57] hover:shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Pieteikties konsultācijai</span>
              </button>

              <a
                href="#par-mani"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('par-mani');
                  if (el) {
                    const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#ECE6DD]/50 border border-[#D1C9BC] hover:border-[#1C2733] text-[#1C2733] py-3.5 px-6 rounded-md font-medium text-sm sm:text-base tracking-wide transition-all"
              >
                <span>Vairāk par mani</span>
                <ArrowDown className="w-4 h-4 text-[#668261]" />
              </a>
            </motion.div>

            {/* Mobile-only Portrait (Parādās virs uzticamības joslas telefona skatā) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="block lg:hidden mb-10 max-w-sm sm:max-w-md mx-auto w-full"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-md shadow-[0_6px_24px_-6px_rgba(0,0,0,0.12)]">
                <img
                  src={portraitSrc}
                  alt="Katrīna Rozenbaha, reģistrēta klīniskā psiholoģe"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Key Trust Highlights - Open Editorial Strip (bez atdalošās līnijas) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-start gap-6 sm:gap-10 lg:gap-14"
            >
              <div className="flex items-start space-x-3">
                <LockKeyhole
                  className="w-4 h-4 text-[#556B51] shrink-0 mt-0.5"
                  strokeWidth={1.35}
                />
                <span className="text-xs sm:text-sm text-[#3A4753] font-medium leading-tight pt-0.5">
                  Konfidencialitāte
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <ScrollText
                  className="w-4 h-4 text-[#556B51] shrink-0 mt-0.5"
                  strokeWidth={1.35}
                />
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-[#3A4753] font-medium leading-tight pt-0.5">
                    Reģistrēta klīniskā psiholoģe
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#6E7D8C] font-mono leading-tight mt-1">
                    Psihologu reģistra Nr. 7001430
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Fingerprint
                  className="w-4 h-4 text-[#556B51] shrink-0 mt-0.5"
                  strokeWidth={1.35}
                />
                <span className="text-xs sm:text-sm text-[#3A4753] font-medium leading-tight pt-0.5">
                  Individuāla pieeja
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Editorial Portrait for Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-md shadow-[0_6px_24px_-6px_rgba(0,0,0,0.12)]">
                <img
                  src={portraitSrc}
                  alt="Katrīna Rozenbaha, reģistrēta klīniskā psiholoģe"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
