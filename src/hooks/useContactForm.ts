import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

interface ContactFormData {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
}

export function useContactForm() {
    const [data, setData] = useState<ContactFormData>({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });

    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (!data.nome || !data.email || !data.mensagem) {
            setStatus("Preencha os campos obrigatórios.");
            return;
        }
        const templateParams: Record<string, unknown> = {
            nome: data.nome,
            email: data.email,
            telefone: data.telefone,
            mensagem: data.mensagem,
        };

        try {
            setLoading(true);

            await emailjs.send(
                "service_092zaue",
                "template_yrje0me",
                templateParams,
                "irOtK26YzqWiLtyD8"
            );

            setStatus("Mensagem enviada com sucesso!");

            setData({
                nome: "",
                email: "",
                telefone: "",
                mensagem: "",
            });

        } catch {
            setStatus("Erro ao enviar. Tente novamente.");
        } finally {
            setLoading(false);
        }
    }

    return {
        data,
        status,
        loading,
        handleChange,
        handleSubmit,
    };
}
