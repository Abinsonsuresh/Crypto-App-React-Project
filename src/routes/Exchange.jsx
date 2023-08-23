import React from 'react'
import { useMarketContext } from '../context/MarketContext'
import ExchangeItem from '../Components/ExchangeItem'

const Exchange = () => {
    const {mdata} = useMarketContext()
  return (
    <>
    <div className=' flex items-center justify-center'>
      <h2 className='text-2xl mt-3 mb-3 font-bold'>Exchanges</h2>
    </div>
    <div className='rounded-div my-4 pt-4'>
      <table className='w-full border-collapse text-center '>
        <thead>
          <tr>
            <th></th>

            <th className='text-left'>Name</th>
            </tr>
        
        </thead>
        <tbody>
          {mdata.map((ExFetched) =>(
      
            <ExchangeItem key={ExFetched.id} exdata = {ExFetched}/>
           
          ))
  
        }
        </tbody>
      </table>

    </div>

  </>
  )
}

export default Exchange 