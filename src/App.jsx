import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import AboutPage from './Components/Pages/AboutPage'
import Contact from './Components/Pages/Contact'
import AdminLogin from './Components/Pages/AdminLogin'
import AdminDash from './Components/AdminC/AdminDash'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/admin/login' element={<AdminLogin/>}></Route>
        <Route path='/admin/dash' element={<AdminDash/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
