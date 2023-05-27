"use client"
import Image from 'next/image'
import Button from './Button'
import { useRouter } from 'next/navigation'

function Project({ project, isCardSecondary = false, isRightCard }) {

   const classColorCard = isCardSecondary ? "project-card-secondary" : ""
   const className = `project-card ${classColorCard} ${isRightCard ? "project-card-right" : ""}`
   const router = useRouter()

   const handleClick = () => {
      router.push(`/blog/${project.id}`)
   }

   return (
      <li
         className={className}
         onClick={handleClick}
      >
         <Image
            className="project-card__img"
            src={project.img}
            width="500"
            height="400"
            alt={project.name}
         />
         <div className="project-card__body">
            <div className="body__title">
               <h3>{project.name}</h3>
               <p>{project.date}</p>
            </div>
            <div className="body__text">
               <p>{project.desc}</p>
               <Button
                  btnSecondary={!isCardSecondary}
                  href={`/blog/${project.id}`}
               >
                  Ver proyecto
               </Button>
            </div>
         </div>
      </li>
   )
}

export default Project