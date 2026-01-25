'use client'
import Image from "next/image";

import { imgProject, imgProjectProps } from "./projects/ProjetosFields";
import Link from "next/link";

export default function Projects() {
 
  return (
    <section className="w-full scroll-margin-top border-[.5px] text-[var(--color-foreground)]/90 border-[var(--color-foreground)]/15 rounded p-4 xl:my-8 ">
      <h2 className="text-3xl font-bold text-center my-4">Clique para ver os projetos</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 my-8 gap-8 p-2 ">
        {
          imgProject &&
          imgProject.map((project: imgProjectProps) => (
           <Link href={project.link} key={project.id}>
            <article className="cursor-pointer">
                <h2 className="text-xl font-bold text-center my-2">{project.nome}</h2>
              
              <figure className="w-full mx-auto rounded-2xl hover:scale-105 transition ease-in-out duration-500">
                <Image
                  src={project.img}
                  alt="Imagem do projeto"
                  width={600}
                  height={280}
                  className="rounded-2xl"
                />
              </figure>

            </article>
           </Link>
          ))
        }
        {/* <div className="md:my-8 space-y-6 md:text-xl xl:text-sm m-auto">
          <h1 className="text-xl font-bold text-center xl:text-right">Edson Santos
            <span className="text-lg font-light text-[var(--color-foreground)]/70 text-center xl:text-right">Programador Front-End</span></h1>
          <strong className="text-center xl:text-right">Sou especializado em:</strong>
          <div className="flex flex-wrap justify-around mt-2">
            <div className="space-y-2">
              <TbBrandTypescript className="text-[var(--color-foreground)]/80 text-6xl md:text-6xl xl:text-6xl" />
              <p className='text-xs'>TYPESCRIPT</p>
            </div>
            <div className="space-y-2">
              <FaReact className="text-[var(--color-foreground)]/80 text-6xl md:text-6xl xl:text-6xl" />
              <p className='text-xs'>REACT</p>
            </div>
            <div className="space-y-2">
              <TbBrandNextjs className="text-[var(--color-foreground)]/80 text-6xl md:text-6xl xl:text-6xl" />
              <p className='text-xs'>NEXT.JS</p>
            </div>
            <div className="space-y-2">
              <TbBrandTailwind className="text-[var(--color-foreground)]/80 text-6xl md:text-6xl xl:text-6xl" />
              <p className='text-xs'>TAILWIND</p>
            </div>


          </div>
          <p className="text-justify md:text-xl xl:text-base">
            Desenvolvemos interfaces web intuitivas e responsivas,
            que proporcionam uma excelente experiência do usuário.
          </p>
          <div className="flex justify-around text-sm md:text-xl xl:text-sm font-bold">
            <p>Sites Personalizados</p>
            <p>Desenvolvimento Web</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
