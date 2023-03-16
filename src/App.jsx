import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Singup'
import StudentSpace from './pages/StudentSpace'
import SuperAdminSpace from './pages/SuperAdminSpace'
{/* Import form paths */ }
import Student from './components/Form/Student'
import Social from './components/Form/Social'
import Residence from './components/Form/Residence'
import Guardian from './components/Form/Guardian'
import Vocation from './components/Form/Vocation'
import Motivation from './components/Form/Motivation'
import Logic from './components/Form/Logic'
import SuccessfulRegistration from './components/Home/SuccessfulRegistration'

//import { AnnouncementContext, AnnouncementProvider } from './context/AnnouncementProvider'

//import FormRegister from "./components/Form/FormRegister"

function App() {
  
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/Login' element={<Login />} exact></Route>
          <Route path='/Singup' element={<Singup />} exact></Route>
          <Route path='/Studentspace' element={<StudentSpace />} exact></Route>
          <Route path='/Superadminspace' element={<SuperAdminSpace />} exact></Route>
          <Route path='/SuccessfulRegistration' element={<SuccessfulRegistration/>} exact></Route>
          {/* Form paths */}

          {/* <Route path='/FormRegister' element={<FormRegister/>} exact></Route> */}

          <Route path='/Student' element={<Student />} exact></Route>
          <Route path='/Social' element={<Social />} exact></Route>
          <Route path='/Residence' element={<Residence />} exact></Route>
          <Route path='/Guardian' element={<Guardian />} exact></Route>
          <Route path='/Vocation' element={<Vocation />} exact></Route>
          <Route path='/Motivation' element={<Motivation />} exact></Route>
          <Route path='/Logic' element={<Logic />} exact></Route>

          {/* <AnnouncementProvider> */}
            {/* <Route path='/Student' element={<Student AnnouncementData={Announcement} setAnnouncementData={setAnnouncement}/>} exact></Route>
            <Route path='/Social' element={<Social AnnouncementData={Announcement} setAnnouncementData={setAnnouncement}/>} exact></Route>
            <Route path='/Residence' element={<Residence AnnouncementData={Announcement} setAnnouncementData={setAnnouncement}/>} exact></Route>
            <Route path='/Guardian' element={<Guardian AnnouncementData={Announcement} setAnnouncementData={setAnnouncement}/>} exact></Route>
            <Route path='/Vocation' element={<Vocation AnnouncementData={Announcement} setAnnouncementData={setAnnouncement}/>} exact></Route>
            <Route path='/Motivation' element={<Motivation AnnouncementData={Announcement} setAnnouncementData={setAnnouncement}/>} exact></Route>
            <Route path='/Logic' element={<Logic AnnouncementData={Announcement} setAnnouncementData={setAnnouncement}/>} exact></Route> */}
          {/*</AnnouncementProvider> */}
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App