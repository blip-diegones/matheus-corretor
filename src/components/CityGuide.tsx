import { motion } from 'framer-motion'
import { MapPin, Trees, Building2, Mountain, Compass } from 'lucide-react'

export function CityGuide() {
  const regions = [
    {
      num: '01',
      title: 'Centro & Parque das Águas',
      desc: 'Praticidade total, proximidade imediata ao icônico Parque das Águas, comércio sofisticado e gastronomia ao alcance dos pés.',
      icon: Building2,
      tag: 'Alta Demanda & Conforto'
    },
    {
      num: '02',
      title: 'Bairros Residenciais Nobres',
      desc: 'Santa Mônica, Federal, Vila Nova e Jardim Serrano: ruas arborizadas, tranquilidade e atmosfera ideal para famílias.',
      icon: Trees,
      tag: 'Família & Sossego'
    },
    {
      num: '03',
      title: 'Região Serrana & Condomínios',
      desc: 'Solar dos Lagos e encostas da Mantiqueira: privacidade, contato direto com a natureza e vistas panorâmicas de tirar o fôlego.',
      icon: Mountain,
      tag: 'Exclusividade & Natureza'
    }
  ]

  return (
    <section className="bg-[#F6F2E8] py-24 px-4 sm:px-6 lg:px-8" id="cidade">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#C89B3C]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A37926] font-bold">
              Guia Regional
            </span>
            <span className="w-5 h-[1px] bg-[#C89B3C]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0B231B] leading-tight">
            Conheça as melhores regiões de São Lourenço
          </h2>
          <p className="text-[#525A54] text-sm sm:text-base font-light mt-3">
            O Sul de Minas oferece uma qualidade de vida ímpar. Encontre o local perfeito para sua família ou seu investimento.
          </p>
        </div>

        {/* Drone Aerial Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl mb-12 border border-[#C89B3C]/30 group"
        >
          <img
            src="/sao-lourenco-drone.jpg"
            alt="Vista aérea de São Lourenço MG - Parque das Águas e Serra"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B231B]/95 via-[#0B231B]/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#C89B3C] text-[#0B231B] text-[10px] uppercase font-bold tracking-widest mb-2 shadow-md">
                <Compass className="w-3.5 h-3.5" />
                Vista Panorâmica Real
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white drop-shadow-md">
                São Lourenço · Sul de Minas Gerais
              </h3>
              <p className="text-white/80 text-xs sm:text-sm max-w-xl mt-1 font-light leading-relaxed">
                Águas minerais medicinais, ar puro da serra e segurança ímpar com alto índice de desenvolvimento humano.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#0B231B]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C89B3C]/40 text-xs text-[#E2C882] font-medium">
              <MapPin className="w-4 h-4 text-[#C89B3C]" />
              <span>Circuito das Águas Paulista & Mineiro</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Regional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((r, index) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 border-t-4 border-[#0B231B] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-[#C89B3C]">
                      {r.num}
                    </span>
                    <div className="p-3 rounded-full bg-[#0B231B]/5 text-[#0B231B]">
                      <Icon className="w-6 h-6 text-[#0B231B]" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#A37926] block mb-1">
                    {r.tag}
                  </span>
                  
                  <h3 className="font-serif text-2xl font-normal text-[#0B231B] mb-3">
                    {r.title}
                  </h3>

                  <p className="text-zinc-600 text-sm leading-relaxed font-light">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ECE5D3] flex items-center gap-2 text-xs font-semibold text-[#0B231B]">
                  <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
                  <span>São Lourenço — Circuito das Águas</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
