import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "./config";

export function getProjects(callback) {
   onSnapshot(collection(db, "services-projects"), callback)
}

export function getProject(id, callback) {
   onSnapshot(doc(db, "services-projects", id), callback)
}

