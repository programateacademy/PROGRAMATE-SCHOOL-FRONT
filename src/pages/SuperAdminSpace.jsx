import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import VerticalNavbar from '../components/VerticalNavbar';
import Footer from '../components/Footer';
import jwt_decode from 'jwt-decode';

const SuperAdminSpace = () => {

    const AdminRoutes = [
        "/Superadminspace/CreationAnnouncement",
        "/Superadminspace/UsersTable",
        "/Superadminspace/Statistics",
        "/Superadminspace/CreationAdmin",
    ];

    const decodedToken = jwt_decode(localStorage.getItem("token"));
    const profilePerson = decodedToken.profilePerson;

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <section className='flex-1 pt-28 flex flex-col lg:grid lg:grid-cols-4'>
                <div className='mx-4 md:mx-14 pb-10 md:col-span-3'>
                <Outlet />
                </div>
                <div className='lg:col-span-1'>
                <VerticalNavbar Routes={AdminRoutes} profile={profilePerson} />
                </div>
            </section>
            <Footer className='mt-auto'/>
        </div>
    );
};

export default SuperAdminSpace;
