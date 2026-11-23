import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';

const AboutSection = lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const ServicesSection = lazy(() =>
  import('./components/ServicesSection').then((m) => ({ default: m.ServicesSection }))
);
const TopicsSection = lazy(() =>
  import('./components/TopicsSection').then((m) => ({ default: m.TopicsSection }))
);
const ApproachSection = lazy(() =>
  import('./components/ApproachSection').then((m) => ({ default: m.ApproachSection }))
);
const FaqSection = lazy(() =>
  import('./components/FaqSection').then((m) => ({ default: m.FaqSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);
const BookingModal = lazy(() =>
  import('./components/BookingModal').then((m) => ({ default: m.BookingModal }))
);
const PrivacyModal = lazy(() =>
  import('./components/PrivacyModal').then((m) => ({ default: m.PrivacyModal }))
);
const BlogList = lazy(() =>
  import('./components/BlogList').then((m) => ({ default: m.BlogList }))
);
const BlogPostSingle = lazy(() =>
  import('./components/BlogPostSingle').then((m) => ({ default: m.BlogPostSingle }))
);

const PageFallback = () => <div className="min-h-screen bg-[#FAF8F5]" aria-hidden="true" />;

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

  const scrollToSectionWhenReady = (sectionId: string, attemptsLeft = 20) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      return;
    }
    if (attemptsLeft > 0) {
      setTimeout(() => scrollToSectionWhenReady(sectionId, attemptsLeft - 1), 50);
    }
  };

  const handleNavigateHome = (sectionId?: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', sectionId ? `/#${sectionId}` : '/');
      setCurrentPath('/');
    }

    if (sectionId) {
      setTimeout(() => scrollToSectionWhenReady(sectionId), 50);
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
      />

      <main className="flex-grow">
        {isSinglePostPage ? (
          /* Single Blog Post Template (/blogs/:slug) */
          <Suspense fallback={<PageFallback />}>
            <BlogPostSingle
              slug={singlePostSlug}
              onBackToBlogs={() => navigate('/blogs')}
              onSelectPost={(slug) => navigate(`/blogs/${slug}`)}
              onOpenBooking={() => handleOpenBooking()}
              onNavigateHome={handleNavigateHome}
            />
          </Suspense>
        ) : isBlogsPage ? (
          /* Blog List Page (/blogs) */
          <Suspense fallback={<PageFallback />}>
            <BlogList
              onSelectPost={(slug) => navigate(`/blogs/${slug}`)}
              isPage={true}
            />
          </Suspense>
        ) : isContactsPage ? (
          /* Dedicated Contacts Page (/kontakti) */
          <Suspense fallback={<PageFallback />}>
            <ContactSection isPage={true} />
          </Suspense>
        ) : (
          /* Main Homepage View */
          <>
            <HeroSection onOpenBooking={() => handleOpenBooking()} />
            <Suspense fallback={null}>
              <AboutSection />
            </Suspense>
            <Suspense fallback={null}>
              <ServicesSection onOpenBooking={handleOpenBooking} />
            </Suspense>
            <Suspense fallback={null}>
              <TopicsSection />
            </Suspense>
            <Suspense fallback={null}>
              <ApproachSection />
            </Suspense>
            <Suspense fallback={null}>
              <FaqSection />
            </Suspense>
            <Suspense fallback={null}>
              <ContactSection />
            </Suspense>
          </>
        )}
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
          onNavigateBlogs={() => navigate('/blogs')}
          onNavigateHome={handleNavigateHome}
        />
      </Suspense>

      {/* Booking Modal */}
      {isBookingOpen && (
        <Suspense fallback={null}>
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            preselectedServiceId={selectedServiceId}
          />
        </Suspense>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <Suspense fallback={null}>
          <PrivacyModal
            isOpen={isPrivacyOpen}
            onClose={() => setIsPrivacyOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
