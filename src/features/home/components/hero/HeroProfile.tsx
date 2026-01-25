import { projetos } from "@/features/projects/components/data/ProjetosFields";
import Image from "next/image";
import { AiOutlineRise, AiOutlineCodepen, AiOutlineBulb } from "react-icons/ai";

export default function HeroProfile() {
    return (
        <div className="md:flex md:gap-8 md:px-8 ">
            <figure className=" rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto">
                <Image
                    src={'/programador.png'}
                    alt="Imagem do programador Edson Santos"
                    width={300}
                    height={300}
                    className="rounded-full bg-[var(--color-secondary)] p-1"
                />
            </figure>
            <div className="lg:my-8 space-y-2 text-center md:text-left">
                <h1 className="text-2xl font-bold lg:pr-2">Edson Santos <span className="text-lg font-light text-[var(--color-foreground)]/70">Programador Front-End</span></h1>
                <div className="flex flex-col md:flex-row gap-2 justify-between">
                    <div className="flex justify-center lg:justify-baseline items-center gap-2 space-y-2">
                        <strong className="text-3xl lg:text-2xl border-[1px] border-[var(--color-foreground)]/60 rounded-full px-2 lg:px-2">{projetos.length}</strong>
                        <p className="text-2xl md:text-lg lg:base">Projetos até o momento</p>
                    </div>

                    <div className="hidden md:flex justify-center lg:justify-baseline items-center gap-2 space-y-2">
                        <p className="hidden lg:block" >|</p>
                        <AiOutlineRise className="text-2xl md:text-lg lg:base" />
                        <AiOutlineRise className="text-2xl md:text-lg lg:base" />
                        <p className="text-2xl md:text-lg lg:base">Outros projetos em breve.</p>
                    </div>
                </div>
                <p className="text-justify text:xl lg:text-base md:text-left px-2">
                    Desenvolvemos interfaces web intuitivas e responsivas,
                    que proporcionam uma excelente experiência do usuário.
                </p>
                <div className="hidden md:flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex justify-center lg:justify-baseline items-center gap-2 space-y-2">
                        <p className="text-2xl md:text-lg lg:base">Criando o futuro</p>
                        <AiOutlineCodepen className="text-4xl lg:base" />
                    </div>
                    <div className="flex justify-center lg:justify-baseline items-center gap-2 space-y-2">
                        <p className="text-2xl md:text-lg lg:base">Desenvolvendo soluções</p>
                        <AiOutlineBulb className="text-4xl lg:base" />
                    </div>
                </div>
            </div>
        </div>
    );
}
