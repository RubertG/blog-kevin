"use client"
import { createContext, useContext, useState } from "react"

export const ProjectsContext = createContext()

export function useProjectsContext() {
   const context = useContext(ProjectsContext)
   if (!context) throw new Error("Can't access context")
   return context
}

let Projects = [
   {
      id: 1,
      name: "Servicio de diseño, modelado e impresión 3D.",
      desc: "La impresión 3D da como solución a muchos problemas del día a día haciendo más fácil la forma de conseguir piezas de equipos, maquinas, vehículos o cosas del hogar, permitiendo obtener productos de buena calidad, a medida y de forma rápida. Además, puedes dar un toque personalizado a sus proyectos o creaciones de forma creativa.",
      img: "/assets/calavera.jpg",
      content: `
      <p>Las diferentes <strong>aplicaciones</strong> que se pueden dar con la impresión 3D son:</p>
      <ul>
         <li>
            Carcasa de control de alarma.
            <Image
               width="400"
               height="600"
               src="https://firebasestorage.googleapis.com/v0/b/blog-kevin-9f9c7.appspot.com/o/services-projects%2FP8TEGp5riFgYPc6VQiHo%2FCarcasa.jpg?alt=media&token=4288647c-4afd-4622-84dd-f09af24f3736&_gl=1*ebfl6q*_ga*MTA3NDI5MjI5Mi4xNjgyMTgyMzM5*_ga_CW55HF8NVT*MTY4NTcyNTkwOS40MS4xLjE2ODU3Mjg0ODcuMC4wLjA."
               alt='Carcasa de control de alarma - KevinWeb'
            />
         </li>
         <li>
            Engranajes.
            <Image
               width="400"
               height="600"
               src="https://firebasestorage.googleapis.com/v0/b/blog-kevin-9f9c7.appspot.com/o/services-projects%2FP8TEGp5riFgYPc6VQiHo%2Fengranaje.jpg?alt=media&token=54c9a58a-f824-4708-871c-85ac2429edb3&_gl=1*uouaj4*_ga*MTA3NDI5MjI5Mi4xNjgyMTgyMzM5*_ga_CW55HF8NVT*MTY4NTczNDA5Mi40Mi4xLjE2ODU3MzQyOTIuMC4wLjA."
               alt='Engranajes 3D - KevinWeb'
            />
         </li>
         <li>
            Lámparas led personalizadas.
            <Image
               width="400"
               height="600"
               src="https://firebasestorage.googleapis.com/v0/b/blog-kevin-9f9c7.appspot.com/o/services-projects%2FP8TEGp5riFgYPc6VQiHo%2Flampara.jpg?alt=media&token=6cae2852-db03-47c5-83d1-c99cda7035f1&_gl=1*15k1qq*_ga*MTA3NDI5MjI5Mi4xNjgyMTgyMzM5*_ga_CW55HF8NVT*MTY4NTczNDA5Mi40Mi4xLjE2ODU3MzQzNzQuMC4wLjA."
               alt='Lámparas led personalizadas - KevinWeb'
            />
         </li>
         <li>
            Soportes para el celular.
            <Image
               width="400"
               height="600"
               src="https://firebasestorage.googleapis.com/v0/b/blog-kevin-9f9c7.appspot.com/o/services-projects%2FP8TEGp5riFgYPc6VQiHo%2Fporta-celular.jpg?alt=media&token=6e864ecc-7caf-4d80-ab28-b87301a1875b&_gl=1*kq37ih*_ga*MTA3NDI5MjI5Mi4xNjgyMTgyMzM5*_ga_CW55HF8NVT*MTY4NTczNDA5Mi40Mi4xLjE2ODU3MzQzOTguMC4wLjA."
               alt='Perrito - Soporte para el celular - KevinWeb'
            />
         </li>
         <li>
            Acoples o piezas de tubería.
            <Image
               width="400"
               height="600"
               src="https://firebasestorage.googleapis.com/v0/b/blog-kevin-9f9c7.appspot.com/o/services-projects%2FP8TEGp5riFgYPc6VQiHo%2Facoples.jpg?alt=media&token=71b62d88-4343-40da-b72e-bd1e39b32e15&_gl=1*64a6l9*_ga*MTA3NDI5MjI5Mi4xNjgyMTgyMzM5*_ga_CW55HF8NVT*MTY4NTczNDA5Mi40Mi4xLjE2ODU3MzQ0NDcuMC4wLjA."
               alt='Acoples o piezas de tubería - KevinWeb'
            />
         </li>
         <li>
            Portarretratos personalizados.
            <Image
               width="400"
               height="600"
               src="https://firebasestorage.googleapis.com/v0/b/blog-kevin-9f9c7.appspot.com/o/services-projects%2FP8TEGp5riFgYPc6VQiHo%2Fportarretrato.jpg?alt=media&token=0a0b61d0-fbd1-4ca9-b020-ddda03f49ed0&_gl=1*16w7x91*_ga*MTA3NDI5MjI5Mi4xNjgyMTgyMzM5*_ga_CW55HF8NVT*MTY4NTczNDA5Mi40Mi4xLjE2ODU3MzQ0NjIuMC4wLjA."
               alt='Portarretratos personalizados - KevinWeb'
            />
         </li>
         <li>
            Llaveros personalizados.
            <Image
               width="400"
               height="600"
               src="https://firebasestorage.googleapis.com/v0/b/blog-kevin-9f9c7.appspot.com/o/services-projects%2FP8TEGp5riFgYPc6VQiHo%2Fllaveros.jpg?alt=media&token=c8c77895-1138-4461-bb36-2f2311f0f23b&_gl=1*1louy3p*_ga*MTA3NDI5MjI5Mi4xNjgyMTgyMzM5*_ga_CW55HF8NVT*MTY4NTczNDA5Mi40Mi4xLjE2ODU3MzQ0ODEuMC4wLjA."
               alt='Llaveros personalizados - KevinWeb'
            />
         </li>
         <li>
            Rejillas del aire acondicionado de tu auto.
         </li>
         <li>
            Accesorios personalizados.
            <Image
               width="400"
               height="600"
               src="https://firebasestorage.googleapis.com/v0/b/blog-kevin-9f9c7.appspot.com/o/services-projects%2FP8TEGp5riFgYPc6VQiHo%2Fcalavera.jpg?alt=media&token=5a67ab13-7230-4cf3-a09c-c877d07d33cf&_gl=1*lsz7lg*_ga*MTA3NDI5MjI5Mi4xNjgyMTgyMzM5*_ga_CW55HF8NVT*MTY4NTczNDA5Mi40Mi4xLjE2ODU3MzQ1MjEuMC4wLjA."
               alt='Calavera - Accesorios personalizados - KevinWeb'
            />
         </li>
      </ul>`
   }
]

export function ProjectsProvider({ children }) {

   const [projects, setProjects] = useState(null)

   return (
      <ProjectsContext.Provider
         value={{
            projects,
            setProjects
         }}
      >
         {children}
      </ProjectsContext.Provider>
   )
}