import Nav from '@/components/Nav'
import React from 'react'

const NavLink = [
   {
      name: "Portafolio",
      path: "/"
   }
]

function LayoutBlog({ children }) {
   return (
      <>
         <Nav navLinks={NavLink} />
         {children}
      </>
   )
}

export default LayoutBlog