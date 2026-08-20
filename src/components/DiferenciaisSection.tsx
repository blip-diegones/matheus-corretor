import { motion } from 'framer-motion'
import { MapPin, UserCheck, ShieldAlert, Sparkles } from 'lucide-react'

export function DiferenciaisSection() {
  const items = [
    {
      num: '01',
      title: 'Conhecimento Local',
      desc: 'Entendimento aprofundado da topografia, história e do potencial real de valorização de cada bairro de São Lourenço.',
      icon: MapPin
    },
    {
      num: '02',
      title: 'Acompanhamento Direto',
      desc: 'Comunicação transparente e ágil sem intermediários, desde a primeira visita até a assinatura da escritura e entrega das chaves.',
      icon: UserCheck
    },
    {
      num: '03',
      title: 'Segurança Documental',
      desc: 'Auditoria e conferência prévia de certidões, matrículas e histórico fiscal para assegurar uma transação sem surpresas.',
      icon: ShieldAlert
    },
    {
      num: '04',
      title: 'Curadoria Eficiente',
      desc: 'Filtramos o mercado para apresentar apenas opções alinhadas aos seus critérios, economizando seu tempo.',
      icon: Sparkles
    }
  ]

  return (
    <section className="bg-[#F6F2E8] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#ECE5D3]" id="diferenciais">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#C89B3C]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A37926] font-bold">
              Atuação Diferenciada
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0B231B] leading-tight">
            A tranquilidade de quem conta com especialistas no mercado do Sul de Minas.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="border-t border-[#0B231B]/20 pt-6 flex flex-col justify-between group hover:border-[#C89B3C] transition-colors"
            >
              <div>
                <span className="font-serif text-4xl text-[#C89B3C] font-light block mb-3 group-hover:text-[#0B231B] transition-colors">
                  {item.num}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#0B231B] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#525A54] text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
