"use client"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function ProtectedRoute({ children }) {

   const router = useRouter()
   const { loading, user } = useAuthContext()

   useEffect(() => {
      if (!user && !loading) {
         router.push("/admin/login")
      }
   }, [user, router, loading])

   if (loading || !user) return (
      <section className="container-colum">
         <span className="loader loader-secondary"></span>
      </section>
   )

   return (
      <>{children}</>
   )
}

export default ProtectedRoute