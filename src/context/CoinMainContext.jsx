import React,{createContext, useContext, useEffect, useState} from "react"
import axios from "axios"

const url = 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&sparkline=true'  
const CoinMainContext = createContext()

export const CoinProvider=({children})=>{

    const [coin, setCoin] = useState({})

    const getCoinData=()=>{
        axios.get(url).then((response)=>{
            setCoin(response.data)
            // console.log(response.data)
        })
    }

    useEffect(()=>{
        getCoinData()
    },[url])

    return(
        <CoinMainContext.Provider value={ {coin} }>
            {children}
        </CoinMainContext.Provider>
    )
}

export const useCoinMainContext =()=>{
    return useContext(CoinMainContext)
}