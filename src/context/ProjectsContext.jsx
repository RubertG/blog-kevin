"use client"
import { createContext, useContext, useState } from "react"

export const ProjectsContext = createContext()

export function useProjectsContext() {
   const context = useContext(ProjectsContext)
   if (!context) throw new Error("Can't access context")
   return context
}

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