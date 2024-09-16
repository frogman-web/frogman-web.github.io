import { Oswald, Open_Sans } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import "../build.css";
import Footer from "./components/Footer";

const oswald = Oswald({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700" ],
  variable: "--font-oswald",
});

const open_sans = Open_Sans({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
});

export const metadata = {
  title: "Frogman",
  description: "Servicios de Buceo Profesional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body id="app" className={`${oswald.variable} ${open_sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
