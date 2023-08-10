import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en'
export const CoinAPIContext = createContext()

export const CoinAPIProvider=({children})=>{
    const [coins, setCoins] = useState([])
    const val ="jhello"
    console.log("hello")

    // useEffect(()=>{
    //     axios.get(url).then((response)=>{
    //         setCoins(response.data)
    //         console.log(response.data)
    //     })
    // },[url])

    return(
        <CoinAPIContext.Provider value={{coins, val}}>
            {children}
        </CoinAPIContext.Provider>
    )
}



export const useCoinContext =()=>{
    return useContext(CoinAPIContext)
}