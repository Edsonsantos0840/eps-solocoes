import CardSocialMedia from "@/features/social/CardSocialMedia";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";

export default function HeroSidebar() {
  return (
    <article className="space-y-4 lg:space-y-12 p-2 md:flex md:justify-around  lg:justify-center lg:flex-col">
      <CardSocialMedia />
      <div className="lg:p-2 shadow-sm rounded-2xl space-y-6 md:space-y-1 border-[.5px] border-[var(--color-foreground)]/15">
        <div className="flex justify-around items-center gap-4 md:gap-2 pt-2 md:p-0">
          <figure className=" rounded-full w-[100px] h-[100px] lg:w-[80px] lg:h-[80px]">
            <Image
              src={'/programador.png'}
              alt="Imagem do programador Edson Santos"
              width={100}
              height={100}
              className="rounded-full"
            />
          </figure>
          <div>
            <h1 className="text-2xl md:text-xl font-bold lg:pr-2">Edson Santos </h1>
            <span className="text-base font-light text-[var(--color-foreground)]/70">Programador Front-End</span>
          </div>

        </div>
        <Link href={'/'} className="cursor-pointer">
          <strong className="flex justify-center items-center mx-auto w-[80%] mb-4 lg:mb-0 shadow-md bg-[var(--color-foreground)]/90  text-white hover:bg-[var(--color-foreground)] hover:scale-105 transition-all ease-in duration-300 gap-2 p-2 rounded text-center">
            <AiOutlineSend size={20} />
            Fale Conosco
          </strong>
        </Link>

      </div>
    </article>
  );
}
