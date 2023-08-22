import React, { useState } from 'react'
import CoinSearch from '../Components/CoinSearch';
import { useMarketContext } from '../context/MarketContext';
import MarketItem from '../Components/MarketItem';
import Pagination from '../Components/Pagination';




const Market = () => {
  const { mdata } = useMarketContext();
const [currentpage , setCurrentpage] = useState(1)
const [postperpage , setPostperpage] = useState(10)

const lastpost = currentpage * postperpage;  //if cp = 2 pp= 10 then cp * pp ->lp = 20
const firstpost = lastpost - postperpage;  // if lp = 20 pp= 10 then  lp = pp -> fp = 20 -10 = 10


  console.log(mdata)
  return (
    <>

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
            mdata.slice(firstpost, lastpost ).map((mvalue)=>(
              <MarketItem data={mvalue} key = {mvalue.id}/>
            ))
           }
        </tbody>
    </table>

    <Pagination setCurrentpage={setCurrentpage} currentpage= {currentpage} totalpost = {mdata.length} postperpage= {postperpage} />


    </div>
    </>
  )
}

export default Market