import React, { useState }  from 'react'
import { Link } from 'react-router-dom';

const SearchItem = ({coin}) => {
    const { market_cap_rank, id, name, symbol, thumb } = coin
    const [savedCoin, setSavedCoin] = useState(false);
    const setsave = () => { setSavedCoin(true) }
  return (
    <tr key={coin.id} className='h-[80px] w-full border-b overflow-hidden '>

          <td></td>

          {/* <td>{market_cap_rank}</td> */}
          <td>
            <Link to={`/coins/${id}`}>
              <div className='flex items-center'>
                <img className='w-6 mr-2 rounded-full' src={thumb} alt="" />
                <p className=''>{name}</p>
              </div>
              </Link>         
          </td>
            {/* <td className='items-center'>{symbol.toUpperCase()}</td> */}
    

        </tr>
  )
}

export default SearchItem