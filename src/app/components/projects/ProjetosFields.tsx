import { StaticImageData } from "next/image";

export interface ProjetosProps {
  nome: string;
  descrição: string;
  imagens: (string | StaticImageData)[];
  technology: string[];
  links: {
    Site?: string[];
    GitHub?: string[];
    Whatsapp?: string[];
    Back_End?: string[];
  }[];
}


export const projetos: ProjetosProps[] = [
  {
    nome: "M&A Marmores e Granitos.",
    descrição:
     " Projeto corporativo completo desenvolvido para um cliente, com foco em gestão eficiente e controle total de funcionários por meio de um dashboard moderno e intuitivo. O back-end foi construído com Node.js, TypeScript, Express e MongoDB, oferecendo segurança, escalabilidade, autenticação JWT e integração com APIs externas. O front-end utiliza Next.js 15, React 19 e Tailwind CSS 4, garantindo alta performance, responsividade, interface elegante e animações fluídas. Inclui upload de imagens via Cloudinary, formulários dinâmicos, notificações em tempo real e funcionalidades voltadas à experiência do usuário, proporcionando um sistema completo, profissional e confiável para gestão empresarial.",
    imagens: ['/EPS_files/marmore1.png', '/EPS_files/marmore2.png', '/EPS_files/marmore4 .png', '/EPS_files/marmore5 .png', '/EPS_files/marmore6.png', '/EPS_files/marmore7.png', '/EPS_files/marmore8 .png', '/EPS_files/marmore9 .png', '/EPS_files/marmore10.png', '/EPS_files/marmore3.png'],
    technology: ["Javascript", "Typescript", "React Js.", "Next Js.", "Tailwind Css", "cloudinary", "jose", "react-toastify", "Mongo DB", "express", ], 
    links: [
      { Site: ["Visite o site.", "https://site-marmormore.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/site-marmormore"] }, { Whatsapp: ["Entre em Contato.", "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }, { Back_End: ["Visite o back-end.", "https://github.com/Edsonsantos0840/back-end-marmore"] }
    ],
  },
  {
    nome: "Martinez Tattoo Stúdios.",
    descrição: "Projeto desenvolvido para uma cliente do Martinez Tattoo Studio, com foco em agilidade e controle no sistema de agendamento online. A aplicação permite que clientes escolham horários, enviem solicitações e recebam confirmações de forma prática e automatizada. Construído com Next.js 15, React 19 e Tailwind CSS, o front-end oferece uma interface moderna, fluida e totalmente responsiva. O back-end integra Prisma ORM e Mongo DB, garantindo desempenho e segurança no gerenciamento de dados. Conta ainda com integração de e-mails via EmailJS, animações com Framer Motion, seleção de datas com React Day Picker e painel administrativo intuitivo para controle de agendas e atendimento.",
    imagens: ['/EPS_files/martinez1.png', '/EPS_files/martinez2.png', '/EPS_files/martinez3.png', '/EPS_files/martinez4.png', '/EPS_files/martinez5.png', '/EPS_files/martinez6.png', '/EPS_files/martinez7.png', '/EPS_files/martinez8.png', '/EPS_files/martinez9.png', '/EPS_files/martinez10.png',],
    technology: ["Javascript", "Typescript", "React Js.", "Next Js.", "Tailwind Css", "emailjs-com", "sonner", "prisma", "Mongo DB"], 
    links: [
      { Site: ["Visite o site.", "https://site-tattoo-pearl.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/site-tattoo"] }, { Whatsapp: ["Entre em Contato.","https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }],
  },
  {
    nome: "Shangrilá Residencial para idosos.",
    descrição:
      "Desenvolvimento de site institucional para a Casa de Repouso Shangri-lá. Com mais de 8 anos de tradição, a Casa de Repouso Shangri- lá precisava de uma presença online à altura do cuidado e carinho que oferece aos seus residentes.Desenvolvi um site moderno, acessível e totalmente responsivo, utilizando Next.js, React 19 e Tailwind CSS, aliado a animações suaves com Framer Motion.O projeto destaca os serviços da instituição, como cuidados personalizados, atividades recreativas e estrutura completa, transmitindo confiança e acolhimento.Um trabalho pensado para emocionar e informar, unindo tecnologia e propósito social.",
    imagens: ['/EPS_files/shangrila1.png', '/EPS_files/shangrila2.png', '/EPS_files/shangrila3.png', '/EPS_files/shangrila4.png', '/EPS_files/shangrila5.png', '/EPS_files/shangrila6.png', '/EPS_files/shangrila7.png', '/EPS_files/shangrila8.png',],
    technology: ["Javascript", "Typescript", "React Js.", "Next Js.", "Tailwind Css", "emailjs-com"],  
    links: [
      { Site: ["Visite o site.", "https://shangrila-casa-de-repouso.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/casa-de-repouso"] }, { Whatsapp: ["Entre em Contato.","https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }],
  },
  {
    nome: "Mingo Doces, receita é uma demonstração de carinho.",
    descrição:
      "Desempenho e modernidade no site da Mingo Doces. O site da Mingo Doces foi construído com foco em performance e escalabilidade, utilizando tecnologias modernas como Next.js 15.3, React 19, Tailwind CSS 4 e TypeScript.Recursos como geração de PDF com jsPDF, captura de tela com html2canvas e integração com EmailJS tornam o projeto completo e interativo.O código segue boas práticas de acessibilidade e SEO, com carregamento rápido, otimização de imagens e uma arquitetura enxuta.Tudo para entregar uma experiência digital eficiente, sem abrir mão da beleza e do toque artesanal da marca.",
    imagens: ['/EPS_files/mingo1.png', '/EPS_files/mingo2.png', '/EPS_files/mingo3.png', '/EPS_files/mingo4.png', '/EPS_files/mingo5.png', '/EPS_files/mingo6.png'],
    technology: ["Javascript", "Typescript", "React Js.", "Next Js.", "Tailwind Css", "emailjs-com", "html2canvas"], 
    links: [
      { Site: ["Visite o site.", "https://mingo-doceria.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/mingo-doceria"] }, { Whatsapp: ["Entre em Contato.","https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }],
  },
  {
    nome: "Espaço Emídio e Sá.",
    descrição:
    "Desenvolvido com Next.js, React, TypeScript e Tailwind CSS, este projeto foi criado para transmitir o conceito de equilíbrio entre corpo e mente por meio de uma interface moderna, responsiva e de alta performance. A aplicação utiliza componentização inteligente, tipagem estática e boas práticas de arquitetura, garantindo escalabilidade e fácil manutenção. A integração com EmailJS possibilita envio de mensagens dinâmico e seguro. Foco em acessibilidade, SEO e UX otimizado reforça o compromisso com qualidade e usabilidade. Este projeto reflete minha habilidade em transformar ideias e valores em experiências digitais completas, combinando tecnologia e propósito.",
    imagens: ['/EPS_files/emidio1.png', '/EPS_files/emidio2.png', '/EPS_files/emidio3.png', '/EPS_files/emidio4.png', '/EPS_files/emidio5.png',],
    technology: ["Javascript", "Typescript", "React Js.", "Next Js.", "Tailwind Css",],  
    links: [
      { Site: ["Visite o site.", "https://emidio.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/emidio"] }, { Whatsapp: ["Entre em Contato.","https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }],
  },
  {
    nome: "BrasilCard.",
    descrição:
    "Este projeto foi desenvolvido para representantes da empresa BrasilCard, uma das administradoras de cartão que mais cresce no país. Construído com Next.js 15, React 19, TypeScript e Tailwind CSS, o sistema apresenta uma interface moderna, intuitiva e totalmente responsiva. A aplicação foi otimizada com o uso do Turbopack, garantindo alta performance e builds mais rápidas. O foco principal foi criar uma experiência eficiente para os usuários, com código limpo, arquitetura escalável e boas práticas de SEO e acessibilidade. Este projeto reflete minha capacidade de integrar tecnologias de ponta para atender necessidades reais do mercado, entregando soluções robustas e elegantes.",
    imagens: ['/EPS_files/bcard1.png', '/EPS_files/bcard2.png', '/EPS_files/bcard3.png', '/EPS_files/bcard4.png', '/EPS_files/4.png', '/EPS_files/5.png', '/EPS_files/7.png',],
    technology: ["Javascript", "Typescript", "React Js.", "Next Js.", "Tailwind Css",], 
    links: [
      { Site: ["Visite o site.", "https://cartao-marca-propria-sc71.vercel.app/"] }, { GitHub: ["Visite o github.", "https://github.com/Edsonsantos0840/cartao-marca-propria"] }, { Whatsapp: ["Entre em Contato.","https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."] }],
  },
];
