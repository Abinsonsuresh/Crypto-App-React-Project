import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FaFacebookF,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import ThemeToggleBtn from './ThemeToggleBtn'

const Footer = () => {
  return (
    <>
    <div className='rounded-div mt-8 pt-8 text-primary flex flex-col md:flex-row gap-9 justify-between'>
      <div className=' flex justify-center'>       
              <div className='text-left'>
          <div className='w-full flex justify-start'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <div className='flex justify-center md:justify-start py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                <ThemeToggleBtn />
              </div>
              <p className='text-center md:text-left'>Sign up for crypto news</p>
              <div className='py-4'>
                <form>
                  <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='Enter your email' />
                  <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Sign up</button>
                </form>
              </div>
              <div className='flex py-4 justify-between text-accent'>
                <FaLinkedin/>
                <AiOutlineInstagram />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>

    </div>
    <div className='flex justify-center md:justify-end '>
    <div className='grid md:grid-cols-2'>
        <div className='flex justify-between w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold'>Support</h2>
            <ul>
              <li className='text-sm py-2'>Help Center</li>
              <li className='text-sm py-2'>Contact Us</li>
              <li className='text-sm py-2'>API Status</li>
              <li className='text-sm py-2'>Documentation</li>
            </ul>
          </div>
          <div className='ml-10'>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='text-sm py-2'>About Us</li>
              <li className='text-sm py-2'>Careers</li>
              <li className='text-sm py-2'>Invest</li>
              <li className='text-sm py-2'>Legal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
      <p className='text-center py-4'>Copyright  CryptoTrix React-webapp-project: Created by Abinson Suresh</p>
    </>
  );
};

export default Footer;




      {/* <div className='grid md:grid-cols-2'>
        <div className='flex justify-between w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold'>Support</h2>
            <ul>
              <li className='text-sm py-2'>Help Center</li>
              <li className='text-sm py-2'>Contact Us</li>
              <li className='text-sm py-2'>API Status</li>
              <li className='text-sm py-2'>Documentation</li>
            </ul>
          </div>
          <div className='ml-10'>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='text-sm py-2'>About Us</li>
              <li className='text-sm py-2'>Careers</li>
              <li className='text-sm py-2'>Invest</li>
              <li className='text-sm py-2'>Legal</li>
            </ul>
          </div>
        </div>
      </div> */}