import React from 'react'
import {useCoinMainContext} from '../context/CoinMainContext'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {FaTwitter, FaFacebook, FaReddit, FaGithub} from 'react-icons/fa'
import DOMPurify from 'dompurify';


const CoinMainPage = () => {
  const {coin} = useCoinMainContext();

  console.log(coin)
  const {image, name, price} = coin

  return (
    <div className='rounded-div py-8 my-12'>
    <div className='flex py-8 items-center'>
      <img className='w-20 mr-8' src={image?.large} alt="" />
      <div>
        <p className='text-3xl font-bold'>{coin?.name}</p>
        <p>({coin.symbol?.toUpperCase()}/INR)</p>
      </div>
    </div>

      <div id='section' className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between'>
            {coin.market_data?.current_price ? (<p className='text-2xl font-bold'>₹{coin.market_data?.current_price.inr.toLocaleString()}</p>) : null}
            <p>7 Day</p>
          </div>
          <div className=''>
                <Sparklines data = {coin.market_data?.sparkline_7d.price}>
                  <SparklinesLine color='teal'></SparklinesLine>
                </Sparklines>
          </div>
          <div className='border border-primary shadow-lg flex justify-between py-4 p-2'>
            <div>
              <p>Market Cap</p>
              {coin.market_data?.market_cap ? (<p>₹{coin.market_data?.market_cap.inr.toLocaleString()}</p>) : null}
            </div>
            <div>
              <p>Volume 24h</p>
              {coin.market_data?.total_volume ? (<p>₹{coin.market_data?.total_volume.inr.toLocaleString()}</p>) : null}
            </div>
          </div>
      <div className='flex justify-between py-8 p-2 '>
          <div className=''>
            <p>24h High</p>
            {coin.market_data?.high_24h ? (<p className='text-green-600'>₹{coin.market_data?.high_24h.inr.toLocaleString()}</p>) : null}
          </div>

          
          <div>
            <p>24h Low</p>
            {coin.market_data?.low_24h ? (<p className='text-red-600'>₹{coin.market_data?.low_24h.inr.toLocaleString()}</p>) : null}
          </div>
          </div>
        </div>
        <div>
          <p className='text-3xl font-bold'>Market Stats</p>
          <div className='flex justify-between py-8'>
            <div>
              <p>Market Rank</p>
            {coin.market_cap_rank}
            </div>
            <div>
              <p>Trust Score</p>
            {coin.liquidity_score ? (<p>{coin.liquidity_score.toFixed(2)}</p>) : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
          <div>
            <p>Price Change 24h</p>
            {coin.market_data ? (<p className={coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(2) > 0 ? 'text-green-500' : 'text-red-600'}>{coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(2)}%</p>) : null}
          </div>

          <div>
            <p>Price Change 7d</p>
            {coin.market_data ? (<p className={coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(2) > 0 ?  'text-green-500' : 'text-red-600' }>{coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(2)}%</p>) : null}
          </div>

          <div>
            <p>Price Change 14d</p>
            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d_in_currency.inr.toFixed(2)}%</p>) : null}
          </div>
          </div>

          <div className='flex justify-between py-4'>
          <div>
            <p>Price Change 30d</p>
            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d_in_currency.inr.toFixed(2)}%</p>) : null}
          </div>

          <div>
            <p>Price Change 60d</p>
            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d_in_currency.inr.toFixed(2)}%</p>) : null}
          </div>

          <div>
            <p>Price Change 1y</p>
            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y_in_currency.inr.toFixed(2)}%</p>) : null}
          </div>
          </div>
          <div className='flex text-2xl cursor-pointer  space-x-10'>
          <FaTwitter color='lightblue'/>
          <FaFacebook color='blue'/>
          <FaReddit color='red'/>
          <FaGithub color='black'/>

        </div>
        </div>


      </div>

      {/* {Description} */}
      <div>
        <p>About {name}</p>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}}></p>
      </div>
    </div>
  )
}

export default CoinMainPage