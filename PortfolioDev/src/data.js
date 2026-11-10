// Tudo que aparece no site. Trechos "[ADICIONAR: ...]" são destacados na página.

export const profile = {
  name: 'Matheus Braga',
  role: 'Desenvolvedor Full Stack Júnior',
  stack: 'React, Node & Python',
  status: 'Disponível para vagas · [ADICIONAR: local/modalidade]',
  pitch:
    'Construo aplicações web completas, da interface ao banco de dados, e já tenho vivência prática em uma fintech.',
  email: 'sbmatheus20@gmail.com',
  github: 'https://github.com/sbmatheuss',
  linkedin: 'https://www.linkedin.com/in/matheusbraga1/',
  cv: '', // ex.: '/cv.pdf' (arquivo em public/)
  cvPlaceholder: '[ADICIONAR: public/cv.pdf]',
};

export const sections = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
];

export const about = {
  title: 'Código que resolve problema de negócio.',
  text: [
    'Sou estudante de Análise e Desenvolvimento de Sistemas e estagiário Full Stack na NOSSA FINTECH, onde trabalho com Python, Flask e React e escrevo consultas SQL para ambientes de produção.',
    'Minha base está no ecossistema JavaScript e TypeScript: interfaces com React e Next.js e APIs RESTful com Node.js e NestJS. Gosto de entender a regra de negócio antes de escrever código, porque é ela que decide se uma tela resolve o problema de quem usa.',
    'Além do estágio, mantenho projetos completos com código aberto, como um sistema de passagens aéreas com pagamentos e um buscador de hotéis com autenticação. Aprendo rápido, trabalho bem em equipe e busco uma vaga júnior para evoluir em um time de produto.',
  ],
  metrics: [
    { value: '3', label: 'projetos full stack com código aberto' },
    { value: '2', label: 'deploys públicos na Vercel' },
    { value: '[ADICIONAR: número]', label: '[ADICIONAR: métrica de impacto do estágio]' },
  ],
  skills: [
    {
      title: 'Front-end',
      context: 'Interfaces reativas com React e Next.js, tipadas com TypeScript.',
      tags: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    },
    {
      title: 'Back-end',
      context: 'APIs REST em Node e Python, com autenticação e integração a endpoints documentados.',
      tags: ['Node.js', 'NestJS', 'Express', 'Python', 'Flask', 'JWT'],
    },
    {
      title: 'Infra & qualidade',
      context: 'Consultas SQL em produção no estágio, versionamento com Git e deploy na Vercel.',
      tags: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'DBeaver', 'Git & GitHub', 'Vercel'],
    },
    {
      title: 'Como eu trabalho',
      context: 'Aprendo rápido, entendo a regra de negócio antes de codar e sigo a documentação do time.',
      tags: ['Regra de negócio', 'Documentação de API', 'Trabalho em equipe'],
    },
  ],
};

export const projects = {
  featured: [
    {
      title: 'MaisUmVoo',
      kind: 'Projeto pessoal · Full Stack · [ADICIONAR: ano]',
      image: '',
      imageAlt: 'Captura de tela do MaisUmVoo',
      live: 'https://maisumvoo.vercel.app',
      code: 'https://github.com/sbmatheuss/maisumvoo',
      problem: 'Comprar passagem aérea exige comparar voos, preços e formas de pagamento em várias telas.',
      solution:
        'Busca de voos com filtros e autocomplete de aeroportos, pagamento simulado via Pix e Boleto (Stripe), sistema de milhas e agentes de IA (Claude).',
      result: '[ADICIONAR: resultado mensurável do MaisUmVoo]',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'Stripe'],
    },
    {
      title: 'BuscaHotéis',
      kind: 'Projeto pessoal · Full Stack · [ADICIONAR: ano]',
      image: '',
      imageAlt: 'Captura de tela do BuscaHotéis',
      live: '',
      code: 'https://github.com/sbmatheuss/BuscaHot-is',
      problem: 'Achar um hotel econômico com as comodidades certas obriga a filtrar tudo manualmente.',
      solution:
        'Filtros por comodidades, galeria de imagens e autenticação JWT, com API em Express e MongoDB e frontend em Next.js.',
      result: '[ADICIONAR: resultado mensurável do BuscaHotéis]',
      tags: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Tailwind'],
    },
    {
      title: 'WebService — Catálogo de Livros',
      kind: 'Projeto pessoal · Full Stack · [ADICIONAR: ano]',
      image: '',
      imageAlt: 'Captura de tela do WebService',
      live: 'https://web-service-jet.vercel.app',
      code: 'https://github.com/sbmatheuss/WebService',
      problem: 'Gerenciar um catálogo de livros sem busca nem visão geral dos dados.',
      solution:
        'CRUD completo, busca por título e autor, estatísticas e gráficos, com frontend React e API REST separados.',
      result: '[ADICIONAR: resultado mensurável do WebService]',
      tags: ['React', 'Express', 'SQLite', 'Knex'],
    },
  ],
  more: [
    { title: '[ADICIONAR: trabalho menor 1]', text: '[ADICIONAR: descrição em uma linha]', href: '', tags: ['[ADICIONAR: stack]'] },
    { title: '[ADICIONAR: trabalho menor 2]', text: '[ADICIONAR: descrição em uma linha]', href: '', tags: ['[ADICIONAR: stack]'] },
  ],
};

export const experience = [
  {
    period: 'ago/2026 — hoje',
    title: 'Estagiário Full Stack Developer',
    org: 'NOSSA FINTECH',
    bullets: [
      'Criei scripts SQL para consultas em ambiente de produção (MySQL e MariaDB, com DBeaver). [ADICIONAR: resultado, se houver número]',
      'Conectei endpoints à interface seguindo a documentação interna da empresa, com Python, Flask e React. [ADICIONAR: quantos endpoints ou telas]',
      'Absorvi regras de negócio do setor financeiro e as apliquei no código.',
    ],
  },
  {
    period: '[ADICIONAR: ano de conclusão]',
    title: 'Análise e Desenvolvimento de Sistemas',
    org: '[ADICIONAR: instituição]',
    bullets: [],
  },
];

export const contact = {
  title: 'Vamos conversar sobre a sua vaga?',
  text: 'Me chame por e-mail ou LinkedIn. Será um prazer apresentar meus projetos.',
};
