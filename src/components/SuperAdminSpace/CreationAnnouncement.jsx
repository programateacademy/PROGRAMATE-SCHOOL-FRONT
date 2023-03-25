import React, { useState, useEffect } from 'react';
import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs';
import { MdEditSquare } from 'react-icons/md'
import Modal from './EditorCreationAnnouncement';
import defaultApi from '../../apis/index';
import axios from 'axios';

const CreationAnnouncement = () => {

    const [showModal, setShowModal] = useState(false)

    const handleOnClose = () => setShowModal(false)

// ...
    const [todo, setTodo] = useState({
        task: '',
        deadline: '',
        priority: '',
        description: '',
        status: ''
    });

    const [todos, setTodos] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    }

    const handleAddTodo = () => {
        setTodos([...todos, todo]);
        setTodo({
            task: '',
            deadline: '',
            priority: '',
            description: '',
            status: ''
        });
    }

    const handleEditTodo = (index) => {
        const editedTodo = todos[index];
        setTodo(editedTodo);
        setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    }
// ...
    const [dataAnnouncement, setDataAnnouncement] = useState([])

    useEffect(() => {
        defaultApi
            .get("/getannouncements")
            .then(res => {
                console.log(res.data)
                setDataAnnouncement(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='pb-4'>

            {/* Header */}
            <section className='md:pl-4 grid grid-row-2 md:grid-cols-2 text-dark'>
                <h1 className='my-4 font-bold text-xl text-center md:text-left font-Poppins md:my-8 md:text-xl lg:text-3xl'>
                    Convocatorias creadas
                </h1>
                <h2 className='mb-4 flex items-center justify-center md:justify-end font-Poppins font-bold text-right'>Crear una convocatoria<button onClick={() => setShowModal(true)}><BsFillPlusSquareFill className='scale-[1.5] md:scale-[2] ml-5 rounded-md' /></button></h2>
            </section>

            {/* Editable announcements cards */}
            <div className='grid md:grid-cols-2 justify-center gap-8'>
                {dataAnnouncement.map((announ) => {
                    {/* This li is the one that contains the index to be able to iterate to all the elements */ }

                    return (

                        <section key={announ._id} className='px-4'>
                            <div className='bg-light shadow-md shadow-yellow/50 border-[1px] border-yellow/50 rounded'>

                                <h2 className='p-4 font-semibold font-Poppins text-dark text-lg text-center'>{announ.nameAnnouncement}</h2>

                                {/* ... */}
                                <div className='px-6 pb-4 flex gap-2 items-center'>
                                    <h2 className='text-dark font-Poppins font-medium text-base'>Perfil:</h2>
                                    <h3 className='px-1 text-dark/70 text-sm text-start font-Poppins font-medium'>{announ.descriptionAnnouncement}</h3>
                                </div>

                                {/* ... */}
                                <div className='px-6 pb-4 flex gap-2 items-center'>
                                    <h2 className='text-dark font-Poppins font-medium text-base'>Cupos:</h2>
                                    <h3 className='px-1 text-dark/70 text-sm text-start font-Poppins font-medium'>{announ.placesAnnouncement}</h3>
                                </div>
                                
                                {/* ... */}
                                <div className='px-6 pb-4 flex gap-2 items-center'>
                                    <h2 className='text-dark font-Poppins font-medium text-base'>Fecha de inicio:</h2>
                                    <h3 className='px-1 text-dark/70 text-sm text-start font-Poppins font-medium'>{announ.dateStartAnnouncement}</h3>
                                </div>

                                {/* ... */}
                                <div className='px-6 pb-4 flex gap-2 items-center'>
                                    <h2 className='text-dark font-Poppins font-medium text-base'>Fecha de cierre:</h2>
                                    <h3 className='px-1 text-dark/70 text-sm text-start font-Poppins font-medium'>{announ.dateFinishAnnouncement}</h3>
                                </div>

                                {/* ... */}
                                <div className='px-6 pb-4 flex gap-2 items-center'>
                                    <h2 className='text-dark font-Poppins font-medium text-base'>Estado:</h2>
                                    <h3 className='px-1 text-dark/70 text-sm text-start font-Poppins font-medium'>{announ.stateAnnouncement}</h3>
                                </div>

                                {/* ... */}
                                <section className='mx-auto flex justify-center px-4 pt-6 pb-5 gap-8'>
                                    <button className='px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-yellow text-center text-light hover:text-dark text-sm md:text-medium font-Poppins font-semibold'>Cambiar Estado</button>
                                    <button className='px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-yellow text-center text-light hover:text-dark text-sm md:text-medium font-Poppins font-semibold'>Editar</button>
                                    {/* <button onClick={handleAddTodo}><MdEditSquare className='z-0 scale-[2.3] text-[#40A014]' /></button> */}
                                </section>
                            </div>
                        </section>


                    )
                })}
            </div>
            <Modal onClose={handleOnClose} visible={showModal} />
        </div>
    );
}

export default CreationAnnouncement