import React from 'react'
import Logo from '../CommonComponents/logo/logo'
import codeLogo from '../../assets/codeLogo.webp'
import SectionCard from './Card/Card'
import './home.css'
import GithubLogo from '../../assets/GithubLogo.webp'
import LinkedInLogo from '../../assets/linkedInLogo.webp'

function Home () {
  return (
    <div className='Home' id='Home'>
      <h1>Welcome to My Website</h1>
      <h2 className='Home-description'>
        <Logo src={codeLogo} alt='CodeLogo' width={30} height={30} />
        <p> Hello! I'm Luciano.</p>
      </h2>
      <p>This is my personal page. Here you can find information about me, my projects, and my contact information.</p>
      <div className='Home-Contact'>
        <Logo text='LinkedIn' width={20} alt='LinkedIn Logo' height={20} src={LinkedInLogo} href='https://www.linkedin.com/in/luciano-mallo-tomaso/' />
        <Logo text='Github' width={20} alt='Github Logo' height={20} src={GithubLogo} href='https://github.com/LucianoMallo/Portfolio' />
      </div>
      <div className='Cards-Container'>
        <SectionCard Title='About' Subtitle='Know me more' Text='' Link='/about' TextLink='Who am i?' />
        <SectionCard Title='Projects' Subtitle='What i made?' Text='' Link='/projects' TextLink="See what i'm working on" />
      </div>
    </div>
  )
}

export default Home
