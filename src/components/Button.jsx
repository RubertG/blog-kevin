"use client"
import { useRouter } from "next/navigation"

function Button({ href, btnSecondary = false, children, className = "" }) {

   const router = useRouter()
   const classNameFinal = `btn ${btnSecondary ? "btn-secondary" : "btn-primary"} ${className}`

   const handleClick = () => {
      if (href) {
         return router.push(href)
      }
   }

   return (
      <button
         className={classNameFinal}
         onClick={handleClick}
      >
         {children}
      </button>
   )
}

export default Button