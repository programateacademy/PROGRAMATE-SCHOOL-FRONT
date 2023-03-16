import React, { useState } from 'react'
import { MdEditSquare } from 'react-icons/md'
import { BsFillPlusSquareFill } from 'react-icons/bs'


const CreationComp = () => {
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

    return (
        <>
            {/* Titles */}        
            <section className='px-4 grid grid-cols-2 text-dark'>
                <h1 className='font-bold text-2xl font-Poppins md:my-8 md:text-xl lg:text-3xl'>
                    Convocatorias creadas
                </h1>
                <h2 className='flex items-center justify-end font-Poppins font-bold text-right'>Crear una convocatoria<BsFillPlusSquareFill className='scale-[2] ml-5 rounded-md'/></h2>
            </section>

            {/* Editable announcements cards */}
            <section className='px-4 grid grid-cols-3 justify-center gap-8'>
                <div className='bg-light shadow-md shadow-yellow/50 border-[1px] border-yellow/50 rounded'>
                    <h2 className='p-4 font-semibold font-Poppins text-dark text-lg'>Desarrollador Frontend Web Jr</h2>

                    {/* ... */}
                    <div className='px-4 pb-4 flex gap-2'>
                        <label className='w-full text-dark font-Poppins font-medium text-base'>Perfil</label>
                        <input placeholder='Jovenes de grado 11°' type="text" name="task" value={todo.task} onChange={handleInputChange} className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                    </div>

                    {/* ... */}
                    <div className='px-4 pb-4 flex gap-2'>
                        <label className='w-full text-dark font-Poppins font-medium text-base'>Inscritos</label>
                        <input placeholder='120' type="text" name="task" value={todo.task} onChange={handleInputChange} className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                    </div>

                    {/* ... */}
                    <div className='px-4 pb-4 flex gap-2'>
                        <label className='w-full text-dark font-Poppins font-medium text-base inline-block'>Fecha de inicio</label>
                        <input type="date" name="task" value={todo.task} onChange={handleInputChange} className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                    </div>

                    {/* ... */}
                    <div className='px-4 pb-4 flex gap-2'>
                        <label className='w-full text-dark font-Poppins font-medium text-base inline-block'>Fecha de cierre</label>
                        <input type="date" name="task" value={todo.task} onChange={handleInputChange} className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                    </div>

                    {/* ... */}
                    <div className='px-4 pb-4 flex gap-2'>
                        <label className='w-full text-dark font-Poppins font-medium text-base'>Proceso de selección</label>
                        <input placeholder='Activo' type="text" name="task" value={todo.task} onChange={handleInputChange} className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                    </div>

                    {/* ... */}
                    <section className='mx-auto flex justify-center px-4 pt-6 pb-5 gap-8'>
                        <button className='px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-yellow text-center text-light hover:text-dark text-sm md:text-medium font-Poppins font-semibold'>Visualizar</button>
                        <button onClick={handleAddTodo}><MdEditSquare className='scale-[2.3] text-green-500' /></button>
                    </section>
                </div>
            </section>
        </>
    );
}

export default CreationComp