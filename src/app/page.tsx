import { Suspense } from "react";
import CardContact from "./components/contact/ContactSection";
import Hero from "./components/Hero";
import ModalProjects from "./components/modal/ModalProjects";
import Projects from "./components/Projects";
import CardTechnology from "./components/technology/CardTechnology";
import Services from "./components/services/Services";
import Trajectory from "./components/trajectory/Trajectory";


export default function Home() {
  return (
    <main className="container-main font-[var(--font-poppins)] pt-[4rem]">
      {/* ✅ Encapsula os dois componentes CLIENTE em Suspense */}
       <Hero />
      <CardTechnology />
        <Projects />
      <Trajectory/>
      <Services/>
      <CardContact />
    </main>
  );
}
