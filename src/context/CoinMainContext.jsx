import React,{createContext, useContext, useEffect, useState} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const CoinMainContext = createContext()



export const CoinProvider=({children})=>{
    const [coin, setCoin] = useState({})
    const params = useParams()
    console.log("PARAMS")
    console.log(params.coinId)
    const url =
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;
    // const {coinId} = useParams()
    // const coinID = "ethereum"

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