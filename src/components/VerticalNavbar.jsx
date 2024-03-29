import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { HiOutlinePaintBrush, HiOutlineWallet } from 'react-icons/hi2';
import { SlGraduation } from 'react-icons/sl';
import { TfiMouse } from 'react-icons/tfi';


const VerticalNavbar = (props) => {
    
    const Routes = props.Routes

    const CreationAnnouncement = Routes[0]
    const UsersTable = Routes[1];
    const Statistics = Routes[2]
    const CreationAdmin = Routes[3];
    const profile = props.profile

    const [disableButton, setDisableButton] = useState(false)
    
    useEffect(() => {
        if (profile === 'SuperAdmin') {
            setDisableButton(false)
        } else if (profile === 'Admin') {
            setDisableButton(true)
        }
    }, [profile])
    
    console.log(disableButton)
    
    return (
        <div className='fixed'>
            <div className=' hidden lg:flex lg:flex-col lg:w-full lg:gap-3 lg:pl-10 items-end'>
                {/* Announcements section > Button */}
                <Link to={CreationAnnouncement} className='lg:w-fit'>
                    <button className='lg:p-4 lg:rounded-none lg:bg-transparent lg:border-b-0 lg:border-r-2 hover:border-yellow text-dark hover:text-yellow'>
                        <h2 className=' lg:flex items-center font-Poppins font-semibold text-lg text-right'>Convocatorias<HiOutlinePaintBrush className='scale-[1.3] ml-5'/></h2>
                </button>
                </Link>
                {/* Registered persons section > Button */}
                <Link to={UsersTable} className='lg:w-fit'>
                    <button className=' lg:p-4 lg:rounded-none lg:bg-transparent lg:border-b-0 lg:border-r-2 hover:border-yellow text-dark hover:text-yellow'>
                        <h2 className=' lg:flex items-center font-Poppins font-semibold text-lg text-right'>Inscritos<SlGraduation className='scale-[1.3] ml-5'/></h2>
                </button>
                </Link>
                {/* Statistics section > Button */}
                <Link to={Statistics} className='lg:w-fit'>
                    <button className='lg:p-4 lg:rounded-none lg:bg-transparent lg:border-b-0 lg:border-r-2 hover:border-yellow text-dark hover:text-yellow '>
                    <h2 className=' md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>Estadísticas<TfiMouse className='scale-[1.3] ml-5'/></h2>
                </button>
                </Link>
                {/* SuperAdmin's space section > Button */}
                <Link to={CreationAdmin} className='lg:w-fit  '>
                    <button 
                    disabled={disableButton} 
                    className='lg:p-4 lg:rounded-none lg:bg-transparent text-dark hover:text-yellow lg:border-b-0 lg:border-r-2 hover:border-yellow disabled:opacity-25'>
                        <h2 className='hidden md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>SuperAdmin<HiOutlineWallet className='scale-[1.3] ml-5' /></h2>
                </button>
                </Link>
            </div>

            {/* vertical Navbar responsive cel */}

            <div className='lg:hidden py-2 px-10 grid grid-cols-4 w-full gap-5 m-auto bottom-0 fixed z-20 bg-light/50 backdrop-blur-sm'>
                {/* Announcements section > Button */}
                <Link to={CreationAnnouncement} >
                    <button className='p-2 bg-yellow w-full md:w-full   hover:bg-transparent rounded border-transparent hover:border-yellow text-dark hover:text-yellow '>
                        <HiOutlinePaintBrush className='m-auto scale-[1.3]' />
                        <h2 className='hidden md:block items-center justify-center font-Poppins font-semibold text-mg'>Convocatorias</h2>
                    </button>
                </Link>
                {/* Registered persons section > Button */}
                <Link to={UsersTable}>
                    <button className='p-2  bg-yellow hover:bg-transparent rounded w-full md:w-full border-transparent hover:border-yellow text-dark hover:text-yellow '>
                        <SlGraduation className='m-auto scale-[1.3]' />
                        <h2 className='hidden md:block font-Poppins font-semibold text-mg'>Inscritos</h2>
                    </button>
                </Link>
                {/* Statistics section > Button */}
                <Link to={Statistics}>
                    <button className='p-2  bg-yellow hover:bg-transparent rounded w-full md:w-full border-transparent hover:border-yellow text-dark hover:text-yellow'>
                        <TfiMouse className='m-auto scale-[1.3]' />
                        <h2 className='hidden md:block items-center justify-end font-Poppins font-semibold text-mg'>Estadísticas</h2>
                    </button>
                </Link>
                {/* SuperAdmin's space section > Button */}
                <Link to={CreationAdmin}>
                    <button 
                    disabled={disableButton} 
                    className='p-2 bg-yellow hover:bg-transparent rounded w-full md:w-full border-transparent hover:border-yellow text-dark hover:text-yellow disabled:opacity-25'>
                        <HiOutlineWallet className='m-auto scale-[1.3]'></HiOutlineWallet>
                        <h2 className='hidden md:block items-center justify-end font-Poppins font-semibold text-mg'>SuperAdmin</h2>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default VerticalNavbar;