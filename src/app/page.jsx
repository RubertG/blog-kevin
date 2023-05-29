import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

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
         <main className="container-secondary">
            <h2 className="title title-secondary">Mis proyectos</h2>
            <Projects limit={4} />
         </main>
         <Contact />
      </div>
   )
}
