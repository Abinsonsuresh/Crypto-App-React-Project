import './App.css'
import { ThemeProvider } from './context/Theme'
import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div>
      {/* <Routes>
    <Route path='/' element={<Navbar/>}></Route>
      </Routes> */}
      <Navbar/>

    </div>


  )
}

export default App
