import { IconType } from "react-icons";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

export interface ContactField {
    name: string;
    type: string;
    placeholder: string;
    icon: IconType;
}

export const contactFields: ContactField[] = [
    {
        name: "nome",
        type: "text",
        placeholder: "Digite seu nome",
        icon: FaUser,
    },
    {
        name: "email",
        type: "email",
        placeholder: "Digite seu e-mail",
        icon: FaEnvelope,
    },
    {
        name: "telefone",
        type: "tel",
        placeholder: "Digite seu telefone",
        icon: FaPhone,
    },
];
