import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import VerticalNavbar from '../components/VerticalNavbar';
import jwt_decode from 'jwt-decode';

const AdminSpace = () => {

    const AdminRoutes = [
        '/Adminspace/CreationAnnouncement',
        '/Adminspace/UsersTable',
        '/Adminspace/Statistics',
        '/Adminspace/CreationAdmin',
    ];

    const decodedToken = jwt_decode(localStorage.getItem("token"));
    const ProfilePerson = decodedToken.ProfilePerson;

    return (
        <div className='relative mx-4 md:mx-14'>
            <Navbar/>
            <section className='pt-28 flex flex-col lg:grid lg:grid-cols-4'>
                <div className='pb-10 lg:col-span-3'>
                    <Outlet /> 
                </div>
                <div className='lg:col-span-1'>
                    <VerticalNavbar Routes={AdminRoutes} profile={ProfilePerson}/>
                </div>
            </section>
        </div>
    )
}

export default AdminSpace;