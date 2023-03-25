import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import VerticalNavbar from '../components/VerticalNavbar';
import FooterSpaceSingup from '../components/FooterSpaceSingup';
import jwt_decode from 'jwt-decode';

const AdminSpace = () => {

    const AdminRoutes = [
        '/Adminspace/CreationAnnouncement',
        '/Adminspace/UsersTable',
        '/Adminspace/Statistics',
        '/Adminspace/CreationAdmin',
    ];

    const decodedToken = jwt_decode(localStorage.getItem("token"));
    const profilePerson = decodedToken.profilePerson;
console.log(decodedToken);
    return (
        <div className='relative '>
            <Navbar/>
            <section className='pt-28 flex flex-col lg:grid lg:grid-cols-4'>
                <div className='mx-4 md:mx-14 pb-10 lg:col-span-3'>
                    <Outlet /> 
                </div>
                <div className='lg:col-span-1'>
                    <VerticalNavbar Routes={AdminRoutes} profile={profilePerson}/>
                </div>
            </section>
            <FooterSpaceSingup /> 
        </div>
    )
}

export default AdminSpace;