
import { projectsPage, projetos } from "./data/ProjetosFields";
import Link from "next/link";
import ProjectLink from "./ProjectLink";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectHighlights from "./ProjectHighlights";
import ProjectImages from "./ProjectImages";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";


export default function CardProject({ current }: { current: number }) {
    // Força ficar entre indice 0 e 5.
    const total = projectsPage.length;

    const nextIndex = (current + 1) % total;
    const prevIndex = (current - 1 + total) % total;
    // Cria as urls Próximo projeto e projeto anterior 
    const urlNext = `/${projectsPage[nextIndex]}`;
    const urlPrevious = `/${projectsPage[prevIndex]}`;


    //começo do componente
    return (
        <main className="container-main w-full mb-2 space-y-4 lg:space-y-8 pt-14" >
            {/* Sessão dos botões */}
            <header className="flex justify-between">
                <Link href={urlPrevious}
                    className="flex justify-between items-center gap-2 bg-foreground/90 text-white px-2 py-1 md:px-4 md:py-2  rounded cursor-pointer hover:bg-foreground hover:scale-105"
                >
                    <FaChevronLeft className=" hidden md:flex "/>
                    Voltar
                </Link>
                <h1 className="text-2xl md:text-3xl font-semibold text-center">{projetos[current].name}</h1>
                <Link href={urlNext}
                    className="flex justify-between items-center  gap-2 bg-foreground/90 text-white px-2 py-1 md:px-4 md:py-2  rounded cursor-pointer hover:bg-foreground hover:scale-105"
                >
                    Proximo
                    <FaChevronRight className=" hidden md:flex "/>
                </Link>
            </header>

            {/* ------------------------------sessão das Informações------------------------- */}
            <h3 className="font-bold text-center">Tecnologias utilizadas</h3>
            <ProjectTechnologies projetos={projetos} current={current} />

            <h3 className="font-bold text-center">Destaques do Projeto.</h3>
            <ProjectHighlights projetos={projetos} current={current} />

            <h3 className="font-bold text-center">Descrição do Projeto.</h3>

            <p className=" text-justify lg:text-lg">{projetos[current].description}</p>

            <p className="font-semibold text-center">{projetos[current].role}</p>

            <h2 className="text-xl md:text-xl font-semibold text-center">{projetos[current].summary}</h2>

            <ProjectLink projetos={projetos} current={current} />

            <ProjectImages projetos={projetos} current={current} />
        </main>
    )
}
