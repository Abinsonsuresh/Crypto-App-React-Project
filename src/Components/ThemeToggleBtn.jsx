import React, { useContext } from 'react'
// import {Hisun, HiMoon} from 'react-icons/hi'
import{useGlobalContext} from '../context/Theme'
// import { ThemeContext } from '../context/Theme'


const ThemeToggleBtn = () => {
    const { theme , setTheme} = useGlobalContext();
  return (
    <div>
        {theme === 'dark' ? (<div>LightMode </div>): (<div> LightMode </div>)}
    </div>
  )
}

export default ThemeToggleBtn