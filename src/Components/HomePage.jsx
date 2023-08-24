import React from 'react'
import img from '../assets/rck.svg'
import img3 from '../assets/img3.png'
import gify from '../assets/giphy.gif'
import { Link } from 'react-router-dom'


// D:\Projects\Crypto-App\Cryptoapp\src\assets\bit.png

const HomePage = () => {
  return (
    <>
      <div className='h-[80vh] max-w-[1380px] mx-auto w-full overflow-auto'>
        <div className='flex flex-wrap mt-[3rem] md:mt-[10rem] gap-5'>

          <div className='left'>
            <h2 className='text-5xl md:text-7xl font-bold'>Enter the world </h2>
            <h2 className='text-5xl md:text-7xl font-bold'> of Cryptoverse</h2>

            <h2 className='text-2xl font-bold my-8 flex items-center'>To the Moon <span className='ml-2'><img src={img} className='w-6' alt="" /></span></h2>
            <Link to='/market'>
            <button className='px-4 py-2 bg-green-500 text-white rounded-2xl shadow-2xl '>Go to Market</button>
            </Link>
          </div>
          <div className='right'>
          <img  src={img3} className='w-auto md:w-[40rem]' alt="" />
          </div>



        </div>
      </div>
    </>
  )
}

export default HomePage


// <div className='relative h-[80vh] max-w-[1380px] mx-auto w-full'>
// {/* <iframe  className='object-cover h-full w-full' src={gify} ></iframe> */}
// <div className='flex'>
// <div className='absolute top-32 right-2 '>
//     <img  src={img3} className='w-[40rem]' alt="" />
//   </div>
// </div>

//   <div className='absolute top-32 '>
//     <img  src={img} className='w-24 hover:rotate-90 hover:scale-105 ease-in duration-300' alt="" />
//   </div>
//   <div className='absolute top-[40%] p-2'>
//   <h2 className='text-7xl font-bold'>Enter to the world </h2>
//   <h2 className='text-7xl font-bold'> of Cryptoverse</h2>

//   <h2 className='text-xl font-bold my-6'>To the Moon</h2>

//   </div>
// </div>
