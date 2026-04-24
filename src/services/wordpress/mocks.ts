import type { Post } from "@/types/post";

export const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: "A reforma tributária e seus impactos na economia brasileira",
    slug: "reforma-tributaria-impactos-economia-brasileira",
    excerpt:
      "Especialistas divergem sobre os efeitos reais da reforma no longo prazo. Entenda os principais pontos da proposta e o que muda para empresas e cidadãos.",
    content:
      "<p>A reforma tributária aprovada pelo Congresso Nacional promete simplificar o sistema de impostos do Brasil...</p>",
    featuredImage: "https://picsum.photos/seed/reforma/1200/800",
    category: { id: "1", name: "Política", slug: "politica" },
    tags: [
      { id: "1", name: "Reforma Tributária", slug: "reforma-tributaria" },
      { id: "2", name: "Economia", slug: "economia" },
    ],
    author: {
      id: "1",
      name: "Carla Mendonça",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    publishedAt: "2026-04-20T10:00:00Z",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Inteligência artificial transforma redações jornalísticas no mundo",
    slug: "inteligencia-artificial-redacoes-jornalisticas",
    excerpt:
      "Ferramentas de IA passam a auxiliar repórteres em tarefas de verificação de fatos e produção de conteúdo. O debate ético se intensifica.",
    content:
      "<p>As maiores redações do mundo estão incorporando ferramentas de inteligência artificial em seus fluxos de trabalho...</p>",
    featuredImage: "https://picsum.photos/seed/ia-jornal/1200/800",
    category: { id: "2", name: "Tecnologia", slug: "tecnologia" },
    tags: [
      {
        id: "3",
        name: "Inteligência Artificial",
        slug: "inteligencia-artificial",
      },
      { id: "4", name: "Jornalismo", slug: "jornalismo" },
    ],
    author: {
      id: "2",
      name: "Rafael Teixeira",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    publishedAt: "2026-04-21T08:30:00Z",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Crise hídrica no Nordeste exige resposta urgente do governo federal",
    slug: "crise-hidrica-nordeste-resposta-governo-federal",
    excerpt:
      "Reservatórios atingem nível crítico em cinco estados. Especialistas alertam para necessidade de políticas públicas de longo prazo.",
    content:
      "<p>A situação dos reservatórios no Nordeste brasileiro chegou a um ponto de alerta máximo neste mês...</p>",
    featuredImage: "https://picsum.photos/seed/crise-hidrica/1200/800",
    category: { id: "3", name: "Brasil", slug: "brasil" },
    tags: [
      { id: "5", name: "Seca", slug: "seca" },
      { id: "6", name: "Nordeste", slug: "nordeste" },
    ],
    author: {
      id: "3",
      name: "Beatriz Alves",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    publishedAt: "2026-04-22T14:00:00Z",
    isFeatured: false,
  },
  {
    id: "4",
    title: "Mercado financeiro reage com alta após anúncio do Banco Central",
    slug: "mercado-financeiro-alta-banco-central",
    excerpt:
      "Ibovespa sobe 2,3% após sinalização de manutenção da taxa Selic. Dólar recua frente ao real pela terceira sessão consecutiva.",
    content:
      "<p>O Banco Central do Brasil sinalizou nesta quarta-feira que manterá a taxa básica de juros no patamar atual...</p>",
    featuredImage: "https://picsum.photos/seed/mercado/1200/800",
    category: { id: "4", name: "Economia", slug: "economia" },
    tags: [
      { id: "7", name: "Selic", slug: "selic" },
      { id: "8", name: "Bolsa de Valores", slug: "bolsa-de-valores" },
    ],
    author: {
      id: "1",
      name: "Carla Mendonça",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    publishedAt: "2026-04-23T16:45:00Z",
    isFeatured: false,
  },
  {
    id: "5",
    title: "Copa do Mundo 2026: Brasil conhece seus adversários na fase de grupos",
    slug: "copa-mundo-2026-brasil-adversarios-grupos",
    excerpt:
      "Seleção brasileira enfrenta Argentina, Alemanha e Camarões no torneio. Torcida projeta otimismo após boa campanha nas eliminatórias.",
    content:
      "<p>O sorteio realizado em Zurique definiu os grupos da Copa do Mundo de 2026, que será realizada nos Estados Unidos, Canadá e México...</p>",
    featuredImage: "https://picsum.photos/seed/copa/1200/800",
    category: { id: "5", name: "Esportes", slug: "esportes" },
    tags: [
      { id: "9", name: "Copa do Mundo", slug: "copa-do-mundo" },
      { id: "10", name: "Seleção Brasileira", slug: "selecao-brasileira" },
    ],
    author: {
      id: "4",
      name: "Marcos Souza",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    publishedAt: "2026-04-24T09:00:00Z",
    isFeatured: true,
  },
];
