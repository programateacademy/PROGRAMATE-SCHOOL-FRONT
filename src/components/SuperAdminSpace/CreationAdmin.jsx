import React from 'react';
import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs';
import { MdEditSquare } from 'react-icons/md';
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';

const CreationAdmin = () => {
    return (
        <div>

            {/* Header */}        
            <section className='md:pl-4 grid grid-row-2 md:grid-cols-2 text-dark'>
                <h1 className='my-4 font-bold text-xl font-Poppins md:my-8 md:text-xl lg:text-3xl'>
                    Usuario con rol admin de la aplicación
                </h1>
                <h2 className='mb-4 flex items-center md:justify-end font-Poppins font-bold text-right'>Crear un usuario<BsFillPlusSquareFill className='scale-[1.5] md:scale-[2] ml-5 rounded-md'/></h2>
            </section>

            {/* Search and filter bar */}
            <section className='w-full md:pl-4 mb-6 md:mb-8 flex justify-between gap-3 md:gap-6'>
                <div className='relative w-[75%]'>
                <input type='search' className='w-full py-2 rounded border-[1px] border-yellow text-dark/50 text-xs font-Poppins'/>
                    <button className='absolute top-2.5 right-2 px-1'><AiOutlineSearch className='text-yellow'/></button>
                </div>
                <select className='w-[25%] px-2 rounded border-[1px] border-yellow text-dark/50 text-xs font-Poppins'>
                    <option className='font-medium text-dark'>Filtrar</option>
                </select>
            </section>

            {/* Editable cards to create Administrators */}
            <section className='px-4 grid md:grid-cols-2 justify-center gap-8'>
                <div className='bg-light shadow-md shadow-yellow/50 border-[1px] border-yellow/50 rounded'>
                    <div className='w-full p-6 flex justify-between'>
                        <button><BsFillTrashFill className='scale-[2] text-red' /></button>
                        <button><MdEditSquare className='scale-[2.3] text-[#40A014]' /></button>
                    </div>
                    <div className='w-full mx-auto flex flex-col justify-center'>
                        <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A1+smile.png?raw=true'} className='w-[33%] mx-auto'></img>
                        <h2 className='w-full py-2 font-semibold font-Poppins text-center text-dark text-2xl'>NombreUser</h2>
                    </div>

                    {/* ... */}
                    <div className='p-4 flex gap-2'>
                        <label className='w-full text-dark font-Poppins font-medium text-base'>Creado:</label>
                        <input type="date" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                    </div>

                    {/* ... */}
                    <div className='px-4 pb-4 flex gap-2'>
                        <label className='w-full text-dark font-Poppins font-medium text-base'>Correo:</label>
                        <input placeholder='ss@educamas.com.co' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                    </div>

                    {/* ... */}
                    <div className='px-4 pb-4 flex gap-2'>
                        <label className='w-full text-dark font-Poppins font-medium text-base inline-block'>Contraseña:</label>
                        <input placeholder='∗∗∗∗∗∗∗∗∗∗∗∗∗' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                    </div>

                    {/* ... */}
                    <div className='px-4 pb-4 flex gap-2'>
                        <label className='w-full text-dark font-Poppins font-medium text-base inline-block'>Rol:</label>
                        <input placeholder='Formador' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                    </div>
                </div>
            </section>

            {/* Search index */}
            <section className='w-full my-4 md:my-8 flex justify-center gap-2 md:gap-6 font-Poppins font-bold text-xl text-dark'>
                <button className='bg-yellow shadow-md shadow-dark/50 rounded px-3 md:px-5 py-1'><HiChevronDoubleLeft className='md:scale-[1.5] mx-auto'/></button>
                <button className='bg-light shadow-md shadow-dark/50 border-[1px] border-dark/50 rounded px-2 md:px-5 py-1'>1</button>
                <button className='bg-light shadow-md shadow-dark/50 border-[1px] border-dark/50 rounded px-2 md:px-5 py-1'>2</button>
                <button className='bg-light shadow-md shadow-dark/50 border-[1px] border-dark/50 rounded px-2 md:px-5 py-1'>3</button>
                <button className='bg-light shadow-md shadow-dark/50 border-[1px] border-dark/50 rounded px-2 md:px-5 py-1'>...</button>
                <button className='bg-yellow shadow-md shadow-dark/50 rounded px-3 md:px-5 py-1'><HiChevronDoubleRight className='md:scale-[1.5] mx-auto'/></button>
            </section>
        </div>
    )
}

export default CreationAdmin;