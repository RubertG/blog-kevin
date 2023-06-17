"use client"
import { uploadImage } from '@/firebase/uploadImage';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef, useState } from 'react';
import SendFormPopup from './SendFormPopup';

const DynamicEditor = dynamic(() => import("@/components/Editor"), {
   ssr: false,
});

function FormAdmin({ project, idProject }) {

   const inputRef = useRef(null);
   const [projectState, setProjectState] = useState(project)
   const [errorTitle, setErrorTitle] = useState("")
   const [errorDesc, setErrorDesc] = useState("")
   const [errorContent, setErrorContent] = useState("")
   const [popupVisible, setPopupVisible] = useState(false)
   const [loading, setLoading] = useState(false)

   const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
         onImageUpload(file);
      }
   };

   const handleClick = () => {
      inputRef.current.click();
   };

   const onImageUpload = async (file) => {
      if (!file) return
      try {
         const url = await uploadImage(idProject, file)
         setProjectState({ ...projectState, img: url })
      } catch (error) {
         alert(error)
      }
   }

   const handleChange = ({ target }) => {
      if (target.name === "name") setErrorTitle("")
      if (target.name === "desc") setErrorDesc("")
      setProjectState({ ...projectState, [target.name]: target.value })
   }

   const verifyErrors = () => {
      if (projectState.name.length === 0) setErrorTitle("Campo vacío.")
      if (projectState.desc.length === 0) setErrorDesc("Campo vacío.")
      if (projectState.content.length === 0) setErrorContent("Campo vacío.")
      return errorTitle === "" && errorDesc === "" && errorContent === ""
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (verifyErrors()) {
         setPopupVisible(true)
         setTimeout(() => setPopupVisible(false), 3200)
         console.log(projectState);
      }
   }

   return (
      <>
         {popupVisible &&
            <SendFormPopup isLoading={loading}>
               Enviado
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
                  defaultValue={project.name} />
            </label>
            <p className='form-error'>{errorTitle}</p>
            <label htmlFor="desc" className="form-edit__label">
               <h3 className='label__title'>Descripción</h3>
               <textarea
                  id="desc"
                  name='desc'
                  onChange={e => handleChange(e)}
                  defaultValue={project.desc} />
            </label>
            <p className='form-error'>{errorDesc}</p>
            <div className="container-input-file">
               <h3 className='label__title'>Imagen principal</h3>
               <Image
                  src={projectState.img}
                  width={800}
                  height={700}
                  alt={project.name} />
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
            </div>
            <div className="container-editor">
               <DynamicEditor
                  projectData={projectState}
                  idProject={idProject}
                  setProjectState={setProjectState}
                  setError={setErrorContent}
               />
            </div>
            <p className='form-error'>{errorContent}</p>
            <button type='submit' className='btn btn-primary'>Actualizar</button>
         </form>

      </>
   )
}

export default FormAdmin