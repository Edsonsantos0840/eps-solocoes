import Image from "next/image";
import { profile } from "../../data/profile";

export default function HeroAbout() {
    return (
        <>
            <h2 className="text-2xl text-center md:text-left font-semibold px-2 my-[.5rem]">Sobre </h2>
            <div className="my-4 md:my-2 md:flex justify-between gap-4 px-2">
                <div className="relative hidden md:block">
                    <figure className=" w-[13.1rem] h-[13.1rem] lg:w-[9rem] lg:h-[9rem] xl:w-[7rem] xl:h-[7rem] rounded-md  hover:scale-105 transition-all duration-500 delay-300" >
                        <Image
                            src={'/logo.png'}
                            alt="Imagem do programador Edson Santos"
                            width={250}
                            height={250}
                            className="rounded-md"
                        />
                    </figure>
                </div>

                <p className="text-justify text:xl lg:text-base   ">
                    {profile.bio}
                </p>
            </div>
        </>
    );
}
