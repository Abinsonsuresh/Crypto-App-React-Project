import React, { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useGlobalContext } from '../context/Theme'
// import { ThemeContext } from '../context/Theme'


const ThemeToggleBtn = () => {
  const { theme, setTheme } = useGlobalContext();
  return (
    <div className='p-2'>
      {theme === 'dark' ?
        (<div className='cursor-pointer flex items-center hover:text-accent' onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark')  }}> <HiSun /> LightMode</div>) : (<div className='cursor-pointer flex items-center hover:text-accent' onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}> <HiMoon /> DarkMode </div>)}
    </div>
  )
}

export default ThemeToggleBtn