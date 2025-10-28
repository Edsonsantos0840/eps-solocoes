'use client'
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";


export default function Projects() {
  const pathname = usePathname();
  const searchParames = useSearchParams();
  const route = useRouter()

  function openModal() {
    const params = new URLSearchParams(searchParames.toString())
    params.set('modal', 'projetos');
    route.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <section onClick={openModal} id="projetos" className="w-full scroll-margin-top border-[.5px] border-[var(--color-foreground)]/15 rounded p-4 xl:my-8 cursor-pointer">
      <h2 className="text-3xl font-bold text-center my-4">Clique para ver os projetos</h2>
      <div className="grid grid-cols-1 xl:grid-cols-[5fr_2fr] my-8">
        <figure className="xl:w-[800px] xl:h-[350px] mx-auto">
          <Image
            src={'/EPS_files/bcard3.png'}
            alt="Imagem do projeto"
            width={800}
            height={350}
            className=""
          />
        </figure>
        <div className="md:my-8 space-y-6 md:text-xl xl:text-sm m-auto">
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
        </div>
      </div>
    </section>
  )
}
