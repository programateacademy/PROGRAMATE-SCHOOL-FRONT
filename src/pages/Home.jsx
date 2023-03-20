import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from '../components/Home/Navbar'
import Header from '../components/Home/Header'
import Benefits from '../components/Home/Benefits'
import Requirements from '../components/Home/Requirements'
import Footer from '../components/Footer'


function Home() {
    
    return (
        <div>
            <Navbar/>
            <Header/>
            <Benefits/>
            <Requirements/>
            <Footer />
        </div>
    )
}

export default Home
