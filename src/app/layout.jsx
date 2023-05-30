import { ProjectsProvider } from '@/context/ProjectsContext'
import globals from '@/styles/globals.scss'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Contact from '@/components/Contact'

export const metadata = {
   title: 'KevinWeb - Página web de Kevin Gonzalez.',
   description: 'Portafolio y blog personal del ingeniero electromecanico y especialista en seguridad y salud en el trabajo, Kevin Gonzalez.',
}

const NavLinks = [
   {
      name: "Portafolio",
      path: "/"
   },
   {
      name: "Blog",
      path: "/blog"
   }
]

export default function RootLayout({ children }) {
   return (
      <html lang="es">
         <body className={globals}>
            <Nav navLinks={NavLinks} />
            <ProjectsProvider>
               {children}
            </ProjectsProvider>
            <Contact />
            <Footer />
         </body>
      </html>
   )
}
