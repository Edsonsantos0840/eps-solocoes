import { ProjectProps, TechnologyItem } from "./types";


export default function ProjectTechnologies({ projetos, current }: { projetos: ProjectProps[], current: number }) {
    // faz o map nas tecnologias
    const getTechnologies = projetos[current].technologies.map((tech: TechnologyItem, i: number) => {
        const Icon = tech.icon;
        return (

            <li key={i} className="hover:scale-110 rounded-md text-md text-center bg-[var(--color-foreground)]/20 w-32 h-28 pt-2 m-auto shadow-md text-[var(--color-foreground)]/90 transition-all ease-in duration-300">
                {tech.name}
                <Icon className="text-4xl mx-auto mt-2 text-center" />
            </li>
        )
    });

    return <ul className="flex justify-between items-center gap-4 ">{getTechnologies} </ul>
}
