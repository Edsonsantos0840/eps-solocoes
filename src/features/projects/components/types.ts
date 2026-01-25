import { StaticImageData } from "next/image";

export interface imgProjectProps {
    id: number,
    nome: string,
    img: (string | StaticImageData),
    link: string
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