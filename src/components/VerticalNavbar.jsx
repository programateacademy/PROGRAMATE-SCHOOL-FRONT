import React from 'react';
import { Link } from 'react-router-dom'
import { HiOutlinePaintBrush, HiOutlineWallet } from 'react-icons/hi2';
import { SlGraduation } from 'react-icons/sl';
import { TfiMouse } from 'react-icons/tfi';

const VerticalNavbar = () => {
    // este dato es de las cookies
    const profilePerson = "SuperAdmin"
                
    let buttonSuperAdmin = true
    if (profilePerson == "SuperAdmin") {
        buttonSuperAdmin = false
    }

    return (
        <div className='fixed'>
            <div className=' hidden lg:block lg:gap-5 lg:w-full lg:justify-items-end lg:px-5 lg:py-5' >
                {/* Announcements section > Button */}
                <Link to={"/Superadminspace/CreationAnnouncement"} >
                    <button className='md:p-4 md:rounded-none md:bg-transparent md:border-b-0 md:border-r-2 hover:border-yellow text-dark hover:text-yellow lg:w-full'>
                    <h2 className=' md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>Convocatorias<HiOutlinePaintBrush className='scale-[1.3] ml-5'/></h2>
                </button>
                </Link>
                {/* Registered persons section > Button */}
                <Link to={"/Superadminspace/UsersTable"}>
                    <button className='md:p-4 md:rounded-none md:bg-transparent md:border-b-0 md:border-r-2 hover:border-yellow text-dark hover:text-yellow lg:w-full'>
                    <h2 className=' md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>Inscritos<SlGraduation className='scale-[1.3] ml-5'/></h2>
                </button>
                </Link>
                {/* Statistics section > Button */}
                <Link to={"/Superadminspace/Statistics"}>
                    <button className='md:p-4 md:rounded-none md:bg-transparent md:border-b-0 md:border-r-2 hover:border-yellow text-dark hover:text-yellow lg:w-full'>
                    <h2 className=' md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>Estadísticas<TfiMouse className='scale-[1.3] ml-5'/></h2>
                </button>
                </Link>
                {/* SuperAdmin's space section > Button */}
                <Link to={"/Superadminspace/CreationAdmin"}>
                    <button disabled={buttonSuperAdmin} className='md:p-4 md:rounded-none md:bg-transparent md:border-b-0 md:border-r-2 hover:border-yellow text-dark hover:text-yellow lg:w-full disabled:opacity-25'>
                        <h2 className='hidden md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>SuperAdmin<HiOutlineWallet className='scale-[1.3] ml-5' /></h2>
                </button>
                </Link>
            </div>

            {/* vertical Navbar responsive cel */}

            <div className='lg:hidden py-2 pr-8 md:pr-24 grid grid-cols-4 w-full gap-5 m-auto  bottom-0 fixed z-20 bg-light'>
                {/* Announcements section > Button */}
                <Link to={"/Superadminspace/CreationAnnouncement"} >
                    <button className='p-2 bg-yellow/25 w-full md:w-full   hover:bg-transparent rounded border-transparent hover:border-yellow text-dark hover:text-yellow '>
                        <HiOutlinePaintBrush className='m-auto scale-[1.3]' />
                        <h2 className='hidden md:block items-center justify-center font-Poppins font-semibold text-mg'>Convocatorias</h2>
                    </button>
                </Link>
                {/* Registered persons section > Button */}
                <Link to={"/Superadminspace/UsersTable"}>
                    <button className='p-2  bg-yellow/25 hover:bg-transparent rounded w-full md:w-full border-transparent hover:border-yellow text-dark hover:text-yellow '>
                        <SlGraduation className='m-auto scale-[1.3]' />
                        <h2 className='hidden md:block font-Poppins font-semibold text-mg'>Inscritos</h2>
                    </button>
                </Link>
                {/* Statistics section > Button */}
                <Link to={"/Superadminspace/Statistics"}>
                    <button className='p-2  bg-yellow/25 hover:bg-transparent rounded w-full md:w-full border-transparent hover:border-yellow text-dark hover:text-yellow'>
                        <TfiMouse className='m-auto scale-[1.3]' />
                        <h2 className='hidden md:block items-center justify-end font-Poppins font-semibold text-mg'>Estadísticas</h2>
                    </button>
                </Link>
                {/* SuperAdmin's space section > Button */}
                <Link to={"/Superadminspace/CreationAdmin"}>
                    <button disabled={buttonSuperAdmin} className='p-2 bg-yellow/25 hover:bg-transparent rounded w-full md:w-full border-transparent hover:border-yellow text-dark hover:text-yellow disabled:opacity-25'>
                        <HiOutlineWallet className='m-auto scale-[1.3]'></HiOutlineWallet>
                        <h2 className='hidden md:block items-center justify-end font-Poppins font-semibold text-mg'>SuperAdmin</h2>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default VerticalNavbar;