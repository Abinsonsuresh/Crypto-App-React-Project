import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const SearchContext = createContext()

export const SearchAPIProvider =({children})=>{
    const [sdata, setSdata] = useState([])
    const [search, setSearch] = useState('bitcoin')

    const url = `https://api.coingecko.com/api/v3/search?query=${search}`


    const getSearchData =()=>{
        axios.get(url).then((response)=>{
            setSdata(response.data.coins)
            console.log(response.data)

        })
    }

    useEffect(()=>{
        let timeout = setTimeout(()=>{
            getSearchData()
        },600)
        return()=> clearTimeout(timeout)
    },[search])


    return(
        <SearchContext.Provider value={{sdata, setSearch}}>{children}</SearchContext.Provider>
    )

}

export const useSearchContext =()=>{
    return useContext(SearchContext)
}