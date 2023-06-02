"use client"
import { useProjectsContext } from '@/context/ProjectsContext'
import Project from './Project'
import { useEffect } from 'react'
import { getProjects } from '@/firebase/getProjects'

function Projects({ limit, isCardSecondary = false }) {

   const { projects, setProjects } = useProjectsContext()
   let rightCard = true

   useEffect(() => {
      if (projects) return
      getProjects((querySnapshot) => {
         const auxProjects = [];
         querySnapshot.forEach((doc, index) => {
            if (limit < index) return
            const id = doc.id;
            auxProjects.push({ ...doc.data(), id });
         });
         setProjects(auxProjects)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [projects])

   return (
      <ul className="container-projects">
         {
            projects ? (
               projects.map((project) => {
                  rightCard = !rightCard
                  return (
                     <Project
                        key={project.id}
                        project={project}
                        isRightCard={rightCard}
                        isCardSecondary={isCardSecondary}
                     />
                  )
               })
            ) : (
               <div className='container-loader'>
                  <span
                     className={`loader ${isCardSecondary ? "loader-secondary" : ""}`}
                  ></span>
               </div>
            )
         }
      </ul>
   )
}

export default Projects