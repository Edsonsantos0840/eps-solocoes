

import { TechnologyFields } from "./data/TechnologyFields";

export default function CardTechnology() {
  return (
    <section
      id="tecnologia"
      className="scroll-margin-top px-2"
      aria-labelledby="titulo-tecnologias"
    >
      <div className="w-full">
        <header>
          <h2
            id="titulo-tecnologias"
            className="text-[var(--color-foreground)] text-2xl font-semibold my-[1rem]"
          >
            Tecnologias
          </h2>

          <p className="text-[var(--color-foreground)] text-justify text:xl lg:text-base md:text-left">
            Tenho me especializado em desenvolvimento Front-end, com foco em criar
            interfaces modernas, responsivas e de alta performance. Trabalho com
            as principais tecnologias do mercado
          </p>
        </header>

        <section className="w-full">
          <ul className="flex justify-center items-center flex-wrap gap-4 my-4">
            {TechnologyFields.map((tech) => {
              const Icon = tech.icon;

              return (
                <li
                  key={tech.text}
                  className="p-2 md:p-2 text-7xl rounded-lg shadow-md text-[var(--color-foreground)]/90 hover:scale-125 ease-in duration-500 group flex flex-col items-center"
                >
                  <Icon />

                  <span className="hidden md:block md:mt-1 text-[.6rem] lg:text-[.7rem]">
                    {tech.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
}
