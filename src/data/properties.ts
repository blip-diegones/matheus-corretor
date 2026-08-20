export interface Property {
  id: string
  codigo: string
  titulo: string
  subtitulo: string
  tipo: 'Casa' | 'Apartamento' | 'Terreno' | 'Comercial' | 'Cobertura'
  finalidade: 'Comprar' | 'Alugar' | 'Temporada'
  bairro: string
  cidade: string
  preco: number
  areaM2: number
  quartos: number
  suites: number
  vagas: number
  piscina: boolean
  tag: string
  imagem: string
  galeria: string[]
  destaque?: boolean
  descricao: string
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    codigo: 'MV01',
    titulo: 'Mansão Contemporânea com Vista para a Serra',
    subtitulo: 'Santa Mônica · São Lourenço',
    tipo: 'Casa',
    finalidade: 'Comprar',
    bairro: 'Santa Mônica',
    cidade: 'São Lourenço',
    preco: 1850000,
    areaM2: 420,
    quartos: 4,
    suites: 2,
    vagas: 4,
    piscina: true,
    tag: 'Alto Padrão',
    imagem: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    galeria: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    destaque: true,
    descricao: 'Residência exclusiva com acabamentos em madeira nobre e granito, living integrado com pé-direito duplo, espaço gourmet completo com piscina aquecida e vista panorâmica indevassável da serra da Mantiqueira.'
  },
  {
    id: '2',
    codigo: 'MV02',
    titulo: 'Casa Térrea com Quintal Ampliado e Pomar',
    subtitulo: 'Federal · São Lourenço',
    tipo: 'Casa',
    finalidade: 'Comprar',
    bairro: 'Federal',
    cidade: 'São Lourenço',
    preco: 320000,
    areaM2: 120,
    quartos: 2,
    suites: 0,
    vagas: 1,
    piscina: false,
    tag: 'Residencial',
    imagem: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galeria: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    destaque: true,
    descricao: 'Excelente oportunidade no tradicional bairro Federal. Casa muito arejada com quintal espaçoso para pets e jardinagem, documentação 100% regularizada apta para financiamento bancário.'
  },
  {
    id: '3',
    codigo: 'MV03',
    titulo: 'Sobrado Moderno com Varanda Gourmet',
    subtitulo: 'Vila Nova · São Lourenço',
    tipo: 'Casa',
    finalidade: 'Comprar',
    bairro: 'Vila Nova',
    cidade: 'São Lourenço',
    preco: 590000,
    areaM2: 180,
    quartos: 3,
    suites: 1,
    vagas: 2,
    piscina: false,
    tag: 'Lançamento',
    imagem: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    galeria: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    destaque: true,
    descricao: 'Arquitetura moderna recém-construída em rua tranquila. Ampla suíte master com sacada, iluminação planejada em LED, cozinha estilo americana e varanda integrada com churrasqueira.'
  },
  {
    id: '4',
    codigo: 'AP04',
    titulo: 'Apartamento de Luxo a 2 Minutos do Parque das Águas',
    subtitulo: 'Centro · São Lourenço',
    tipo: 'Apartamento',
    finalidade: 'Comprar',
    bairro: 'Centro',
    cidade: 'São Lourenço',
    preco: 780000,
    areaM2: 135,
    quartos: 3,
    suites: 2,
    vagas: 2,
    piscina: true,
    tag: 'Exclusividade',
    imagem: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    galeria: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    destaque: true,
    descricao: 'Viva no coração de São Lourenço com o máximo de conforto. Edifício nobre com portaria 24h, piscina na cobertura, sauna, salão de festas e varanda ampla com vista para o verde.'
  },
  {
    id: '5',
    codigo: 'TR05',
    titulo: 'Terreno Plano em Condomínio Fechado Solar dos Lagos',
    subtitulo: 'Solar dos Lagos · São Lourenço',
    tipo: 'Terreno',
    finalidade: 'Comprar',
    bairro: 'Solar dos Lagos',
    cidade: 'São Lourenço',
    preco: 450000,
    areaM2: 500,
    quartos: 0,
    suites: 0,
    vagas: 0,
    piscina: false,
    tag: 'Condomínio Fechado',
    imagem: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    galeria: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    destaque: false,
    descricao: 'Lote pronto para construir no condomínio mais valorizado da região. Topografia 100% aproveitável, segurança com ronda 24h, lagos para pesca esportiva e clube de lazer.'
  },
  {
    id: '6',
    codigo: 'LC06',
    titulo: 'Casa Mobiliada para Locação Anual no Jardim Serrano',
    subtitulo: 'Jardim Serrano · São Lourenço',
    tipo: 'Casa',
    finalidade: 'Alugar',
    bairro: 'Jardim Serrano',
    cidade: 'São Lourenço',
    preco: 3200,
    areaM2: 160,
    quartos: 3,
    suites: 1,
    vagas: 2,
    piscina: false,
    tag: 'Locação Anual',
    imagem: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    galeria: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    destaque: false,
    descricao: 'Imóvel super aconchegante, finamente mobiliado e equipado com ar condicionado, armários planejados em todos os cômodos e ótima localização residencial.'
  }
]

export const BAIRROS_LIST = [
  'Todos os bairros',
  'Centro',
  'Federal',
  'Estação',
  'Jardim Serrano',
  'Santa Mônica',
  'Solar dos Lagos',
  'Porta do Céu',
  'São Lourenço Velho',
  'Vila Carneiro',
  'Canaã',
  'Jardim Paraíso',
  'Jardim São Lourenço',
  'Lagoa Seca',
  'Serra Azul',
  'Carioca / Residencial Carioca',
  'Moradas da Serra',
  'Madureira',
  'Vila Nova',
  'Parque Olímpico',
  'Zona Rural'
]
