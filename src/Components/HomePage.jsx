import React from 'react'
import img from '../assets/btc.svg'
import img2 from '../assets/bit.png'
import gify from '../assets/giphy.gif'


// D:\Projects\Crypto-App\Cryptoapp\src\assets\bit.png

const HomePage = () => {
  return (
    <>
      <div className='relative h-[80vh] mx-auto w-full'>
      {/* <iframe  className='object-cover h-full w-full' src={gify} ></iframe> */}

        <div className='absolute top-32 '>
          <img  src={img} className='w-24 hover:rotate-90 hover:scale-105 ease-in duration-300' alt="" />
        </div>
        <div className='absolute top-[40%] p-2'>
        <h2 className='text-7xl font-bold'>Enter to the world </h2>
        <h2 className='text-7xl font-bold'> of Cryptoverse</h2>

        <h2 className='text-xl font-bold my-6'>To the Moon</h2>

        </div>
      </div>
  
    </>
  )
}

export default HomePage