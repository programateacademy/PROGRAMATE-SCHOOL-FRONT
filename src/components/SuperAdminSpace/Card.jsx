{/*import React from 'react'

const Card = ({ tarjeta, index, editarTarjeta, eliminarTarjeta }) => {
 { const [perfil, setPerfil] = useState(tarjeta.perfil);
    const [inscriptos, setInscriptos] = useState(tarjeta.inscriptos);
    const [fechaInicio, setFechaInicio] = useState(tarjeta.fechaInicio);
    const [fechaCierre, setFechaCierre] = useState(tarjeta.fechaCierre);
const [procesoSeleccion, setProcesoSeleccion] = useState(tarjeta.procesoSeleccion);

    const handlePerfilChange = (event) => {
        setPerfil(event.target.value);
    };

    const handleInscriptosChange = (event) => {
        setInscriptos(event.target.value);
    };

    const handleFechaInicioChange = (event) => {
        setFechaInicio(event.target.value);
    };

    const handleFechaCierreChange = (event) => {
        setFechaCierre(event.target.value);
    };

    const handleProcesoSeleccionChange = (event) => {
        setProcesoSeleccion(event.target.value);
    };

    const handleGuardarClick = () => {
        const nuevaTarjeta = {
            perfil,
            inscriptos,
            fechaInicio,
            fechaCierre,
            procesoSeleccion,
        };
        editarTarjeta(index, nuevaTarjeta);
    };

    const handleEliminarClick = () => {
        eliminarTarjeta(index);
    };


    return (
        <div className="tarjeta">
            <label>
                Perfil:
                <input type="text" value={perfil} onChange={handlePerfilChange} />
            </label>
            <label>
                Inscriptos:
                <input type="text" value={inscriptos} onChange={handleInscriptosChange} />
            </label>
            <label>
                Fecha de inicio:
                <input type="date" value={fechaInicio} onChange={handleFechaInicioChange} />
            </label>
            <label>
                Fecha de cierre:
                <input type="date" value={fechaCierre} onChange={handleFechaCierreChange} />
            </label>
            <label>
                Proceso de selección:
                <textarea value={procesoSeleccion} onChange={handleProcesoSeleccionChange} />
            </label>
            <div>
                <button onClick={handleGuardarClick}>Guardar</button>
                <button onClick={handleEliminarClick}>Eliminar</button>
            </div>
        </div>
    );
};


export default Card*/}
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'



const Card = () => {
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
            <sub>
                <h1 className='text-3xl text-dark font-Poppins font-semibold'>
                    Convocatorias creadas
                </h1>
            </sub>

            <section className='flex flex-col p-10 space-y-5 '>
                <h2 className='text-1xl text-dark font-Poppins font-semibold'>
                    Desarrollador Frontend Web Jr
                </h2>
                <div>
                    <label className='text-dark font-Poppins font-semibold '>Perfil</label>
                    <input type="text" name="task" value={todo.task} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='text-dark font-Poppins font-semibold '>Incritos</label>
                    <input type="text" name="deadline" value={todo.deadline} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='text-dark font-Poppins font-semibold '>Fecha de inicio</label>
                    <input type="text" name="priority" value={todo.priority} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='text-dark font-Poppins font-semibold '>Fecha de cierre</label>
                    <input type="text" name="description" value={todo.description} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='text-dark font-Poppins font-semibold '>Proceso de selección</label>
                    <input type="text" name="status" value={todo.status} onChange={handleInputChange} />
                </div>
              
                <section className='flex space-x-28 p-3 '>
                    <button className='bg-dark bg-gradient-to-r   text-light font-semibold py-1 px-3 rounded shadow-inner'>  Visualizar </button>
                    <button onClick={handleAddTodo}><FaEdit className='text-3xl text-green-500' /></button>
                </section>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index} >
                                {todo.task} - {todo.deadline} - {todo.priority} - {todo.description} - {todo.status}
                                <button onClick={() => handleEditTodo(index)}>  <FaEdit className='text-3xl text-green-500' />  </button>
                            </li>
                        ))}
                    </ul>
            
                
                 <button onClick={() => setTodo({
                        task: '',
                        deadline: '',
                        priority: '',
                        description: '',
                        status: ''
                    })}>Agregar otra tarea</button>
                
            </section>
        </>

    );
}
export default Card