import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ThemeToggleBtn from './ThemeToggleBtn'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
 
const Navbar = () => {
  const [nav , setNav] = useState(false)
  const shownav = ()=>{
    setNav(!nav)
  }
  // console.log("JKKJ")
  return (
    <>
    <div className='rounded-div flex items-center justify-between h-20 font-bold '>
    <Link to='/'>
    <h1 className='text-2xl'>CryptoTrix</h1>
    </Link>
    <div className='hidden md:block'>
    <ThemeToggleBtn/>
    </div>
    <div className='hidden md:block'>
      <Link to='/signin' className='p-4 hover:text-accent'>Sign In</Link>
      <Link to='/signup' className=' bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Up</Link>
    </div>
{/* MENU BAR */}
    <div  onClick={shownav} className='md:hidden cursor-pointer z-10'>
    {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
    </div>
{/* MENU BAR CONTENTS */}
    <div className={nav ? 'md:hidden fixed right-0  top-24 flex flex-col items-center justify-start w-[70%] h-[90%] bg-gray-500 ease-in duration-300 z-10' : 'fixed right-[-100%]  h-[70%] flex flex-col items-center justify-between ease-in'}>
      <ul className='w-full p-4'>
        <li className='border-b py-6'><Link to='/'>Home</Link></li>
        <li className='border-b py-6'><Link to='/'>Account</Link></li>


        <li className='border-b py-6'> <ThemeToggleBtn/></li>
      </ul>
      <div className='flex flex-col w-full p-4'>
        <Link to='/signin'>
        <button className='w-full my-2 p-3 bg-primary text-primary border-white rounded-2xl shadow-xl'>Sign In</button>
        </Link>
        <Link to='/signup'>
        <button className='w-full my-2 p-3 bg-button text-btnText border-white rounded-2xl shadow-xl'>Sign Up</button>
        </Link>

      </div>
    </div>
{/* MENU BAR CONTENTS */}
    </div>
    </>   
  )
}

export default Navbar