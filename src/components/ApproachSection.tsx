import React from 'react';
import { motion } from 'motion/react';
import { APPROACH_METHODS, EDUCATION } from '../data/practiceData';
import { ApproachMethod, CertificateInfo } from '../types';
import { Brain, Layers, Compass, Award } from 'lucide-react';
import { renderFormattedText } from '../utils/formatText';

export const ApproachSection: React.FC = () => {
  const methods = APPROACH_METHODS;
  const education = EDUCATION;

  const getCerts = (method: ApproachMethod): CertificateInfo[] => {
    if (method.certificates && method.certificates.length > 0) {
      return method.certificates;
    }
    if (method.certificate && (method.certificate.title || method.certificate.number || method.certificate.year)) {
      return [method.certificate];
    }
    return [];
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#668261]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#668261]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#668261]" />;
      default:
        return <Brain className="w-5 h-5 text-[#668261]" />;
    }
  };

  return (
    <>
      {/* Section 1: Darba metodes */}
      <section id="pieeja" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] relative border-b border-[#E3DDD3]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-px bg-[#668261]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
                Metodes un izglītība
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-normal leading-[1.18] mb-6">
              Metodes
            </h2>
            <p className="text-base sm:text-lg text-[#455260] leading-relaxed">
              Konsultēšanas procesā katram individuāli tiek piemērotas atbilstošākās metodes, tās saskaņojot ar klienta vēlmēm un vajadzībām.
            </p>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methods.map((method, index) => {
              const certs = getCerts(method);

              return (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="p-8 rounded-sm bg-[#FAF8F5] border border-[#E3DDD3] hover:border-[#1C2733]/40 hover:shadow-[0_4px_20px_-4px_rgba(28,39,51,0.06)] transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E3DDD3]">
                      <div className="w-10 h-10 rounded-sm bg-[#FFFFFF] border border-[#D1C9BC] flex items-center justify-center shrink-0">
                        {getIcon(method.iconName)}
                      </div>

                      {method.tag && (
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#668261] bg-[#FFFFFF] px-2.5 py-1 rounded-sm border border-[#D1C9BC]">
                          {method.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-[#1C2733] mb-2 leading-snug">
                      {method.title}
                    </h3>

                    {method.shortDesc && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#668261] mb-4">
                        {method.shortDesc}
                      </p>
                    )}

                    <div className="text-sm text-[#455260] leading-relaxed whitespace-pre-line space-y-2 font-normal">
                      {renderFormattedText(method.description)}
                    </div>
                  </div>

                  {/* Certificate / Training Details */}
                  {certs.length > 0 && (
                    <div className="pt-4 border-t border-[#E3DDD3] space-y-2.5">
                      {certs.map((cert, cIdx) => (
                        <div
                          key={cIdx}
                          className="bg-[#FFFFFF] p-3.5 rounded-sm border border-[#E3DDD3] flex items-start gap-3"
                        >
                          <Award className="w-4 h-4 text-[#668261] shrink-0 mt-0.5" />
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

      {/* Section 2: Izglītība */}
      <section id="izglitiba" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-[#E3DDD3] relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-3 mb-4 justify-center">
              <span className="w-6 h-px bg-[#668261]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
                Izglītība
              </span>
              <span className="w-6 h-px bg-[#668261]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C2733] font-normal leading-tight">
              Izglītība
            </h2>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E3DDD3] rounded-sm p-6 sm:p-10 divide-y divide-[#E3DDD3]/70 shadow-[0_2px_12px_-3px_rgba(28,39,51,0.03)]">
            {education.map((item, idx) => {
              const title = item.title;
              const inst = item.institution ? `, ${item.institution}` : '';
              const time = item.period ? ` (${item.period})` : '';
              return (
                <div key={item.id || idx} className="py-4 first:pt-0 last:pb-0 flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#668261] mt-2.5 shrink-0" />
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
