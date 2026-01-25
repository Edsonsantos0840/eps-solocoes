import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import { SocialMedia } from "../types";

export const socialLinks: SocialMedia[] = [
    {
        href: "https://github.com/Edsonsantos0840",
        aria: "Perfil no GitHub de Edson Santos",
        icon: FaGithubSquare,
    },
    {
        href: "https://www.linkedin.com/in/edsonpsantos/",
        aria: "Perfil no LinkedIn de Edson Santos",
        icon: FaLinkedin,
    },
    {
        href: "https://wa.me/5519982360898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
        aria: "Enviar mensagem no WhatsApp de Edson Santos",
        icon: FaWhatsapp,
    },
    {
        href: "mailto:edsonpsantos@gmail.com",
        aria: "Enviar email para Edson Santos",
        icon: TfiEmail,
    },
];
