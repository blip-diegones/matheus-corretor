import { MapPin, Award, ArrowUp } from 'lucide-react'
import { InstagramIcon } from './Icons'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0B231B] text-[#F6F2E8]/70 pt-16 pb-12 border-t border-[#C89B3C]/20 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-white font-medium">Matheus Dias</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C882] mt-0.5 font-semibold">
                Corretor de Imóveis · São Lourenço, MG
              </span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed max-w-sm">
              Intermediação imobiliária de alto padrão com responsabilidade civil, rigor documental e curadoria exclusiva no Sul de Minas Gerais.
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="w-4 h-4 text-[#C89B3C]" />
              <span>CRECI-MG Credenciado · Registro Regular</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Navegação Rápida</h4>
            <ul className="space-y-2">
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais Boutique</a>
              </li>
              <li>
                <a href="#imoveis" className="hover:text-white transition-colors">Catálogo de Imóveis</a>
              </li>
              <li>
                <a href="#por-que-matheus" className="hover:text-white transition-colors">Por Que Escolher Matheus</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações de Clientes</a>
              </li>
              <li>
                <a href="#cidade" className="hover:text-white transition-colors">Bairros de São Lourenço</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social (4 cols) */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Contato & Atendimento</h4>
            <div className="space-y-2 text-white/70">
              <a
                href="https://www.instagram.com/matheusdias_corretor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E2C882] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@matheusdias_corretor</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span>São Lourenço — Minas Gerais, Brasil</span>
              </div>
              <p className="text-[11px] text-white/50 pt-1">
                Atendimento presencial com agendamento prévio.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Matheus Dias Corretor de Imóveis. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Desenvolvido com excelência</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-[#C89B3C]/20 text-white/70 hover:text-[#E2C882] transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
