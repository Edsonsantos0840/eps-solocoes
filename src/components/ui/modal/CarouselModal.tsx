'use client'

import { useState } from "react"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import CardModal from "../../../features/projects/components/CardProject";
import { projetos } from "../../../features/projects/components/data/ProjetosFields";

export default function CarouselModal() {
    const [current, setCurrent] = useState(0)
    if (current < 0 || current >= projetos.length) {
        setCurrent(0)
    }


    return (
        <section className="w-[90%] mx-auto mt-2 ">
            <div className="flex justify-between items-center w-full ">
                <BsArrowLeftCircle onClick={() => setCurrent(prev => prev - 1)} size={30} className="cursor-pointer hover:scale-105" />
                <div className="flex items-center gap-4">
                    <h3 className="">{current + 1} de {projetos.length}</h3>
                    <BsArrowRightCircle onClick={() => setCurrent(prev => prev + 1)} size={30} className="cursor-pointer hover:scale-105" />
                </div>
            </div>

            <CardModal current={current} />
        </section>
    )
}
