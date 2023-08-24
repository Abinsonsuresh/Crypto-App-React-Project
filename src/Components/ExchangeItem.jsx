import React from 'react'
import { Link } from 'react-router-dom';

const ExchangeItem = ({ exdata }) => {
    return (
        <tr key={exdata.id} className='h-[80px] w-full border-b overflow-hidden '>
            <td>{exdata.trust_score_rank}</td>

            <td>
                <Link to={`/exchange/${exdata.id}`}>
                <div className='flex space-x-3'>
                    <img src={exdata.image} className='w-6' alt="" />
                    <p>{exdata.name}</p>
                </div>
                </Link>
            </td>

            <td className={exdata.trust_score > 6 ? 'text-green-500' : 'text-red-500' }>{exdata.trust_score}</td>
            <td className='hidden md:sm:table-cell'>
                <div className='flex items-center justify-center'>
                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className='w-4 mr-1' alt="" />
                    {exdata.trade_volume_24h_btc.toFixed(2)}
                </div>
            </td>

        </tr>
    )
}

export default ExchangeItem