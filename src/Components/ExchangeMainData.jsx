import React, { useState,useEffect } from 'react'
import { useExchangeContext } from '../context/ExchangeContext'
import { useParams } from 'react-router-dom'
import axios from "axios"

const ExchangeMainData = () => {
    const [data, setData] = useState({})
    const params = useParams()
    const url = `https://api.coingecko.com/api/v3/exchanges/${params.EId}`

    useEffect(() => {
        axios.get(url).then((response) => {
          setData(response.data);
        });
      }, [url]);
  return (
    <>
    <div className='rounded-div my-4 py-8'>
      <div className='flex items-center'>
        <img className='mr-8 w-20' src={data?.image} alt="" />
        <p className='text-3xl font-bold'>{data?.name}</p>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <div className='flex justify-between border border-primary rounded-2xl shadow-lg p-8 font-bold'>
        <div className='my-3'>
          <p>Year Established </p>
          <p className=' my-3 text-xl'>{data?.year_established}</p>
        </div>

        <div className='my-3'>
          <p>Country</p>
          <p className='my-3 text-xl'>{data?.country}</p>

        </div>   
      </div>

      <div className='flex justify-between border border-primary rounded-2xl shadow-lg p-8 '>
        <div className='my-3 font-bold'>
          <p>Rank</p>
          <p className=' my-3 text-xl'>{data?.trust_score_rank}</p>
        </div>

        <div className='my-3 font-bold'>
          <p>Trust Score</p>
          <p className='my-3 text-xl'>{data?.trust_score}</p>

        </div>       
      </div>

      <div className='flex justify-between border border-primary rounded-2xl shadow-lg p-8 font-bold'>
        <div className='my-3'>
          <p>Vol 24h</p>
          <div className='flex items-center justify-center'>
          <p className='mr-2 text-xl'>{data?.trade_volume_24h_btc}</p>
          <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className='w-6 my-3 mr-1' alt="" />
          </div>
        </div>
      
      </div>

      </div>
      <div>
        <div className='p-4 my-4'>
          <p className='text-2xl font-semibold'>About {data.name}</p>
          <>{data?.description === '' ? (<p className='my-3'>No data available</p>) : (<p className='my-3'>{data?.description}</p>)}</>
        </div>
      </div>
    </div>
    </>
  )
}

export default ExchangeMainData