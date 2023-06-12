import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./config";

export async function uploadImage(idProject, file) {
   const storageRef = ref(storage, `services-projects/${idProject}/${file.name}`);
   await uploadBytes(storageRef, file);
   const fileUrl = await getDownloadURL(storageRef);
   return fileUrl;
};
