import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Compass, Phone } from 'lucide-react'
import { InstagramIcon } from './Icons'

interface NavbarProps {
  onContactClick: (msg?: string) => void
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Imóveis', href: '#imoveis' },
    { label: 'Por Que Escolher', href: '#por-que-matheus' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'A Cidade', href: '#cidade' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B231B]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C89B3C]/20'
          : 'bg-gradient-to-b from-[#0B231B]/90 via-[#0B231B]/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group text-left">
            <span className="font-serif text-2xl md:text-3xl text-white font-medium tracking-tight group-hover:text-[#E2C882] transition-colors">
              Matheus Dias
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#E2C882] font-medium mt-0.5">
              Corretor de Imóveis · CRECI-MG
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C89B3C] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onContactClick('Olá, Matheus! Gostaria de atendimento para encontrar um imóvel em São Lourenço.')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#C89B3C] hover:bg-[#E2C882] text-[#0B231B] text-xs font-semibold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#C89B3C]/20"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </button>

            <button
              onClick={() => onContactClick('Olá Matheus! Gostaria de agendar uma consultoria.')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#C89B3C]/50 hover:border-[#C89B3C] text-white hover:text-[#E2C882] text-xs font-medium uppercase tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span className="hidden lg:inline">Fale Comigo</span>
            </button>

            {/* Mobile Burger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded text-white hover:text-[#E2C882] focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B231B]/98 border-b border-[#C89B3C]/20 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 hover:text-[#E2C882] text-base font-medium transition-colors py-1 flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <Compass className="w-4 h-4 text-[#C89B3C]/60" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onContactClick('Olá, Matheus! Gostaria de atendimento via Instagram.')
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded bg-[#C89B3C] text-[#0B231B] text-xs font-bold uppercase tracking-wider"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Atendimento no Instagram
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
