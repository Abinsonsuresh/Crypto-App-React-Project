import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
const url = 'https://api.coingecko.com/api/v3/search/trending'
const TrendContext = createContext()

const TrendProvider = ({ children }) => {
    const [trend, setTrend] = useState([])

    // console.log(trend)
    const getTrend = () => {
        axios.get(url).then((response) => {
            setTrend(response.data.coins)
            // console.log(response.log)
        })
    }
    useEffect(() => {
        getTrend()
    }, [url])



    return (
        <TrendContext.Provider value={ { trend } }>
            {children}
        </TrendContext.Provider>
    )
};



const useTrendContext = () => {
    return useContext(TrendContext)
}

export { TrendProvider, useTrendContext }