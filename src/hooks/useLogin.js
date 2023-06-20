import { auth } from "@/firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function useLogin() {
   const [user, setUser] = useState({ email: "", password: "" })
   const [loading, setLoading] = useState(false)
   const [errorEmail, setErrorEmail] = useState("")
   const [errorPassword, setErrorPassword] = useState("")
   const router = useRouter()

   const handleChange = ({ target: { name, value } }) => {
      if (name === "email") setErrorEmail("")
      if (name === "password") setErrorPassword("")
      setUser({ ...user, [name]: value })
   }

   const validateErrors = () => {
      if (user.email.length === 0) setErrorEmail("Email vacío.")
      if (user.password.length === 0) setErrorPassword("Password vacío.")
      return user.email.length !== 0 && user.password.length !== 0
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         if (validateErrors()) {
            setLoading(true)
            await signInWithEmailAndPassword(auth, user.email, user.password)
            router.push("/admin")
         }
      } catch (error) {
         switch (error.message) {
            case "Firebase: Error (auth/wrong-password).":
               setErrorPassword("Contraseña incorrecta.")
               break;

            case "Firebase: Error (auth/user-not-found).":
               setErrorEmail("Email inexistente.")
               break;

            case "Firebase: Error (auth/missing-password).":
               setErrorPassword("Contraseña vacía")
               break

            case "Firebase: Error (auth/invalid-email).":
               setErrorEmail("Email inválido.")
               break

            case "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
               alert("Acceso a la cuenta bloqueado por muchos intentos fallidos.")
               break

            default:
               alert(error)
               break;
         }
      } finally {
         setLoading(false)
      }
   }
   return {
      handleSubmit,
      handleChange,
      errorEmail,
      errorPassword,
      loading,
      user
   }
}