import { ProjectsProvider } from '@/context/ProjectsContext'
import globals from '../styles/globals.scss'
import Footer from '@/components/Footer'

export const metadata = {
   title: 'KevinWeb',
   description: 'Portafolio y blog personal del ingeniero electromecanico y especialista en seguridad y salud en el trabajo, Kevin Gonzalez.',
}


export default function RootLayout({ children }) {
   return (
      <html lang="es">
         <body className={globals}>
            <ProjectsProvider>
               {children}
            </ProjectsProvider>
            <Footer />
         </body>
      </html>
   )
}
