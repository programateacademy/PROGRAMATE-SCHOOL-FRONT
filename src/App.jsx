import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Singup'
import NEWSignup from './pages/NEWSignup'
import Form from './pages/Form'
import StudentSpace from './pages/StudentSpace'
import SuperAdminSpace from './pages/SuperAdminSpace'
{/* routes for registration form */ }
import Student from './components/Form/Student'
import Social from './components/Form/Social'
import Residence from './components/Form/Residence'
import Guardian from './components/Form/Guardian'
import Vocation from './components/Form/Vocation'
import Motivation from './components/Form/Motivation'
import Logic from './components/Form/Logic'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/Login' element={<Login />} exact></Route>
          <Route path='/Singup' element={<Singup />} exact></Route>
          <Route path='/NEWSignup' element={<NEWSignup />} exact></Route>
          <Route path='/Form' element={<Form />} exact></Route>
          <Route path='/Studentspace' element={<StudentSpace />} exact></Route>
          <Route path='/Superadminspace' element={<SuperAdminSpace />} exact></Route>
          {/* routes for registration form */}
          <Route path='/Student' element={<Student />} exact></Route>
          <Route path='/Social' element={<Social />} exact></Route>
          <Route path='/Residence' element={<Residence />} exact></Route>
          <Route path='/Guardian' element={<Guardian />} exact></Route>
          <Route path='/Vocation' element={<Vocation />} exact></Route>
          <Route path='/Motivation' element={<Motivation />} exact></Route>
          <Route path='/Logic' element={<Logic />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App