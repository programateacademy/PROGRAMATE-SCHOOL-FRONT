import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Singup'
import Form from './pages/Form'
import StudentSpace from './pages/StudentSpace'
import SuperAdminSpace from './pages/SuperAdminSpace'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact></Route>
          <Route path='/Login' element={<Login/>} exact></Route>
          <Route path='/Singup' element={<Singup/>} exact></Route>
          <Route path='/Form' element={<Form/>} exact></Route>
          <Route path='/Studentspace' element={<StudentSpace/>} exact></Route>
          <Route path='/Superadminspace' element={<SuperAdminSpace/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
