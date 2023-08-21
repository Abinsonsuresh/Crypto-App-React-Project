import './App.css'
import React from 'react'
// import { ThemeProvider } from './context/Theme'
import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom"
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import Account from './routes/Account'
import Home from './routes/Home'
import CoinMainPage from './Components/CoinMainPage'
import Footer from './Components/Footer'
import Market from './routes/Market'



function App() {

  return (
    <div className='pt-5 mx-2'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/market' element={<Market/>}></Route>

        <Route>
          <Route path='/coins/:coinId' element={<CoinMainPage/>}/>
          <Route path=':coinId' />
        </Route>
      {/* <Route path='/coins/:coinID' element={<CoinMainPage/>}/> */}
      </Routes>
      <Footer/>
      {/* <Signin/> */}

    </div>


  )
}

export default App
