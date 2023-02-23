import { React, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='container'>
            
            <div className='w-full fixed flex flex-row  p-4 items-center justify-between mx-auto '>
                {/* //logo Programate school */}
                <div className=' w-40 h-14 bg-orange-600 sm:w-44 sm:h-16 lg:w-56 lg:h-24'> logo school</div>
                <div className='flex flex-row'>
                    {/* //menu responsive */}
                    <div className=' fixed px-12 text-lg font-Poppins flex invisible sm:visible sm:text-sm md:text-base lg:text-lg
                    xl:text-xl
                    2xl:text-2xl'>
                        {/* <Link to=""> */}
                            <h1 className='px-3' alt="Convocatorias">Convocatorias</h1>
                        {/* </Link>
                        <Link to=""> */}
                            <h1 className='px-3' alt="Contáctanos">Contáctanos</h1>
                        {/* </Link> */}
                    </div>

                    {/* //menu hamburger */}
                    <HiMenu
                        className=' sm:hidden text-yellow text-3xl my-2'
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    {isOpen === true ? (
                        <div className=' bg-yellow rounded-lg p-3 flex flex-col font-Poppins fixed mt-10 right-5'>
                            {/* <Link to=""> */}
                            <button className='focus:bg-gray-200 rounded-lg p-3' alt="Convocatorias">Convocatorias</button>
                            {/* </Link>
                            <Link to=""> */}
                            <button className='focus:bg-gray-100 rounded-lg p-3' alt="Contáctanos">Contáctanos</button>
                            {/* </Link> */}
                        </div>
                    ) : null
                    }
                </div>    
            </div>
        </div>
    )
}

export default Navbar