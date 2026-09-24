import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { APPROACH_METHODS, EDUCATION } from '../data/practiceData';
import { ApproachMethod, CertificateInfo } from '../types';
import { renderFormattedText } from '../utils/formatText';
import { Play, ExternalLink, X } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const methods = APPROACH_METHODS;
  const education = EDUCATION;
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedVideo]);

  const getCerts = (method: ApproachMethod): CertificateInfo[] => {
    if (method.certificates && method.certificates.length > 0) {
      return method.certificates;
    }
    if (method.certificate && (method.certificate.title || method.certificate.number || method.certificate.year)) {
      return [method.certificate];
    }
    return [];
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1` : null;
  };

  return (
    <>
      {/* Section: Izglītība un metodes (Unified on White Background) */}
      <section id="pieeja" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-px bg-[#668261]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
                Metodes
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-semibold leading-[1.18] mb-6">
              Metodes
            </h2>
            <p className="text-base sm:text-lg text-[#455260] leading-relaxed">
              Konsultēšanas procesā katram individuāli tiek piemērotas atbilstošākās metodes, tās saskaņojot ar klienta vēlmēm un vajadzībām.
            </p>
          </div>

          {/* Methods Grid - wider cards, reduced height */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {methods.map((method, index) => {
              const certs = getCerts(method);

              return (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="p-6 sm:p-7 rounded-sm bg-[#FAF8F5] border border-[#E3DDD3] hover:border-[#1C2733]/40 hover:shadow-[0_4px_20px_-4px_rgba(28,39,51,0.06)] transition-all duration-300 flex flex-col justify-between space-y-5"
                >
                  <div className="flex flex-col">
                    {method.tag && (
                      <div className="mb-4 text-center">
                        <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#668261] bg-[#FFFFFF] px-2.5 py-1 rounded-sm border border-[#D1C9BC]">
                          {method.tag}
                        </span>
                      </div>
                    )}

                    <div className="min-h-[58px] lg:h-[64px] flex items-center justify-center mb-2">
                      <h3 className="font-serif text-2xl font-semibold text-[#1C2733] leading-snug text-center">
                        {method.title}
                      </h3>
                    </div>

                    {method.shortDesc && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#668261] mb-3 text-center">
                        {method.shortDesc}
                      </p>
                    )}

                    {/* Method description: unified fixed height on desktop so video buttons align on exact same top edge */}
                    <div
                      className="text-base text-[#455260] leading-relaxed whitespace-pre-line space-y-2 font-normal text-justify lg:h-[240px] xl:h-[190px] flex flex-col justify-start"
                      style={{ textAlign: 'justify' }}
                    >
                      {renderFormattedText(method.description)}
                    </div>

                    {/* Video Link - 1.5x larger and top edge aligned at the exact same height across all cards */}
                    {method.videoUrl && (
                      <div className="pt-6 pb-1 flex justify-center">
                        <a
                          href={method.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (!e.metaKey && !e.ctrlKey) {
                              e.preventDefault();
                              setSelectedVideo({ url: method.videoUrl!, title: method.title });
                            }
                          }}
                          className="h-11 px-5 inline-flex items-center justify-center gap-2.5 text-sm font-medium text-[#41593C] hover:text-[#1C2733] bg-[#FFFFFF] hover:bg-[#F3EFEA] border border-[#D1C9BC] hover:border-[#1C2733]/50 rounded-sm transition-all shadow-xs group cursor-pointer"
                          title={`Skatīties video skaidrojumu par: ${method.title}`}
                        >
                          <span className="w-6 h-6 rounded-full bg-[#668261]/15 flex items-center justify-center text-[#668261] group-hover:bg-[#668261] group-hover:text-white transition-colors shrink-0">
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </span>
                          <span className="font-medium tracking-wide">Video par metodi</span>
                          <ExternalLink className="w-4 h-4 text-[#8A97A6] group-hover:text-[#1C2733] shrink-0" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Certificate / Training Details */}
                  {certs.length > 0 && (
                    <div className="pt-2 space-y-2">
                      {certs.map((cert, cIdx) => (
                        <div
                          key={cIdx}
                          className="bg-[#FFFFFF] px-3.5 py-2.5 rounded-sm border border-[#E3DDD3]"
                        >
                          <div className="text-xs space-y-0.5">
                            {cert.title && (
                              <p className="font-medium text-[#1C2733] leading-snug">{cert.title}</p>
                            )}
                            <div className="flex flex-wrap items-center gap-x-2 text-[#6E7D8C] font-mono">
                              {cert.number && (
                                <span className="text-[11px]">{cert.number}</span>
                              )}
                              {cert.number && cert.year && <span>•</span>}
                              {cert.year && <span>{cert.year}. gads</span>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF8F5] border border-[#D1C9BC] rounded-sm shadow-2xl max-w-3xl w-full overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E3DDD3] bg-[#FFFFFF]">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#668261]" />
                  <h4 className="font-serif text-lg text-[#1C2733] font-bold">
                    {selectedVideo.title} • Video skaidrojums
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 text-[#6E7D8C] hover:text-[#1C2733] hover:bg-[#FAF8F5] rounded-xs transition-colors cursor-pointer"
                  aria-label="Aizvērt video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative w-full aspect-video bg-black">
                {getYouTubeEmbedUrl(selectedVideo.url) ? (
                  <iframe
                    src={getYouTubeEmbedUrl(selectedVideo.url)!}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-sm">
                    Video nav pieejams
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 border-t border-[#E3DDD3] bg-[#FFFFFF] flex items-center justify-between text-xs">
                <a
                  href={selectedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#668261] hover:text-[#1C2733] font-medium transition-colors"
                >
                  <span>Skatīties vietnē YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="px-3 py-1.5 text-[#5A6775] hover:text-[#1C2733] hover:bg-[#FAF8F5] rounded-xs font-medium transition-colors cursor-pointer"
                >
                  Aizvērt
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Section 2: Izglītība */}
      <section id="izglitiba" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - styled like Izglītība un metodes, on the left */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-px bg-[#668261]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
                Izglītība
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-semibold leading-[1.18] mb-6">
              Izglītība un apmācības
            </h2>
          </div>

          <div className="w-full bg-[#FFFFFF] border border-[#E3DDD3] rounded-sm p-6 sm:p-10 shadow-[0_2px_12px_-3px_rgba(28,39,51,0.03)] space-y-4">
            {education.map((item, idx) => {
              const title = item.title;
              const inst = item.institution ? `, ${item.institution}` : '';
              const time = item.period ? ` (${item.period})` : '';
              return (
                <div key={item.id || idx} className="flex items-start space-x-3.5">
                  <span className="w-3.5 h-px bg-[#668261] mt-[11px] shrink-0" />
                  <p className="text-sm sm:text-base text-[#1C2733] leading-relaxed font-normal">
                    {title}{inst}{time}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
