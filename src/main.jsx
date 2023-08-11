import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/Theme'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
<ThemeProvider>
    <Router>
      <App />
    </Router>
</ThemeProvider>
  </React.StrictMode>,
)
