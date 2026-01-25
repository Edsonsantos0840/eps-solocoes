import CardSocialMedia from "../social/CardSocialMedia";
import ContactForm from "./FormContact";


export default function ContactSection() {
  return (
    <section
      id="contato"
      className="container-main scroll-margin-top w-full text-[var(--color-foreground)] space-y-2 text-center px-2 "
      aria-labelledby="titulo-contato"
    >
      <header className=" ">
        <h2
          id="titulo-contato"
          className=" text-3xl font-bold"
        >
          Meus Contatos
        </h2>
      </header>

      <section aria-labelledby="titulo-redes" className="flex flex-col justify-around items-center ">
        <h4 id="titulo-redes" className="sr-only">
          Redes sociais
        </h4>
        <CardSocialMedia />
      </section>
      <section>
        <ContactForm />
      </section>
    </section>
  );
}
