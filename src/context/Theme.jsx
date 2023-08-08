import React, { createContext, useContext, useEffect, useState } from 'react'

const getInitialTheme =()=>{

    if(typeof window != 'undefined' && window.localStorage)
    {
        const storedPref = window.localStorage.getItem('color-theme')
        if(typeof storedPref === "string")
        {
            return storedPref
        }
        const userMedia =  window.matchMedia('(prefers-color-schema: dark)')
        if(userMedia.matches)
        {
            return 'dark'
        }
        else{
            return 'light'
        }
    }
}

export const ThemeContext = createContext()
export const ThemeProvider = ({initialTheme, children})=>{
    const [theme, setTheme] = useState(getInitialTheme)

    const SetTheme =(theme)=>{
        const root = window.document.documentElement;
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.setItem("color-theme", theme)
    }
    if(initialTheme)
    {
        setTheme(initialTheme)
    }
    useEffect(()=>{
        setTheme(theme)
    },[theme])
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(ThemeContext)
}