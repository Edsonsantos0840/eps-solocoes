import Link from "next/link";
import { SocialMediaFields } from "./SocialMediaFields";

export default function CardSocialMedia() {
  return (
    <nav
      className="flex justify-around md:justify-end items-center gap-4 md:gap-6 md:mb-8"
      aria-label="Redes sociais"
    >
      <ul className="flex gap-4 transition-all ease-in duration-300">
        {SocialMediaFields.map((link) => (
          <li key={link.href} className={`hover:scale-110  shadow-md text-[var(--color-foreground)]/90 transition-all ease-in duration-300 `}>
            <Link href={link.href} target="_blank" aria-label={link.aria}  >
              {link.ico}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
