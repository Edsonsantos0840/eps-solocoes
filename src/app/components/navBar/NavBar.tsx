import Link from "next/link";
import { links } from "./NavFields";

export default function NavBar() {
  return (
    <nav
      className=" fixed top-0 left-0 w-full bg-white font-[var(--font-poppins)] shadow-sm z-20 border-b-[1px] border-b-black/15 py-2 "
      aria-label="Menu de navegação principal"
    >
      {/* Logo ou nome da empresa */}
      <div className="container-main md:flex justify-between items-center">
        <figure className="hidden md:block hover:scale-105 ease-in duration-300 ">
        <Link href="/" className="font-semibold text-xl text-[var(--foreground)] ">
          EPS Soluções
        </Link>
      </figure>

      {/* Links de navegação */}
        <ul className="flex gap-2 md:gap-8 transition-all ease-in duration-300">
        {links.map((link) => (
          <li key={link.text} className="text-[var(--foreground)]/70 text-lg hover:scale-110 ease-in duration-300 ">
            <Link href={link.link} >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}
