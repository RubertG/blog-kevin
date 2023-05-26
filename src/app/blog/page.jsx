import Nav from "@/components/Nav"

const NavLink = [
   {
      name: "Portafolio",
      path: "/"
   }
]

function page() {
   return (
      <>
         <Nav navLinks={NavLink} />
         <div className="container">
            Page blog
         </div>
      </>
   )
}

export default page