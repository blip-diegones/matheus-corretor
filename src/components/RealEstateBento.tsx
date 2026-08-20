import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Smartphone, 
  Compass, 
  Zap, 
  FileCheck2, 
  Scale, 
  MapPin, 
  Award,
  Sparkles,
  Home
} from 'lucide-react'

function TypeLuxuryTester() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.35 : 1))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.span
        className="font-serif text-5xl md:text-7xl text-[#E2C882] font-normal tracking-tighter"
        animate={{ scale }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        M
      </motion.span>
      <span className="text-[10.5px] uppercase tracking-[0.28em] text-[#E2C882] mt-2 font-semibold bg-[#C89B3C]/10 border border-[#C89B3C]/30 px-3 py-1 rounded-full">
        Curadoria Personalizada
      </span>
    </div>
  )
}

function CategoryPillsAnimation() {
  const [activeCategory, setActiveCategory] = useState(0)
  const categories = ["Casas", "Apartamentos", "Condomínios"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % 3)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full flex flex-col items-center justify-center gap-2 w-full max-w-[220px] mx-auto">
      <div className="flex items-center gap-1.5 w-full justify-center">
        {categories.map((cat, idx) => {
          const isActive = activeCategory === idx
          return (
            <motion.div
              key={cat}
              className={`px-2.5 py-1.5 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all border ${
                isActive
                  ? 'bg-[#C89B3C] text-[#0B231B] border-[#C89B3C] shadow-md scale-105'
                  : 'bg-white/5 text-white/50 border-white/10'
              }`}
              animate={{ scale: isActive ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {cat}
            </motion.div>
          )
        })}
      </div>
      <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono mt-1">
        Portfólio Selecionado
      </span>
    </div>
  )
}

function DirectServiceIndicator() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2.5">
      <div className="inline-flex items-center gap-2 bg-[#C89B3C]/15 border border-[#C89B3C]/40 px-3.5 py-1.5 rounded-full">
        <span className="w-2 h-2 rounded-full bg-[#E2C882] animate-ping" />
        <span className="text-xs font-serif font-medium text-[#E2C882] tracking-wide">
          Atendimento Direto
        </span>
      </div>
      <span className="text-[11px] text-white/60 tracking-wider uppercase font-medium">
        Sem intermediários · Fale com Matheus
      </span>
    </div>
  )
}

function SecurityEscudo() {
  const [shields, setShields] = useState([
    { id: 1, label: 'Matrícula', active: true },
    { id: 2, label: 'Certidões', active: false },
    { id: 3, label: 'Contrato', active: false }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setShields(prev => {
        const nextIndex = prev.findIndex(s => !s.active)
        if (nextIndex === -1) {
          return prev.map((s, i) => ({ ...s, active: i === 0 }))
        }
        return prev.map((s, i) => i === nextIndex ? { ...s, active: true } : s)
      })
    }, 900)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full gap-3">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          className={`px-3.5 py-2.5 rounded-lg flex flex-col items-center justify-center border transition-all ${
            shield.active 
              ? 'bg-[#C89B3C]/20 border-[#C89B3C] text-white shadow-lg shadow-[#C89B3C]/10' 
              : 'bg-white/5 border-white/10 text-white/40'
          }`}
          animate={{ scale: shield.active ? 1.06 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <ShieldCheck className={`w-5 h-5 mb-1 ${shield.active ? 'text-[#E2C882]' : 'text-zinc-500'}`} />
          <span className="text-[10px] uppercase font-bold tracking-wider">{shield.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

function RegionalPulseMap() {
  const [pulses] = useState([0, 1, 2])

  return (
    <div className="flex flex-col items-center justify-center h-full relative text-center">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] flex items-center justify-center z-10 shadow-lg shadow-[#C89B3C]/20">
          <Compass className="w-8 h-8 text-[#E2C882]" />
        </div>
        {pulses.map((pulse) => (
          <motion.div
            key={pulse}
            className="absolute w-16 h-16 border border-[#C89B3C]/40 rounded-full"
            initial={{ scale: 0.7, opacity: 1 }}
            animate={{ scale: 2.8, opacity: 0 }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: pulse * 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      <span className="text-[11px] uppercase tracking-widest text-[#E2C882] mt-4 font-semibold z-10">
        São Lourenço & Mantiqueira
      </span>
    </div>
  )
}

export function RealEstateBento() {
  return (
    <section className="bg-[#0B231B] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#C89B3C]/20" id="por-que-matheus">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C89B3C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Elegante & Quiet Luxury */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-[#E2C882] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Por Que Escolher Matheus Dias</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight mb-4">
            Nós filtramos. Você escolhe. <br className="hidden sm:inline" />
            Nós verificamos. <em className="text-gold-gradient italic">Você decide.</em>
          </h2>
          <p className="text-white/75 text-base sm:text-lg font-light leading-relaxed">
            Uma assessoria imobiliária boutique pautada em curadoria criteriosa, redução real de risco e acompanhamento direto do primeiro contato à entrega das chaves.
          </p>
        </div>

        {/* Bento Grid 6-columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[230px]">
          
          {/* 01 · CURADORIA SELETIVA - Tall (2x2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-[#122A22]/90 border border-[#C89B3C]/30 rounded-2xl p-7 flex flex-col justify-between hover:border-[#C89B3C] transition-all duration-300 shadow-xl group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015, backgroundColor: "rgba(22, 57, 44, 0.95)" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2C882] bg-[#C89B3C]/10 px-2.5 py-1 rounded">
                01 · Curadoria Seletiva
              </span>
              <Award className="w-5 h-5 text-[#C89B3C]" />
            </div>

            <div className="flex-1 my-4">
              <TypeLuxuryTester />
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="font-serif text-xl text-white font-medium">
                Imóveis que merecem sua atenção
              </h3>
              <p className="text-white/70 text-xs mt-1 leading-relaxed font-light">
                Selecionamos imóveis com padrão construtivo, localização e potencial de valorização compatíveis com quem busca comprar bem em São Lourenço.
              </p>
            </div>
          </motion.div>

          {/* 02 · PORTFÓLIO - Standard (2x1) */}
          <motion.div
            className="md:col-span-2 bg-[#122A22]/90 border border-[#C89B3C]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#C89B3C] transition-all duration-300 shadow-xl group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.99 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2C882] bg-[#C89B3C]/10 px-2 py-0.5 rounded">
                02 · Portfólio
              </span>
              <Home className="w-4 h-4 text-[#C89B3C]" />
            </div>

            <div className="flex-1 my-2">
              <CategoryPillsAnimation />
            </div>

            <div>
              <h3 className="font-serif text-lg text-white font-medium">O imóvel certo para o seu momento</h3>
              <p className="text-white/70 text-xs mt-0.5 font-light">
                Casas com vista para a serra, apartamentos centrais e oportunidades em condomínios selecionados — sem perder tempo com o que não faz sentido para você.
              </p>
            </div>
          </motion.div>

          {/* 03 · REDE REGIONAL - Tall (2x2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-[#122A22]/90 border border-[#C89B3C]/30 rounded-2xl p-7 flex flex-col justify-between hover:border-[#C89B3C] transition-all duration-300 shadow-xl group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.015, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2C882] bg-[#C89B3C]/10 px-2.5 py-1 rounded">
                03 · Rede Regional
              </span>
              <MapPin className="w-5 h-5 text-[#C89B3C]" />
            </div>

            <div className="flex-1 my-4 flex items-center justify-center">
              <RegionalPulseMap />
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="font-serif text-xl text-white font-medium">
                São Lourenço. E muito além dela.
              </h3>
              <p className="text-white/70 text-xs mt-1 leading-relaxed font-light">
                Conectamos você às melhores oportunidades da região e a compradores de grandes centros como São Paulo, Rio de Janeiro e Belo Horizonte.
              </p>
            </div>
          </motion.div>

          {/* 04 · AGILIDADE - Standard (2x1) */}
          <motion.div
            className="md:col-span-2 bg-[#122A22]/90 border border-[#C89B3C]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#C89B3C] transition-all duration-300 shadow-xl group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 0.99 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2C882] bg-[#C89B3C]/10 px-2 py-0.5 rounded">
                04 · Agilidade
              </span>
              <Zap className="w-4 h-4 text-[#C89B3C]" />
            </div>

            <div className="flex-1 my-1">
              <DirectServiceIndicator />
            </div>

            <div>
              <h3 className="font-serif text-lg text-white font-medium">Fale direto com quem entende do imóvel</h3>
              <p className="text-white/70 text-xs mt-0.5 font-light">
                Atendimento próximo, respostas rápidas e acompanhamento em cada etapa — do primeiro contato à decisão de compra.
              </p>
            </div>
          </motion.div>

          {/* 05 · JURÍDICO & COMPLIANCE - Wide (3x1) */}
          <motion.div
            className="md:col-span-3 bg-[#122A22]/90 border border-[#C89B3C]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#C89B3C] transition-all duration-300 shadow-xl group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 0.99 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2C882] bg-[#C89B3C]/10 px-2 py-0.5 rounded">
                05 · Jurídico & Compliance
              </span>
              <Scale className="w-4 h-4 text-[#C89B3C]" />
            </div>

            <div className="flex-1 my-2">
              <SecurityEscudo />
            </div>

            <div>
              <h3 className="font-serif text-lg text-white font-medium flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#C89B3C]" />
                Compre com segurança, não com dúvida
              </h3>
              <p className="text-white/70 text-xs mt-0.5 font-light">
                Antes de avançar, verificamos documentação, certidões e condições do imóvel para que você tome sua decisão com mais segurança. Mais tranquilidade para negociar, menos surpresas depois.
              </p>
            </div>
          </motion.div>

          {/* 06 · EXPERIÊNCIA DIGITAL - Wide (3x1) */}
          <motion.div
            className="md:col-span-3 bg-[#122A22]/90 border border-[#C89B3C]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#C89B3C] transition-all duration-300 shadow-xl group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 0.99 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2C882] bg-[#C89B3C]/10 px-2 py-0.5 rounded">
                06 · Experiência Digital
              </span>
              <Smartphone className="w-4 h-4 text-[#C89B3C]" />
            </div>

            <div className="flex-1 flex items-center justify-center my-2">
              <div className="flex items-center gap-3">
                <Smartphone className="w-9 h-9 text-[#E2C882]" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Dossiê Completo no seu WhatsApp</div>
                  <div className="text-[11px] text-white/60">Vídeos, plantas e informações do imóvel em um só lugar</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg text-white font-medium">Conheça o imóvel antes de visitá-lo</h3>
              <p className="text-white/70 text-xs mt-0.5 font-light">
                Receba fotos, vídeos, plantas e detalhes diretamente no WhatsApp e filtre suas melhores opções antes de sair de casa.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
