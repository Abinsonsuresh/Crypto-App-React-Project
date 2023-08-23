import React, { useState }  from 'react'
import { Link } from 'react-router-dom';

const SearchItem = ({coin}) => {
    const { market_cap_rank, id, name, symbol} = coin

  return (
    <tr key={coin?.id} className='h-[80px] w-full  overflow-hidden '>

          <td></td>

          <td>
            <Link to={`/coins/${id}`}>
              <div className='flex items-center'>
                <img className='w-6 mr-2 rounded-full' src={coin?.thumb} alt="" />
                <p className=''>{coin?.name}</p>
              </div>
              </Link>         
          </td>

        </tr>
  )
}

export default SearchItem