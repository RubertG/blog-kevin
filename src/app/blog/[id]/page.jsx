"use client"
import Button from '@/components/Button'
import Contact from '@/components/Contact'
import { useProjectsContext } from '@/context/ProjectsContext'
import Image from 'next/image'

function ProjectPage({ params }) {

   const projects = useProjectsContext()
   const { id } = params
   const project = projects.find(p => p.id === parseInt(id))

   return (
      <>
         <main className='container-colum'>
            <div className="container-project">
               <div className="project-page__container-button">
                  <Button href="/blog">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" style={{ width: 20, height: 30 }}>
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                     </svg>
                     Atrás
                  </Button>
               </div>
               <h2 className='project-page__title'>
                  {project.name}
               </h2>
               <p className='project-page__date'>
                  {project.date.toLocaleDateString("es-co")}
               </p>
               <p className="project-page__desc">
                  {project.desc}
               </p>
               <hr />
               <Image
                  width={400}
                  height={600}
                  alt={`${project.name} - KevinWeb.`}
                  src={project.img}
               />
               <div
                  className='project-page__content'
                  dangerouslySetInnerHTML={{
                     __html: project.content
                  }}
               />
            </div>
         </main>
         <Contact />
      </>
   )
}

export default ProjectPage