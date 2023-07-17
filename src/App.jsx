import React from 'react'
import './App.css'
import { useTheme } from './hooks/useTheme.jsx'
import Home from './components/home/home'
import About from './components/about/about'
import Projects from './components/projects/projects'

function App () {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className='toggle-theme'>
        <p>
          Change Theme
        </p>
      </button>
      <div className='App-content'>

        <Home />
        <About />
        <Projects />
      </div>
    </div>
  )
}
export default App
