import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import { storage } from '@/firebase/config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function Editor({ projectData, idProject, setProjectState }) {

   const handleImageUpload = async (file) => {
      const storageRef = ref(storage, `services-projects/${idProject}/${file.name}`);
      await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(storageRef);
      return { default: fileUrl };
   };

   const handleReady = (editor) => {
      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
         return new UploadAdapter(loader, handleImageUpload);
      };
   };

   const handleChange = (event, editor) => {
      const data = editor.getData();
      // setProjectState({ ...projectData, content: data })
   };

   return (
      <CKEditor
         data={projectData.content}
         editor={ClassicEditor}
         config={{
            language: 'es'
         }}
         onReady={handleReady}
         onChange={handleChange}
      />
   );
};


// adaptador personalizado para subir imagen 
class UploadAdapter {
   constructor(loader, handleImageUpload) {
      this.loader = loader;
      this.handleImageUpload = handleImageUpload;
   }

   async upload() {
      const file = await this.loader.file;

      try {
         const uploadedImage = await this.handleImageUpload(file);
         return {
            default: uploadedImage.default
         };
      } catch (error) {
         throw error;
      }
   }
}
