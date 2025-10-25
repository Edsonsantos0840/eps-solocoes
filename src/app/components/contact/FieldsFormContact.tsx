import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import type { ReactElement } from "react";

export interface FieldFormContactProps {
    name: string;
    type: string;
    ico?: ReactElement
    placeholder: string;
}

export const FieldsFormContact: FieldFormContactProps[] = [
    {
        name: "nome",
        type: "text",
        ico: <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />,
        placeholder: "Digite seu nome ",
    },
    {
        name: "email",
        type: "email",
        ico: <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />,
        placeholder: "Digite seu e-mail",
    },
    {
        name: "telefone",
        type: "tel",
        ico: <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />,
        placeholder: "Digite seu telefone"
    }
]