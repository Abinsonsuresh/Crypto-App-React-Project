import React,{useState} from 'react'
import CoinSearch from '../Components/CoinSearch'
import Trending from '../Components/Trending'
// import { useCoinContext } from '../context/CoinAPI'
import { useTrendContext } from '../context/TrendingAPIContext'
import CoinItem from '../Components/CoinItem'
import HomePage from '../Components/HomePage'




const Home = () => {
  const {trend} = useTrendContext();

  return (
    <>
    <HomePage/>
    <CoinItem />
    <Trending trend = {trend}/>
    </>
  )
}

export default Home