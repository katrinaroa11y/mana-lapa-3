import React from 'react';
import { PRACTICE_INFO } from '../data/practiceData';
import { ShieldCheck, ArrowUp, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenBooking: () => void;
  onNavigateBlogs?: () => void;
  onNavigateHome?: (sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenBooking,
  onNavigateBlogs,
  onNavigateHome
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '/blogs') {
      if (onNavigateBlogs) {
        onNavigateBlogs();
      } else {
        window.history.pushState({}, '', '/blogs');
        window.dispatchEvent(new Event('popstate'));
      }
      return;
    }

    const targetId = href.replace('#', '');
    if (onNavigateHome) {
      onNavigateHome(targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#383E45] text-[#FAF8F5] pt-20 pb-12 border-t border-[#464D55]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#4B525B]">
          
          {/* Brand & Credentials Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-sm bg-[#454D55] border border-[#56606A] text-[#FAF8F5] flex items-center justify-center font-serif text-base tracking-wider font-normal">
                KR
              </div>
              <div>
                <span className="block font-serif text-xl font-normal text-[#FAF8F5] tracking-tight">
                  Katrīna Rozenbaha
                </span>
                <span className="block text-xs font-mono uppercase tracking-[0.16em] text-[#9EC497]">
                  Klīniskā psiholoģe
                </span>
              </div>
            </div>

            <p className="text-sm text-[#C8D1DA] leading-relaxed max-w-sm">
              Katrīnas Rozenbahas privātprakse. Individuālās psihologa konsultācijas Rīgā un tiešsaistē (online), EMDR un shēmu terapijas metodes.
            </p>

            <div className="text-xs font-mono text-[#A8B2BD] space-y-1 pt-2">
              <p>{PRACTICE_INFO.registrationNumber}</p>
              <p>Reģistrēts Latvijas Psihologu reģistrā</p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FAF8F5]">
              Mājaslapas sadaļas
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C8D1DA]">
              <li>
                <a href="#par-mani" onClick={(e) => handleLinkClick(e, '#par-mani')} className="hover:text-[#FAF8F5] transition-colors">
                  Par Katrīnu Rozenbahu
                </a>
              </li>
              <li>
                <a href="#pakalpojumi" onClick={(e) => handleLinkClick(e, '#pakalpojumi')} className="hover:text-[#FAF8F5] transition-colors">
                  Pakalpojumi un Izmaksas
                </a>
              </li>
              <li>
                <a href="#pieeja" onClick={(e) => handleLinkClick(e, '#pieeja')} className="hover:text-[#FAF8F5] transition-colors">
                  Darba metodes
                </a>
              </li>
              <li>
                <a href="#izglitiba" onClick={(e) => handleLinkClick(e, '#izglitiba')} className="hover:text-[#FAF8F5] transition-colors">
                  Izglītība
                </a>
              </li>
              <li>
                <a href="/blogs" onClick={(e) => handleLinkClick(e, '/blogs')} className="hover:text-[#FAF8F5] transition-colors">
                  Psiholoģijas blogs
                </a>
              </li>
              <li>
                <a href="#buj" onClick={(e) => handleLinkClick(e, '#buj')} className="hover:text-[#FAF8F5] transition-colors">
                  Biežāk uzdotie jautājumi (BUJ)
                </a>
              </li>
              <li>
                <a href="#kontakti" onClick={(e) => handleLinkClick(e, '#kontakti')} className="hover:text-[#FAF8F5] transition-colors">
                  Saziņa
                </a>
              </li>
            </ul>
          </div>

          {/* Fast Actions & Privacy Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FAF8F5]">
              Pieraksts & Juridiskā informācija
            </h4>

            <button
              id="footer-booking-btn"
              onClick={onOpenBooking}
              className="w-full bg-[#e08e69] hover:bg-[#cb7c57] text-[#FAF8F5] py-3.5 px-5 rounded-md text-sm font-medium tracking-wide transition-all text-center border border-[#e08e69] hover:border-[#cb7c57] cursor-pointer"
            >
              Pieteikties konsultācijai tiešsaistē
            </button>

            <div className="pt-2">
              <button
                id="footer-privacy-btn"
                onClick={onOpenPrivacy}
                className="inline-flex items-center space-x-2 text-xs text-[#9EC497] hover:text-[#FAF8F5] transition-colors underline cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Privātuma politika & VDAR / GDPR paziņojums</span>
              </button>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={PRACTICE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#454D55] border border-[#56606A] text-[#FAF8F5] flex items-center justify-center hover:bg-[#668261] hover:border-[#668261] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8B2BD] gap-4">
          <p>© {new Date().getFullYear()} Katrīna Rozenbaha. Visas tiesības aizsargātas.</p>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
            >
              Privātuma politika
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#9EC497] hover:text-[#FAF8F5] transition-colors cursor-pointer"
            >
              <span>Uz augšu</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
