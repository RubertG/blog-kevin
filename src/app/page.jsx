import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'

const NavLinks = [
   {
      name: "Portafolio",
      path: "/"
   },
   {
      name: "Blog",
      path: "/blog"
   }
]

function PortafolioPage() {
   return (
      <>
         <Nav navLinks={NavLinks} />
         <Header />
         <main className="container-secondary">
            <h2 className="title title-secondary">Servicios / Proyectos</h2>
            <Projects limit={2} />
         </main>
         <Contact />
      </>
   )
}

export default PortafolioPage