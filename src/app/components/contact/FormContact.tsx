
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import emailjs from "emailjs-com";
import { FieldsFormContact } from "./FieldsFormContact";


interface ContactFormData {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
}

export default function ContactForm() {
    const [data, setData] = useState<ContactFormData>({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus(null);

        if (!data.nome || !data.email || !data.mensagem) {
            setStatus("⚠️ Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!validateEmail(data.email)) {
            setStatus("⚠️ Por favor, insira um e-mail válido.");
            return;
        }

        setLoading(true);

        const templateParams = {
            nome: data.nome,
            email: data.email,
            telefone: data.telefone,
            mensagem: data.mensagem,
        };

        emailjs
            .send(
                "service_092zaue",
                "template_yrje0me",
                templateParams,
                "irOtK26YzqWiLtyD8"
            )
            .then(() => {
                setStatus("✅ Mensagem enviada com sucesso!");
                setData({ nome: "", email: "", telefone: "", mensagem: "" });
            })
            .catch(() => {
                setStatus("❌ Erro ao enviar. Tente novamente mais tarde.");
            })
            .finally(() => setLoading(false));
    };

    return (
        <section
            className="w-full mb-6 md:w-[90%] lg:w-[80%] mx-auto relative"
            aria-labelledby="contato-titulo"
        >

            {status && (
                <div
                    className="mb-4 text-center text-sm text-white gradientePrincipal font-raleway p-2 rounded"
                    role="alert"
                    aria-live="polite"
                >
                    {status}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="space-y-5 font-raleway text-gray-700"
                noValidate
            >
                {/* Campos de Input */}
                {FieldsFormContact.map((item, i) => (
                    <div key={i} className="relative">
                        <label htmlFor={item.name} className="sr-only">
                            {item.placeholder}
                        </label>
                        {item.ico && (
                            <span className="absolute left-1 top-6  text-gray-700">
                                {item.ico}
                            </span>
                        )}
                        <input
                            id={item.name}
                            type={item.type}
                            name={item.name}
                            value={data.nome}
                            onChange={handleChange}
                            placeholder={item.placeholder}
                            className="w-full pl-10 p-4 md:p-3 text-center border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            aria-required="true"
                        />
                    </div>
                ))}

                {/* Campo de Mensagem */}
                <div className="relative">
                    <label htmlFor="mensagem" className="sr-only">
                        Sua Mensagem
                    </label>
                    <FaRegCommentDots className="absolute left-3 top-4 text-gray-700" />
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        value={data.mensagem}
                        onChange={handleChange}
                        placeholder="Sua Mensagem"
                        className="w-full pl-10 pt-3 pb-3 pr-3 text-center border border-black/20  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        required
                        aria-required="true"
                    ></textarea>
                </div>

                {/* Botão de Enviar */}
                <button
                    type="submit"
                    className="w-full font-raleway bg-[var(--color-foreground)]/90 text-xl md:text-base text-white p-4 md:p-3 rounded-lg font-semibold transition relative z-30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-foreground)]"
                    disabled={loading}
                    aria-busy={loading}
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </section>
    );
}
