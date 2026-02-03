import { ProjectProps, TechnologyItem } from "./types";


export default function ProjectTechnologies({ projetos, current }: { projetos: ProjectProps[], current: number }) {
    // faz o map nas tecnologias
    const getTechnologies = projetos[current].technologies.map((tech: TechnologyItem, i: number) => {
        const Icon = tech.icon;
        return (

            <li key={i} className="hover:scale-110 rounded-md text-md text-center bg-foreground/20 w-28 h-24 md:w-32 md:h-28 pt-2 m-auto shadow-md text-foreground/90 transition-all ease-in duration-300">
                {tech.name}
                <Icon className="text-4xl mx-auto mt-2 text-center" />
            </li>
        )
    });

    return <ul className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 items-center p-2 md:p-0 gap-4 ">{getTechnologies} </ul>
}
