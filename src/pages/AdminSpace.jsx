import React from 'react'
import CreationComp from '../components/SuperAdminSpace/CreationComp'
import Navbar from '../components/Navbar'
import VerticalNavbar from '../components/VerticalNavbar'


const AdminSpace = () => {
    return (
        <div className='mx-4 md:mx-14'>
            <Navbar/>
            <section className='grid md:grid-cols-4'>
                <div className='md:hidden'>
                    <VerticalNavbar/>
                </div>
                <div className='md:col-span-3'>
                    <CreationComp/>
                </div>
                <div className='hidden md:block md:col-span-1'>
                    <VerticalNavbar/>
                </div>    
            </section>
        </div>
    )
}

export default AdminSpace