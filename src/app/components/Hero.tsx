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
          <article>
            <div className="lg:flex lg:gap-8">
             <figure className=" rounded-full lg:w-[300px] lg:h-[300px]">
              <Image
                src={'/programador.png'}
                alt="Imagem do programador Edson Santos"
                width={300}
                height={300}
                className="rounded-full bg-[var(--color-secondary)] p-1"
              />  
             </figure>
          <div className="lg:my-8 space-y-2">
            <h1 className="text-2xl font-bold lg:pr-2">Edson Santos <span className="text-lg font-light text-[var(--color-foreground)]/70">Programador Front-End</span></h1>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 space-y-2">
                {/* <BsStarFill /> */}
                <strong className="text-2xl border-[1px] border-black/60 rounded-full px-2">{ projetos.length}</strong>
                <p>Projetos até o momento</p>
              </div>
              
              <div className="flex items-center gap-2 space-y-2">
                |
                <AiOutlineRise />
                <AiOutlineRise />
                <p>Outros projetos em breve.</p>
              </div>
            </div>
            <p>
              Desenvolvemos interfaces web intuitivas e responsivas,
              que proporcionam uma excelente experiência do usuário.
            </p>
            <div className="flex lg:gap-4">
              <p>Criando o futuro</p>
              <AiOutlineCodepen size={24} />
              <p>Desenvolvendo soluções</p>
              <AiOutlineBulb size={22} />
            </div>
          </div>     
            </div>
            <>
          <h2 className="text-2xl font-semibold ">Sobre </h2>
                <p>
                  Olá, sou Edson Santos.
                  Sempre fui apaixonado por tecnologia, e tudo que diz respeito a tecnologia me encanta. Passei muito tempo acreditando que a área da programação não era para mim, por conta do pouco tempo que tinha para estudar. Porém, descobri que trabalhar como programador é o que eu realmente quero para minha vida, tenho muito prazer em programar, e adoro aprender tudo sobre o mundo da tecnologia. Mesmo com as dificuldades, não vou desistir. Descobri também que com dedicação e uma boa organização, consigo potencializar o tempo e ter um bom resultado, e espero fazer parte do seu time. Prometo que vou me esforçar ao máximo para satisfazer as expectativas.
                </p>
            </>
          </article>
          <article className="space-y-12">
              <CardSocialMedia/>
              <div className="lg:p-4 shadow-sm rounded-2xl space-y-6 border-[.5px] border-black/15">
               <div className="flex lg:gap-4">
                <figure className=" rounded-full lg:w-[80px] lg:h-[80px]">
                  <Image
                      src={'/programador.png'}
                      alt="Imagem do programador Edson Santos"
                      width={80}
                      height={80}
                      className="rounded-full"
                  />
                  </figure>
                  <div>
                    <h1 className="text-xl font-bold lg:pr-2">Edson Santos </h1>
                    <span className="text-base font-light text-[var(--color-foreground)]/70">Programador Front-End</span>
                  </div>
                      
                </div>
          <Link href={'/'} className="cursor-pointer">
            <strong className="flex justify-center g:w-[80%] shadow-md bg-[var(--color-foreground)]/90  text-white hover:bg-[var(--color-foreground)] hover:scale-105 transition-all ease-in duration-300 gap-2 p-2 rounded text-center">
              <AiOutlineSend size={20} />
              Fale Conosco
            </strong> 
          </Link>
                      
              </div>
        <figure className=" rounded-full lg:w-[250px] lg:h-[250px] mx-auto opacity-30 hover:opacity-60 transition-all duration-500 delay-300" >
                  <Image
                      src={'/EPS_files/9.png'}
                      alt="Imagem do programador Edson Santos"
                      width={250}
                      height={250}
                      className=""
                  />
              </figure>
          </article>
          
    </section>
  )
}
