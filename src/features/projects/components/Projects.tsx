
import Image from "next/image";
import { imgProject} from "./data/ProjetosFields";
import Link from "next/link";
import { imgProjectProps } from "./types";

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
      </div>
    </section>
  )
}
