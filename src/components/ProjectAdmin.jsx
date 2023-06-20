"use client"
import Image from 'next/image'
import Button from './Button'
import { useState } from 'react'
import { deleteProject } from '@/firebase/deleteProject'

function ProjectAdmin({ project, isCardSecondary = false, isRightCard = false }) {

   const classColorCard = isCardSecondary ? "project-card-secondary" : ""
   const className = `project-card ${classColorCard} ${isRightCard ? "project-card-right" : ""}`
   const [popup, setPopup] = useState(false)

   const handleClickDelete = () => setPopup(!popup)

   const delDoc = async () => {
      try {
         await deleteProject(project.id)
      } catch (error) {
         alert("Error al eliminar el archivo")
         console.log(error);
      }
   }

   return (
      <>
         <div className={`${popup ? "popup-container" : "popup-container popup-hidden"}`}>
            <div className="popup">
               <h3>¿Estas seguro?</h3>
               <div className='container-buttons'>
                  <button className="btn btn-primary" onClick={handleClickDelete}>Cancelar</button>
                  <button className="btn btn-danger" onClick={delDoc}>Eliminar</button>
               </div>
            </div>
         </div>
         <li
            className={className}
         >
            <Image
               className="project-card__img"
               src={project.img}
               width="600"
               height="400"
               alt={project.name}
               priority
            />
            <div className="project-card__body">
               <div className="body__title">
                  <h3>{project.name}</h3>
               </div>
               <div className="body__text">
                  <p>{project.desc}</p>
                  <div className='project-card__buttons'>
                     <Button
                        btnSecondary={!isCardSecondary}
                        href={`/admin/edit/${project.id}`}
                     >
                        Editar
                        <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#FFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#FFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon> </g> </g> </g> </g></svg>
                     </Button>
                     <button
                        className='btn btn-danger'
                        onClick={handleClickDelete}
                     >
                        Eliminar
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 11V17" stroke="#FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                     </button>
                  </div>
               </div>
            </div>
         </li>
      </>
   )
}

export default ProjectAdmin