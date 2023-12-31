import React from 'react'
import CoinItemMain from './CoinItemMain';
import { useMarketContext } from '../context/MarketContext';


const CoinItem = () => { 

  const { mdata, currency } = useMarketContext();
  // console.log(mdata)



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
            {mdata.slice(0,10).map((CoinsFetched) =>(
        
              <CoinItemMain key={CoinsFetched.id} currency={currency} coin = {CoinsFetched}/>
             
            ))
    
          }
          </tbody>
        </table>

      </div>

    </>
  )
}

export default CoinItem


// .filter((value) => {
//   if (search === '') {
//     //it will return any content that is related to any of the letter in search
//     return value;
//   }
//   else if (value.name.toLowerCase().includes(search.toLocaleLowerCase())) {
//     //it will return values similar to search
//     return value;
//   }
// })