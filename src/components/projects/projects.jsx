import React from 'react'
import './projects.css'
import ProjectCard from './projectsCard/projectCard'
import mineSweeper from '../../assets/minesweeperPlaceholder.webp'
import streamberry from '../../assets/streamberryPlaceholder.webp'
import ecommerce from '../../assets/ecommercePlaceholder.webp'
import library from '../../assets/libraryPlaceholder.webp'

function Projects () {
  return (
    <div className='projects' id='Projects'>
      <div className='projects-container'>
        <h1>Projects!</h1>
        <p>Here you can see some game that i did on react and the one that are being developer</p>
        <div className='porjects-cards'>
          <ProjectCard Image={mineSweeper} Title='Mine Sweeper' Link='https://lucianomallo.github.io/MineSweeperJS/' />
          <ProjectCard Image={streamberry} Title='Straemberry' Link='https://lucianomallo.github.io/Streamberry/' />
          <ProjectCard Image={ecommerce} Title='Ecommerce' Link='https://lucianomallo.github.io/ReactEcommerce/' />
          <ProjectCard Image={library} Title='Library' Link='https://reading-list-navy.vercel.app/' />
        </div>
      </div>
    </div>
  )
}

export default Projects
