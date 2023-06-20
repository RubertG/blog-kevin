import { editProject } from "@/firebase/editProject";
import { uploadImage } from "@/firebase/uploadImage";
import uploadProject from "@/firebase/uploadProject";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export function useForm({ project, idProject, isAddSubmit }) {
   const inputRef = useRef(null);
   const [projectState, setProjectState] = useState(project)
   const [errorTitle, setErrorTitle] = useState("")
   const [errorDesc, setErrorDesc] = useState("")
   const [errorContent, setErrorContent] = useState("")
   const [errorImg, setErrorImg] = useState("")
   const [popupVisible, setPopupVisible] = useState(false)
   const [loading, setLoading] = useState(false)
   const router = useRouter()

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
         setErrorImg("")
      } catch (error) {
         alert(error)
         console.log(error);
      }
   }

   const handleChange = ({ target }) => {
      if (target.name === "name") setErrorTitle("")
      if (target.name === "desc") setErrorDesc("")
      setProjectState({ ...projectState, [target.name]: target.value })
   }

   const verifyErrors = () => {
      const nameSize = projectState.name.length
      const descSize = projectState.desc.length
      const contentSize = projectState.content.length
      const img = projectState.img
      if (!img) setErrorImg("No cargaste una imagen principal.")
      if (nameSize === 0) setErrorTitle("Campo vacío.")
      if (descSize === 0) setErrorDesc("Campo vacío.")
      if (contentSize === 0) setErrorContent("Campo vacío.")
      return nameSize !== 0 && descSize !== 0 && contentSize !== 0 && img
   }

   const addDoc = async () => {
      try {
         await uploadProject(idProject, projectState)
         setTimeout(() => {
            setPopupVisible(false)
            router.push("/admin")
         }, 1900)
      } catch (e) {
         alert("Error al subir el archivo.")
      }
      setLoading(false)
   }

   const editDoc = async () => {
      try {
         await editProject(idProject, projectState)
         setTimeout(() => {
            setPopupVisible(false)
            router.push("/admin")
         }, 1900)
      } catch (error) {
         alert("Error al subir el archivo editado.")
      }
      setLoading(false)
   }

   const handleSubmit = async () => {
      e.preventDefault()
      if (verifyErrors(e)) {
         setPopupVisible(true)
         setLoading(true)
         if (isAddSubmit) return addDoc()
         else return editDoc()
      }
   }

   return {
      handleSubmit,
      handleChange,
      handleImageUpload,
      handleClick,
      setErrorContent,
      setProjectState,
      errorTitle,
      errorDesc,
      errorContent,
      errorImg,
      popupVisible,
      loading,
      projectState,
      inputRef
   }
}