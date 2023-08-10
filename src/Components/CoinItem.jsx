import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CoinItem = ({coin}) => {
    const {market_cap_rank, name, image, current_price, symbol, price_change_24h,total_volume,market_cap, price_change_percentage_24h, sparkline_in_7d } = coin
  return (
    <>
  
        <tr className='h-[80px] border-b overflow-hidden'>
            <td> <AiOutlineStar/> </td>
            <td>{market_cap_rank}</td>
            <td>
            <div className='flex items-center'>
              <img className='w-6 mr-2 rounded-full' src={image} alt="" />
              <p>{name}</p>
            </div>
            </td>
            <td>{symbol}</td>
            <td>{current_price}</td>
            <td>{price_change_percentage_24h}</td>
            <td>{total_volume}</td>
            <td>{market_cap}</td>
            <td>
              <Sparklines data={sparkline_in_7d.price}>
              <SparklinesLine color="teal" />
              </Sparklines>
              </td>

          </tr>

    </>
  )
}

export default CoinItem