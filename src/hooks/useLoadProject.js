"use client"
import { useProjectsContext } from "@/context/ProjectsContext"
import { getProject } from "@/firebase/getProjects"
import { useEffect, useState } from "react"

export function useLoadProject({ id }) {
   const { projects } = useProjectsContext()
   const [project, setProject] = useState()
   const [notFound, setNotFound] = useState(false)
   const [loading, setLoading] = useState(false)

   const loadProject = async () => {
      setLoading(true)
      const auxProject = await getProject(id)
      if (auxProject.exists()) {
         setProject(auxProject.data())
         setNotFound(false)
      } else {
         setNotFound(true)
      }
      setLoading(false)
   }

   useEffect(() => {
      if (!projects) {
         loadProject()
      } else {
         setLoading(true)
         const auxProject = projects.find((p) => p.id === id);
         if (!auxProject) {
            setNotFound(true)
         } else {
            setProject(auxProject)
         }
         setLoading(false)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [projects])

   return {
      loading,
      project,
      notFound
   }
}