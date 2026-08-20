import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, RotateCcw, Check, Sparkles } from 'lucide-react'
import { BAIRROS_LIST } from '../data/properties'

export interface FilterState {
  finalidade: 'Comprar' | 'Alugar' | 'Temporada'
  tipo: string
  bairro: string
  faixaPreco: string
  quartos: string
  suites: string
  vagas: string
  codigo: string
  piscina: boolean
}

interface SearchWidgetProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onSearchSubmit: () => void
  onResetFilters: () => void
}

export function SearchWidget({
  filters,
  onFilterChange,
  onSearchSubmit,
  onResetFilters,
}: SearchWidgetProps) {
  const [advancedOpen, setAdvancedOpen] = useState(false)

  const handleFinalidadeChange = (finalidade: 'Comprar' | 'Alugar' | 'Temporada') => {
    onFilterChange({ ...filters, finalidade })
  }

  const handleChange = (field: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [field]: value })
  }

  return (
    <div className="w-full bg-[#0B231B]/75 backdrop-blur-2xl border border-[#C89B3C]/35 rounded-xl shadow-2xl overflow-hidden transition-all duration-300">
      {/* Tabs Finalidade */}
      <div className="flex border-b border-white/10 bg-black/20">
        {(['Comprar', 'Alugar', 'Temporada'] as const).map((tab) => {
          const isActive = filters.finalidade === tab
          const label = tab === 'Alugar' ? 'Locação Anual' : tab
          return (
            <button
              key={tab}
              type="button"
              onClick={() => handleFinalidadeChange(tab)}
              className={`flex-1 py-3 sm:py-4 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest transition-all relative cursor-pointer ${
                isActive ? 'text-white bg-[#C89B3C]/10' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isActive && <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />}
                {label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeSearchTab"
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C89B3C]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Main Form Fields */}
      <div className="p-4 sm:p-6 md:p-7 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
          {/* Tipo de Imóvel */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="searchTipo" className="block text-[10px] uppercase font-bold tracking-wider text-[#E2C882]">
              Tipo de Imóvel
            </label>
            <select
              id="searchTipo"
              value={filters.tipo}
              onChange={(e) => handleChange('tipo', e.target.value)}
              className="w-full bg-white text-[#121A16] px-3.5 py-3 rounded text-sm font-medium focus:ring-2 focus:ring-[#C89B3C] focus:outline-none cursor-pointer"
            >
              <option value="">Todos os tipos</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Terreno">Terreno / Lote</option>
              <option value="Comercial">Comercial</option>
              <option value="Cobertura">Cobertura</option>
            </select>
          </div>

          {/* Bairro */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="searchBairro" className="block text-[10px] uppercase font-bold tracking-wider text-[#E2C882]">
              Bairro em São Lourenço
            </label>
            <select
              id="searchBairro"
              value={filters.bairro}
              onChange={(e) => handleChange('bairro', e.target.value)}
              className="w-full bg-white text-[#121A16] px-3.5 py-3 rounded text-sm font-medium focus:ring-2 focus:ring-[#C89B3C] focus:outline-none cursor-pointer"
            >
              {BAIRROS_LIST.map((b) => (
                <option key={b} value={b === 'Todos os bairros' ? '' : b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Faixa de Preço */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="searchFaixa" className="block text-[10px] uppercase font-bold tracking-wider text-[#E2C882]">
              Faixa de Valor
            </label>
            <select
              id="searchFaixa"
              value={filters.faixaPreco}
              onChange={(e) => handleChange('faixaPreco', e.target.value)}
              className="w-full bg-white text-[#121A16] px-3.5 py-3 rounded text-sm font-medium focus:ring-2 focus:ring-[#C89B3C] focus:outline-none cursor-pointer"
            >
              <option value="">Qualquer valor</option>
              <option value="Ate300k">Até R$ 300 mil</option>
              <option value="300k-500k">R$ 300 mil a R$ 500 mil</option>
              <option value="500k-800k">R$ 500 mil a R$ 800 mil</option>
              <option value="800k-1.2m">R$ 800 mil a R$ 1,2 milhão</option>
              <option value="Acima1.2m">Acima de R$ 1,2 milhão</option>
            </select>
          </div>

          {/* Botão Buscar */}
          <div>
            <button
              type="button"
              onClick={onSearchSubmit}
              className="w-full flex items-center justify-center gap-2 bg-[#C89B3C] hover:bg-[#E2C882] text-[#0B231B] py-3 px-6 rounded text-sm font-bold uppercase tracking-wider transition-all duration-200 transform active:scale-98 shadow-md"
            >
              <Search className="w-4 h-4" />
              <span>Buscar Imóveis</span>
            </button>
          </div>
        </div>

        {/* Action Toggles */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => setAdvancedOpen(!advancedOpen)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E2C882] hover:text-white transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{advancedOpen ? 'Menos Filtros' : 'Filtros Avançados'}</span>
          </button>

          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white/90 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Limpar filtros</span>
          </button>
        </div>

        {/* Advanced Filters Section */}
        <AnimatePresence>
          {advancedOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-left"
            >
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-semibold text-white/70">Quartos</label>
                <select
                  value={filters.quartos}
                  onChange={(e) => handleChange('quartos', e.target.value)}
                  className="w-full bg-white/90 text-zinc-900 px-3 py-2 rounded text-xs focus:ring-1 focus:ring-[#C89B3C]"
                >
                  <option value="">Indiferente</option>
                  <option value="1">1+ quarto</option>
                  <option value="2">2+ quartos</option>
                  <option value="3">3+ quartos</option>
                  <option value="4">4+ quartos</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-semibold text-white/70">Suítes</label>
                <select
                  value={filters.suites}
                  onChange={(e) => handleChange('suites', e.target.value)}
                  className="w-full bg-white/90 text-zinc-900 px-3 py-2 rounded text-xs focus:ring-1 focus:ring-[#C89B3C]"
                >
                  <option value="">Indiferente</option>
                  <option value="1">1+ suíte</option>
                  <option value="2">2+ suítes</option>
                  <option value="3">3+ suítes</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-semibold text-white/70">Vagas de Garagem</label>
                <select
                  value={filters.vagas}
                  onChange={(e) => handleChange('vagas', e.target.value)}
                  className="w-full bg-white/90 text-zinc-900 px-3 py-2 rounded text-xs focus:ring-1 focus:ring-[#C89B3C]"
                >
                  <option value="">Indiferente</option>
                  <option value="1">1+ vaga</option>
                  <option value="2">2+ vagas</option>
                  <option value="3">3+ vagas</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-semibold text-white/70">Cód. Imóvel</label>
                <input
                  type="text"
                  placeholder="Ex: MV01"
                  value={filters.codigo}
                  onChange={(e) => handleChange('codigo', e.target.value)}
                  className="w-full bg-white/90 text-zinc-900 px-3 py-2 rounded text-xs focus:ring-1 focus:ring-[#C89B3C]"
                />
              </div>

              <div className="flex items-end col-span-1 sm:col-span-2 lg:col-span-1">
                <button
                  type="button"
                  onClick={() => handleChange('piscina', !filters.piscina)}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded text-xs font-semibold transition-all border ${
                    filters.piscina
                      ? 'bg-[#C89B3C]/20 border-[#C89B3C] text-white'
                      : 'bg-white/5 border-white/15 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-sm flex items-center justify-center border ${
                      filters.piscina ? 'bg-[#C89B3C] border-[#C89B3C]' : 'border-white/40'
                    }`}
                  >
                    {filters.piscina && <Check className="w-3 h-3 text-[#0B231B]" />}
                  </div>
                  <span>Com piscina</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
