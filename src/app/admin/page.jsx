import Button from "@/components/Button"
import Projects from "@/components/Projects"

function Admin() {
   return (
      <main className="container-colum">
         <h2 className="title">Administrador</h2>
         <Button href="/admin/add" className="button-right">Crear</Button>
         <Projects isCardSecondary={true} isAdmin={true} />
      </main>
   )
}

export default Admin