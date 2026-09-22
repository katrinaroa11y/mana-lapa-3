import React from 'react';
import { motion } from 'motion/react';
import calmSunlightWallImg from '../assets/images/calm_sunlight_wall_1790086756847.jpg';
import mindfulPathNatureImg from '../assets/images/mindful_path_nature_1790086769727.jpg';

export const TopicsSection: React.FC = () => {
  return (
    <section id="temas" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative border-b border-[#E3DDD3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-px bg-[#668261]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668261]">
              Ar ko varu palīdzēt?
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-normal leading-[1.18] mb-6">
            Tēmas
          </h2>
          <p className="text-base sm:text-lg text-[#455260] leading-relaxed">
            Katram cilvēkam ir sava personība, dzīves pieredze un vērtības. Šeit apkopotas visbiežākās tēmas un grūtības, kurās sniedzu atbalstu. Taču arī ja šeit neatrodi savu tēmu, vai precīzi nevari pateikt, kas tieši Tevi apgrūtina, droši sazinies ar mani. Kopīgi atradīsim Tev piemērotu atbalsta formu.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          
          {/* 01. Trauksme, stress un emocionālas grūtības (Plašs horizontāls bloks ar foto) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 bg-[#FFFFFF] border border-[#E3DDD3] rounded-sm overflow-hidden shadow-[0_2px_12px_-3px_rgba(28,39,51,0.03)] hover:border-[#1C2733]/30 transition-all duration-300"
          >
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#6E7D8C] tracking-widest uppercase">
                    Tēmu loks
                  </span>
                  <span className="text-sm font-mono text-[#668261] font-medium tracking-wider">
                    1
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2733] font-normal mb-4 leading-snug">
                  Trauksme, stress un grūtības ar emociju regulāciju
                </h3>

                <p className="text-sm sm:text-base text-[#5A6775] leading-relaxed mb-8">
                  Profesionāls atbalsts situācijās, kad iekšējā spriedze, satraukums vai nomāktība sāk ietekmēt miegu, labsajūtu un spēju pieņemt lēmumus.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Trauksme un panikas lēkmes</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Stress un izdegšana</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Nomāktība un depresija</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Grūtības ar dusmām un impulsivitāti</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Atkarības</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-[#F4EFEA]">
              <img
                src={calmSunlightWallImg}
                alt="Mierīga, klusa telpa ar saules gaismu un maigām ēnām"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1C2733]/5 pointer-events-none" />
            </div>
          </motion.div>

          {/* Row 2: 02 & 03 Bloki blakus (asimetrisks 5 / 7 izkārtojums) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            
            {/* 02. Attiecības un attiecības ar sevi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-5 bg-[#FFFFFF] border border-[#E3DDD3] rounded-sm p-8 sm:p-10 flex flex-col justify-between shadow-[0_2px_12px_-3px_rgba(28,39,51,0.03)] hover:border-[#1C2733]/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#6E7D8C] tracking-widest uppercase">
                    Tēmu loks
                  </span>
                  <span className="text-sm font-mono text-[#668261] font-medium tracking-wider">
                    2
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2733] font-normal mb-4 leading-snug">
                  Attiecības ar sevi un citiem
                </h3>

                <p className="text-sm sm:text-base text-[#5A6775] leading-relaxed mb-8">
                  Kā veidot patiesas saiknes ar līdzcilvēkiem, saglabājot iekšēju skaidrību, cieņu pret savām robežām un mierpilnu pašapziņu.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Grūtības veidot attiecības</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Izaicinājumi laulībā vai attiecību šķiršana</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Attiecības ar sevi un zems pašvērtējums</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 03. Traumatiska pieredze, sēras un emociju regulācija */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="md:col-span-7 bg-[#F4EFEA] border border-[#DDD5C7] rounded-sm p-8 sm:p-10 flex flex-col justify-between shadow-[0_2px_12px_-3px_rgba(28,39,51,0.03)] hover:border-[#1C2733]/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#7D7365] tracking-widest uppercase">
                    Tēmu loks
                  </span>
                  <span className="text-sm font-mono text-[#668261] font-medium tracking-wider">
                    3
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2733] font-normal mb-4 leading-snug">
                  Traumatiska pieredze, sēras un bērnības ievainojumu dziedēšana
                </h3>

                <p className="text-sm sm:text-base text-[#5A6775] leading-relaxed mb-8">
                  Piesardzīga un droša telpa dziļāku ievainojumu apstrādei, zaudējumu izsērošanai un emocionālās pašregulācijas mehānismu pakāpeniskai atjaunošanai.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Traumatiska pieredze</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Sēras un zaudējumi</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Sarežģītas bērnības pieredzes</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* 04. Personīgā izaugsme un pārmaiņas (Plašs noslēdzošs horizontāls bloks ar foto) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 bg-[#FFFFFF] border border-[#E3DDD3] rounded-sm overflow-hidden shadow-[0_2px_12px_-3px_rgba(28,39,51,0.03)] hover:border-[#1C2733]/30 transition-all duration-300"
          >
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#6E7D8C] tracking-widest uppercase">
                    Tēmu loks
                  </span>
                  <span className="text-sm font-mono text-[#668261] font-medium tracking-wider">
                    4
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2733] font-normal mb-4 leading-snug">
                  Personīgā izaugsme un pārmaiņas
                </h3>

                <p className="text-sm sm:text-base text-[#5A6775] leading-relaxed mb-8">
                  Iespēja iegūt resursus - teorētiskās zināšanas, uzdevumus sevis dziļākai iepazīšanai un daudzveidīgas tehnikas miera vairošanai ķermenī un prātā.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Uzdevumi pašizziņai</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Praktiskas psiholoģiskās tehnikas</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Skaidrība par saviem mērķiem</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm sm:text-base text-[#1C2733] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668261] shrink-0" />
                    <span>Atbalsts personīgajā izaugsmē</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-[#F4EFEA]">
              <img
                src={mindfulPathNatureImg}
                alt="Cilvēks dabā mierīgā ceļā uz dabisku apvārsni"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1C2733]/5 pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
