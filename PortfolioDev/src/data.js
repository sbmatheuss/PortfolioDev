// Tudo que aparece no site.

export const profile = {
  name: 'Matheus Braga',
  role: 'Desenvolvedor Full Stack Júnior',
  stack: 'React, Node & Python',
  status: 'Disponível para vagas',
  pitch:
    'Construo aplicações web completas, da interface ao banco de dados, e já tenho vivência prática em uma fintech.',
  email: 'sbmatheus20@gmail.com',
  github: 'https://github.com/sbmatheuss',
  linkedin: 'https://www.linkedin.com/in/matheusbraga1/',
};

export const about = {
  title: 'Código que resolve problema de negócio.',
  text: [
    'Sou formado em Análise e Desenvolvimento de Sistemas e estagiário Full Stack na Nossa Fintech, onde desenvolvo e mantenho funcionalidades e APIs REST com Python, Flask e SQLAlchemy, integro webhooks e escrevo scripts SQL para consulta e análise de dados.',
    'Minha base está no ecossistema JavaScript e TypeScript: interfaces com React e APIs RESTful com Node.js. No estágio, aprendi as regras de negócio dos produtos da empresa e como cada solução técnica atende às necessidades do negócio.',
    'Aprendo rápido, trabalho bem em equipe e busco uma vaga júnior para evoluir em um time de produto.',
  ],
  metrics: [],
  skills: [
    {
      title: 'Front-end',
      context: 'Interfaces reativas com React, tipadas com TypeScript.',
      tags: ['React', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Back-end',
      context: 'APIs REST em Python e Node, com ORM, integração por webhooks e endpoints documentados.',
      tags: ['Python', 'Flask', 'SQLAlchemy', 'Node.js', 'Express', 'APIs REST', 'Webhooks'],
    },
    {
      title: 'Banco de dados',
      context: 'Bancos relacionais e NoSQL, com scripts SQL para consulta e análise de dados.',
      tags: ['MySQL', 'MariaDB', 'MongoDB', 'DBeaver'],
    },
    {
      title: 'Arquitetura e design',
      context: 'Princípios para manter o código organizado, escalável e fácil de evoluir.',
      tags: ['Microservices', 'Clean Principles', 'Design Patterns', 'Serverless'],
    },
    {
      title: 'Gestão e documentação',
      context: 'Organizo tarefas no Jira e mantenho notas e documentação técnica em um vault no Obsidian.',
      tags: ['Jira', 'Obsidian'],
    },
    {
      title: 'Desenvolvimento com IA',
      context: 'Spec-Driven Development (SDD) com Claude Code: especificação antes do código, com a IA implementando e eu revisando.',
      tags: ['SDD', 'Claude Code', 'IA generativa'],
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
      title: 'EuTatoo',
      kind: 'Projeto em equipe · Full Stack · 2026',
      image: '',
      imageAlt: 'Captura de tela do EuTatoo',
      live: '',
      code: '',
      description:
        'Plataforma de gestão para tatuadores, com agenda, clientes, pagamentos, portfólio e notificações automáticas por WhatsApp e e-mail. Arquitetura hexagonal com Clean Architecture, fila de tarefas em segundo plano e testes automatizados.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ'],
    },
  ],
  more: [],
};

export const experience = [
  {
    period: '08/2026 — 11/2026',
    title: 'Estagiário Full Stack Developer',
    org: 'Nossa Fintech',
    bullets: [
      'Desenvolvi e mantive funcionalidades e APIs REST com Python, Flask e SQLAlchemy.',
      'Integrei sistemas por meio de webhooks.',
      'Conectei endpoints à interface seguindo a documentação interna, com React.',
      'Criei scripts SQL no banco de dados para consulta e análise de dados (MySQL e MariaDB, com DBeaver).',
      'Atuei com as regras de negócio dos produtos atualmente implementados pela empresa.',
    ],
  },
  {
    period: '06/2024 — 12/2026',
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    org: 'Anhanguera',
    bullets: ['Diploma concluído.'],
  },
  {
    period: '04/2026',
    title: 'Formação Full Stack',
    org: 'Rocketseat',
    bullets: [],
  },
  {
    period: '03/2025',
    title: 'Git e GitHub',
    org: 'Rocketseat',
    bullets: [],
  },
];

export const contact = {
  title: 'Vamos conversar sobre a sua vaga?',
  text: 'Me chame por e-mail ou LinkedIn.',
};

const hasProjects = projects.featured.length + projects.more.length > 0;

// A seção Projetos some do menu enquanto não houver projetos.
export const sections = [
  { id: 'sobre', label: 'Sobre' },
  ...(hasProjects ? [{ id: 'projetos', label: 'Projetos' }] : []),
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
];

export const numberOf = (id) => String(sections.findIndex((s) => s.id === id) + 1).padStart(2, '0');
