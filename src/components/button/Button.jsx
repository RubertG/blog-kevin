"use client"
import { useRouter } from "next/navigation"

function Button({ href, btnSecondary = false, children }) {

   const router = useRouter()
   const className = `btn ${btnSecondary ? "btn-secondary" : "btn-primary"}`

   const handleClick = () => {
      if (href) {
         return router.push(href)
      }
   }

   return (
      <button
         className={className}
         onClick={handleClick}
      >
         {children}
      </button>
   )
}

export default Button