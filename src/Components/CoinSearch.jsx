import React, { useState } from 'react'
import CoinItem from './CoinItem'


const CoinSearch = ({coins}) => {

  return (
    <>
      <div className='max-w-[1380px]  rounded-xl p-2 shadow-xl mx-auto my-4'>
        <div className='flex flex-col items-center md:flex-row justify-between pt-4 pb-6 text-center md:text-right '>
        <h1 className='text-2xl font-semibold'>Search Crypto</h1>
        <form >
          <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type="text" placeholder=' Search coins' 
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