import Link from "next/link";
import { ProjectProps } from "./types";


export default function ProjectLink({ projetos, current }: { projetos: ProjectProps[], current: number }) {
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
    return <h2 className="flex px-2 justify-between items-center gap-2 text-xl md:text-xl font-semibold text-center">{getLinks}</h2>
}
