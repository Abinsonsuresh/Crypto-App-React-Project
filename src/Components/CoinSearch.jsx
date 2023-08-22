import React, { useState } from 'react'
import { useCoinContext } from '../context/CoinAPI'


const CoinSearch = () => {
const {search, setSearch} = useCoinContext()
  return (
    <>
      <div className='max-w-[1380px]  rounded-xl p-2 shadow-xl mx-auto my-4'>
        <div className='flex flex-col items-center  md:flex-row md:justify-between pt-4 pb-6 text-center md:text-right '>
        <h1 className='hidden md:block text-2xl font-semibold'>Search Crypto</h1>
        <form >
          <input className='w-full bg-primary border border-input px-4 py-2 mr-2  shadow-xl rounded-2xl lg:w-[46rem] font-light' type="text" placeholder=' Search coins' 
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

// w-full bg-primary border border-input px-4 py-2 mr-2  shadow-xl rounded-2xl md:w-auto