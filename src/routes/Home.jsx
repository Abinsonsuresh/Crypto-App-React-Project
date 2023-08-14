import React,{useState} from 'react'
import CoinSearch from '../Components/CoinSearch'
import Trending from '../Components/Trending'
// import { useCoinContext } from '../context/CoinAPI'
import { useTrendContext } from '../context/TrendingAPIContext'
import CoinItem from '../Components/CoinItem'




const Home = () => {
  const {trend} = useTrendContext();

  return (
    <>
    <CoinSearch />
    <CoinItem />
    <Trending trend = {trend}/>
    </>
  )
}

export default Home