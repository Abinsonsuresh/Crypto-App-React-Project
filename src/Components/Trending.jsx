import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


const Trending = ({trend}) => {

    // console.log("ter")
    // console.log(trend)
    // console.log(trend.id)

  return (
    <>
        <h1 className='text-2xl font-bold flex justify-center'>Trending Coins</h1>
    <div className='rounded-div my-12 py-8 '>
        <div className='flex flex-wrap  gap-9 items-center justify-center '>
            {
                trend.map((FetchedTrends)=>{
                    const {small, name,id, symbol, coin_id, price_btc} = FetchedTrends.item
                    return(
                        <NavLink to={`coins/${id}`} key={coin_id}>
                        <div  className='w-40 h-40 border border-secondary rounded-2xl shadow-xl bg-primary flex justify-center p-4 overflow-hidden'>
                            <div className='flex flex-col items-center justify-center '>
                                {/* img and name section */}
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <img className='w-12' src={small} alt="" />
                                    <div >
                                        <p className='text-md font-bold'>{symbol}</p>
                                        <p className='font-normal text-sm'>{name.length > 20 ? name.slice(0,20): name}</p>


                                    </div>
                                </div>
                                  {/* img and name section */}

                                  <div className='flex items-center'>
                                    <img className='w-4 mr-2' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                                    <p>{price_btc.toFixed(6)}</p>
                                  </div>
                            </div>
                        </div>
                        </NavLink>
                    )
                })
            }
        </div>
    </div>
  </>
  )
}

export default Trending