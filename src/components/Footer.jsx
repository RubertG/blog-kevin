import React from 'react'
import SocialIcons from './SocialIcons'

function Footer() {
   return (
      <footer className='footer'>
         <div className='footer__copyright'>
            Copyright Kg_soluciones
            <div className="social-icons">
               <SocialIcons />
            </div>
         </div>
         <div className='footer__dev'>
            Desarrollado por <a href='https://www.linkedin.com/in/rubert-gonzalez-8782b8252/' target='_blank'>RubertDev</a>
         </div>
      </footer>
   )
}

export default Footer