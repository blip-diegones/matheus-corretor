import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'
import { InstagramIcon } from './Icons'

interface AboutSectionProps {
  onContactClick: (msg: string) => void
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section className="bg-[#0B231B] text-[#F6F2E8] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="sobre">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-at-c from-[#16392C]/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Frame Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative p-3.5 rounded-2xl bg-gradient-to-b from-[#C89B3C]/35 via-transparent to-[#C89B3C]/15 border border-[#C89B3C]/40 shadow-2xl">
              {/* Outer decorative subtle offset border */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#C89B3C]/25 pointer-events-none" />
              
              <div className="w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden bg-[#16392C] relative shadow-inner">
                <img
                  src="/matheus.jpg"
                  alt="Matheus Dias Corretor de Imóveis"
                  className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-95 hover:scale-102 transition-transform duration-700"
                />
                
                {/* Subtle gradient overlay on bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B231B] via-[#0B231B]/20 to-transparent opacity-80" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B231B]/95 backdrop-blur-md border border-[#C89B3C]/45 p-3 rounded-lg flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2C882] block">
                      Matheus Dias
                    </span>
                    <span className="text-[11px] text-white/80">Corretor Credenciado</span>
                  </div>
                  <span className="text-[10px] bg-[#C89B3C]/20 text-[#E2C882] font-mono px-2 py-1 rounded border border-[#C89B3C]/40 font-semibold">
                    CRECI-MG
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Authority Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#C89B3C]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#E2C882] font-semibold">
                Sobre o Corretor
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Experiência digital ágil com o cuidado e a tradição do <em className="text-gold-gradient italic">Sul de Minas.</em>
            </h2>

            <div className="inline-block bg-[#C89B3C]/15 border border-[#C89B3C]/40 text-[#E2C882] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded">
              CRECI-MG · Registro Ativo & Certificado
            </div>

            <p className="text-white/80 text-base font-light leading-relaxed">
              Atuação especializada na intermediação de compra, venda e locação de imóveis residenciais e comerciais em São Lourenço. O objetivo é unir atendimento dedicado, profundo conhecimento geográfico da região da Mantiqueira e processos descomplicados.
            </p>

            {/* Bullet Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Curadoria Personalizada</h4>
                  <p className="text-xs text-white/60 mt-0.5">Foco no seu objetivo financeiro e estilo de vida.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Conformidade Legal</h4>
                  <p className="text-xs text-white/60 mt-0.5">Dossiê documental verificado antes de qualquer proposta.</p>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onContactClick('Olá Matheus! Gostaria de conversar sobre a busca de um imóvel.')}
                className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#E2C882] text-[#0B231B] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C89B3C]/20"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Conversar com Matheus Dias</span>
              </button>

              <a
                href="#imoveis"
                className="inline-flex items-center gap-2 border border-[#C89B3C]/40 hover:border-[#C89B3C] text-white hover:text-[#E2C882] text-xs font-semibold uppercase tracking-wider px-5 py-3.5 rounded transition-all"
              >
                <span>Explorar Portfólio</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
