import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import { GlobalContext } from '../contexts/GlobalContext'
import { ContainerCards, ContainerHome, DivProjects, HrStyled, SkillsContainer, SkillsDiv, Title } from './homeStyle'
import {ProjectCard} from '../components/ProjectCard'
import SkillCard from '../components/SkillsCard'
import Footer from '../components/Footer/Footer'
import Introduction from '../components/Introduction/Introduction'
import NavBar from '../components/NavBar'


const Home = () => {
    const context = useContext(GlobalContext)
    const {projects, skills} = context

  return (
    <ContainerHome>
        <NavBar/>
        <Header/>
        <div id="about"></div>
        <Introduction/>
        <HrStyled/>
        <DivProjects>
            <Title id="projects">&lt; Projects &gt;</Title>
            <ContainerCards>
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project}/>
                })}
            </ContainerCards>
        </DivProjects>

            <HrStyled/>

        <SkillsContainer id="skills">
            <Title >&lt; Skills &gt;</Title>
            <SkillsDiv>
                {skills.map((skill) => {
                    return <SkillCard key={skill.id} skill={skill}/>
                })} 
            </SkillsDiv> 
        </SkillsContainer>

        <div id="contact"></div>
        <Footer/>
        </ContainerHome>
  )
}

export default Home