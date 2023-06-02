import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "./config";

export function getProjects(callback) {
   onSnapshot(collection(db, "services-projects"), callback)
}

export async function getProject(id) {
   return await getDoc(doc(db, "services-projects", id))
}

