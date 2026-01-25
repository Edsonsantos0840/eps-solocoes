
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { ContactField } from "../types";

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
