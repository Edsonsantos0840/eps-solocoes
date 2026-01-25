import HeroProfile from "./HeroProfile";
import HeroSidebar from "./HeroSidebar";
import HeroAbout from "./HeroAbout";

export default function Hero() {
  return (
    <section id="inicio" className="scroll-margin-top">

      <article className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-4">

        <div className="flex flex-col md:flex-row gap-8 px-4">
          <HeroProfile />
          
        </div>

        <HeroSidebar />

      </article>

      <HeroAbout />

    </section>
  );
}
