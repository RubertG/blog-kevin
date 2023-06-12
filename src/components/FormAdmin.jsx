"use client"
import { uploadImage } from '@/firebase/uploadImage';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef, useState } from 'react';

const DynamicEditor = dynamic(() => import("@/components/Editor"), {
   ssr: false,
});

function FormAdmin({ project, idProject }) {

   const inputRef = useRef(null);
   const [projectState, setProjectState] = useState(project)

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
      setProjectState({ ...projectState, [target.name]: target.value })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(projectState);
   }

   return (
      <form className="form-edit" onSubmit={e => handleSubmit(e)}>
         <label htmlFor="title" className="form-edit__label">
            <p>Título</p>
            <input
               type="text"
               name='name'
               id="title"
               className='input-error'
               onChange={e => handleChange(e)}
               defaultValue={project.name} />
         </label>
         <label htmlFor="desc" className="form-edit__label">
            <p>Descripción</p>
            <textarea
               id="desc"
               name='desc'
               className='input-error'
               onChange={e => handleChange(e)}
               defaultValue={project.desc} />
         </label>
         <div className="container-input-file">
            <p>Imagen principal</p>
            <Image
               src={projectState.img}
               width={600}
               height={700}
               alt={project.name} />
            <input
               type="file"
               accept="image/*"
               style={{ display: 'none' }}
               ref={inputRef}
               onChange={handleImageUpload}
            />
            <button type="button" onClick={handleClick}>Subir Imagen</button>
         </div>
         <div className="container-editor">
            <DynamicEditor
               projectData={projectState}
               idProject={idProject}
               setProjectState={setProjectState} />
         </div>
         <button type='submit' className='btn btn-primary'>Actualizar</button>
      </form>
   )
}

export default FormAdmin