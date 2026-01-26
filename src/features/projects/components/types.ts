import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface imgProjectProps {
    id: number,
    nome: string,
    img: (string | StaticImageData),
    link: string
};

export interface TechnologyItem {
    name: string;
    icon: IconType;
}

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

export interface ProjectProps {
    name: string;
    summary: string;
    role: string;
    description: string;
    technologies: TechnologyItem[];
    highlights: string[];
    links: {
        Site?: string[];
        GitHub?: string[];
        Whatsapp?: string[];
        Back_End?: string[];
    }[];
    images: string[];
}
