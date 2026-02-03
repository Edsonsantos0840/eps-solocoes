import { ProjectProps } from "./types";


export default function ProjectHighlights({ projetos, current }: { projetos: ProjectProps[], current: number }) {
    //faz o map nos destaques
       const getHighlights = projetos[current].highlights.map((item: string, i: number) => {
   
           return (
               <li key={i} className="flex items-center list-none hover:scale-105 rounded-md text-sm w-28 h-24  md:h-16 md:p-1.5  m-auto shadow-md bg-foreground/20 text-foreground/90 transition-all ease-in duration-300">{item}</li>
           )
       });
    return <ul className="grid grid-cols-3 md:grid-cols-6 items-center gap-2 font-semibold text-center ">{getHighlights}</ul>
}
