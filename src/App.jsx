import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import AboutPage from './Components/Pages/AboutPage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
