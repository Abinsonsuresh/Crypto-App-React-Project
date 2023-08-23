import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/Theme'
import { TrendProvider } from './context/TrendingAPIContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { MarketAPIProvider } from './context/MarketContext.jsx'
import { SearchAPIProvider } from './context/SearchContext.jsx'




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode> 
<ThemeProvider>
<AuthContextProvider>

  <TrendProvider>
    <MarketAPIProvider>
      <SearchAPIProvider>

    <Router>
      <App />
    </Router>
    
    </SearchAPIProvider>
    </MarketAPIProvider>
    </TrendProvider>

    </AuthContextProvider>
</ThemeProvider>
  </React.StrictMode>,
)
