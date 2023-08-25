import React,{useState,useContext,useEffect} from 'react'
// import {useCoinMainContext} from '../context/CoinMainContext'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {FaTwitter, FaFacebook, FaReddit, FaGithub} from 'react-icons/fa'
import DOMPurify from 'dompurify';
import { useParams } from "react-router-dom"
import axios from "axios"
import { AiFillStar, AiOutlineStar,AiOutlineInstagram } from 'react-icons/ai'
import {
  FaLinkedin,
} from 'react-icons/fa';






const CoinMainPage = () => {

  const [coin, setCoin] = useState({});
  const params = useParams()

  const url =
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      // console.log(response.data);
    });
  }, [url]);



  const {image, name} = coin

  const [savedCoin, setSavedCoin] = useState(false);


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
            <div className='flex items-center text-center'>
            <p className='mr-4'>7 Day</p>
      
            </div>
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
            <p className='text-sm text-gray-400'>24h High</p>
            {coin.market_data?.high_24h ? (<p className='text-green-600'>₹{coin.market_data?.high_24h.inr.toLocaleString()}</p>) : null}
          </div>

          
          <div>
            <p className='text-sm text-gray-400'>24h Low</p>
            {coin.market_data?.low_24h ? (<p className='text-red-600'>₹{coin.market_data?.low_24h.inr.toLocaleString()}</p>) : null}
          </div>
          </div>
        </div>
        <div>
          <p className='text-3xl font-bold'>Market Stats</p>
          <div className='flex justify-between py-8'>
            <div>
              <p className='text-sm text-gray-400'>Market Rank</p>
            {coin?.market_cap_rank}
            </div>
            <div>
              <p className='text-sm text-gray-400'>Trust Score</p>
            {coin?.liquidity_score ? (<p>{coin?.liquidity_score.toFixed(2)}</p>) : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
          <div>
            <p className='text-sm text-gray-400'>Price Change 24h</p>
            {coin?.market_data ? (<p className={coin?.market_data?.price_change_percentage_24h_in_currency?.inr.toFixed(2) > 0 ? 'text-green-500' : 'text-red-600'}>{coin?.market_data?.price_change_percentage_24h_in_currency?.inr.toFixed(2)}%</p>) : null}
          </div>

          <div>
            <p className='text-sm text-gray-400'>Price Change 7d</p>
            {coin?.market_data ? (<p className={coin?.market_data?.price_change_percentage_7d_in_currency?.inr.toFixed(2) > 0 ?  'text-green-500' : 'text-red-600' }>{coin?.market_data?.price_change_percentage_7d_in_currency?.inr.toFixed(2)}%</p>) : null}
          </div>

          <div className=''>
            <p className='text-sm text-gray-400'>Price Change 14d</p>
            {coin?.market_data ? (<p className={coin?.market_data?.price_change_percentage_14d_in_currency?.inr.toFixed(2) > 0 ? 'text-green-500' : 'text-red-600'}>{coin?.market_data?.price_change_percentage_14d_in_currency?.inr.toFixed(2)}%</p>) : null}
          </div>
          </div>

          <div className='flex justify-between py-4'>
          <div>
            <p className='text-sm text-gray-400'>Price Change 30d</p>
            {coin?.market_data ? (<p className={coin?.market_data?.price_change_percentage_30d_in_currency?.inr.toFixed(2) > 0 ? 'text-green-500' : 'text-red-600' }>{coin?.market_data?.price_change_percentage_30d_in_currency?.inr.toFixed(2)}%</p>) : null}
          </div>

          <div>
            <p className='text-sm text-gray-400'>Price Change 60d</p>
            {coin?.market_data ? (<p className= {coin?.market_data?.price_change_percentage_60d_in_currency?.inr.toFixed(2) > 0 ?  'text-green-500' : 'text-red-600' }>{coin?.market_data?.price_change_percentage_60d_in_currency?.inr.toFixed(2)}%</p>) : null}
          </div>

          <div>
            <p className='text-sm text-gray-400'>Price Change 1y</p>
            {coin?.market_data ? (<p className={coin?.market_data?.price_change_percentage_1y_in_currency?.inr?.toFixed(2) > 0 ? 'text-green-500' : 'text-red-600' }>{coin?.market_data?.price_change_percentage_1y_in_currency?.inr?.toFixed(2)}%</p>) : null}
          </div>
          </div>
          <div className='flex text-2xl cursor-pointer  space-x-10'>
          <a href="https://twitter.com/abinsonsuresh" target="_blank">  <FaTwitter color='lightblue' /></a>
          <a href="https://www.instagram.com/abinsonsuresh/" target="_blank">  <AiOutlineInstagram color= 'red' /></a>
          <a href="https://github.com/Abinsonsuresh/" target="_blank"> <FaGithub  color='black' size={25}/></a>
          <a href="https://www.linkedin.com/in/abinsonsuresh/" target="_blank"><FaLinkedin color='blue'/></a>


        </div>
        </div>


      </div>

      {/* {Description} */}
      <div className='py-4'>
        <p className='text-xl font-semibold py-4'>About {name}</p>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}}></p>
      </div>
    </div>
  )
}

export default CoinMainPage