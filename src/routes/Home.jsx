import React,{useState} from 'react'
import CoinSearch from '../Components/CoinSearch'
// import { useCoinContext } from '../context/CoinAPI'



const Home = ({coins}) => {

  return (
    <CoinSearch coins = {coins}/>
  )
}

export default Home