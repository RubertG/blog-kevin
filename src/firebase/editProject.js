import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export async function editProject(id, project) {
   return await updateDoc(doc(db, "services-projects", id), project)
} 
