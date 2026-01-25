import { addressData, contactData } from "./data/FooterData";

export default function Footer() {
    return (
        <footer className="p-4 w-full bg-[var(--color-foreground)]/90 text-white mx-auto grid grid-cols-1 lg:grid-cols-2">

            <address className="p-4">
                <h2>Meu endereço</h2>

                <strong className="pr-2">Cidade:</strong>
                <span>{addressData.cidade}</span>
                <br />

                <strong className="pr-2">Estado:</strong>
                <span>{addressData.estado}</span>
            </address>

            <div className="p-4 hidden">
                <p>Baixar meu CV</p>
            </div>

            <div className="p-4">
                <h3>Meus Contatos</h3>

                <strong className="pr-2">Telefone:</strong>
                <span>{contactData.telefone}</span>
                <br />

                <strong className="pr-2">E-mail:</strong>
                <span>{contactData.email}</span>
            </div>

        </footer>
    );
}
