import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Singup'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact></Route>
          <Route path='/Login' element={<Login/>} exact></Route>
          <Route path='/Singup' element={<Singup/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
