import { React, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='container'>
            {/* //logo Programate school */}
            <div className=' fixed flex flex-row  p-4 items-center justify-around'>
                <div className=' w-40 h-14 bg-orange-600 '> logo school</div>

                {/* //menu responsive */}
                <div className=' invisible sm:visible gap-5 font-Poppins'>
                    {/* <Link to=""> */}
                        <h1 className='' alt="Convocatorias">Convocatorias</h1>
                    {/* </Link>
                    <Link to=""> */}
                        <h1 className='' alt="Contáctanos">Contáctanos</h1>
                    {/* </Link> */}
                </div>

                {/* //menu hamburger */}
                <HiMenu
                    className='sm:hidden flex flex-row text-yellow text-3xl justify-items-end'
                    onClick={() => setIsOpen(!isOpen)}
                />
                {isOpen === true ? (
                    <div className=' bg-light rounded-sm p-3 flex flex-col font-Poppins '>
                        {/* <Link to=""> */}
                            <h1 className='' alt="Convocatorias">Convocatorias</h1>
                        {/* </Link>
                        <Link to=""> */}
                            <h1 className='' alt="Contáctanos">Contáctanos</h1>
                        {/* </Link> */}
                    </div>
                ) : null
                }
            </div>
        </div>
    )
}

export default Navbar