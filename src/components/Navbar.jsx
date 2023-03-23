import { React, useState } from 'react';
import { FaSmile, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const Navigator = useNavigate()
    function handleOnClose() {
        Navigator("/Login")
        return (localStorage.clear());
    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='fixed w-full z-20 top-0 left-0 bg-light'>
            <section className='flex flex-row w-11/12 px-4 py-2 items-center justify-between m-auto md:mt-3'>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} className='w-5/12 md:w-3/12 lg:w-2/12 flex'></img>
                <div className='flex flex-row-3 items-center justify-self-end gap-3'>
                    <div className='m-auto p-1 md:p-2'>
                        <FaSmile className='fill-yellow scale-[2]' />
                    </div>
                    <h3 className='hidden md:block font-Poppins font-semibold md:text-base lg:text-lg text-dark'>Nombre Usuario</h3>
                    <FaChevronDown className='fill-dark' onClick={() => setIsOpen(!isOpen)} />
                    {isOpen === true ? (
                        <div className='bg-yellow rounded-lg p-3 mt-3 flex flex-col fixed right-12  top-16 sm:top-20'>
                            <h3 className='md:hidden py-1 px-3 font-Poppins font-semibold text-sm md:text-lg text-dark'>Nombre Usuario</h3>
                            <button
                                onClick={() => { handleOnClose() }} className='font-Poppins font-medium focus:bg-light text-sm md:text-base lg:text-lg rounded-lg py-1 px-3' alt="Convocatorias">Cerrar sesión</button>
                        </div>
                    ) : null
                    }
                </div>
            </section>
        </nav>
    );
};

export default Navbar