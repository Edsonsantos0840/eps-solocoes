import { Suspense } from "react";
import CardContact from "./components/contact/CardContact";
import Hero from "./components/Hero";
import ModalProjects from "./components/modal/ModalProjects";
import Projects from "./components/Projects";
import CardTechnology from "./components/technology/CardTechnology";
import Services from "./components/services/Services";


export default function Home() {
  return (
    <main className="container-main font-[var(--font-poppins)] pt-[4rem]">
      {/* ✅ Encapsula os dois componentes CLIENTE em Suspense */}
      <Suspense fallback={<div>Carregando modal...</div>}>
        <ModalProjects />
      </Suspense>

      <Hero />
      <CardTechnology />

      <Suspense fallback={<div>Carregando projetos...</div>}>
        <Projects />
      </Suspense>
      <Services/>
      <CardContact />
    </main>
  );
}
