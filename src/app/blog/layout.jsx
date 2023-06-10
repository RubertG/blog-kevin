import Contact from '@/components/Contact'
import Nav from '@/components/Nav'
import React from 'react'

const NavLinks = [
   {
      name: "Portafolio",
      path: "/"
   },
   {
      name: "Blog",
      path: "/blog"
   }
]

function LayoutBlog({ children }) {
   return (
      <>
         <Nav navLinks={NavLinks} />
         {children}
         <Contact />
      </>
   )
}

export default LayoutBlog