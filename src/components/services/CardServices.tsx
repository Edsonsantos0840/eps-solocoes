import { CardServicesProps } from "./servicesFields";

export default function CardServices({ title, description, icon: Icon }: CardServicesProps) {
  return (
    <article className="bg-white text-[var(--color-foreground)]/90 rounded-lg shadow-lg text-center space-y-2 p-3 mt-4 hover:scale-110 ransition-all ease-in duration-300">
      <Icon className="text-4xl  mx-auto my-3" />
      <h2 className="text-lg font-[var(--color-foreground)]">{title}</h2>
      <p className="">{description}</p>
    </article>
  )
}
