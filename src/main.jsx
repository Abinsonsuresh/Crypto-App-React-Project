import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/Theme'
import { TrendProvider } from './context/TrendingAPIContext.jsx'
import { CoinAPIProvider } from  './context/CoinAPI.jsx'
import {CoinProvider} from './context/CoinMainContext.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
<ThemeProvider>
  <CoinAPIProvider>
  <TrendProvider>
    <CoinProvider>
    <Router>
      <App />
    </Router>
    </CoinProvider>
    </TrendProvider>
    </CoinAPIProvider>
</ThemeProvider>
  </React.StrictMode>,
)
