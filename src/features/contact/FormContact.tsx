
"use client";
import { FaRegCommentDots } from "react-icons/fa";
import { contactFields } from "./contactFields";
import { ContactInput } from "./ContactInput";
import { useContactForm } from "@/features/hooks/useContactForm";

export default function ContactForm() {

    const {
        data,
        status,
        loading,
        handleChange,
        handleSubmit,
    } = useContactForm()

    return (
        <section
            className="w-full mb-6 md:w-[90%] lg:w-[80%] mx-auto relative"
            aria-labelledby="contato-titulo"
        >

            {status && (
                <div
                    className="mb-4 text-center text-sm text-black/80 font-raleway p-2 rounded"
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
                {
                    contactFields.map((field) => (
                        < ContactInput
                            key={field.name}
                            {...field}
                            value={data[field.name as keyof typeof data]}
                            onChange={handleChange}
                        />
                    ))
                }
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
