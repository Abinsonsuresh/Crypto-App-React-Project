import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';


const MarketItem = ({data, currency}) => {

    const { market_cap_rank, id, name, image, current_price, symbol, price_change_24h, total_volume, market_cap, price_change_percentage_24h, sparkline_in_7d } = data
    return (
        <>
            <tr  className='h-[80px] w-full border-b overflow-hidden'>
                <td></td>
                <td>{market_cap_rank}</td>
                <td>
                    <Link to={`/coins/${id}`}></Link>
                    <div className='flex items-center'>
                        <img src={image} className='w-6 mr-2' alt="" />
                        <p className='hidden sm:table-cell'>{name}</p>
                    </div>
                </td>
                <td>{symbol.toUpperCase()}</td>
                <td>₹{current_price.toLocaleString()}</td>
                <td>{price_change_percentage_24h > 0 ? (<p className='text-green-500'>{price_change_percentage_24h.toFixed(2)}%</p>) : (<p className='text-red-500'>{price_change_percentage_24h.toFixed(2)}%</p>)}</td>
                <td className='w-[180px] hidden md:table-cell'>₹{total_volume.toLocaleString()}</td>
          <td className='w-[180px] hidden md:table-cell'>₹{market_cap.toLocaleString()}</td>
          <td>
            <Sparklines data={sparkline_in_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </td>

            </tr> 
        </>
    )
}

export default MarketItem