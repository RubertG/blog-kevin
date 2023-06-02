import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_APIKEY,
   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
   projectId: process.env.NEXT_PUBLIC_POJECTID,
   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
   appId: process.env.NEXT_PUBLIC_APPID
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const db = getFirestore(app)