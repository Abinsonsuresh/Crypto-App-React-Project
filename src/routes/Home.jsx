import React,{useState} from 'react'
import CoinSearch from '../Components/CoinSearch'
import Trending from '../Components/Trending'
// import { useCoinContext } from '../context/CoinAPI'
import { useTrendContext } from '../context/TrendingAPIContext'
import { useCoinContext } from '../context/CoinAPI'
import CoinItem from '../Components/CoinItem'


const Home = () => {
  const {coins} = useCoinContext()
  const {trend} = useTrendContext();
  return (
    <>
    <CoinSearch />
    <CoinItem coins = {coins}/>
    <Trending trend = {trend}/>
    </>
  )
}

export default Home