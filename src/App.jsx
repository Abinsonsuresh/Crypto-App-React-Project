import './App.css'
import React, {useState,useEffect} from 'react'

// import { ThemeProvider } from './context/Theme'
import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom"
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import Account from './routes/Account'
import Home from './routes/Home'
import axios from 'axios'
// import { useCoinContext } from './context/CoinAPI'




function App() {

  console.log("coin")
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en'

  useEffect(()=>{
      axios.get(url).then((response)=>{
          setCoins(response.data)
          // console.log(response.data)
      })
  },[url])

  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home coins ={coins}/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signout' element={<Signup/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
      </Routes>

    </div>


  )
}

export default App
