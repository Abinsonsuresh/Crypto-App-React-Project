import React from 'react'
import SavedCoin from '../Components/SavedCoin'

const Account = () => {
  return (
    <>
    <div className='max-w[1140px] mx-auto'>
      <div className='rounded-div flex justify-between items-center my-8 py-8 '>
        <div>
        <h1 className='text-2xl font-bold'>Account</h1>
          <p className='text-sm'>Welcome</p>
        </div>
      <div>
        <button className='px-6  rounded-lg shadow-lg py-2'>Sign Out</button>
      </div>
      </div>

      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='w-full min-h-[300px]'>
          <h1 className='py-4 font-bold text-2xl'>Watchlist</h1>
          <SavedCoin/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Account