import Project from './Project'

let projects = [
   {
      id: 1,
      name: "Segundo titulo del proyecto.",
      desc: "Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño.",
      date: "12 Julio, 2021",
      img: "/assets/img-prueba.png",
      content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat accusantium consequatur rerum debitis, odit deserunt quibusdam veritatis libero, delectus autem ex est sapiente eveniet perferendis sint. Quod et quis, necessitatibus recusandae labore voluptate, consequatur nostrum laudantium ex cupiditate vero, velit ut. Dolores nisi non architecto fugit, accusamus cumque ipsa similique quaerat, reiciendis omnis rem possimus praesentium? Illum, libero? Veniam repudiandae similique magnam voluptate eius, modi nemo architecto nisi mollitia necessitatibus, quibusdam voluptatem in? Molestias fugit quibusdam magnam veritatis eveniet facere illum quia optio in? Laboriosam quas ad tempore accusamus soluta blanditiis impedit. Repudiandae veniam alias cupiditate facilis magnam, porro, in facere laboriosam earum eum animi, eveniet nostrum quod!</p><p>Nemo veniam quae consequatur alias ut consequuntur placeat dolor similique, mollitia eum pariatur officiis, possimus, soluta accusantium molestias! Fuga voluptatum velit quibusdam omnis expedita quod consectetur dolorem deserunt error, nisi, non officia voluptatibus impedit, veritatis excepturi reiciendis odit minima illum veniam laborum dolorum! Sint eligendi ad rerum earum nulla sapiente eum odit dolorem tempore molestiae inventore deserunt alias laborum minima, molestias asperiores quibusdam voluptatem omnis commodi repellendus consequuntur ut sit. Repudiandae cupiditate pariatur reiciendis accusantium iusto debitis excepturi ipsum voluptatem impedit quae ullam, enim at autem itaque ab voluptas dolore corrupti?</p>"
   },
   {
      id: 2,
      name: "Tercer titulo del proyecto.",
      desc: "Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño.",
      date: "16 Marzo, 2022",
      img: "/assets/img-prueba.png",
      content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat accusantium consequatur rerum debitis, odit deserunt quibusdam veritatis libero, delectus autem ex est sapiente eveniet perferendis sint. Quod et quis, necessitatibus recusandae labore voluptate, consequatur nostrum laudantium ex cupiditate vero, velit ut. Dolores nisi non architecto fugit, accusamus cumque ipsa similique quaerat, reiciendis omnis rem possimus praesentium? Illum, libero? Veniam repudiandae similique magnam voluptate eius, modi nemo architecto nisi mollitia necessitatibus, quibusdam voluptatem in? Molestias fugit quibusdam magnam veritatis eveniet facere illum quia optio in? Laboriosam quas ad tempore accusamus soluta blanditiis impedit. Repudiandae veniam alias cupiditate facilis magnam, porro, in facere laboriosam earum eum animi, eveniet nostrum quod!</p><p>Nemo veniam quae consequatur alias ut consequuntur placeat dolor similique, mollitia eum pariatur officiis, possimus, soluta accusantium molestias! Fuga voluptatum velit quibusdam omnis expedita quod consectetur dolorem deserunt error, nisi, non officia voluptatibus impedit, veritatis excepturi reiciendis odit minima illum veniam laborum dolorum! Sint eligendi ad rerum earum nulla sapiente eum odit dolorem tempore molestiae inventore deserunt alias laborum minima, molestias asperiores quibusdam voluptatem omnis commodi repellendus consequuntur ut sit. Repudiandae cupiditate pariatur reiciendis accusantium iusto debitis excepturi ipsum voluptatem impedit quae ullam, enim at autem itaque ab voluptas dolore corrupti?</p>"
   },
   {
      id: 3,
      name: "Cuarto titulo del proyecto.",
      desc: "Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño.",
      date: "1 Febrero, 2022",
      img: "/assets/img-prueba.png",
      content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat accusantium consequatur rerum debitis, odit deserunt quibusdam veritatis libero, delectus autem ex est sapiente eveniet perferendis sint. Quod et quis, necessitatibus recusandae labore voluptate, consequatur nostrum laudantium ex cupiditate vero, velit ut. Dolores nisi non architecto fugit, accusamus cumque ipsa similique quaerat, reiciendis omnis rem possimus praesentium? Illum, libero? Veniam repudiandae similique magnam voluptate eius, modi nemo architecto nisi mollitia necessitatibus, quibusdam voluptatem in? Molestias fugit quibusdam magnam veritatis eveniet facere illum quia optio in? Laboriosam quas ad tempore accusamus soluta blanditiis impedit. Repudiandae veniam alias cupiditate facilis magnam, porro, in facere laboriosam earum eum animi, eveniet nostrum quod!</p><p>Nemo veniam quae consequatur alias ut consequuntur placeat dolor similique, mollitia eum pariatur officiis, possimus, soluta accusantium molestias! Fuga voluptatum velit quibusdam omnis expedita quod consectetur dolorem deserunt error, nisi, non officia voluptatibus impedit, veritatis excepturi reiciendis odit minima illum veniam laborum dolorum! Sint eligendi ad rerum earum nulla sapiente eum odit dolorem tempore molestiae inventore deserunt alias laborum minima, molestias asperiores quibusdam voluptatem omnis commodi repellendus consequuntur ut sit. Repudiandae cupiditate pariatur reiciendis accusantium iusto debitis excepturi ipsum voluptatem impedit quae ullam, enim at autem itaque ab voluptas dolore corrupti?</p>"
   },
   {
      id: 4,
      name: "Primer titulo del proyecto.",
      desc: "Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño.",
      date: "10 septiembre, 2021",
      img: "/assets/img-prueba.png",
      content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat accusantium consequatur rerum debitis, odit deserunt quibusdam veritatis libero, delectus autem ex est sapiente eveniet perferendis sint. Quod et quis, necessitatibus recusandae labore voluptate, consequatur nostrum laudantium ex cupiditate vero, velit ut. Dolores nisi non architecto fugit, accusamus cumque ipsa similique quaerat, reiciendis omnis rem possimus praesentium? Illum, libero? Veniam repudiandae similique magnam voluptate eius, modi nemo architecto nisi mollitia necessitatibus, quibusdam voluptatem in? Molestias fugit quibusdam magnam veritatis eveniet facere illum quia optio in? Laboriosam quas ad tempore accusamus soluta blanditiis impedit. Repudiandae veniam alias cupiditate facilis magnam, porro, in facere laboriosam earum eum animi, eveniet nostrum quod!</p><p>Nemo veniam quae consequatur alias ut consequuntur placeat dolor similique, mollitia eum pariatur officiis, possimus, soluta accusantium molestias! Fuga voluptatum velit quibusdam omnis expedita quod consectetur dolorem deserunt error, nisi, non officia voluptatibus impedit, veritatis excepturi reiciendis odit minima illum veniam laborum dolorum! Sint eligendi ad rerum earum nulla sapiente eum odit dolorem tempore molestiae inventore deserunt alias laborum minima, molestias asperiores quibusdam voluptatem omnis commodi repellendus consequuntur ut sit. Repudiandae cupiditate pariatur reiciendis accusantium iusto debitis excepturi ipsum voluptatem impedit quae ullam, enim at autem itaque ab voluptas dolore corrupti?</p>"
   },
   {
      id: 5,
      name: "Segundo titulo del proyecto.",
      desc: "Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño.",
      date: "12 Julio, 2021",
      img: "/assets/img-prueba.png",
      content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat accusantium consequatur rerum debitis, odit deserunt quibusdam veritatis libero, delectus autem ex est sapiente eveniet perferendis sint. Quod et quis, necessitatibus recusandae labore voluptate, consequatur nostrum laudantium ex cupiditate vero, velit ut. Dolores nisi non architecto fugit, accusamus cumque ipsa similique quaerat, reiciendis omnis rem possimus praesentium? Illum, libero? Veniam repudiandae similique magnam voluptate eius, modi nemo architecto nisi mollitia necessitatibus, quibusdam voluptatem in? Molestias fugit quibusdam magnam veritatis eveniet facere illum quia optio in? Laboriosam quas ad tempore accusamus soluta blanditiis impedit. Repudiandae veniam alias cupiditate facilis magnam, porro, in facere laboriosam earum eum animi, eveniet nostrum quod!</p><p>Nemo veniam quae consequatur alias ut consequuntur placeat dolor similique, mollitia eum pariatur officiis, possimus, soluta accusantium molestias! Fuga voluptatum velit quibusdam omnis expedita quod consectetur dolorem deserunt error, nisi, non officia voluptatibus impedit, veritatis excepturi reiciendis odit minima illum veniam laborum dolorum! Sint eligendi ad rerum earum nulla sapiente eum odit dolorem tempore molestiae inventore deserunt alias laborum minima, molestias asperiores quibusdam voluptatem omnis commodi repellendus consequuntur ut sit. Repudiandae cupiditate pariatur reiciendis accusantium iusto debitis excepturi ipsum voluptatem impedit quae ullam, enim at autem itaque ab voluptas dolore corrupti?</p>"
   },
   {
      id: 6,
      name: "Tercer titulo del proyecto.",
      desc: "Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño.",
      date: "16 Marzo, 2022",
      img: "/assets/img-prueba.png",
      content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat accusantium consequatur rerum debitis, odit deserunt quibusdam veritatis libero, delectus autem ex est sapiente eveniet perferendis sint. Quod et quis, necessitatibus recusandae labore voluptate, consequatur nostrum laudantium ex cupiditate vero, velit ut. Dolores nisi non architecto fugit, accusamus cumque ipsa similique quaerat, reiciendis omnis rem possimus praesentium? Illum, libero? Veniam repudiandae similique magnam voluptate eius, modi nemo architecto nisi mollitia necessitatibus, quibusdam voluptatem in? Molestias fugit quibusdam magnam veritatis eveniet facere illum quia optio in? Laboriosam quas ad tempore accusamus soluta blanditiis impedit. Repudiandae veniam alias cupiditate facilis magnam, porro, in facere laboriosam earum eum animi, eveniet nostrum quod!</p><p>Nemo veniam quae consequatur alias ut consequuntur placeat dolor similique, mollitia eum pariatur officiis, possimus, soluta accusantium molestias! Fuga voluptatum velit quibusdam omnis expedita quod consectetur dolorem deserunt error, nisi, non officia voluptatibus impedit, veritatis excepturi reiciendis odit minima illum veniam laborum dolorum! Sint eligendi ad rerum earum nulla sapiente eum odit dolorem tempore molestiae inventore deserunt alias laborum minima, molestias asperiores quibusdam voluptatem omnis commodi repellendus consequuntur ut sit. Repudiandae cupiditate pariatur reiciendis accusantium iusto debitis excepturi ipsum voluptatem impedit quae ullam, enim at autem itaque ab voluptas dolore corrupti?</p>"
   },
   {
      id: 7,
      name: "Cuarto titulo del proyecto.",
      desc: "Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño.",
      date: "1 Febrero, 2022",
      img: "/assets/img-prueba.png",
      content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat accusantium consequatur rerum debitis, odit deserunt quibusdam veritatis libero, delectus autem ex est sapiente eveniet perferendis sint. Quod et quis, necessitatibus recusandae labore voluptate, consequatur nostrum laudantium ex cupiditate vero, velit ut. Dolores nisi non architecto fugit, accusamus cumque ipsa similique quaerat, reiciendis omnis rem possimus praesentium? Illum, libero? Veniam repudiandae similique magnam voluptate eius, modi nemo architecto nisi mollitia necessitatibus, quibusdam voluptatem in? Molestias fugit quibusdam magnam veritatis eveniet facere illum quia optio in? Laboriosam quas ad tempore accusamus soluta blanditiis impedit. Repudiandae veniam alias cupiditate facilis magnam, porro, in facere laboriosam earum eum animi, eveniet nostrum quod!</p><p>Nemo veniam quae consequatur alias ut consequuntur placeat dolor similique, mollitia eum pariatur officiis, possimus, soluta accusantium molestias! Fuga voluptatum velit quibusdam omnis expedita quod consectetur dolorem deserunt error, nisi, non officia voluptatibus impedit, veritatis excepturi reiciendis odit minima illum veniam laborum dolorum! Sint eligendi ad rerum earum nulla sapiente eum odit dolorem tempore molestiae inventore deserunt alias laborum minima, molestias asperiores quibusdam voluptatem omnis commodi repellendus consequuntur ut sit. Repudiandae cupiditate pariatur reiciendis accusantium iusto debitis excepturi ipsum voluptatem impedit quae ullam, enim at autem itaque ab voluptas dolore corrupti?</p>"
   },
   {
      id: 8,
      name: "Primer titulo del proyecto.",
      desc: "Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño. Descripción pequeña del trabajo, sobre que trata y generalidades en un párrafo pequeño.",
      date: "10 septiembre, 2021",
      img: "/assets/img-prueba.png",
      content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat accusantium consequatur rerum debitis, odit deserunt quibusdam veritatis libero, delectus autem ex est sapiente eveniet perferendis sint. Quod et quis, necessitatibus recusandae labore voluptate, consequatur nostrum laudantium ex cupiditate vero, velit ut. Dolores nisi non architecto fugit, accusamus cumque ipsa similique quaerat, reiciendis omnis rem possimus praesentium? Illum, libero? Veniam repudiandae similique magnam voluptate eius, modi nemo architecto nisi mollitia necessitatibus, quibusdam voluptatem in? Molestias fugit quibusdam magnam veritatis eveniet facere illum quia optio in? Laboriosam quas ad tempore accusamus soluta blanditiis impedit. Repudiandae veniam alias cupiditate facilis magnam, porro, in facere laboriosam earum eum animi, eveniet nostrum quod!</p><p>Nemo veniam quae consequatur alias ut consequuntur placeat dolor similique, mollitia eum pariatur officiis, possimus, soluta accusantium molestias! Fuga voluptatum velit quibusdam omnis expedita quod consectetur dolorem deserunt error, nisi, non officia voluptatibus impedit, veritatis excepturi reiciendis odit minima illum veniam laborum dolorum! Sint eligendi ad rerum earum nulla sapiente eum odit dolorem tempore molestiae inventore deserunt alias laborum minima, molestias asperiores quibusdam voluptatem omnis commodi repellendus consequuntur ut sit. Repudiandae cupiditate pariatur reiciendis accusantium iusto debitis excepturi ipsum voluptatem impedit quae ullam, enim at autem itaque ab voluptas dolore corrupti?</p>"
   }
]

function Projects({ limit, isCardSecondary = false }) {
   if (limit > 0) projects = projects.slice(0, limit)
   let rightCard = true

   return (
      <ul className="container-projects">
         {
            projects.map((project) => {
               rightCard = !rightCard
               return (
                  <Project
                     key={project.id}
                     project={project}
                     isRightCard={rightCard}
                     isCardSecondary={isCardSecondary} />
               )
            })
         }
      </ul>
   )
}

export default Projects