import React, { useState } from 'react'

import ExchangeItem from '../Components/ExchangeItem'
import { useExchangeContext } from '../context/ExchangeContext'

const Exchange = () => {
    const {exdata} = useExchangeContext()
    const [currentpage , setCurrentpage] = useState(1)
    const [postperpage , setPostperpage] = useState(10)
    
    const lastpost = currentpage * postperpage;  //if cp = 2 pp= 10 then cp * pp ->lp = 20
    const firstpost = lastpost - postperpage;  // if lp = 20 pp= 10 then  lp = pp -> fp = 20 -10 = 10
    
  return (
    <>
    <div className=' flex items-center justify-center'>
      <h2 className='text-2xl mt-3 mb-3 font-bold'>Exchanges</h2>
    </div>
    <div className='rounded-div my-4 pt-4'>
      <table className='w-full border-collapse text-center '>
        <thead>
          <tr>
            <th>#</th>
            <th className='text-left'>Name</th>
            <th>Trust Score</th>
            <th className='hidden md:sm:table-cell'>Trade Vol 24h</th>

            </tr>
        
        </thead>
        <tbody>
          {exdata.slice(firstpost,lastpost).map((ExFetched) =>( 
            <ExchangeItem key={ExFetched.id} exdata = {ExFetched}/>          
          ))
        }
        </tbody>
      </table>

    <div className='p-8 flex justify-between'>
    <button onClick={()=>{setCurrentpage(currentpage - 1)}}  className=' px-4 py-2  border border-secondary  shadow-lg'>Prev</button> 
    <button onClick={()=>{setCurrentpage(currentpage + 1)}} className=' px-4 py-2  border border-secondary shadow-lg'>Next</button>   
    </div>
    </div>

  </>
  )
}

export default Exchange 