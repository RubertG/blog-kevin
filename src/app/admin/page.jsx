import Projects from "@/components/Projects"

function Admin() {
   return (
      <main className="container-colum">
         <h2 className="title">Administrador</h2>
         <Projects isCardSecondary={true} isAdmin={true} />
      </main>
   )
}

export default Admin