import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigateHome?: (sectionId?: string) => void;
  onNavigateBlogs?: () => void;
  currentPath?: string;
  language?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onNavigateHome,
  onNavigateBlogs,
  currentPath = '/'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Par mani', href: '#par-mani' },
    { name: 'Pakalpojumi', href: '#pakalpojumi' },
    { name: 'Tēmas', href: '#temas' },
    { name: 'Metodes', href: '#pieeja' },
    { name: 'Izglītība', href: '#izglitiba' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'BUJ', href: '#buj' },
    { name: 'Kontakti', href: '#kontakti' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

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
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/' + href);
        window.dispatchEvent(new Event('popstate'));
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E3DDD3] py-3.5 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-[#E3DDD3]/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="group flex items-center space-x-3.5 text-left"
        >
          <div className="w-9 h-9 rounded-sm bg-[#F4EFEA] border border-[#D1C9BC] flex items-center justify-center text-[#1C2733] group-hover:border-[#1C2733] group-hover:bg-[#1C2733] group-hover:text-[#FAF8F5] transition-all duration-300 shrink-0">
            <span className="font-serif text-sm font-semibold tracking-wider">
              KR
            </span>
          </div>

          <div>
            <span className="block font-serif text-xl sm:text-2xl font-normal text-[#1C2733] tracking-tight group-hover:text-[#668261] transition-colors leading-none">
              {PRACTICE_INFO.name}
            </span>

            <span className="block text-[10px] sm:text-[11px] text-[#6E7D8C] uppercase tracking-[0.18em] font-medium mt-1">
              Klīniskā psiholoģe
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium tracking-wide text-[#455260] hover:text-[#1C2733] transition-colors py-1 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#1C2733] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center space-x-2 bg-[#e08e69] hover:bg-[#cb7c57] text-[#FAF8F5] py-2.5 px-5 rounded-md text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer border border-[#e08e69] hover:border-[#cb7c57] shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Pieteikties</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#1C2733] hover:bg-[#ECE6DD]/60 transition-colors border border-transparent hover:border-[#D1C9BC]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E3DDD3] px-5 pt-4 pb-6 space-y-4 shadow-sm">
          <nav className="flex flex-col divide-y divide-[#E3DDD3]/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base text-[#1C2733] font-medium py-2.5 hover:text-[#668261] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#e08e69] hover:bg-[#cb7c57] text-[#FAF8F5] py-3 rounded-md text-sm font-medium tracking-wide transition-all border border-[#e08e69]"
            >
              <Calendar className="w-4 h-4" />
              <span>Pieteikties konsultācijai</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
