import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const MarketContext = createContext()

export const MarketAPIProvider =({children})=>{
    const [mdata, setMdata] = useState([])
    const [msearch, setMsearch] = useState('')
    const [page, setPage] = useState('')
    const [currency, setCurrency] = useState('inr')


    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=true&locale=en`




    const getMarketData =()=>{
        axios.get(url).then((response)=>{
            setMdata(response.data)
            console.log(response.data)

        })
    }

    useEffect(()=>{
        getMarketData()
    },[url])


    return(
        <MarketContext.Provider value={{mdata}}>{children}</MarketContext.Provider>
    )

}