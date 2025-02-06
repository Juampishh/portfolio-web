const CONFIG = {
  github: {
    username: 'juampishh',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Proyectos GitHub',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Proyectos Destacados',
      projects: [
        {
          title: 'Proyecto-Abogados',
          description:
            'Landing Page para estudio Juridico desarrollada con React.js y Tailwind CSS',
          imageUrl:
            'https://www.vhv.rs/dpng/d/122-1224234_lawyer-law-firm-advocate-transparent-balance-scale-hd.png',
          link: 'https://proyecto-abogados.vercel.app/',
        },
        {
          title: 'Agro-Repuestos',
          description:
            'Landing Page para venta de repuestos agrícolas desarrollada con React.js y Tailwind CSS en colaboración con Almoby Solutions',
          imageUrl: 'https://i.postimg.cc/pTVrSszn/Logo.png',
          link: 'https://agro-repuestos.com/',
        },
        {
          title: 'Bosquejo Cabaña',
          description:
            'Plataforma especializada en remates de toros con interfaz dinámica y sistema de subastas en tiempo real usando Node.js',
          imageUrl: 'https://i.postimg.cc/gJBzTmGf/Logo.png',
          link: 'https://i.postimg.cc/gJBzTmGf/Logo.png',
        },
        {
          title: 'Burger Haven',
          description:
            'Landing Page interactiva para cadena de hamburgueserías con integración de API externa para reservas y menú digital',
          imageUrl:
            'https://th.bing.com/th/id/R.44d10945c0a134e5d18b403a2d4eca7c?rik=AO60awUclc7mXw&riu=http%3a%2f%2fassets.epicurious.com%2fphotos%2f57c5c6d9cf9e9ad43de2d96e%2fmaster%2fpass%2fthe-ultimate-hamburger.jpg&ehk=ovkmWw5FEuB86jZ%2fN9Gt9ATrG2oovgVkW0CHny4no8E%3d&risl=&pid=ImgRaw&r=0',
          link: 'https://landing-gastronomica.vercel.app/',
        },
        {
          title: 'Estilo Rústico',
          description:
            'E-commerce completo para diseño de interiores con carrito de compras, autenticación y pasarela de pagos integrada',
          imageUrl:
            'https://th.bing.com/th/id/OIP.0uQFaTl6ZQuxQFk6i25fbgAAAA?rs=1&pid=ImgDetMain',
          link: '#',
        },
        {
          title: 'Gym-App',
          description:
            'Aplicación móvil para gestión de gimnasios con seguimiento de entrenamientos y nutrición ',
          imageUrl:
            'https://sm.pcmag.com/t/pcmag_au/news/t/the-best-f/the-best-fitness-apps-for-2020_dmcf.1200.jpg',
          link: '#',
        },
        {
          title: 'SPA Sentirse Bien',
          description:
            'Sistema de reservas y gestión para centro de bienestar con integración de calendario y notificaciones push',
          imageUrl: 'https://i.postimg.cc/tT7yPwFD/Logo.jpg',
          link: 'https://spa-fron-end.vercel.app/',
        },
        {
          title: 'API REST Básica',
          description:
            'Desarrollo de API escalable para gestión de usuarios y autenticación JWT usando Node.js y Express',
          imageUrl: 'https://placehold.co/600x400?text=API+Basica',
          link: 'https://api-generica-nine.vercel.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Juan Pablo Merino - Desarrollador Full Stack',
    description:
      'Programador web con experiencia en liderazgo de equipos y pasión por el aprendizaje continuo',
    imageURL: '',
  },
  social: {
    linkedin: 'juan-pablo-merino',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'juampishh',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'juampimerino55@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'React.js',
    'Nest.js',
    'MySQL',
    'Prisma',
    'Sequelize',
    'Tailwind CSS',
    'Git',
    'Docker',
    'API REST',
    'Mercado Libre API',
    'Express.js',
  ],
  experiences: [
    {
      company: 'Estilo Rústico',
      position: 'Desarrollador E-Commerce',
      from: '2021',
      to: '2022',
      companyLink: '#',
    },
    {
      company: 'HIVÁ',
      position: 'Desarrollador FullStack',
      from: '2023',
      to: '2024',
      companyLink: '#',
    },
    {
      company: 'Almoby Solutions',
      position: 'Desarrollador Front-End',
      from: '2023',
      to: 'Presente',
      companyLink: '#',
    },
    {
      company: 'Casa de Gobierno del Chaco',
      position: 'Desarrollador Back-End (Pasantía)',
      from: '2023',
      to: 'Presente',
      companyLink: '#',
    },
  ],
  certifications: [
    {
      name: 'Desarrollo Web Full Stack',
      body: 'NUCBA',
      year: '2023',
      link: '#',
    },
  ],
  educations: [
    {
      institution: 'UTN',
      degree: 'Ingeniería en Sistemas de Información',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'UTN',
      degree: 'Técnico Universitario en Programación',
      from: '2023',
      to: '2025',
    },
  ],
  publications: [],
  blog: {
    source: 'dev',
    username: 'juampishh',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Desarrollado por <a 
      class="text-primary" href="https://github.com/Juampishh"
      target="_blank"
      rel="noreferrer"
    >Juan Pablo Merino</a>`,
  enablePWA: true,
};

export default CONFIG;
