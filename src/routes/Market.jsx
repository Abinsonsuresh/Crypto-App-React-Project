import React, { useState } from 'react'
import { useCoinContext } from '../context/CoinAPI'
import CoinItemMain from '../Components/CoinItemMain';
import CoinSearch from '../Components/CoinSearch';
import { useMarketContext } from '../context/MarketContext';
import MarketItem from '../Components/MarketItem';




const Market = () => {
  const { mdata } = useMarketContext();
const [mpage , setMage] = useState(1)
  console.log(mdata)
  return (
    <>
    <CoinSearch/>
    <div className='rounded-div my-4 pt-4'>
    <table className='w-full text-center'>
        <thead >
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
           {
            mdata.slice((mpage -1 ) * 10,(mpage -1 ) * 10 + 10 ).map((mvalue)=>(
              <MarketItem data={mvalue} key = {mvalue.id}/>
            ))
           }
        </tbody>
    </table>
    </div>
    </>
  )
}

export default Market