import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { createContext } from "react";
const ExchangeContext = createContext()

export const ExchangeProvider =({children})=>{
    const[exdata, setExdata ] = useState([])


    const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=1000'

    const getexchangeData=()=>{
        axios.get(url).then((response)=>{
            setExdata(response.data)
            // console.log(response.data)
        })
    }

    useEffect(()=>{
        getexchangeData()
    },[url])


    return(
    <ExchangeContext.Provider value={{exdata}}>{children}</ExchangeContext.Provider>
    )
}

export const useExchangeContext =()=>{
    return useContext(ExchangeContext)
}