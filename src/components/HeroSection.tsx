import { motion } from 'framer-motion'
import { Award, MapPin, KeyRound } from 'lucide-react'
import { SearchWidget, FilterState } from './SearchWidget'

interface HeroSectionProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onSearchSubmit: () => void
  onResetFilters: () => void
}

export function HeroSection({
  filters,
  onFilterChange,
  onSearchSubmit,
  onResetFilters,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[94vh] flex flex-col justify-end text-white overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16">
      {/* Background Image: Drone Photo of São Lourenço - MG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('/sao-lourenco-drone.jpg')`,
        }}
      >
        {/* Cinematic Dual Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B231B]/80 via-[#0B231B]/40 to-[#0B231B]" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0B231B]/50 to-[#0B231B]/95" />
      </div>

      {/* Watermark */}
      <div
        className="absolute top-[16%] right-[-3%] font-serif text-[18vw] sm:text-[13vw] font-light text-white/[0.04] uppercase select-none pointer-events-none tracking-tighter whitespace-nowrap z-0 overflow-hidden max-w-full"
      >
        SÃO LOURENÇO
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <span className="w-7 h-[1px] bg-[#C89B3C] inline-block" />
          <span className="text-xs uppercase tracking-[0.28em] text-[#E2C882] font-semibold">
            Atendimento Boutique & Exclusivo
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight max-w-4xl text-white mb-5"
        >
          Seu próximo endereço <br className="hidden sm:inline" />
          tem vista para <em className="italic font-normal text-gold-gradient">a serra.</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed mb-10"
        >
          Curadoria imobiliária sob medida para quem busca morar ou investir em São Lourenço
          com total segurança jurídica, discrição e conhecimento aprofundado do Sul de Minas.
        </motion.p>

        {/* Search Engine & Authority Strip Grouped Together (Aligned 100%) */}
        <div className="max-w-4xl w-full">
          {/* Search Engine Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-5"
          >
            <SearchWidget
              filters={filters}
              onFilterChange={onFilterChange}
              onSearchSubmit={onSearchSubmit}
              onResetFilters={onResetFilters}
            />
          </motion.div>

          {/* Authority Badges Strip Aligned with Search Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/70 font-medium px-1 pt-1"
          >
            <span className="flex items-center gap-2 text-white/90">
              <Award className="w-3.5 h-3.5 text-[#C89B3C]" />
              CRECI-MG Credenciado
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
            <span className="flex items-center gap-2 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
              São Lourenço — Sul de Minas
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
            <span className="flex items-center gap-2 text-white/90">
              <KeyRound className="w-3.5 h-3.5 text-[#C89B3C]" />
              Compra • Venda • Locação
            </span>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="w-full mt-12 bg-[#0B231B] border-y border-[#C89B3C]/20 py-3.5 overflow-hidden whitespace-nowrap">
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.28em] font-medium text-[#E2C882] animate-marquee">
          <span>Curadoria Exclusiva de Alto Padrão</span> • 
          <span>São Lourenço — Sul de Minas</span> • 
          <span>Segurança Jurídica & Documental</span> • 
          <span>Atendimento Personalizado Matheus Dias</span> • 
          <span>Vista para as Serras & Condomínios Fechados</span> •
          <span>Curadoria Exclusiva de Alto Padrão</span> • 
          <span>São Lourenço — Sul de Minas</span> • 
          <span>Segurança Jurídica & Documental</span> • 
          <span>Atendimento Personalizado Matheus Dias</span> • 
          <span>Vista para as Serras & Condomínios Fechados</span> •
        </div>
      </div>
    </section>
  )
}
