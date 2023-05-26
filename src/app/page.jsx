import Button from "@/components/Button";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Image from "next/image";

const navLinks = [
   {
      name: "Blog",
      path: "/blog"
   }
]

export default function Home() {
   return (
      <div>
         <Nav navLinks={navLinks} />
         <Header />
         <div className="container-secondary">
            <h2 className="title title-secondary">Mis proyectos</h2>
            <Projects limit={4} />
         </div>
      </div>
   )
}
