import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'KevinWeb',
   description: 'Portafolio y blog personal del ingeniero electromecanico y especialista en seguridad y salud en el trabajo, Kevin Gonzalez.',
}

export default function RootLayout({ children }) {
   return (
      <html lang="es">
         <body>
            {children}
         </body>
      </html>
   )
}
