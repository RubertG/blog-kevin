"use client"
import Link from "next/link"
import SocialIcons from "./SocialIcons"
import { useState } from "react"

function Nav({ navLinks }) {

   const [toggle, setToggle] = useState(false)

   const handleClick = () => {
      window.scrollTo({ top: 0 });
   };

   return (
      <nav className={`navbar ${toggle ? "active" : ""}`}>
         <div
            className={"container-toggle"}
            onClick={() => setToggle(!toggle)}>
            <span className="first"></span><span className="second"></span><span className="third"></span>
         </div>
         <h1 className="brand link-hover-primary">
            <Link
               href="/"
               onClick={handleClick}
            >
               Kevin Gonzalez
            </Link>
         </h1>
         <ul className="nav">
            {
               navLinks.map(l => {
                  return (
                     <li key={l.name} className="nav-link">
                        <Link
                           className="link-hover-primary"
                           href={l.path}
                           onClick={handleClick}
                        >
                           {l.name}</Link>
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