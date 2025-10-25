import Image from "next/image";
import Link from "next/link";
import { AiOutlineBulb, AiOutlineCodepen, AiOutlineRise, AiOutlineSend } from "react-icons/ai";
import CardSocialMedia from "./socials/CardSocialMedia";
import { projetos } from "./projects/ProjetosFields";


export default function Hero() {
  return (
    <section className="grid grid-cols-1 scroll-margin-top lg:grid-cols-[5fr_2fr] lg:gap-3 lg:my-4 "
      id="inicio"
    >
      <article className="">
        <div className="md:flex md:gap-8 md:px-8 lg:px-0">
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
            <div className="flex gap-2 justify-between">
              <div className="flex items-center gap-2 space-y-2">
                {/* <BsStarFill /> */}
                <strong className="text-2xl border-[1px] border-[var(--color-foreground)]/60 rounded-full px-2">{projetos.length}</strong>
                <p>Projetos até o momento</p>
              </div>

              <div className="flex items-center gap-2 space-y-2">
                |
                <AiOutlineRise />
                <AiOutlineRise />
                <p>Outros projetos em breve.</p>
              </div>
            </div>
            <p className="text-justify md:text-left">
              Desenvolvemos interfaces web intuitivas e responsivas,
              que proporcionam uma excelente experiência do usuário.
            </p>
            <div className="flex justify-between gap-4">
              <p>Criando o futuro</p>
              <AiOutlineCodepen size={24} />
              <p>Desenvolvendo soluções</p>
              <AiOutlineBulb size={22} />
            </div>
          </div>
        </div>
        <div className="my-4 md:my-0">
          <h2 className="text-2xl text-center md:text-left font-semibold ">Sobre </h2>
          <p className="text-justify ">
            Olá, sou Edson Santos, desenvolvedor front-end apaixonado por tecnologia e aprendizado constante.
            Venho de uma origem simples, e desde cedo aprendi o valor do esforço e da dedicação. Antes da programação, trabalhei em diversas áreas — da roça à área comercial — o que me trouxe muita experiência com pessoas, disciplina e resiliência.
            Hoje, encontrei na tecnologia o que realmente me motiva: transformar ideias em soluções digitais.
            Sou comprometido, curioso e gosto de aprender algo novo todos os dias. Meu objetivo é crescer como profissional e contribuir com projetos que façam a diferença.
          </p>
          </div>
      </article>
      <article className="space-y-12">
        <CardSocialMedia />
        <div className="lg:p-4 shadow-sm rounded-2xl space-y-6 border-[.5px] border-[var(--color-foreground)]/15">
          <div className="flex justify-around items-center gap-4 pt-2 md:p-0">
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
            <strong className="flex justify-center items-center mx-auto w-[80%] mb-4 shadow-md bg-[var(--color-foreground)]/90  text-white hover:bg-[var(--color-foreground)] hover:scale-105 transition-all ease-in duration-300 gap-2 p-2 rounded text-center">
              <AiOutlineSend size={20} />
              Fale Conosco
            </strong>
          </Link>

        </div>
        <div className="relative hidden lg:block">
          <figure className=" w-[140px] h-[140px] rounded-md absolute right-0 top-0 hover:scale-105 transition-all duration-500 delay-300" >
            <Image
              src={'/logo.png'}
              alt="Imagem do programador Edson Santos"
              width={250}
              height={250}
              className="rounded-md"
            />
          </figure>
        </div>
      </article>

    </section>
  )
}
