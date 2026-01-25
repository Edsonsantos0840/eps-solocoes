import Image from "next/image";
import Link from "next/link";
import { AiOutlineBulb, AiOutlineCodepen, AiOutlineRise, AiOutlineSend } from "react-icons/ai";
import CardSocialMedia from "./socials/CardSocialMedia";
import { projetos } from "../features/projects/components/ProjetosFields";


export default function Hero() {
  return (
    <section className=" scroll-margin-top  lg:my-4 "
      id="inicio"
    >
      <article className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] lg:gap-3">
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
      </article>
      <>
        <h2 className="text-2xl text-center md:text-left font-semibold px-2 my-[1rem]">Sobre </h2>
        <div className="my-4 md:my-2 md:flex justify-between gap-4 px-2">
          <div className="relative hidden md:block">
            <figure className=" w-[13.1rem] h-[13.1rem] lg:w-[9rem] lg:h-[9rem] xl:w-[7rem] xl:h-[7rem] rounded-md  hover:scale-105 transition-all duration-500 delay-300" >
              <Image
                src={'/logo.png'}
                alt="Imagem do programador Edson Santos"
                width={250}
                height={250}
                className="rounded-md"
              />
            </figure>
          </div>
          <p className="text-justify text:xl lg:text-base   ">
            Olá, sou Edson Santos, desenvolvedor front-end apaixonado por tecnologia e aprendizado constante.
            Venho de uma origem simples, e desde cedo aprendi o valor do esforço e da dedicação. Antes da programação, trabalhei em diversas áreas — da roça à área comercial — o que me trouxe muita experiência com pessoas, disciplina e resiliência.
            Hoje, encontrei na tecnologia o que realmente me motiva: transformar ideias em soluções digitais.
            Sou comprometido, curioso e gosto de aprender algo novo todos os dias. Meu objetivo é crescer como profissional e contribuir com projetos que façam a diferença.
          </p>
        </div>
      </>
    </section>
  )
}
