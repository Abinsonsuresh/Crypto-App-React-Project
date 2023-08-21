import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const SearchContext = createContext()

export const MarketAPIProvider =({children})=>{
    const [sdata, setSdata] = useState([])
    const [search, setsearch] = useState('bitcoin')

    const url = `https://api.coingecko.com/api/v3/search?query=${search}`


    const getSearchData =()=>{
        axios.get(url).then((response)=>{
            setSdata(response.data)
            console.log(response.data)

        })
    }

    useEffect(()=>{
        getSearchData()
    },[url])


    return(
        <SearchContext.Provider value={{sdata, setsearch}}>{children}</SearchContext.Provider>
    )

}

export const useSearchContext =()=>{
    return useContext(SearchContext)
}