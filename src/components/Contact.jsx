import Image from 'next/image'
import React from 'react'

function Contact() {
   return (
      <section className='container-contact'>
         <h2 className='title' id='contacto'>Contáctame</h2>
         <div className="container-contact-icons">
            <a href="https://www.linkedin.com/in/kevin-jhoel-gonzalez-perez-9a2109280/" target="_blank">
               <Image src="/assets/linkedin.svg" alt="Icon Linkedin." width="90" height="90" />
            </a>
            <a href="https://www.instagram.com/kg_soluciones/" target="_blank">
               <Image src="/assets/instagram.svg" alt="Icon Instagram." width="90" height="90" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=3114470929" target="_blank">
               <Image className="whatsapp-icon" src="/assets/whatsapp.svg" alt="Icon Whatsapp." width="90" height="90" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100090741046930" target="_blank">
               <Image src="/assets/facebook.svg" alt="Icon Facebook." width="90" height="90" />
            </a>
            <a href="mailto:kevin.gonzalezp@hotmail.com" target="_blank" className='gmail-icon'>
               <Image src="/assets/gmail.svg" alt="Icon Gmail." width="90" height="90" />
            </a>
         </div>
      </section>
   )
}

export default Contact