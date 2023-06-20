import { ProjectsProvider } from '@/context/ProjectsContext'
import globals from '@/styles/globals.scss'
import Footer from '@/components/Footer'
import "../firebase/config"

export const metadata = {
   title: 'KevinWeb - Página web de Kevin Gonzalez.',
   description: 'Portafolio y blog personal del ingeniero electromecánico y especialista en seguridad y salud en el trabajo, Kevin Gonzalez.',
}

export default function RootLayout({ children }) {
   return (
      <html lang="es">
         <head>
            <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
         </head>
         <body className={globals}>
            <ProjectsProvider>
               {children}
            </ProjectsProvider>
            <Footer />
         </body>
      </html>
   )
}
