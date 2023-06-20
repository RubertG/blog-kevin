import { AuthProvider } from "@/context/AuthContext"

function LayoutAdmin({ children }) {
   return (
      <AuthProvider>
         {children}
      </AuthProvider>
   )
}

export default LayoutAdmin