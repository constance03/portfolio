import { GlobalContext } from "./contexts/GlobalContext"
import Router from "./routes/Router"
import pokedex from './assets/pokedex.png'
import astrodev from './assets/astrodev.png'
import scientists from './assets/scientists.png'
import rickMorty from './assets/rick-morty.png'
import labecommerce from './assets/labecommerce.png'
import toDoList from './assets/to-do-list.png'
import webdev from './assets/webdev.png'
import frontend from './assets/frontend.png'
import backend from './assets/backend.png'
import html from './assets/html.svg'
import css from './assets/css.svg'
import react from './assets/react.svg'
import javascript from './assets/javascript.svg'
import typescript from './assets/typescript.svg'
import node from './assets/node.svg'
import sql from './assets/sql.png'
import aws from './assets/aws.svg'
import python from './assets/python.svg'



function App() {
const projects = [{
  id: "F01",
  name: "Women on Science",
  image: scientists,
  link: "https://github.com/constance03/projeto-cientistas",
  description: "I used CSS, HTML and JavaScript to create a responsive website about some of the most important women's contributions to science."
}, {
  id: "F02",
  name: "Astrodev Store",
  image: astrodev,
  link: "https://github.com/constance03/projeto-astrodev",
  description: "I developed a e-commerce website using React.js."
}, {
  id: "F03",
  name: "Pokédex",
  image: pokedex,
  link: "https://github.com/constance03/projeto-pokedex",
  description: "I created a web page that contains information about Pokemons, including a functioning Pokedex, using API rest."
}, {
  id: "F04",
  name: "Rick and Morty API",
  image: rickMorty,
  link: "https://github.com/constance03/rick-morty-api",
  description: "A webpage where you can find information about Rick and Morty episodes, characters and locations."
}, {
  id: "B01",
  name: "Labecommerce",
  image: labecommerce,
  link: "https://github.com/constance03/projeto-labecommerce",
  description: "A API with information about clients, purchases and products."
}, {
  id: "B02",
  name: "To-Do List",
  image: toDoList,
  link: "https://github.com/constance03/projeto-to-do-list",
  description: "A API were you can associate/create tasks and users."
}]

const skills = [{
  id: "S01",
  name: "Software Development",
  description: "Experience in JavaScript, TypeScript, Python and Database.",
  image: webdev,
  icons:[javascript, typescript, python]
} , {
  id: "S02",
  name: "Frontend Development",
  description: "Design websites in HTML, CSS, JS, React and Next.js.",
  image: frontend,
  icons: [html, css, react]
} , {
  id: "S03",
  name: "Backend Development",
  description: "Skilled in developing applications with TS, SQL, AWS and OOP.",
  image: backend,
  icons: [sql, aws, node]
}]

const context = {projects, skills}

  return (
    <div>
      <GlobalContext.Provider value={context}>
      <Router/>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
