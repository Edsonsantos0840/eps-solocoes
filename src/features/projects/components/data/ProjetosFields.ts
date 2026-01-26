
import { imgProjectProps, ProjectProps } from "../types";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiCloudinary,
  SiMaildotru,
  SiVercel,
  SiHtml5,
  SiAdobeacrobatreader,
  SiTurbo
} from "react-icons/si";

import { FaCalendarAlt, FaFire } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";

export const projectsPage: string[] = ['marmore','tattoo', 'shangrila', 'mingo', 'emidio', 'brasilCard']


export const imgProject: imgProjectProps[] = [
  {
    id: 1,
    nome: "M&A Marmores e Granitos.",
    img: '/EPS_files/marmore1.png',
    link: '/marmore'
  },
  {
    id: 2,
    nome: "Martinez Tattoo Stúdios.",
    img: '/EPS_files/martinez1.png',
    link: '/tattoo'
  },
  {
    id: 3,
    nome: "Shangrilá Residencial para idosos.",
    img: '/EPS_files/shangrila1.png',
    link: '/shangrila'
  },
  {
    id: 4,
    nome: "Mingo Doces.",
    img: '/EPS_files/mingo1.png',
    link: '/mingo'
  },
  {
    id: 5,
    nome: "Espaço Emídio e Sá.",
    img: '/EPS_files/emidio1.png',
    link: '/emidio'
  },
  {
    id: 6,
    nome: "BrasilCard.",
    img: '/EPS_files/bcard1.png',
    link: '/brasilCard'
  },
]


export const projetos: ProjectProps[] = [
  {
    name: "M&A Mármores e Granitos",

    summary: "Sistema de gestão empresarial com dashboard administrativo.",

    role: "Full Stack Developer",

    description:
      "Sistema desenvolvido para otimizar processos internos, controle de funcionários e gestão documental, com foco em performance, segurança e usabilidade.",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
      },
      {
        name: "Cloudinary",
        icon: SiCloudinary,
      },
    ],

    highlights: [
      "Dashboard administrativo",
      "Autenticação JWT",
      "Upload de imagens",
      "Sistema de permissões",
      "Interface responsiva",
      "Integração com APIs",
    ],

   
    images: ['/EPS_files/marmore1.png', '/EPS_files/marmore2.png', '/EPS_files/marmore4 .png', '/EPS_files/marmore5 .png', '/EPS_files/marmore6.png', '/EPS_files/marmore7.png', '/EPS_files/marmore8 .png', '/EPS_files/marmore9 .png', '/EPS_files/marmore10.png', '/EPS_files/marmore3.png'],
    links: [{ Site: ["Visite o site.", "https://site-marmormore.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/site-marmormore"] }, { Whatsapp: ["Entre em Contato.", "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }, { Back_End: ["Visite o back-end.", "https://github.com/Edsonsantos0840/back-end-marmore"] }
    ],
  },

  {
    name: "Martinez Tattoo Studio",

    summary: "Sistema de agendamento online para estúdio de tatuagem.",

    role: "Full Stack Developer",

    description:
      "Sistema desenvolvido para automatizar o agendamento de atendimentos, permitindo que clientes escolham horários, enviem solicitações e recebam confirmações de forma rápida e intuitiva. A aplicação foi pensada para reduzir processos manuais, melhorar a organização da agenda e otimizar o atendimento ao cliente.",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Prisma ORM",
        icon: SiPrisma,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "EmailJS",
        icon: SiMaildotru,
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
      },
      {
        name: "React Day Picker",
        icon: FaCalendarAlt,
      },
      {
        name: "Sonner",
        icon: BsBellFill,
      },
    ],

    highlights: [
      "Sistema de agendamento online",
      "Painel administrativo",
      "Confirmação automática por e-mail",
      "Seleção interativa de datas",
      "Interface responsiva",
      "Animações com Framer Motion",
      "Notificações em tempo real",
      "Integração com banco de dados via Prisma",
    ],

    links: [
      { Site: ["Visite o site.", "https://site-tattoo-pearl.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/site-tattoo"] }, { Whatsapp: ["Entre em Contato.", "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }
    ],

  
    images: [
      "/EPS_files/martinez1.png",
      "/EPS_files/martinez2.png",
      "/EPS_files/martinez3.png",
      "/EPS_files/martinez4.png",
      "/EPS_files/martinez5.png",
      "/EPS_files/martinez6.png",
      "/EPS_files/martinez7.png",
      "/EPS_files/martinez8.png",
      "/EPS_files/martinez9.png",
      "/EPS_files/martinez10.png",
    ],
  },

  {
    name: "Shangrilá Residencial para Idosos",

    summary: "Site institucional com foco em acolhimento, acessibilidade e experiência do usuário.",

    role: "Front-End Developer",

    description:
      "Site institucional desenvolvido para a Casa de Repouso Shangrilá, com foco em transmitir confiança, acolhimento e profissionalismo. A plataforma foi construída priorizando acessibilidade, responsividade e usabilidade, utilizando tecnologias modernas e animações suaves para enriquecer a experiência do usuário. O projeto valoriza os serviços, a estrutura e os valores da instituição, unindo tecnologia e propósito social.",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
      },
      {
        name: "EmailJS",
        icon: SiMaildotru,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
    ],

    highlights: [
      "Interface acessível e responsiva",
      "Design focado em experiência humanizada",
      "Animações suaves com Framer Motion",
      "Formulário com integração EmailJS",
      "Boas práticas de SEO",
      "Otimização de performance",
      "Arquitetura organizada",
      "Compatibilidade multiplataforma",
    ],

    images: [
      "/EPS_files/shangrila1.png",
      "/EPS_files/shangrila2.png",
      "/EPS_files/shangrila3.png",
      "/EPS_files/shangrila4.png",
      "/EPS_files/shangrila5.png",
      "/EPS_files/shangrila6.png",
      "/EPS_files/shangrila7.png",
      "/EPS_files/shangrila8.png",
    ],

    links: [
      { Site: ["Visite o site.", "https://shangrila-casa-de-repouso.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/casa-de-repouso"] }, { Whatsapp: ["Entre em Contato.", "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }
    ],

  },

  {
    name: "Mingo Doces",

    summary: "Site institucional e interativo para doceria artesanal.",

    role: "Front-End Developer",

    description:
      "Plataforma desenvolvida para fortalecer a presença digital da Mingo Doces, unindo performance, design moderno e interatividade. O projeto foi construído com foco em escalabilidade, acessibilidade e SEO, oferecendo recursos avançados como geração de PDF, captura de tela e integração com serviços de e-mail. A aplicação entrega uma experiência rápida, intuitiva e alinhada à identidade artesanal da marca.",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "EmailJS",
        icon: SiMaildotru, // Email service
      },
      {
        name: "html2canvas",
        icon: SiHtml5, // Screenshot / canvas
      },
      {
        name: "jsPDF",
        icon: SiAdobeacrobatreader, // PDF
      },
      {
        name: "React Hot Toast",
        icon: FaFire, // Notifications
      },
    ],

    highlights: [
      "Geração de PDF automática",
      "Captura de tela integrada",
      "Envio de formulários por e-mail",
      "Otimização para SEO",
      "Carregamento rápido",
      "Interface responsiva",
      "Arquitetura otimizada",
      "Boas práticas de acessibilidade",
    ],

    images: [
      "/EPS_files/mingo1.png",
      "/EPS_files/mingo2.png",
      "/EPS_files/mingo3.png",
      "/EPS_files/mingo4.png",
      "/EPS_files/mingo5.png",
      "/EPS_files/mingo6.png",
    ],

    links: [
      { Site: ["Visite o site.", "https://mingo-doceria.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/mingo-doceria"] }, { Whatsapp: ["Entre em Contato.", "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }]
    ,

  },

  {
    name: "Espaço Emídio e Sá",

    summary: "Site institucional focado em bem-estar, equilíbrio e presença digital.",

    role: "Front-End Developer",

    description:
      "Plataforma desenvolvida para representar o conceito de equilíbrio entre corpo e mente por meio de uma interface moderna, responsiva e otimizada. O projeto foi construído com foco em escalabilidade, manutenção e boas práticas de arquitetura, utilizando tipagem estática, componentização eficiente e integração com serviços externos. A aplicação prioriza acessibilidade, SEO e experiência do usuário, refletindo um compromisso com qualidade, performance e propósito.",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "EmailJS",
        icon: SiMaildotru, 
      },
    ],

    highlights: [
      "Interface moderna e responsiva",
      "Arquitetura escalável",
      "Componentização inteligente",
      "Tipagem estática com TypeScript",
      "Integração com EmailJS",
      "Otimização para SEO",
      "Boas práticas de acessibilidade",
      "Experiência do usuário aprimorada",
    ],

    images: [
      "/EPS_files/emidio1.png",
      "/EPS_files/emidio2.png",
      "/EPS_files/emidio3.png",
      "/EPS_files/emidio4.png",
      "/EPS_files/emidio5.png",
    ],

    links: [
      { Site: ["Visite o site.", "https://emidio.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/emidio"] }, { Whatsapp: ["Entre em Contato.", "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }
    ],
  },

  {
  name: "BrasilCard",

  summary: "Plataforma digital para representantes com foco em performance e usabilidade.",

  role: "Front-End Developer",

  description:
    "Sistema desenvolvido para representantes da BrasilCard, com foco em eficiência operacional, performance e experiência do usuário. A plataforma apresenta uma interface moderna, intuitiva e totalmente responsiva, construída com arquitetura escalável e código limpo. O projeto foi otimizado com Turbopack para builds mais rápidas e alto desempenho, priorizando boas práticas de SEO, acessibilidade e manutenção contínua.",

  technologies: [
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "Turbopack",
      icon: SiTurbo,
    },
    {
      name: "Vercel",
      icon: SiVercel,
    },
  ],

  highlights: [
    "Interface moderna e responsiva",
    "Otimização com Turbopack",
    "Arquitetura escalável",
    "Código limpo e organizado",
    "Boas práticas de SEO",
    "Acessibilidade",
    "Alta performance",
    "Experiência do usuário otimizada",
  ],

  images: [
    "/EPS_files/bcard1.png",
    "/EPS_files/bcard2.png",
    "/EPS_files/bcard3.png",
    "/EPS_files/bcard4.png",
    "/EPS_files/4.png",
    "/EPS_files/5.png",
    "/EPS_files/7.png",
  ],

    links: [
        { Site: ["Visite o site.", "https://cartao-marca-propria-sc71.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/cartao-marca-propria"] }, { Whatsapp: ["Entre em Contato.", "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }],
     },

];

