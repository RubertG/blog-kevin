"use client"
import Link from "next/link"
import SocialIcons from "./SocialIcons"
import { useState } from "react"
import { usePathname } from "next/navigation"

function Nav({ navLinks }) {

   const [toggle, setToggle] = useState(false)
   const pathname = usePathname();

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
               navLinks.map(link => {
                  let isActive;
                  if (link.path === "/" && pathname !== link.path) isActive = false
                  else isActive = pathname.startsWith(link.path)
                  const className = `link-hover-primary ${isActive ? "link-active" : ""}`

                  return (
                     <li key={link.name} className="nav-link">
                        <Link
                           className={className}
                           href={link.path}
                           onClick={handleClick}
                        >
                           {link.name}</Link>
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