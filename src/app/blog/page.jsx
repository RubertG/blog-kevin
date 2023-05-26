import Nav from "@/components/Nav"
import Projects from "@/components/Projects"

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
         <div className="container-colum">
            <h2 className="title title-primary">Blog</h2>
            <Projects isCardSecondary={true} />
         </div>
      </>
   )
}

export default page