import React, { useState } from 'react'
import { useCoinContext } from '../context/CoinAPI'
import CoinItemMain from './CoinItemMain';


const CoinItem = () => {
  const { coins } = useCoinContext();
  console.log(coins)
  const [search, setSearch] = useState('')


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
            {coins.filter((value) => {
              if (search === '') {
                //it will return any content that is related to any of the letter in search
                return value;
              }
              else if (value.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                //it will return values similar to search
                return value;
              }
            }).map((CoinsFetched) =>(
        
              <CoinItemMain coin = {CoinsFetched}/>
              
            ))
              // console.log(id)
    
          }
          </tbody>
        </table>

      </div>

    </>
  )
}

export default CoinItem