import { React, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=''>
            <section className='absolute z-40 flex flex-row md:grid md:grid-cols-4 px-4 py-2 items-center justify-between m-auto md:mx-14 md:mt-3'>

                {/* Logo Programate school */}
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} className=' w-2/6 flex md:col-span-1 md:w-full'></img>


                {/* Menu which appears when the media query responsive is set to min-width: 768px - tailwind md*/}
                <div className=' md:col-span-2 justify-end pr-1 pl-44 text-lg font-Poppins font-medium hidden md:block  md:text-base lg:text-lg
                    xl:text-xl
                    2xl:text-2xl'>
                    <div className=' flex flex-row md:grid md:gap-8  '>

                        {/* <Link to=""> */}
                        {/* <h1 className='px-3 text-center hover:border-yellow' alt="Convocatorias">Convocatorias</h1> */}
                        {/* </Link>
                        <Link to=""> */}
                        <a href='#footer' className='px-3 text-end justify-items-end' alt="Contáctanos">Contáctanos</a>
                        {/* </Link> */}
                    </div>
                </div>
                <div className='flex flex-row items-center justify-self-end gap-3 md:col-span-1'>
                    {/*  Login button which is routed to the login */}
                    <Link to="/Login">
                        <button className='button flex'>Ingresar</button>
                    </Link>
                    {/* Hamburger menu button which if true shows the menu display */}
                    <HiMenu
                        className=' flex justify-self-end md:hidden text-yellow text-3xl my-2 '
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    {isOpen === true ? (
                        <div className=' bg-yellow rounded-lg p-3 flex flex-col font-Poppins mt-44 fixed right-5'>
                            {/* <Link to="/Singup">
                            <button className='font-medium focus:bg-light rounded-lg p-3' alt="Convocatorias">Convocatorias</button>
                            </Link>  */}
                            {/* <Link to="/Home/Requirements">  */}
                            <button className='font-medium focus:bg-light rounded-lg p-3' alt="Contáctanos"><a href='#footer'>Contáctanos</a></button>
                            {/* </Link> */}
                        </div>
                    ) : null}
                </div>
            </section>
        </nav>
    )
}

export default Navbar