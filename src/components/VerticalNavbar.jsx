import React from 'react'
import { HiOutlinePaintBrush, HiOutlineWallet } from 'react-icons/hi2'
import { SlGraduation } from 'react-icons/sl'
import { TfiMouse } from 'react-icons/tfi'

const VerticalNavbar = () => {
    return (
        <div className='grid grid-cols-4 md:grid-cols-1 md:grid-rows-4 gap-5 md:gap-10 justify-center' >

            {/* Announcements section > Button */}
            <button className='p-2 md:p-4 bg-dark/10 hover:bg-transparent rounded md:rounded-none md:bg-transparent border-b-2 md:border-b-0 md:border-r-2 border-transparent hover:border-yellow text-dark hover:text-yellow'>
                <h2 className='hidden md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>Convocatorias<HiOutlinePaintBrush className='scale-[1.3] ml-5'/></h2>
                <HiOutlinePaintBrush className='md:hidden m-auto scale-[1.3]'/>
            </button>

            {/* Registered persons section > Button */}
            <button className='p-2 md:p-4 bg-dark/10 hover:bg-transparent rounded md:rounded-none md:bg-transparent border-b-2 md:border-b-0 md:border-r-2 border-transparent hover:border-yellow text-dark hover:text-yellow'>
                <h2 className='hidden md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>Inscritos<SlGraduation className='scale-[1.3] ml-5'/></h2>
                <SlGraduation className='md:hidden m-auto scale-[1.3]'/>
            </button>

            {/* Statistics section > Button */}
            <button className='p-2 md:p-4 bg-dark/10 hover:bg-transparent rounded md:rounded-none md:bg-transparent border-b-2 md:border-b-0 md:border-r-2 border-transparent hover:border-yellow text-dark hover:text-yellow'>
                <h2 className='hidden md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>Estadísticas<TfiMouse className='scale-[1.3] ml-5'/></h2>
                <TfiMouse className='md:hidden m-auto scale-[1.3]'/>
            </button>

            {/* SuperAdmin's space section > Button */}
            <button className='p-2 md:p-4 bg-dark/10 hover:bg-transparent rounded md:rounded-none md:bg-transparent border-b-2 md:border-b-0 md:border-r-2 border-transparent hover:border-yellow text-dark hover:text-yellow'>
                <h2 className='hidden md:flex items-center justify-end font-Poppins font-semibold text-lg text-right'>SuperAdmin<HiOutlineWallet className='scale-[1.3] ml-5'/></h2>
                <HiOutlineWallet className='md:hidden m-auto scale-[1.3]'/>
            </button>
        </div>
    )
}

export default VerticalNavbar