import CardContact from "../features/contact/ContactSection";
import Hero from "../features/home/components/hero/Hero";
import Projects from "../features/projects/components/Projects";
import CardTechnology from "../features/technology/CardTechnology";
import Services from "../components/services/Services";
import Trajectory from "../features/about/Trajectory";

export default function Home() {
  return (
    <main className="container-main font-[var(--font-poppins)] pt-[4rem]">
      <Hero />
      <CardTechnology />
      <Projects />
      <Trajectory />
      <Services />
      <CardContact />
    </main>
  );
}
