import Image, { StaticImageData } from "next/image";
import { ProjectProps } from "./types";

export default function ProjectImages({ projetos, current }: { projetos: ProjectProps[], current: number }) {
    //faz o map nas imagens.
    const getImages = projetos[current].images.map((img: string | StaticImageData, i: number) => {

        return (
            <figure key={i} className="mx-auto rounded-2xl">
                <Image className=" rounded-2xl" src={img} alt={`imagem ${i} do projeto ${projetos[current].name} `} width={500} height={170} />
            </figure>
        )
    });
    return <div className="space-y-2 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">{getImages} </div>
}
