import React, { useState } from 'react';
import { PRACTICE_INFO } from '../data/practiceData';
import { Mail, Phone, Send, CheckCircle2, Instagram, Shield, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceId: 'kontaktforma',
          serviceName: 'Ziņa no kontaktformas',
          format: 'Kontaktforma',
          date: '',
          timeSlot: '',
          fullName: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          agreedToTerms: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Pieteikuma nosūtīšana neizdevās');
      }

      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Email error:', error);
      alert('Neizdevās nosūtīt ziņu. Lūdzu, mēģiniet vēlreiz vai sazinieties telefoniski.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakti" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative border-b border-[#E3DDD3]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-px bg-[#668261]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
              Saziņa & Lokācija
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-normal leading-[1.18] mb-5">
            Esmu šeit, lai atbildētu uz Taviem jautājumiem
          </h2>
          <p className="text-base sm:text-lg text-[#455260] leading-relaxed">
            Droši sazinieties, lai noskaidrotu sev interesējošās nianses vai vienotos par tikšanās laiku.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-9 rounded-sm bg-[#FFFFFF] border border-[#E3DDD3] space-y-7 shadow-[0_2px_12px_-3px_rgba(28,39,51,0.03)]">
              <h3 className="font-serif text-2xl font-normal text-[#1C2733] pb-4 border-b border-[#E3DDD3]">
                Prakses informācija
              </h3>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#D1C9BC] text-[#668261] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#6E7D8C]">
                    E-pasts
                  </span>
                  <a
                    href={`mailto:${PRACTICE_INFO.email}`}
                    className="block text-base font-medium text-[#1C2733] hover:text-[#668261] transition-colors mt-0.5"
                  >
                    {PRACTICE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#D1C9BC] text-[#668261] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#6E7D8C]">
                    Tālrunis
                  </span>
                  <a
                    href={`tel:${PRACTICE_INFO.phone}`}
                    className="block text-base font-medium text-[#1C2733] hover:text-[#668261] transition-colors mt-0.5"
                  >
                    {PRACTICE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-[#E3DDD3]">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#6E7D8C] mb-3">
                  Sociālie tīkli un profili
                </span>
                <div className="flex items-center space-x-3">
                  <a
                    href={PRACTICE_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm bg-[#FAF8F5] border border-[#D1C9BC] flex items-center justify-center text-[#455260] hover:text-[#1C2733] hover:border-[#1C2733] transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Registration note */}
            <div className="p-4 rounded-sm bg-[#FFFFFF] border border-[#E3DDD3] flex items-center space-x-3 text-xs font-mono text-[#6E7D8C]">
              <Shield className="w-4 h-4 text-[#668261] shrink-0" />
              <span>
                {PRACTICE_INFO.registrationNumber}. Reģistrēts Latvijas Psihologu reģistrā.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7" id="nosutit-zinu">
            <div className="p-8 sm:p-10 rounded-sm bg-[#FFFFFF] border border-[#E3DDD3] shadow-[0_4px_20px_-4px_rgba(28,39,51,0.04)]">
              <h3 className="font-serif text-2xl font-normal text-[#1C2733] mb-2">
                Nosūtīt ziņu Katrīnai
              </h3>
              <p className="text-sm text-[#6E7D8C] mb-6">
                Aizpildiet šo formu, un es atbildēšu pēc iespējas ātrāk (parasti vienas darba dienas laikā).
              </p>

              {submitted ? (
                <div className="p-8 rounded-sm bg-[#FAF8F5] border border-[#668261] text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#668261] mx-auto" />
                  <h4 className="font-serif text-xl font-normal text-[#1C2733]">
                    Paldies, ziņa ir nosūtīta!
                  </h4>
                  <p className="text-sm text-[#455260]">
                    Paldies par saziņu. Katrīna tuvākajā laikā ar Jums sazināsies.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#1C2733] font-semibold underline hover:text-[#668261] cursor-pointer"
                  >
                    Nosūtīt vēl vienu ziņu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#455260] mb-1.5">
                      Jūsu vārds, uzvārds *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Anna Bērziņa"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full p-3.5 rounded-sm border border-[#D1C9BC] bg-[#FAF8F5] text-sm text-[#1C2733] focus:outline-none focus:border-[#1C2733] focus:bg-[#FFFFFF] transition-all placeholder:text-[#9EA8B3]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#455260] mb-1.5">
                        E-pasts *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="anna@piemers.lv"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full p-3.5 rounded-sm border border-[#D1C9BC] bg-[#FAF8F5] text-sm text-[#1C2733] focus:outline-none focus:border-[#1C2733] focus:bg-[#FFFFFF] transition-all placeholder:text-[#9EA8B3]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#455260] mb-1.5">
                        Tālruņa numurs
                      </label>
                      <input
                        type="tel"
                        placeholder="+371 20000000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full p-3.5 rounded-sm border border-[#D1C9BC] bg-[#FAF8F5] text-sm text-[#1C2733] focus:outline-none focus:border-[#1C2733] focus:bg-[#FFFFFF] transition-all placeholder:text-[#9EA8B3]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#455260] mb-1.5">
                      Jūsu jautājums vai ziņa *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Labdien, vēlētos noskaidrot..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-3.5 rounded-sm border border-[#D1C9BC] bg-[#FAF8F5] text-sm text-[#1C2733] focus:outline-none focus:border-[#1C2733] focus:bg-[#FFFFFF] transition-all placeholder:text-[#9EA8B3]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#668261] hover:bg-[#546E50] text-[#FAF8F5] py-3.5 px-6 rounded-md font-medium text-sm tracking-wide transition-all shadow-xs disabled:opacity-50 cursor-pointer border border-[#668261] hover:border-[#546E50]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Nosūta...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Nosūtīt ziņu</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
