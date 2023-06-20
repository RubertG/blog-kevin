import Image from "next/image"

function SocialIcons() {
   return (
      <>
         <a href="https://www.linkedin.com/in/kevin-jhoel-gonzalez-perez-9a2109280/" target="_blank">
            <Image src="/assets/linkedin.svg" alt="Icon Linkedin." width="40" height="40" />
         </a>
         <a href="https://www.instagram.com/kg_soluciones/" target="_blank">
            <Image src="/assets/instagram.svg" alt="Icon Instagram." width="40" height="40" />
         </a>
         <a href="https://api.whatsapp.com/send?phone=3114470929" target="_blank">
            <Image className="whatsapp-icon" src="/assets/whatsapp.svg" alt="Icon Whatsapp." width="40" height="40" />
         </a>
      </>
   )
}

export default SocialIcons