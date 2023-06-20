"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase/config"

const authContext = createContext(null)

export function useAuthContext() {
   const context = useContext(authContext)
   if (!context) throw new Error("Can't access context")
   return context
}

export function AuthProvider({ children }) {

   const [user, setUser] = useState()
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      onAuthStateChanged(auth, userCurrent => {
         setUser(userCurrent)
         setLoading(false)
      })
   })

   return (
      <authContext.Provider value={{ user, loading }}>
         {children}
      </authContext.Provider>
   )
}