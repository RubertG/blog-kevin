"use client"
import Button from "@/components/Button"
import Projects from "@/components/Projects"
import ProtectedRoute from "@/components/ProtectedRoute"
import { auth } from "@/firebase/config"
import { signOut } from "firebase/auth"

function Admin() {
   return (
      <ProtectedRoute>
         <main className="container-colum">
            <button
               href="/portafolio"
               className="btn btn-danger button-left"
               onClick={() => signOut(auth)}
            >Cerrar sesión</button>
            <h2 className="title">Administrador</h2>
            <Button href="/admin/add" className="button-right">Crear</Button>
            <Projects isCardSecondary={true} isAdmin={true} />
         </main>
      </ProtectedRoute>
   )
}

export default Admin