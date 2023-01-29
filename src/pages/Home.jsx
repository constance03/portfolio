import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import { GlobalContext } from '../contexts/GlobalContext'
import { ContainerCards, ContainerHome, DivPresentation, DivProjects, DivText, HrStyled, SkillsContainer, SkillsDiv, TitleProjects, TitleSkills } from './homeStyle'
import {ProjectCard} from '../components/ProjectCard'
import SkillCard from '../components/SkillsCard'
import Footer from '../components/Footer/Footer'
import Introduction from '../components/Introduction/Introduction'
import Sidebar from '../components/Sidebar'


const Home = () => {
    const context = useContext(GlobalContext)
    const {projects, skills} = context

  return (
    <ContainerHome>
        <Sidebar/>
        <Header/>
        <div id="about"></div>
        <Introduction/>
        <HrStyled/>
        <DivProjects>
            <TitleProjects id="projects">&lt; Projects &gt;</TitleProjects>
            <ContainerCards>
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project}/>
                })}
            </ContainerCards>
        </DivProjects>

            <HrStyled/>

        <SkillsContainer id="skills">
            <TitleSkills >&lt; Skills &gt;</TitleSkills>
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