import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'dark'
  )
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    window.localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])
  return [theme, toggleTheme]
}
