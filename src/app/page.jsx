import Header from '@/components/Header'
import Projects from '@/components/Projects'

function PortafolioPage() {
   return (
      <>
         <Header />
         <main className="container-secondary">
            <h2 className="title title-secondary">Servicios / Proyectos</h2>
            <Projects limit={3} />
         </main>
      </>
   )
}

export default PortafolioPage