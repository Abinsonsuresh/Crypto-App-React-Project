import React from 'react'
import {Link} from 'react-router-dom'
import ThemeToggleBtn from './ThemeToggleBtn'
 
const Navbar = () => {
  return (
    <>
    <Link to='/'>
    <h1>CryptoTrix</h1>
    </Link>
    <ThemeToggleBtn/>
    </>   
  )
}

export default Navbar