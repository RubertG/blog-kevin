import Nav from "@/components/Nav"

const NavLink = [
   {
      name: "Portafolio",
      path: "/"
   }
]

function page() {
   return (
      <div className="container">
         <Nav navLinks={NavLink} />
         Page blog
      </div>
   )
}

export default page