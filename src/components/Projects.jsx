"use client"
import { useProjectsContext } from '@/context/ProjectsContext'
import Project from './Project'

function Projects({ limit, isCardSecondary = false }) {

   const projects = useProjectsContext()
   // if (limit > 0) projects = projects.slice(0, limit)
   let rightCard = true

   return (
      <ul className="container-projects">
         {
            projects && (
               projects.map((project) => {
                  rightCard = !rightCard
                  return (
                     <Project
                        key={project.id}
                        project={project}
                        isRightCard={rightCard}
                        isCardSecondary={isCardSecondary} />
                  )
               })
            )
         }
      </ul>
   )
}

export default Projects