import React from 'react';
import { Home, Compass, MapPin, Zap, Bookmark } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#071913] py-16 px-4 md:px-8 text-[#F6F2E8]">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Grid Container
            - Mobile: 1 coluna, altura automática (sem sobreposição/encavalamento)
            - Desktop (md+): Grid responsivo de 2 a 3 colunas
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">

          {/* CARD 01 - Curadoria Personalizada */}
          <div className="w-full bg-[#0B231B] border border-[#C89B3C]/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all hover:border-[#C89B3C]/60">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold tracking-widest text-[#C89B3C] border border-[#C89B3C]/40 px-3 py-1 rounded-full uppercase">
                  01 · Curadoria Select
                </span>
                <Bookmark className="w-5 h-5 text-[#C89B3C]" />
              </div>

              <div className="my-6 text-center">
                <span className="font-serif text-6xl font-light text-[#C89B3C] block mb-2">M</span>
                <span className="text-xs font-semibold tracking-widest text-[#C89B3C] border border-[#C89B3C]/40 px-4 py-1.5 rounded-full uppercase inline-block">
                  Curadoria Personalizada
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#F6F2E8] mb-3 leading-tight">
                Imóveis que merecem sua atenção
              </h3>
              <p className="text-sm md:text-base text-[#F6F2E8]/70 leading-relaxed font-light">
                Selecionamos imóveis com padrão construtivo, localização e potencial de valorização compatíveis com quem busca comprar bem em São Lourenço.
              </p>
            </div>
          </div>

          {/* CARD 02 - Portfólio */}
          <div className="w-full bg-[#0B231B] border border-[#C89B3C]/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all hover:border-[#C89B3C]/60">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold tracking-widest text-[#C89B3C] border border-[#C89B3C]/40 px-3 py-1 rounded-full uppercase">
                  02 · Portfólio
                </span>
                <Home className="w-5 h-5 text-[#C89B3C]" />
              </div>

              {/* Filtros em Pílula / Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button className="px-4 py-1.5 rounded-lg border border-[#C89B3C]/30 text-xs font-medium text-[#F6F2E8]/70 hover:bg-[#C89B3C]/10">
                  CASAS
                </button>
                <button className="px-4 py-1.5 rounded-lg bg-[#C89B3C] text-[#0B231B] text-xs font-semibold">
                  APARTAMENTOS
                </button>
                <button className="px-4 py-1.5 rounded-lg border border-[#C89B3C]/30 text-xs font-medium text-[#F6F2E8]/70 hover:bg-[#C89B3C]/10">
                  CONDOMÍNIOS
                </button>
              </div>

              <span className="text-[10px] font-semibold tracking-widest text-[#C89B3C]/80 uppercase block mb-2">
                PORTFÓLIO SELECIONADO
              </span>

              <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#F6F2E8] mb-3 leading-tight">
                O imóvel certo para o seu momento
              </h3>
              <p className="text-sm md:text-base text-[#F6F2E8]/70 leading-relaxed font-light">
                Casas com vista para a serra, apartamentos centrais e oportunidades em condomínios selecionados — sem perder tempo com o que não faz sentido para você.
              </p>
            </div>
          </div>

          {/* CARD 03 - Rede Regional (Ocupa 2 colunas em telas maiores se desejado, ou segue fluxo de 1 coluna no mobile) */}
          <div className="w-full bg-[#0B231B] border border-[#C89B3C]/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between md:col-span-2 lg:col-span-1 transition-all hover:border-[#C89B3C]/60">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold tracking-widest text-[#C89B3C] border border-[#C89B3C]/40 px-3 py-1 rounded-full uppercase">
                  03 · Rede Regional
                </span>
                <MapPin className="w-5 h-5 text-[#C89B3C]" />
              </div>

              {/* Bússola Decorativa */}
              <div className="my-8 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-[#C89B3C]/30 flex items-center justify-center bg-[#C89B3C]/5 relative shadow-[0_0_30px_rgba(200,155,60,0.1)]">
                  <Compass className="w-8 h-8 text-[#C89B3C]" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-[#C89B3C] uppercase mt-4">
                  SÃO LOURENÇO & MANTIQUEIRA
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#F6F2E8] mb-3 leading-tight">
                São Lourenço. E muito além dela.
              </h3>
              <p className="text-sm md:text-base text-[#F6F2E8]/70 leading-relaxed font-light">
                Conectamos você às melhores oportunidades da região, atendendo clientes de grandes centros como São Paulo, Rio de Janeiro e Belo Horizonte.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;