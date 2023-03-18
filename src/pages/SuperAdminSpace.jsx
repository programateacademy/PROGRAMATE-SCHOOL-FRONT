import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import VerticalNavbar from '../components/VerticalNavbar'


const SuperAdminSpace = () => {

        return (
            <div className='relative mx-4 md:mx-14'>
                <Navbar />
                <section className='pt-28 grid md:grid-cols-4'>
                    <div className='md:hidden'>
                <VerticalNavbar/>
                </div>  
                    <div className=' md:col-span-3'>
                    <Outlet />        
                    </div> 
                <div className='hidden md:block md:col-span-1'>
                <VerticalNavbar /> 
                </div>
            </section> 
        </div>
    )
}



export default SuperAdminSpace

