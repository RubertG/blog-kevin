"use client"
import { useEffect, useState } from "react"

function SendFormPopup({ children, isLoading }) {

   const [active, setActive] = useState(true)

   useEffect(() => {
      if (isLoading) return setActive(true)
      setTimeout(() => {
         setActive(false)
      }, 1800)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isLoading])

   return (
      <div className={`send-form ${active ? "active" : ""}`}>
         {
            isLoading ?
               <span className="send-form__loader"></span>
               : <p>{children}</p>
         }
      </div>
   )
}

export default SendFormPopup