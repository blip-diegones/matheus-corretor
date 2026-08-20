import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bed, 
  Bath, 
  Car, 
  Maximize, 
  Waves, 
  ArrowRight, 
  MapPin, 
  MessageCircle, 
  X, 
  Sparkles,
  ChevronRight
} from 'lucide-react'
import { Property } from '../data/properties'
import { FilterState } from './SearchWidget'
import { InstagramIcon } from './Icons'

interface PropertyListProps {
  properties: Property[]
  filters: FilterState
  onContactClick: (msg: string) => void
}

export function PropertyList({ properties, filters, onContactClick }: PropertyListProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  // Filter evaluation logic
  const filtered = properties.filter((prop) => {
    // Finalidade
    if (filters.finalidade !== prop.finalidade) return false

    // Tipo
    if (filters.tipo && filters.tipo !== prop.tipo) return false

    // Bairro
    if (filters.bairro && filters.bairro !== prop.bairro) return false

    // Faixa Preço
    if (filters.faixaPreco) {
      if (filters.faixaPreco === 'Ate300k' && prop.preco > 300000) return false
      if (filters.faixaPreco === '300k-500k' && (prop.preco < 300000 || prop.preco > 500000)) return false
      if (filters.faixaPreco === '500k-800k' && (prop.preco < 500000 || prop.preco > 800000)) return false
      if (filters.faixaPreco === '800k-1.2m' && (prop.preco < 800000 || prop.preco > 1200000)) return false
      if (filters.faixaPreco === 'Acima1.2m' && prop.preco < 1200000) return false
    }

    // Quartos
    if (filters.quartos && prop.quartos < parseInt(filters.quartos)) return false

    // Suítes
    if (filters.suites && prop.suites < parseInt(filters.suites)) return false

    // Vagas
    if (filters.vagas && prop.vagas < parseInt(filters.vagas)) return false

    // Piscina
    if (filters.piscina && !prop.piscina) return false

    // Código
    if (filters.codigo && !prop.codigo.toLowerCase().includes(filters.codigo.toLowerCase())) return false

    return true
  })

  const formatCurrency = (val: number, finalidade: string) => {
    const formatted = val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
    return finalidade === 'Alugar' ? `${formatted}/mês` : formatted
  }

  return (
    <section className="bg-[#EAE3D2] py-24 px-4 sm:px-6 lg:px-8" id="imoveis">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[1px] bg-[#C89B3C]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A37926] font-bold">
                Oportunidades em Destaque
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0B231B]">
              Imóveis Selecionados
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-[#525A54] font-medium">
              {filtered.length} {filtered.length === 1 ? 'imóvel disponível' : 'imóveis disponíveis'}
            </span>
            <button
              onClick={() => onContactClick('Olá Matheus! Gostaria de receber o catálogo completo de imóveis em São Lourenço.')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0B231B] hover:text-[#C89B3C] transition-colors"
            >
              <span>Ver catálogo completo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Property Grid or Empty State */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-[#DCD3BF]/60"
              >
                {/* Media with Badge & Hover Zoom */}
                <div className="relative h-64 overflow-hidden bg-zinc-200">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <span className="absolute top-4 left-4 bg-[#0B231B]/90 backdrop-blur-md text-[#E2C882] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm border border-[#C89B3C]/40">
                    {item.tag}
                  </span>

                  {/* Code Badge */}
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white/80 text-[10px] font-mono font-medium px-2 py-1 rounded">
                    Cód: {item.codigo}
                  </span>

                  {/* Price overlay on image bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-serif text-2xl font-semibold tracking-tight text-[#E2C882]">
                      {formatCurrency(item.preco, item.finalidade)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#A37926] font-bold mb-1.5">
                      <MapPin className="w-3 h-3" />
                      <span>{item.subtitulo}</span>
                    </div>

                    <h3 className="font-serif text-xl font-normal text-[#0B231B] leading-snug mb-3 group-hover:text-[#A37926] transition-colors">
                      {item.titulo}
                    </h3>

                    {/* Metadata specs */}
                    <div className="flex items-center flex-wrap gap-4 py-3 my-2 border-y border-[#ECE5D3] text-xs text-[#525A54] font-medium">
                      <span className="flex items-center gap-1">
                        <Maximize className="w-3.5 h-3.5 text-[#A37926]" />
                        {item.areaM2} m²
                      </span>
                      {item.quartos > 0 && (
                        <span className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-[#A37926]" />
                          {item.quartos} qtos
                        </span>
                      )}
                      {item.suites > 0 && (
                        <span className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5 text-[#A37926]" />
                          {item.suites} suíte{item.suites > 1 ? 's' : ''}
                        </span>
                      )}
                      {item.vagas > 0 && (
                        <span className="flex items-center gap-1">
                          <Car className="w-3.5 h-3.5 text-[#A37926]" />
                          {item.vagas} vaga{item.vagas > 1 ? 's' : ''}
                        </span>
                      )}
                      {item.piscina && (
                        <span className="flex items-center gap-1 text-[#0B231B]">
                          <Waves className="w-3.5 h-3.5 text-[#A37926]" />
                          Piscina
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedProperty(item)
                        setActivePhotoIndex(0)
                      }}
                      className="text-xs font-semibold uppercase tracking-wider text-[#0B231B] hover:text-[#A37926] transition-colors flex items-center gap-1"
                    >
                      Ver detalhes
                    </button>

                    <button
                      onClick={() => onContactClick(`Olá Matheus! Tenho interesse no imóvel ${item.codigo} - ${item.titulo} (${item.subtitulo}).`)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#0B231B] hover:bg-[#16392C] text-[#E2C882] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group-hover:bg-[#C89B3C] group-hover:text-[#0B231B]"
                    >
                      <span>Tenho interesse</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-white rounded-2xl p-12 text-center max-w-2xl mx-auto shadow-md border border-[#DCD3BF]">
            <div className="w-14 h-14 rounded-full bg-[#C89B3C]/20 text-[#A37926] flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#0B231B] mb-2 font-normal">
              Nenhum imóvel encontrado com esses filtros
            </h3>
            <p className="text-[#525A54] text-sm leading-relaxed mb-6">
              O Matheus Dias possui diversos imóveis exclusivos na carteira e em fase de captação que ainda não foram publicados no site.
            </p>
            <button
              onClick={() => onContactClick(`Olá Matheus! Procurei no site um imóvel para ${filters.finalidade} em São Lourenço mas não encontrei. Poderia me ajudar?`)}
              className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#E2C882] text-[#0B231B] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Imóvel com o Corretor</span>
            </button>
          </div>
        )}

        {/* Modal de Detalhes do Imóvel */}
        <AnimatePresence>
          {selectedProperty && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProperty(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Gallery Main Photo */}
                <div className="relative h-72 sm:h-96 bg-zinc-900">
                  <img
                    src={selectedProperty.galeria[activePhotoIndex] || selectedProperty.imagem}
                    alt={selectedProperty.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B231B] text-[#E2C882] text-xs uppercase font-bold tracking-widest px-3 py-1.5 rounded">
                    Cód: {selectedProperty.codigo} · {selectedProperty.tag}
                  </div>
                </div>

                {/* Thumbnails */}
                {selectedProperty.galeria.length > 1 && (
                  <div className="flex gap-2 p-4 bg-zinc-100 border-b border-zinc-200 overflow-x-auto">
                    {selectedProperty.galeria.map((photo, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePhotoIndex(i)}
                        className={`h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                          activePhotoIndex === i ? 'border-[#C89B3C] scale-105' : 'border-transparent opacity-70'
                        }`}
                      >
                        <img src={photo} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Details Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#A37926]">
                        {selectedProperty.subtitulo}
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#0B231B] font-medium mt-1">
                        {selectedProperty.titulo}
                      </h2>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-[10px] uppercase tracking-wider text-[#525A54] font-semibold">Valor</div>
                      <div className="font-serif text-3xl text-[#0B231B] font-bold text-[#A37926]">
                        {formatCurrency(selectedProperty.preco, selectedProperty.finalidade)}
                      </div>
                    </div>
                  </div>

                  {/* Specs Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#F6F2E8] border border-[#ECE5D3] text-sm">
                    <div>
                      <span className="text-[10px] uppercase text-[#525A54] font-semibold block">Área</span>
                      <strong className="text-[#0B231B] text-base">{selectedProperty.areaM2} m²</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#525A54] font-semibold block">Quartos / Suítes</span>
                      <strong className="text-[#0B231B] text-base">
                        {selectedProperty.quartos} ({selectedProperty.suites} suíte{selectedProperty.suites > 1 ? 's' : ''})
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#525A54] font-semibold block">Garagem</span>
                      <strong className="text-[#0B231B] text-base">{selectedProperty.vagas} vaga{selectedProperty.vagas > 1 ? 's' : ''}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#525A54] font-semibold block">Lazer</span>
                      <strong className="text-[#0B231B] text-base">{selectedProperty.piscina ? 'Com Piscina' : 'Completo'}</strong>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-serif text-lg text-[#0B231B] font-medium mb-2">Sobre este imóvel</h4>
                    <p className="text-zinc-700 text-sm leading-relaxed font-light">
                      {selectedProperty.descricao}
                    </p>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        const msg = `Olá Matheus! Gostaria de agendar uma visita para o imóvel ${selectedProperty.codigo} - ${selectedProperty.titulo}.`
                        onContactClick(msg)
                        setSelectedProperty(null)
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#C89B3C] hover:bg-[#E2C882] text-[#0B231B] py-3.5 px-6 rounded-lg font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      Agendar Visita com Matheus Dias
                    </button>

                    <button
                      onClick={() => setSelectedProperty(null)}
                      className="px-6 py-3.5 rounded-lg border border-zinc-300 hover:bg-zinc-100 text-zinc-700 text-xs font-semibold uppercase tracking-wider"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
