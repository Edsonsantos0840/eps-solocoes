import { ReactElement } from "react";
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

interface SocialMediaProps{
    href: string,
    aria: string,
    ico:  ReactElement
}

export const  SocialMediaFields: SocialMediaProps[] = [
    {
        href: "https://github.com/Edsonsantos0840" ,
        aria: "Perfil no GitHub de Edson Santos",
        ico: <FaGithubSquare className="w-[5rem] h-[5rem] md:w-[4rem] md:h-[4rem]" />
    },
    {
        href: "https://www.linkedin.com/in/edsonpsantos/"  ,
        aria: "Perfil no LinkedIn de Edson Santos",
        ico: <FaLinkedin className="w-[5rem] h-[5rem] md:w-[4rem] md:h-[4rem]" />
    },
    {
        href: "https://wa.me/5519982360898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio." ,
        aria: "Enviar mensagem no WhatsApp de Edson Santos",
        ico: <FaWhatsapp className="w-[5rem] h-[5rem] md:w-[4rem] md:h-[4rem]" />
    },
    {
        href: "mailto:edsonpsantos@gmail.com" ,
        aria: "Enviar email para Edson Santos",
        ico: <TfiEmail className="w-[5rem] h-[5rem] md:w-[4rem] md:h-[4rem]" />
    },

]