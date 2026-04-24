import type { WpRawPost } from "@/services/wordpress/types";

export const MOCK_RAW_POSTS: WpRawPost[] = [
  {
    id: 1,
    slug: "reforma-tributaria-impactos-economia-brasileira",
    date: "2026-04-20T10:00:00",
    title: {
      rendered: "A reforma tributária e seus impactos na economia brasileira",
    },
    excerpt: {
      rendered:
        "Especialistas divergem sobre os efeitos reais da reforma no longo prazo. Entenda os principais pontos da proposta e o que muda para empresas e cidadãos.",
    },
    content: {
      rendered:
        "<p>A reforma tributária aprovada pelo Congresso Nacional promete simplificar o sistema de impostos do Brasil...</p>",
    },
    sticky: true,
    _embedded: {
      author: [
        {
          id: 1,
          name: "Carla Mendonça",
          avatar_urls: { "96": "https://i.pravatar.cc/150?img=47" },
        },
      ],
      "wp:featuredmedia": [
        { source_url: "https://picsum.photos/seed/reforma/1200/800" },
      ],
      "wp:term": [
        [{ id: 1, name: "Política", slug: "politica", taxonomy: "category" }],
        [
          {
            id: 1,
            name: "Reforma Tributária",
            slug: "reforma-tributaria",
            taxonomy: "post_tag",
          },
          { id: 2, name: "Economia", slug: "economia", taxonomy: "post_tag" },
        ],
      ],
    },
  },
  {
    id: 2,
    slug: "inteligencia-artificial-redacoes-jornalisticas",
    date: "2026-04-21T08:30:00",
    title: {
      rendered:
        "Inteligência artificial transforma redações jornalísticas no mundo",
    },
    excerpt: {
      rendered:
        "Ferramentas de IA passam a auxiliar repórteres em tarefas de verificação de fatos e produção de conteúdo. O debate ético se intensifica.",
    },
    content: {
      rendered:
        "<p>As maiores redações do mundo estão incorporando ferramentas de inteligência artificial em seus fluxos de trabalho...</p>",
    },
    sticky: true,
    _embedded: {
      author: [
        {
          id: 2,
          name: "Rafael Teixeira",
          avatar_urls: { "96": "https://i.pravatar.cc/150?img=12" },
        },
      ],
      "wp:featuredmedia": [
        { source_url: "https://picsum.photos/seed/ia-jornal/1200/800" },
      ],
      "wp:term": [
        [
          {
            id: 2,
            name: "Tecnologia",
            slug: "tecnologia",
            taxonomy: "category",
          },
        ],
        [
          {
            id: 3,
            name: "Inteligência Artificial",
            slug: "inteligencia-artificial",
            taxonomy: "post_tag",
          },
          {
            id: 4,
            name: "Jornalismo",
            slug: "jornalismo",
            taxonomy: "post_tag",
          },
        ],
      ],
    },
  },
  {
    id: 3,
    slug: "crise-hidrica-nordeste-resposta-governo-federal",
    date: "2026-04-22T14:00:00",
    title: {
      rendered:
        "Crise hídrica no Nordeste exige resposta urgente do governo federal",
    },
    excerpt: {
      rendered:
        "Reservatórios atingem nível crítico em cinco estados. Especialistas alertam para necessidade de políticas públicas de longo prazo.",
    },
    content: {
      rendered:
        "<p>A situação dos reservatórios no Nordeste brasileiro chegou a um ponto de alerta máximo neste mês...</p>",
    },
    sticky: false,
    _embedded: {
      author: [
        {
          id: 3,
          name: "Beatriz Alves",
          avatar_urls: { "96": "https://i.pravatar.cc/150?img=32" },
        },
      ],
      "wp:featuredmedia": [
        { source_url: "https://picsum.photos/seed/crise-hidrica/1200/800" },
      ],
      "wp:term": [
        [{ id: 3, name: "Brasil", slug: "brasil", taxonomy: "category" }],
        [
          { id: 5, name: "Seca", slug: "seca", taxonomy: "post_tag" },
          { id: 6, name: "Nordeste", slug: "nordeste", taxonomy: "post_tag" },
        ],
      ],
    },
  },
  {
    id: 4,
    slug: "mercado-financeiro-alta-banco-central",
    date: "2026-04-23T16:45:00",
    title: {
      rendered:
        "Mercado financeiro reage com alta após anúncio do Banco Central",
    },
    excerpt: {
      rendered:
        "Ibovespa sobe 2,3% após sinalização de manutenção da taxa Selic. Dólar recua frente ao real pela terceira sessão consecutiva.",
    },
    content: {
      rendered:
        "<p>O Banco Central do Brasil sinalizou nesta quarta-feira que manterá a taxa básica de juros no patamar atual...</p>",
    },
    sticky: false,
    _embedded: {
      author: [
        {
          id: 1,
          name: "Carla Mendonça",
          avatar_urls: { "96": "https://i.pravatar.cc/150?img=47" },
        },
      ],
      "wp:featuredmedia": [
        { source_url: "https://picsum.photos/seed/mercado/1200/800" },
      ],
      "wp:term": [
        [{ id: 4, name: "Economia", slug: "economia", taxonomy: "category" }],
        [
          { id: 7, name: "Selic", slug: "selic", taxonomy: "post_tag" },
          {
            id: 8,
            name: "Bolsa de Valores",
            slug: "bolsa-de-valores",
            taxonomy: "post_tag",
          },
        ],
      ],
    },
  },
  {
    id: 5,
    slug: "copa-mundo-2026-brasil-adversarios-grupos",
    date: "2026-04-24T09:00:00",
    title: {
      rendered:
        "Copa do Mundo 2026: Brasil conhece seus adversários na fase de grupos",
    },
    excerpt: {
      rendered:
        "Seleção brasileira enfrenta Argentina, Alemanha e Camarões no torneio. Torcida projeta otimismo após boa campanha nas eliminatórias.",
    },
    content: {
      rendered:
        "<p>O sorteio realizado em Zurique definiu os grupos da Copa do Mundo de 2026, que será realizada nos Estados Unidos, Canadá e México...</p>",
    },
    sticky: true,
    _embedded: {
      author: [
        {
          id: 4,
          name: "Marcos Souza",
          avatar_urls: { "96": "https://i.pravatar.cc/150?img=68" },
        },
      ],
      "wp:featuredmedia": [
        { source_url: "https://picsum.photos/seed/copa/1200/800" },
      ],
      "wp:term": [
        [{ id: 5, name: "Esportes", slug: "esportes", taxonomy: "category" }],
        [
          {
            id: 9,
            name: "Copa do Mundo",
            slug: "copa-do-mundo",
            taxonomy: "post_tag",
          },
          {
            id: 10,
            name: "Seleção Brasileira",
            slug: "selecao-brasileira",
            taxonomy: "post_tag",
          },
        ],
      ],
    },
  },
];
