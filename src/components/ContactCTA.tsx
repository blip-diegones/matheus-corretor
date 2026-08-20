import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { InstagramIcon } from './Icons'

interface ContactCTAProps {
  onContactClick: (msg: string) => void
}

export function ContactCTA({ onContactClick }: ContactCTAProps) {
  return (
    <section className="bg-[#EAE3D2] py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C89B3C]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#A37926] font-bold">
              Atendimento Direto & Sem Fila
            </span>
            <span className="w-6 h-[1px] bg-[#C89B3C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0B231B] leading-tight mb-4">
            Pronto para dar o próximo passo rumo ao seu imóvel?
          </h2>

          <p className="text-[#525A54] text-base max-w-xl mx-auto leading-relaxed mb-8">
            Envie uma mensagem e receba um atendimento personalizado, confidencial e alinhado exatamente ao que você procura em São Lourenço.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onContactClick('Olá Matheus! Gostaria de uma consultoria imobiliária personalizada em São Lourenço.')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0B231B] hover:bg-[#16392C] text-[#E2C882] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-xl"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Chamar Matheus no Instagram</span>
            </button>

            <button
              onClick={() => onContactClick('Olá Matheus! Gostaria de agendar uma conversa rápida para tirar dúvidas sobre um imóvel.')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C89B3C] hover:bg-[#E2C882] text-[#0B231B] px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar Mensagem Direta</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
