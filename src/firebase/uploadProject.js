import { doc, setDoc } from "firebase/firestore";
import { db } from "./config";

export default async function uploadProject(id, project) {
   return await setDoc(doc(db, "services-projects", id), project);
}