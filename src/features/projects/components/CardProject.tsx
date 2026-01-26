import Image, { StaticImageData } from "next/image";
import { projectsPage, projetos } from "./data/ProjetosFields";
import Link from "next/link";
import { TechnologyItem } from "./types";


export default function CardProject({ current }: { current: number }) {
    // Força ficar entre indice 0 e 5.
    if (current > 5) {
        current = 0
    } else if (current < 0) {
        current = 5
    };

    // Cria as urls Próximo projeto e projeto anterior 
    const urlNext = `/${projectsPage[current + 1]}`;
    const urlPrevious = `/${projectsPage[current - 1]}`;

    // faz o map nos links
    const getLinks = projetos[current].links.map((link, i) => {
        const [key, value] = Object.entries(link)[0];

        return (
            <li key={i} className="space-y-2 list-none hover:scale-110 text-center transition-all ease-in duration-300">
                <p className="text-sm hidden lg:block text-[var(--color-foreground)]/60">{value[0]}</p>

                <Link
                    href={value[1]}
                    target="_blank"
                    className="text-xl font-bold cursor-pointer hover:border-b-2 text-[var(--color-foreground)]/80 "
                >
                    {key}
                </Link>
            </li>
        );
    });

    // faz o map nas tecnologias
    const getTechnologies = projetos[current].technologies.map((tech: TechnologyItem, i: number) => {
        const Icon = tech.icon;
        return (

            <li key={i} className="hover:scale-110 text-md text-center bg-[var(--color-foreground)]/10 w-32 h-24 pt-2 m-auto shadow-md text-[var(--color-foreground)]/90 transition-all ease-in duration-300">
                {tech.name}
                <Icon className="text-2xl mx-auto mt-2 text-center" />
            </li>
        )
    });

    //faz o map nos destaques
    const getHighlights = projetos[current].highlights.map((item: string, i: number) => {

        return (
            <li key={i} className="list-none hover:scale-105 text-sm  h-12 p-1  m-auto shadow-md bg-[var(--color-foreground)]/10 text-[var(--color-foreground)]/90 transition-all ease-in duration-300">{item}</li>
        )
    });

    //faz o map nas imagens.
    const getImages = projetos[current].images.map((img: string | StaticImageData, i: number) => {

        return (
            <figure key={i} className="mx-auto rounded-2xl">
                <Image className=" rounded-2xl" src={img} alt={`imagem ${i} do projeto ${projetos[current].name} `} width={500} height={170} />
            </figure>
        )
    });

    //começo do componente
    return (
        <main className="container-main w-full mb-2 space-y-4 lg:space-y-8 pt-14" >
            <header className="flex justify-between">
                <Link href={urlPrevious}
                    className="bg-[var(--color-foreground)]/90 text-white px-4 py-2  rounded cursor-pointer hover:bg-[var(--color-foreground)] hover:scale-105"
                >
                    Voltar
                </Link>
                <h1 className="text-2xl md:text-3xl font-semibold text-center">{projetos[current].name}</h1>
                <Link href={urlNext}
                    className="bg-[var(--color-foreground)]/90 text-white px-4 py-2  rounded cursor-pointer hover:bg-[var(--color-foreground)] hover:scale-105"
                >
                    Proximo
                </Link>

            </header>

            


            <h3 className="font-bold text-center">Tecnologias utilizadas</h3>
            <ul className="flex justify-between items-center gap-4 ">{getTechnologies} </ul>
            <h3 className="font-bold text-center">Destaques do Projeto.</h3>
            <ul className="flex justify-between items-center gap-2 font-semibold text-center ">{getHighlights}</ul>

            <h3 className="font-bold text-center">Descrição do Projeto.</h3>
            <p className=" text-justify lg:text-lg">{projetos[current].description}</p>
            <p className="font-semibold text-center">{projetos[current].role}</p>
            <h2 className="text-xl md:text-xl font-semibold text-center">{projetos[current].summary}</h2>
            <h2 className="flex px-2 justify-between items-center gap-2 text-xl md:text-xl font-semibold text-center">{getLinks}</h2>
            <div className="space-y-2 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {getImages}
            </div>
        </main>
    )
}
