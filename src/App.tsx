import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FilterState } from './components/SearchWidget'
import { DiferenciaisSection } from './components/DiferenciaisSection'
import { PropertyList } from './components/PropertyList'
import { RealEstateBento } from './components/RealEstateBento'
import { SocialProof } from './components/SocialProof'
import { AboutSection } from './components/AboutSection'
import { CityGuide } from './components/CityGuide'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'
import { PROPERTIES } from './data/properties'

const IG_USERNAME = 'matheusdias_corretor'

export function App() {
  const [filters, setFilters] = useState<FilterState>({
    finalidade: 'Comprar',
    tipo: '',
    bairro: '',
    faixaPreco: '',
    quartos: '',
    suites: '',
    vagas: '',
    codigo: '',
    piscina: false,
  })

  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (text: string) => {
    setToastMessage(text)
    setTimeout(() => {
      setToastMessage(null)
    }, 4000)
  }

  const handleContact = (message?: string) => {
    const textToSend =
      message || 'Olá Matheus! Vi o seu site e gostaria de atendimento para encontrar um imóvel em São Lourenço.'

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToSend)
        .then(() => {
          showToast('✓ Mensagem copiada! Abrindo o Instagram do Matheus Dias...')
        })
        .catch(() => {
          showToast('Abrindo o Instagram do Matheus Dias...')
        })
    } else {
      showToast('Abrindo o Instagram do Matheus Dias...')
    }

    setTimeout(() => {
      window.open(`https://ig.me/m/${IG_USERNAME}`, '_blank')
    }, 800)
  }

  const handleSearchSubmit = () => {
    const element = document.getElementById('imoveis')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleResetFilters = () => {
    setFilters({
      finalidade: 'Comprar',
      tipo: '',
      bairro: '',
      faixaPreco: '',
      quartos: '',
      suites: '',
      vagas: '',
      codigo: '',
      piscina: false,
    })
    showToast('Filtros restaurados!')
  }

  return (
    <div className="min-h-screen bg-[#F6F2E8] text-[#121A16] flex flex-col font-sans selection:bg-[#C89B3C] selection:text-[#0B231B]">
      {/* Header & Fixed Navigation */}
      <Navbar onContactClick={handleContact} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero with Search Engine */}
        <HeroSection
          filters={filters}
          onFilterChange={setFilters}
          onSearchSubmit={handleSearchSubmit}
          onResetFilters={handleResetFilters}
        />

        {/* 4 Pillars Editorial Differentials */}
        <DiferenciaisSection />

        {/* Property Portfolio with Filter Matching */}
        <PropertyList
          properties={PROPERTIES}
          filters={filters}
          onContactClick={handleContact}
        />

        {/* Bento Grid Exclusivo Matheus Dias */}
        <RealEstateBento />

        {/* Social Proof & Reviews */}
        <SocialProof />

        {/* About Matheus Dias */}
        <AboutSection onContactClick={handleContact} />

        {/* City Guide */}
        <CityGuide />

        {/* Final CTA */}
        <ContactCTA onContactClick={handleContact} />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating Instagram Action & Toast Feedback */}
      <FloatingActions
        toastMessage={toastMessage}
        onContactClick={handleContact}
      />
    </div>
  )
}

export default App
