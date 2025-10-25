import CardServices from "./CardServices";
import { cardServices } from "./servicesFields";

 export default function Services() {
   return (
     <section
       className="w-full h-auto lg:h-[900px] relative top-0 bg-repeat lg:bg-no-repeat bg-cover bg-center my-8 rounded-xl shadow-2xl p-4"
       style={{
         backgroundImage: `url("/Posso-Ajudar.jpg")`,
       }}
     >
       {/* Overlay preto com 50% de opacidade */}
       <div className="w-full lg:absolute inset-0 bg-[var(--color-foreground)]/40 rounded-lg"></div>

       {/* Conteúdo por cima da imagem e overlay */}
       <header className="relative z-10 flex flex-col items-center  text-white gap-2">
         <h1 className="text-4xl font-bold ">Serviços</h1>
         <h2 className="text-4xl font-bold text-[#00ffff]">Posso te Ajudar?</h2>
         <p className="md:text-lg">Transformamos suas ideias em soluções digitais sob medida</p>
       </header>

       <div className=" relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-around mx-auto w-full z-10">
         {
           cardServices &&
           cardServices.map((service, i) => (
             <CardServices key={i} title={ service.title} description={ service.description} icon={ service.icon}/>
             ))
           }
       </div>
     </section>
   )
 }
 