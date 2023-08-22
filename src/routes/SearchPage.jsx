import React, { useState } from 'react'
import { useSearchContext } from '../context/SearchContext'
import SearchItem from '../Components/SearchItem'
import CoinSearch from '../Components/CoinSearch'

const SearchPage = () => {
  const {sdata} = useSearchContext()

  return (
    <>
    <CoinSearch/>
    <div className=' flex items-center justify-center'>
      {/* <h2 className='text-2xl mt-3 mb-3 font-bold'>Top Coins</h2> */}
    </div>
    <div className='rounded-div my-4 pt-4'>
      <table className='w-full border-collapse text-center '>
        <thead>
          <tr>
            <th></th>
            <th className='text-left'>Coin</th>
          </tr>
        </thead>
        <tbody>
          {sdata?.map((CoinsFetched) =>(
            <SearchItem coin = {CoinsFetched} key={CoinsFetched?.id}/>
            
          ))
          }
        </tbody>
      </table>

    </div>

  </>
  )
}

export default SearchPage