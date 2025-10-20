
 export default function Services() {
   return (
     <section
       className="w-full h-[45vh] lg:h-[90vh] relative top-0 bg-cover bg-center py-14 rounded-xl shadow-2xl"
       style={{
         backgroundImage: `url("/Posso-Ajudar.jpg")`,
       }}
     >
       {/* Overlay preto com 50% de opacidade */}
       <div className="w-full absolute inset-0 bg-black/50"></div>

       {/* Conteúdo por cima da imagem e overlay */}
       <div className="relative z-10 flex items-center justify-center h-full text-white">
         <h1 className="text-4xl font-bold text-[var(--color-secondary)]">Posso Ajudar?</h1>
       </div>
     </section>
   )
 }
 