import Projects from "@/components/Projects"

function page() {
   return (
      <main className="container-colum">
         <h2 className="title title-primary">Blog</h2>
         <Projects isCardSecondary={true} />
      </main>
   )
}

export default page