"use client"
import { useProjectsContext } from '@/context/ProjectsContext'
import Project from './Project'
import { useEffect } from 'react'
import { getProjects } from '@/firebase/getProjects'
import Loader from './Loader'

function Projects({ limit = null, isCardSecondary = false }) {

   const { projects, setProjects } = useProjectsContext()
   let rightCard = true

   useEffect(() => {
      if (projects) return
      getProjects((querySnapshot) => {
         const auxProjects = [];
         let i = 0;
         querySnapshot.forEach((doc) => {
            if (limit && limit <= i + 1) return;
            const id = doc.id;
            auxProjects.push({ ...doc.data(), id });
            i++
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
                  <Loader isColorSecondary={isCardSecondary} />
               </div>
            )
         }
      </ul>
   )
}

export default Projects