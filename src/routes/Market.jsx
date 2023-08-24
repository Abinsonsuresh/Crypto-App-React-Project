import React, { useState } from 'react'
import { useMarketContext } from '../context/MarketContext';
import MarketItem from '../Components/MarketItem';
import FilterCurrency from '../Components/FilterCurrency'
// import Pagination from '../Components/Pagination';




const Market = () => {
  const { mdata, currency, setCurrency } = useMarketContext();

const [currentpage , setCurrentpage] = useState(1)
const [postperpage , setPostperpage] = useState(10)


const lastpost = currentpage * postperpage;  //if cp = 2 pp= 10 then cp * pp ->lp = 20
const firstpost = lastpost - postperpage;  // if lp = 20 pp= 10 then  lp = pp -> fp = 20 -10 = 10


  console.log(mdata)
  return (
    <> 
    <FilterCurrency/>
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
              <MarketItem data={mvalue} currency = {currency} key = {mvalue.id}/>
            ))
           }
        </tbody>
    </table>

    <div className='p-8 flex justify-between'>
    <button onClick={()=>{setCurrentpage(currentpage - 1)}} disabled={currentpage <= firstpost}  className=' px-4 py-2  border border-secondary  shadow-lg'>Prev</button> 
    <button onClick={()=>{setCurrentpage(currentpage + 1)}} disabled={currentpage >= lastpost/postperpage} className=' px-4 py-2  border border-secondary shadow-lg'>Next</button>   

    </div>

    {/* <Pagination setCurrentpage={setCurrentpage} currentpage= {currentpage} totalpost = {mdata.length} postperpage= {postperpage} /> */}


    </div>
    </>
  )
}

export default Market