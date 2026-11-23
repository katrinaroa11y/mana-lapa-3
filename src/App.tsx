import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TopicsSection } from './components/TopicsSection';
import { ApproachSection } from './components/ApproachSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PrivacyModal } from './components/PrivacyModal';
import { BlogList } from './components/BlogList';
import { BlogPostSingle } from './components/BlogPostSingle';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (sectionId?: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', sectionId ? `/#${sectionId}` : '/');
      setCurrentPath('/');
    }
    
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  // Determine which page view to render based on URL path
  const isBlogsPage = currentPath === '/blogs' || currentPath === '/blogs/';
  const isSinglePostPage = currentPath.startsWith('/blogs/') && currentPath.length > 7;
  const singlePostSlug = isSinglePostPage ? currentPath.replace('/blogs/', '') : '';
  const isContactsPage = currentPath === '/kontakti' || currentPath === '/kontakti/';

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#455260] font-sans antialiased selection:bg-[#668261] selection:text-[#FAF8F5] flex flex-col">
      {/* Navigation Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onNavigateHome={handleNavigateHome}
        onNavigateBlogs={() => navigate('/blogs')}
        onNavigateContacts={() => navigate('/kontakti')}
        onNavigatePost={(slug) => navigate(`/blogs/${slug}`)}
        currentPath={currentPath}
        language="lv"
      />

      <main className="flex-grow">
        {isSinglePostPage ? (
          /* Single Blog Post Template (/blogs/:slug) */
          <BlogPostSingle
            slug={singlePostSlug}
            onBackToBlogs={() => navigate('/blogs')}
            onSelectPost={(slug) => navigate(`/blogs/${slug}`)}
            onOpenBooking={() => handleOpenBooking()}
            onNavigateHome={handleNavigateHome}
          />
        ) : isBlogsPage ? (
          /* Blog List Page (/blogs) */
          <BlogList
            onSelectPost={(slug) => navigate(`/blogs/${slug}`)}
            onOpenBooking={() => handleOpenBooking()}
            isPage={true}
          />
        ) : isContactsPage ? (
          /* Dedicated Contacts Page (/kontakti) */
          <ContactSection isPage={true} />
        ) : (
          /* Main Homepage View */
          <>
            <HeroSection onOpenBooking={() => handleOpenBooking()} />
            <AboutSection />
            <ServicesSection onOpenBooking={handleOpenBooking} />
            <TopicsSection />
            <ApproachSection />

            {/* BUJ (FaqSection) */}
            <FaqSection onOpenBooking={() => handleOpenBooking()} />

            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateBlogs={() => navigate('/blogs')}
        onNavigateHome={handleNavigateHome}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={selectedServiceId}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
