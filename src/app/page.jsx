import Header from "@/components/Header";
import Nav from "@/components/Nav";

const navLinks = [
   {
      name: "Blog",
      path: "/blog"
   }
]

export default function Home() {
   return (
      <div>
         <Nav navLinks={navLinks} />
         <Header />
      </div>
   )
}
