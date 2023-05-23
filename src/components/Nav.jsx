"use client"
import Link from "next/link"
import SocialIcons from "./SocialIcons"
import { useState } from "react"

function Nav({ navLinks }) {

   const [toggle, setToggle] = useState(false)

   return (
      <nav className={`navbar ${toggle ? "active" : ""}`}>
         <div
            className={"container-toggle"}
            onClick={() => setToggle(!toggle)}>
            <span className="first"></span><span className="second"></span><span className="third"></span>
         </div>
         <h1 className="brand"><Link href="/">Kevin Gonzalez</Link></h1>
         <ul className="nav">
            {
               navLinks.map(l => {
                  return (
                     <li key={l.name} className="nav-link">
                        <Link href={l.path}>{l.name}</Link>
                     </li>)
               })
            }
            <li className="nav-icons">
               <SocialIcons />
            </li>
         </ul>
      </nav>
   )
}

export default Nav