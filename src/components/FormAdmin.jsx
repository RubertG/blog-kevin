"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image';
import SendFormPopup from './SendFormPopup';
import { v4 } from "uuid"
import { useForm } from '@/hooks/useForm';
import { useState } from 'react';

const DynamicEditor = dynamic(() => import("@/components/Editor"), {
   ssr: false,
});

function FormAdmin({
   project = { name: "", desc: "", content: "" },
   idProject,
   isAddSubmit = false }) {
   const [id, setId] = useState(idProject ? idProject : v4().slice(16))

   const {
      errorContent, errorDesc, errorImg,
      errorTitle, loading, popupVisible,
      projectState, inputRef, setProjectState,
      handleChange, handleClick, handleImageUpload,
      handleSubmit, setErrorContent } = useForm({ project, idProject: id, isAddSubmit })

   return (
      <>
         {
            popupVisible &&
            <SendFormPopup isLoading={loading}>
               Guardado con éxito
            </SendFormPopup>
         }
         <form className="form-edit" onSubmit={e => handleSubmit(e)}>
            <label htmlFor="title" className="form-edit__label">
               <h3 className='label__title'>Título</h3>
               <input
                  type="text"
                  name='name'
                  id="title"
                  onChange={e => handleChange(e)}
                  defaultValue={project.name || ""} />
            </label>
            <p className='form-error'>{errorTitle}</p>
            <label htmlFor="desc" className="form-edit__label">
               <h3 className='label__title'>Descripción</h3>
               <textarea
                  id="desc"
                  name='desc'
                  onChange={e => handleChange(e)}
                  defaultValue={project.desc || ""} />
            </label>
            <p className='form-error'>{errorDesc}</p>
            <div className="container-input-file">
               <h3 className='label__title'>Imagen principal</h3>
               {
                  projectState.img && (
                     <Image
                        src={projectState.img}
                        width={800}
                        height={700}
                        alt={project.name} />
                  )
               }
               <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={inputRef}
                  onChange={handleImageUpload}
               />
               <button
                  type="button"
                  onClick={handleClick}
                  className='btn btn-primary'
               >
                  Subir Imagen
               </button>
               <p className='form-error'>{errorImg}</p>
            </div>
            <div className="container-editor">
               <DynamicEditor
                  projectData={projectState}
                  idProject={id}
                  setProjectState={setProjectState}
                  setError={setErrorContent}
               />
            </div>
            <p className='form-error'>{errorContent}</p>
            <button type='submit' className='btn btn-primary'>Guardar</button>
         </form>

      </>
   )
}

export default FormAdmin