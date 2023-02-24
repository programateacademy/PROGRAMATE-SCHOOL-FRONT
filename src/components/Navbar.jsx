import { React, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='container'>
            <section className='w-full fixed flex flex-row  p-4 items-center justify-between mx-auto '>
                
                {/* logo Programate school */}
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} className=' w-1/3 '></img>

                {/* menu which appears when the media cueri responsive is set to min-width: 768px - tailwind md*/}
                <div className=' px-12 text-lg font-Poppins  hidden md:block  md:text-base lg:text-lg
                    xl:text-xl
                    2xl:text-2xl'>
                    <div className=' flex flex-row'>
                        {/* <Link to=""> */}
                            <h1 className='px-3' alt="Convocatorias">Convocatorias</h1>
                        {/* </Link>
                        <Link to=""> */}
                            <h1 className='px-3' alt="Contáctanos">Contáctanos</h1>
                        {/* </Link> */}
                    </div>
                </div>
                {/* hamburger menu button which if true shows the menu display */}
                    <HiMenu
                        className=' md:hidden text-yellow text-3xl my-2'
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
            </section>
        </nav>
    )
}

export default Navbar