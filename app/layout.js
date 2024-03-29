import { Inter } from "next/font/google";
import "./globals.css";
import Home from "@/components/header";
import About from "@/components/about";
import Projects from "@/components/Projects";
import Cert from "@/components/cert";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syko | Personal Portfolio",
  description: "Full Stack developer with 4 years exprience",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Home />
        <About />
        <Projects />
        <Cert />
        <Contact />
        {children}
      </body>
    </html>
  );
}
