import React from 'react'
import Navbar from '../components/Navbar'
import VerticalNavbar from '../components/VerticalNavbar'
import CreationAnnouncement from '../components/SuperAdminSpace/CreationAnnouncement'
import UsersTable from '../components/SuperAdminSpace/UsersTable'
import Statistics from '../components/SuperAdminSpace/Statistics'


const AdminSpace = () => {
    return (
        <div className='mx-4 md:mx-14'>
            <Navbar/>
            <section className='grid md:grid-cols-4'>
                <div className='md:hidden'>
                    <VerticalNavbar/>
                </div>
                <div className='md:col-span-3'>
                    <CreationAnnouncement/>
                    <UsersTable/>
                    <Statistics/>
                </div>
                <div className='hidden md:block md:col-span-1'>
                    <VerticalNavbar/>
                </div>
            </section>
        </div>
    )
}

export default AdminSpace