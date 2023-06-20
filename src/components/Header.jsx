import Image from "next/image"
import Button from "./Button"

function Header() {
   return (
      <header className="container">
         <div className="container-img">
            <Image
               src="/assets/perfil.jpg"
               alt="Kevin Gonzalez, ingeniero electromecanico y especialista en seguridad y salud en el trabajo"
               width="828"
               height="791" />
         </div>
         <div className="container-text">
            <h2 className="title">¡Hola! ¿Cómo estás?</h2>
            <h2 className="title">Soy <span className="title-primary">Kevin Gonzalez.</span></h2>
            <p>Ingeniero electromecánico especializado en seguridad y salud en el trabajo. Mas descripción sobre sus características y habilidades.</p>
            <div className="container-buttons">
               <Button href="#contacto">
                  Contáctame
               </Button>
               <a
                  className="btn btn-primary"
                  href="https://firebasestorage.googleapis.com/v0/b/blog-kevin-9f9c7.appspot.com/o/hoja-de-vida%2FHOJA%20DE%20VIDA.pdf?alt=media&token=6601277f-bf6d-4dc7-bead-b05c13fa8d76"
                  target="_blank"
               >
                  Hoja de vida
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                     <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                     <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
               </a>
            </div>
         </div>
         <div className="container-arrow">
            <Image
               src="./assets/arrow.svg"
               alt="Arrow"
               width="20"
               height="40" />
         </div>
      </header>
   )
}

export default Header