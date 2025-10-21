import { IconType } from "react-icons";
import {
  FaBuilding,
  FaBullhorn,
  FaUtensils,
  FaCalendarCheck,
  FaUsers,
  FaUserCog,
  FaLaptopCode,
} from "react-icons/fa";
// types
export interface CardServicesProps {
  title: string;
  description: string;
  icon: IconType;
}

// data
export const cardServices: CardServicesProps[] = [
  {
    title: "Site Institucional",
    description:
      "Apresente sua empresa de forma profissional e moderna. Um site institucional bem estruturado reforça sua credibilidade e facilita o contato com seus clientes.",
    icon: FaBuilding
  },
  {
    title: "Serviços ou Produtos",
    description:
      "Mostre o valor do que você oferece com clareza, design atrativo e foco em conversão — ideal para empresas, prestadores de serviços e profissionais liberais.",
    icon:  FaBullhorn
  },
  {
    title: "Cardápios Digitais",
    description:
      "Cardápios online personalizados para pizzarias, lanchonetes, hamburguerias, docerias e sorveterias. Design responsivo, fácil de atualizar e pronto para receber pedidos.",
    icon:  FaUtensils
  },
  {
    title: "Sistemas de Agendamento",
    description:
      "Automatize seus agendamentos com um sistema intuitivo e integrado — ideal para salões, oficinas, clínicas e qualquer negócio que trabalha com horários marcados.",
    icon:  FaCalendarCheck
  },
  {
    title: "Cadastro e Controle de Clientes",
    description:
      "Gerencie seus clientes com eficiência através de um sistema prático, seguro e totalmente adaptado à rotina do seu negócio.",
    icon:  FaUsers
  },
  {
    title: "Controle de Funcionários",
    description:
      "Otimize a gestão da sua equipe com um sistema simples e eficaz para cadastrar, monitorar e gerenciar informações de colaboradores.",
    icon:  FaUserCog
  },
  {
    title: "Projetos & Freelancer",
    description:
      "Precisa de algo diferente? Desenvolvemos soluções sob medida, seja um sistema exclusivo, um portal corporativo ou um projeto freelancer.",
    icon:  FaLaptopCode
  },
];
