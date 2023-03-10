import { React, useState } from 'react'
import { FaSmile, FaChevronDown } from 'react-icons/fa'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=''>
            <section className='z-40 flex flex-row px-4 py-2 items-center justify-between md:mx-14 md:mt-8 m-auto'>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} className='w-5/12 md:w-3/12 lg:w-2/12 flex'></img>
                <div className='flex flex-row-3 items-center justify-self-end gap-3'>
                    <div className='m-auto p-1 md:p-2'>
                        <FaSmile className='fill-yellow scale-[2]'/>
                    </div>
                    <h3 className='hidden md:block font-Poppins font-semibold md:text-base lg:text-lg text-dark'>Nombre Usuario</h3>
                    <FaChevronDown
                        className='fill-dark'
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    {isOpen === true ? (
                        <div className='bg-yellow rounded-lg p-3 flex flex-col fixed right-4 md:right-20 top-14 md:top-24'>
                            <h3 className='md:hidden py-1 px-3 font-Poppins font-semibold text-sm md:text-lg text-dark'>Nombre Usuario</h3>
                            <button className='font-Poppins font-medium focus:bg-light text-sm md:text-base lg:text-lg rounded-lg py-1 px-3' alt="Convocatorias">Cerrar sesión</button>
                        </div>
                    ) : null
                    }
                </div>
            </section>
        </nav>

)}
export default Navbar