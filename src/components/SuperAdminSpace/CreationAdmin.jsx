import React, { useState, useEffect } from 'react'
import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs'
import { MdEditSquare } from 'react-icons/md'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'
import Modal from '../SuperAdminSpace/EditorCreationAdmin'
import defaultApi from '../../apis/index'
import jwt_decode from "jwt-decode";

const CreationAdmin = () => {

    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)
    const [dataAdmin, setDataAdmin] = useState([])


    useEffect(() => {
        defaultApi
            .get("/getAdmin")
            .then(res => {
                console.log(res.data)
                setDataAdmin(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // THIS INFO MUST BE OBTAIN FROM THE TOKEN
    //const documentPerson = something
    const decodedToken = jwt_decode(localStorage.getItem("token"))
    const adminId = decodedToken._id

    return (
        <div className='pb-4'>

            {/* Header */}
            <section className='md:pl-4 grid grid-row-2 md:grid-cols-2 text-dark'>
                <h1 className='my-4 font-bold text-xl text-center md:text-left font-Poppins md:my-8 md:text-xl lg:text-3xl'>
                    Usuario con rol admin de la aplicación
                </h1>
                <h2 className='mb-4 flex items-center justify-center md:justify-end font-Poppins font-bold text-right'>Crear un administrador<button onClick={() => setShowModal(true)}><BsFillPlusSquareFill className='scale-[1.5] md:scale-[2] ml-5 rounded-md' /></button></h2>
            </section>

            {/* Search and filter bar */}
            {/* <section className='w-full md:pl-4 mb-6 md:mb-8 flex justify-between gap-3 md:gap-6'>
                <div className='relative w-[75%]'>
                    <input type='search' className='w-full py-2 rounded border-[1px] border-yellow text-dark/50 text-xs font-Poppins' />
                    <button className='absolute top-2.5 right-2 px-1'><AiOutlineSearch className='text-yellow' /></button>
                </div>
                <select className='w-[25%] px-2 rounded border-[1px] border-yellow text-dark/50 text-xs font-Poppins'>
                    <option className='font-medium text-dark'>Filtrar</option>
                </select>
            </section> */}

            {/* Editable cards to create Administrators */}
            <div className='grid md:grid-cols-2 justify-center gap-8'>
                {dataAdmin.map((admin) => {
                    {/* This li is the one that contains the index to be able to iterate to all the elements */}
                    return(
                        <section key={admin._id} className='px-4'>
                            <div className='bg-light shadow-md shadow-yellow/50 border-[1px] border-yellow/50 rounded'>
                                <div className='w-full p-6 flex justify-end'>
                                    {/* <button><BsFillTrashFill className='scale-[2] text-red' /></button> */}
                                    {/* <button ><MdEditSquare className='scale-[2.3] text-[#40A014]'/></button> */}
                                </div>
                            <div className='w-full mx-auto flex flex-col justify-center'>
                                    <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A1+smile.png?raw=true'} className='w-[33%] mx-auto'></img>
                                    <h2 className='w-full pt-2 pb-4 font-semibold font-Poppins text-center text-dark text-2xl'>{admin.name1Person} {admin.lastname1Person}</h2>
                            </div>

                            {/* ... */}
                            <div className='px-6 pb-4 flex gap-2 items-center'>
                                <h2 className='text-dark font-Poppins font-medium text-base'>Correo:</h2>
                                <h3 className='overflow-hidden px-1 text-dark/70 text-sm text-start font-Poppins font-medium'>{admin.emailPerson}</h3>
                            </div>

                            {/* ... */}
                            <div className='px-6 pb-4 flex gap-2 items-center'>
                                <h2 className='text-dark font-Poppins font-medium text-base'>Cargo:</h2>
                                <h3 className='px-1 text-dark/70 text-sm text-start font-Poppins font-medium'>{admin.positionPerson}</h3>
                            </div>
                        </div>
                    </section>
                    )
                })}
            </div>
            <Modal onClose={handleOnClose} visible={showModal}/>
        </div>
    )
}

export default CreationAdmin;