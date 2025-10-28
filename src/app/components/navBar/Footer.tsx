

export default function Footer() {
    return (
        <footer className="p-4 w-full bg-[var(--color-foreground)]/90 text-white mx-auto grid grid-cols-1 lg:grid-cols-2">
            <address className="p-4">
                <h2>Meu endereço</h2>
                <strong className="pr-2">Cidade:</strong>
                <span>Campinas</span>
                <br />
                <strong className="pr-2">Estado:</strong>
                <span>São Paulo</span>
            </address>
            <div className="p-4 hidden">
                <p>Baixar meu CV</p>
            </div>
            <div className="p-4">
                <h3>Meus Contatos </h3>
                <strong className="pr-2">Telefone:</strong>
                <span>19-982350898</span>
                <br />
                <strong className="pr-2">E-mail:</strong>
                <span>edsonpsantos0840@gmail.com</span>
                
            </div>

        </footer>
    )
}
