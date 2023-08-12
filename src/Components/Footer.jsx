import React from 'react'
import {FaTwitter, FaFacebook, FaReddit, FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import ThemeToggleBtn from './ThemeToggleBtn'


const Footer = () => {
  return (
    <div>
        <div className='rounded-div py-8'> 
        <div className='grid md:grid-cols-2'>
            <div className='flex justify-evenly w-full  md:max-w-[300px] uppercase'>
            <div className=''>
                <h2 className=' font-bold'>Support</h2>
                <ul className='py-4 space-y-2'>
                    <li>Help Center</li>
                    <li>Contact us</li>
                    <li>API Status</li>
                    <li>Documentation</li>
                </ul>
            </div>

            <div className=''>
                <h2 className=' font-bold'>Info</h2>
                <ul className='py-4 space-y-2'>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Invest</li>
                    <li>Legal</li>
                </ul>
            </div>

            </div>
            </div>


        </div>

    </div>
  )
}

export default Footer