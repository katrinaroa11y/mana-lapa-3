import React, { useState, useEffect } from 'react';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import ArrowDown from 'lucide-react/dist/esm/icons/arrow-down';
import LockKeyhole from 'lucide-react/dist/esm/icons/lock-keyhole';
import ScrollText from 'lucide-react/dist/esm/icons/scroll-text';
import Fingerprint from 'lucide-react/dist/esm/icons/fingerprint';

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
          alt=""
          loading="lazy"
          decoding="async"
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
            <div className="flex items-center justify-center sm:justify-start sm:space-x-3 mb-6 anim-fade-up">
              <span className="hidden sm:block w-8 h-px bg-[#668261]" />
              <span className="text-[9.5px] sm:text-xs font-semibold uppercase tracking-[0.07em] sm:tracking-[0.2em] text-[#668261] text-center sm:text-left whitespace-nowrap">
                Shēmu terapija | EMDR | Klīniskā psiholoģija
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C2733] tracking-tight leading-[1.12] mb-6 anim-fade-up anim-delay-80">
              <span className="italic text-[#668261] font-normal">
                Palīdzu radīt
              </span> <br />
              paliekošas pārmaiņas.
            </h1>

            {/* Subtitle / Intro Statement */}
            <p className="text-base sm:text-lg text-[#455260] font-normal max-w-xl leading-relaxed mb-9 text-justify anim-fade-up anim-delay-160">
              Klīniskās psiholoģes konsultācijas trauksmes, stresa, depresijas, izdegšanas, attiecību problēmu un citu emocionālu grūtību risināšanai. Konsultācijas attālināti visā Latvijā un klātienē Rīgā.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 lg:mb-12 anim-fade-up anim-delay-240">
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
            </div>

            {/* Mobile-only Portrait */}
            <div className="block lg:hidden mb-6 sm:mb-10 max-w-sm sm:max-w-md mx-auto w-full anim-fade-scale anim-delay-280">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-md shadow-[0_6px_24px_-6px_rgba(0,0,0,0.12)]">
                {portraitSrc === DEFAULT_PORTRAIT ? (
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/psihologe-riga-katrina-rozenbaha-prakse-480.webp 480w, /psihologe-riga-katrina-rozenbaha-prakse-800.webp 800w, /psihologe-riga-katrina-rozenbaha-prakse.webp 1024w"
                      sizes="(max-width: 640px) 384px, (max-width: 1024px) 448px, 448px"
                    />
                    <img
                      src={portraitSrc}
                      srcSet="/psihologe-riga-katrina-rozenbaha-prakse-480.jpg 480w, /psihologe-riga-katrina-rozenbaha-prakse-800.jpg 800w, /psihologe-riga-katrina-rozenbaha-prakse.jpg 1024w"
                      sizes="(max-width: 640px) 384px, (max-width: 1024px) 448px, 448px"
                      alt="Klīniskā psiholoģe Rīgā Katrīna Rozenbaha sēž krēslā ar atvērtu pierakstu blociņu"
                      fetchPriority="high"
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full -mt-[38px] h-[calc(100%+38px)] object-cover object-top"
                    />
                  </picture>
                ) : (
                  <img
                    src={portraitSrc}
                    alt="Klīniskā psiholoģe Rīgā Katrīna Rozenbaha sēž krēslā ar atvērtu pierakstu blociņu"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full -mt-[38px] h-[calc(100%+38px)] object-cover object-top"
                  />
                )}
              </div>
            </div>

            {/* Key Trust Highlights - Visible across mobile and desktop */}
            <div className="flex sm:pt-4 flex-col sm:flex-row items-start gap-5 sm:gap-10 lg:gap-14 anim-fade-up anim-delay-320">
              <div className="flex items-start space-x-3">
                <LockKeyhole
                  className="w-4 h-4 text-[#556B51] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span className="text-xs sm:text-sm text-[#1C2733] font-bold leading-tight pt-0.5">
                  Konfidencialitāte
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <ScrollText
                  className="w-4 h-4 text-[#556B51] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-[#1C2733] font-bold leading-tight pt-0.5">
                    Reģistrēta klīniskā psiholoģe
                  </span>
                  <span className="text-xs sm:text-sm text-[#455260] font-normal leading-tight mt-1">
                    Psihologu reģistra Nr. 7001430
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Fingerprint
                  className="w-4 h-4 text-[#556B51] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span className="text-xs sm:text-sm text-[#1C2733] font-bold leading-tight pt-0.5">
                  Individuāla pieeja
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait for Desktop */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end anim-fade-scale anim-delay-150">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-md shadow-[0_6px_24px_-6px_rgba(0,0,0,0.12)]">
                {portraitSrc === DEFAULT_PORTRAIT ? (
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/psihologe-riga-katrina-rozenbaha-prakse-480.webp 480w, /psihologe-riga-katrina-rozenbaha-prakse-800.webp 800w, /psihologe-riga-katrina-rozenbaha-prakse.webp 1024w"
                      sizes="(max-width: 1280px) 384px, 448px"
                    />
                    <img
                      src={portraitSrc}
                      srcSet="/psihologe-riga-katrina-rozenbaha-prakse-480.jpg 480w, /psihologe-riga-katrina-rozenbaha-prakse-800.jpg 800w, /psihologe-riga-katrina-rozenbaha-prakse.jpg 1024w"
                      sizes="(max-width: 1280px) 384px, 448px"
                      alt="Klīniskā psiholoģe Rīgā Katrīna Rozenbaha sēž krēslā ar atvērtu pierakstu blociņu"
                      fetchPriority="high"
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </picture>
                ) : (
                  <img
                    src={portraitSrc}
                    alt="Klīniskā psiholoģe Rīgā Katrīna Rozenbaha sēž krēslā ar atvērtu pierakstu blociņu"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
