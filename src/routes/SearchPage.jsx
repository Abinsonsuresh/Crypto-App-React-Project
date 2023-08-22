import React, { useState } from 'react'
import { useSearchContext } from '../context/SearchContext'
import SearchItem from '../Components/SearchItem'

const SearchPage = () => {
  const {sdata} = useSearchContext()
  const [coins, setCoins] = useState([])
  setCoins(sdata.coins)
  console.log(sdata.coins)
  return (
    <>
    <div className=' flex items-center justify-center'>
      <h2 className='text-2xl mt-3 mb-3 font-bold'>Top Coins</h2>
    </div>
    <div className='rounded-div my-4 pt-4'>
      <table className='w-full border-collapse text-center '>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden md:table-cell'>Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((CoinsFetched) =>(
            <SearchItem coin = {CoinsFetched} key={CoinsFetched.id}/>
            
          ))
          }
        </tbody>
      </table>

    </div>

  </>
  )
}

export default SearchPage