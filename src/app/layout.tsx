import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar/NavBar";

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  style: ["normal", "italic"],  
});

const opens = Open_Sans({
  variable: "--font-opens",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Eps Soluções Tecnológicas",
  description: "Desenvolvimento interfaces web intuitivas e responsivas, que proporcionam uma excelente experiência do usuário. Criação designs modernos e atraentes, combinando estética e funcionalidade para alcançar os objetivos de cada projeto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppinsSans.variable} ${opens.variable} antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
