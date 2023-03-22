import React from 'react';
import CreationAdmin from '../components/SuperAdminSpace/CreationAdmin';
import Navbar from '../components/Navbar';
import VerticalNavbar from '../components/VerticalNavbar';
import CreationAnnouncement from '../components/SuperAdminSpace/CreationAnnouncement';
import UsersTable from '../components/SuperAdminSpace/UsersTable';
import Statistics from '../components/SuperAdminSpace/Statistics';
import { Outlet } from 'react-router';

const SuperAdminSpace = () => {

    return (
        <div className='relative mx-4 md:mx-14'>
                <Navbar />
            <section className='pt-28 flex flex-col lg:grid lg:grid-cols-4'>  
                    <div className='pb-10 md:col-span-3'>
                    <Outlet />        
                    </div> 
                <div className='lg:col-span-1'>
                <VerticalNavbar /> 
                </div>
            </section> 
        </div>
    );
};

export default SuperAdminSpace;
