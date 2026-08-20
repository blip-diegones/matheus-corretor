import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle2 } from 'lucide-react'

export function SocialProof() {
  const testimonials = [
    {
      id: 1,
      nome: 'Ricardo & Família',
      origem: 'Comprador · Santa Mônica',
      texto:
        'O Matheus conduziu toda a negociação da nossa casa em São Lourenço com uma clareza impressionante. Transmite muita segurança, cuidou de cada detalhe das certidões e tornou o processo muito leve.',
      rating: 5,
    },
    {
      id: 2,
      nome: 'Camila Silveira',
      origem: 'Investidora · Centro',
      texto:
        'Atendimento de alto nível e sem nenhuma enrolação. Ele entendeu com exatidão o perfil de imóvel e retorno que eu buscava na cidade. Recomendo de olhos fechados!',
      rating: 5,
    },
    {
      id: 3,
      nome: 'Dr. Eduardo Moreira',
      origem: 'Comprador · Solar dos Lagos',
      texto:
        'Excelente conhecimento do mercado imobiliário do Sul de Minas. A intermediação foi impecável desde a primeira visita até a assinatura da escritura definitiva.',
      rating: 5,
    }
  ]

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-[#ECE5D3]" id="avaliacoes">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Score Box (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-[#F6F2E8] p-8 sm:p-10 rounded-2xl border-l-4 border-[#C89B3C] shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A37926] font-bold block mb-2">
                Excelência Reconhecida
              </span>
              <div className="font-serif text-5xl sm:text-6xl text-[#0B231B] font-normal leading-none mb-3">
                4.9 <span className="text-2xl text-[#525A54] font-sans">/ 5.0</span>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 text-[#C89B3C] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C89B3C]" />
                ))}
              </div>

              <p className="text-xs uppercase tracking-wider text-[#525A54] font-semibold leading-relaxed">
                Avaliação média com base em clientes atendidos e transações imobiliárias realizadas em São Lourenço - MG.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ECE5D3] flex items-center gap-2 text-xs text-[#0B231B] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#C89B3C]" />
              <span>100% de Transações Documentalmente Aprovadas</span>
            </div>
          </motion.div>

          {/* Right Testimonial Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#F6F2E8] p-6 rounded-xl border border-[#ECE5D3] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#C89B3C]/50 mb-3" />
                  <p className="font-serif italic text-sm text-[#121A16]/85 leading-relaxed mb-4">
                    "{t.texto}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE5D3]">
                  <strong className="block text-xs uppercase tracking-wider text-[#0B231B] font-bold">
                    {t.nome}
                  </strong>
                  <span className="text-[11px] text-[#A37926] font-medium block mt-0.5">
                    {t.origem}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
