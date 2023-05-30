import Image from 'next/image'
import React from 'react'

function Contact() {
   return (
      <section className='container-contact'>
         <h2 className='title' id='contacto'>Contáctame</h2>
         <div className="container-contact-icons">
            <a href="#" target="_blank">
               <Image src="/assets/linkedin.svg" alt="Icon Linkedin." width="90" height="90" />
            </a>
            <a href="#" target="_blank">
               <Image src="/assets/instagram.svg" alt="Icon Instagram." width="90" height="90" />
            </a>
            <a href="#" target="_blank">
               <Image className="whatsapp-icon" src="/assets/whatsapp.svg" alt="Icon Whatsapp." width="90" height="90" />
            </a>
            <a href="#" target="_blank">
               <Image src="/assets/facebook.svg" alt="Icon Facebook." width="90" height="90" />
            </a>
            <a href="#" target="_blank" className='twitter-icon'>
               <Image src="/assets/gmail.svg" alt="Icon Gmail." width="90" height="90" />
            </a>
            <a href="#" target="_blank">
               <Image src="/assets/twitter.svg" alt="Icon Twitter." width="90" height="90" />
            </a>
         </div>
      </section>
   )
}

export default Contact