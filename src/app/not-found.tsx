// app/not-found.tsx

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-blue-950 text-white px-6">

            <div className="max-w-2xl text-center flex flex-col items-center gap-6">


                {/* 404 */}
                <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight">
                    404
                </h1>

                {/* Título */}
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
                    Página não encontrada
                </h2>

                {/* Texto */}
                <p className="text-zinc-400 max-w-lg leading-relaxed">
                    Ops! Parece que você tentou acessar uma página que não existe ou foi movida.
                    Mas não se preocupe, podemos te levar de volta.
                </p>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">

                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg"
                    >
                        Voltar para o início
                    </Link>

                    <Link
                        href="/#contato"
                        className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition font-medium"
                    >
                        Fale comigo
                    </Link>

                </div>

                {/* Assinatura */}
                <span className="text-xs text-zinc-600 mt-6">
                    © {new Date().getFullYear()} EPS Soluções — Desenvolvendo soluções
                </span>

            </div>
        </main>
    );
}
