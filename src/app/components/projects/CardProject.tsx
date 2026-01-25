import Image, { StaticImageData } from "next/image";
import { projetos } from "./ProjetosFields";
import Link from "next/link";


export default function CardProject({ current }: { current: number }) {
    return (
        <main className="container-main w-full mb-2 space-y-4 lg:space-y-8 pt-14" >
            <Link href={'/'}
                
                className="bg-[var(--color-foreground)]/90 text-white px-4 py-2  rounded cursor-pointer hover:bg-[var(--color-foreground)] hover:scale-105"
            >
                Voltar
            </Link>

            <h1 className="text-2xl md:text-3xl font-semibold text-center">{projetos[current].nome}</h1>
            <div className="">
                <p className=" text-justify lg:text-lg">{projetos[current].descrição}</p>
            </div>
            <ul className="flex justify-between gap-2 lg:gap-6 ">
                {projetos[current].links && projetos[current].links.map((link, i) => {
                    const [key, value] = Object.entries(link)[0];

                    return (
                        <div key={i} className="space-y-2 hover:scale-110 text-center transition-all ease-in duration-300">
                            <p className="text-sm hidden lg:block text-[var(--color-foreground)]/60">{value[0]}</p>

                            <Link
                                href={value[1]}
                                target="_blank"
                                className="text-xl font-bold cursor-pointer hover:border-b-2 text-[var(--color-foreground)]/80 "
                            >
                                {key}
                            </Link>
                        </div>
                    );
                })}
            </ul>
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
        </main>
    )
}
