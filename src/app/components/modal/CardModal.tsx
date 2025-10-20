import Image, { StaticImageData } from "next/image";
import { projetos } from "../projects/ProjetosFields";
import Link from "next/link";


export default function CardModal({ current }: {current: number}) {
  return (
      <div className="w-full mb-2  space-y-8 " >

          <h2 className="text-3xl font-semibold text-center">{projetos[current].nome}</h2>
          <div className="">
              <p className=" text-justify text-lg">{projetos[current].descrição}</p>
          </div>
          <ul className="flex justify-between gap-6 t-14">
              {projetos[current].links && projetos[current].links.map((link, i) => {
                  const [key, value] = Object.entries(link)[0];

                  return (
                      <div key={i} className="space-y-2 hover:scale-110 text-center transition-all ease-in duration-300">
                          <p className="text-sm text-black/60">{ value[0]}</p>
                          
                      <Link
                          href={value[1]}
                          target="_blank"
                          className="text-xl font-bold cursor-pointer hover:border-b-2 text-black/80 "
                      >
                          {key}
                      </Link>
                      </div>
                  );
              })}
          </ul>
            {/* <h3 className="my-4 text-xl font-semibold ">Tecnologias utilizadas</h3>
          <ul
              className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto"
          >
              {projetos[current].technology &&
                  projetos[current].technology.map((tech: string, i: number) => (
                      <span
                          key={i}
                          className="py-1 px-3 border border-black/15 rounded-full text-base flex-grow basis-[120px] text-center"
                      >
                          {tech}
                      </span>
                  ))}
          </ul> */}
          <div className="space-y-2 mx-auto">
              {
                  projetos[current].imagens &&
                  projetos[current].imagens.map((img: string | StaticImageData, i: number) => (
                      <figure key={i} className="mx-auto">
                          <Image src={img} alt={`imagem ${i} do projeto ${projetos[current].nome} `} width={900} height={250} />
                    </figure>
                  ))
              }
          </div>
      </div>
  )
}
