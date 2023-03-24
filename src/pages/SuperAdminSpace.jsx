import React from 'react';
import CreationAdmin from '../components/SuperAdminSpace/CreationAdmin';
import Navbar from '../components/Navbar';
import VerticalNavbar from '../components/VerticalNavbar';
import CreationAnnouncement from '../components/SuperAdminSpace/CreationAnnouncement';
import UsersTable from '../components/SuperAdminSpace/UsersTable';
import Statistics from '../components/SuperAdminSpace/Statistics';
import { Outlet } from 'react-router-dom';
import FooterSpaceSingup from '../FooterSpaceSingup';
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import VerticalNavbar from '../components/VerticalNavbar';
import jwt_decode from 'jwt-decode';

const SuperAdminSpace = () => {

    const AdminRoutes = [
        "/Superadminspace/CreationAnnouncement",
        "/Superadminspace/UsersTable",
        "/Superadminspace/Statistics",
        "/Superadminspace/CreationAdmin",
    ];

    const decodedToken = jwt_decode(localStorage.getItem("token"));
    const ProfilePerson = decodedToken.ProfilePerson;

    return (
        <div>
        <div className='relative mx-4 md:mx-14'>
                <Navbar />
            <section className='pt-28 flex flex-col lg:grid lg:grid-cols-4'>  
                    <div className='pb-10 md:col-span-3'>
                    <Outlet />        
                    </div> 
                <div className='lg:col-span-1'>
                <VerticalNavbar Routes={AdminRoutes} profile={ProfilePerson}/> 
                </div>
            </section>
        </div>
        <div>
        <FooterSpaceSingup/>
        </div>
        </div>
    );
};

export default SuperAdminSpace;
