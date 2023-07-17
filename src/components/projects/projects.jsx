import React from 'react'
// import './Projects-styles.css'
// import { Routes, Route, Link } from 'react-router-dom'
// import Sudoku from './Sudoku/Sudoku'
// import MineSweeper from './MineSweeper/MineSweeper'
// import Streamberry from './Streamberry/Streamberry'
import './projects.css'
import ProjectCard from './projectsCard/projectCard'
import mineSweeper from '../../assets/minesweeperPlaceholder.webp'
import streamberry from '../../assets/streamberryPlaceholder.webp'
import ecommerce from '../../assets/ecommercePlaceholder.webp'

function Projects () {
  return (
    <div className='projects' id='Projects'>
      <h1>Projects!</h1>
      <p>Here you can see some game that i did on react and the one that are being developer</p>
      <div className='porjects-cards'>
        <ProjectCard Image={mineSweeper} Title='Mine Sweeper' Link='https://lucianomallo.github.io/MineSweeperJS/' />
        <ProjectCard Image={streamberry} Title='Straemberry' Link='https://lucianomallo.github.io/Streamberry/' />
        <ProjectCard Image={ecommerce} Title='Ecommerce' Link='https://lucianomallo.github.io/ReactEcommerce/' />
      </div>
    </div>
  )
}

export default Projects
