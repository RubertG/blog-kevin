import Image from "next/image"

function SocialIcons() {
   return (
      <>
         <a href="#" target="_blank">
            <Image src="/assets/linkedin.svg" alt="Icon Linkedin." width="40" height="40" />
         </a>
         <a href="#" target="_blank">
            <Image src="/assets/instagram.svg" alt="Icon Instagram." width="40" height="40" />
         </a>
         <a href="#" target="_blank">
            <Image className="whatsapp-icon" src="/assets/whatsapp.svg" alt="Icon Whatsapp." width="40" height="40" />
         </a>
      </>
   )
}

export default SocialIcons