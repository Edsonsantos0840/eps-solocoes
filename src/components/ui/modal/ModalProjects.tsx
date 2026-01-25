'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import CarouselModal from "./CarouselModal"

export default function ModalProjects() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    const params = new URLSearchParams(searchParams.toString());

    function closeModal() {
        params.delete('modal')
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <section className={params.size === 0 ? "hidden" : "fixed  top-0 left-0 bg-[var(--color-foreground)]/80 z-30 w-full h-screen  rounded-2xl hide-scrollbar p-1 lg:p-0 m-auto"}>
            <article className="bg-gray-50 hide-scrollbar relative lg:top-4 lg:m-auto w-[96vw] h-[98vh] lg:w-[90vw] lg:h-[96vh] xl:w-[75vw] xl:h-[90vh] overflow-scroll rounded-2xl z-40 shadow-2xl pt-4 m-auto">
                <div className="flex justify-between items-center  pb-2 w-[90%] mx-auto " >
                    <h2 className="text-[var(--color-foreground)]/90 text-2xl font-bold">Nossos Projetos</h2>

                    <button
                        onClick={closeModal}
                        className="bg-[var(--color-foreground)]/90 text-white px-3 py-1 rounded cursor-pointer hover:bg-[var(--color-foreground)] hover:scale-105"
                    >
                        Fechar
                    </button>

                </div>
                <hr />
                <CarouselModal />
            </article>

        </section>
    )
}
