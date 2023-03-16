import React from 'react'
import CreationComp from '../components/SuperAdminSpace/CreationComp'
import Navbar from '../components/Navbar'
import VerticalNavbar from '../components/VerticalNavbar'


const SuperAdminSpace = () => {
    return (
        <div className='mx-4 md:mx-14'>
            <Navbar/>
            <section className='flex'>
                <CreationComp className=''/>
                <VerticalNavbar className=''/>
            </section>
        </div>
    )
}

export default SuperAdminSpace