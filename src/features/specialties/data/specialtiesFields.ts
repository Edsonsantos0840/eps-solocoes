import { IconType } from "react-icons";

import {
  FaReact,
  FaMobileAlt,
  FaTachometerAlt,
  FaUniversalAccess,
  FaSearch,
  FaPuzzlePiece,
} from "react-icons/fa";
import { SpecialtyProps } from "../types";

export const specialties: SpecialtyProps[] = [
  {
    title: "React & Next.js",
    description: "Desenvolvimento de aplicações modernas com SSR, SSG e SEO otimizado.",
    icon: FaReact,
  },
  {
    title: "UI Responsiva",
    description: "Layouts adaptáveis para mobile, tablet e desktop com ótima usabilidade.",
    icon: FaMobileAlt,
  },
  {
    title: "Performance Web",
    description: "Otimização de carregamento, imagens e código para máxima velocidade.",
    icon: FaTachometerAlt,
  },
  {
    title: "Acessibilidade",
    description: "Interfaces inclusivas seguindo boas práticas de acessibilidade (WCAG).",
    icon: FaUniversalAccess,
  },
  {
    title: "SEO Front-End",
    description: "Estruturação semântica e otimização para mecanismos de busca.",
    icon: FaSearch,
  },
  {
    title: "Componentização",
    description: "Criação de componentes reutilizáveis, escaláveis e bem organizados.",
    icon: FaPuzzlePiece,
  },
];
