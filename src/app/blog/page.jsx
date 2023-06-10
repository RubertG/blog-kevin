import Projects from "@/components/Projects"

function BlogPage() {
   return (
      <>
         <main className="container-colum">
            <h2 className="title title-primary">Blog</h2>
            <Projects isCardSecondary={true} />
         </main>
      </>
   )
}

export default BlogPage