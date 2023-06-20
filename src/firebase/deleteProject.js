import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./config";

export async function deleteProject(id) {
   try {
      await deleteDoc(doc(db, "services-projects", id))
   } catch (error) {
      return error
   }
}