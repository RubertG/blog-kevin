"use client"
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import { useLoadProject } from '@/hooks/useLoadProject'

function ProjectPage({ params }) {

   const { id } = params
   const { loading, notFound, project } = useLoadProject({ id })

   return (
      <main className='container-colum'>
         {
            project && (
               <section className="container-project">
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
                  <p className="project-page__desc">
                     {project.desc}
                  </p>
                  <hr />
                  <div
                     className='project-page__content'
                     dangerouslySetInnerHTML={{
                        __html: project.content
                     }}
                  >
                  </div>
               </section>
            )
         }
         {
            loading && (
               <section className='container-loader'>
                  <Loader isColorSecondary={true} />
               </section>
            )
         }
         {
            notFound && (
               <section className="container-project">
                  <h2 className='body__title'>
                     Servicio / proyecto inexistente :(
                  </h2>
               </section>
            )
         }
      </main>
   )
}

export default ProjectPage