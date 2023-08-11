import React, { useState } from 'react'
import CoinItem from './CoinItem'


const CoinSearch = ({coins}) => {

  return (
    <>
      <div className='max-w-[1380px]  rounded-xl p-2 shadow-xl mx-auto my-4'>
        <div className='flex flex-col items-center md:flex-row justify-between pt-4 pb-6 text-center md:text-right '>
        <h1 className='text-2xl font-semibold'>Search Crypto</h1>
        <form >
          <input className='rounded-lg border shadow-lg border-black font-sans w-60 h-8' type="text" placeholder=' search coins' 
          onChange={(event)=>{
            setSearch(event.target.value)
          }}/>
        </form>
      </div>

      
      
      </div>

    </>
  )
}

export default CoinSearch