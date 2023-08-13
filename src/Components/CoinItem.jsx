import React, { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';

const CoinItem = ({ coins }) => {
  // console.log(coins)
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
            }).map((CoinsFetched) => {
              const { market_cap_rank,id, name, image, current_price, symbol, price_change_24h, total_volume, market_cap, price_change_percentage_24h, sparkline_in_7d } = CoinsFetched
              // console.log(id)
              return (
                <tr key={CoinsFetched.id} className='h-[80px] w-full border-b overflow-hidden '>
                  <td> <AiOutlineStar /> </td>
                  <td>{market_cap_rank}</td>
                  <td>
                    <Link to={`/coins/${id}`}>
                    <div className='flex items-center'>
                      <img className='w-6 mr-2 rounded-full' src={image} alt="" />
                      <p className='hidden sm:table-cell'>{name}</p>
                    </div>
                    </Link>
                  </td>
                  <td>{symbol.toUpperCase()}</td>
                  <td>₹{current_price.toLocaleString()}</td>
                  <td>{price_change_percentage_24h > 0 ? (<p className='text-green-500'>{price_change_percentage_24h.toFixed(2)}%</p>) : (<p className='text-red-500'>{price_change_percentage_24h.toFixed(2)}%</p>)}</td>
                  <td className='w-[180px] hidden md:table-cell'>{total_volume.toLocaleString()}</td>
                  <td className='w-[180px] hidden md:table-cell'>{market_cap}</td>
                  <td>
                    <Sparklines data={sparkline_in_7d.price}>
                      <SparklinesLine color="teal" />
                    </Sparklines>
                  </td>

                </tr>
              )
            })}
          </tbody>
        </table>

      </div>

    </>
  )
}

export default CoinItem