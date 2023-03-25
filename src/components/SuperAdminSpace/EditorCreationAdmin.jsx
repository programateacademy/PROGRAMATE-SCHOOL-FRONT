import {React, useState} from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import defaultApi from '../../apis/index'
import swal from 'sweetalert2'

function Modal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === 'box')
        onClose()
    }

    const [name1Person, setName1Person] = useState("");
    const [name2Person, setName2Person] = useState("");
    const [lastname1Person, setLastname1Person ] = useState("");
    const [lastname2Person, setLastname2Person ] = useState("");
    const [documentPerson, setDocumentPerson] = useState("");
    const [emailPerson, setEmailPerson ] = useState("");
    const [positionPerson, setPositionPerson ] = useState("");

    function createAdmin() {
        var createA = {
            name1Person: name1Person,
            name2Person: name2Person,
            lastname1Person: lastname1Person,
            lastname2Person: lastname2Person,
            documentPerson: documentPerson,
            emailPerson: emailPerson,
            positionPerson: positionPerson
        }
        console.log(createA)
        defaultApi
        .post("/newAdmin", createA)
        .then((res) => {
        swal.fire({
                text: 'Admin creado con éxito',
                confirmButtonText: 'OK',
                timer: '3000',
                color: '#262425',
                confirmButtonColor: '#FBC209',
                background: '#FFFFFF',
            });
            // navigator("/") 
        })
        .then((err) => {
            console.log(err);
        })
        .catch((err) => {
            if (err.response.status === 401) {
                swal.fire({
                    text: 'Usuario no encontrado',
                    confirmButtonText: 'OK',
                    timer: '3000',
                    color: '#262425',
                    confirmButtonColor: '#FBC209',
                    background: '#FFFFFF',
                });
            } else if (err.response.status === 403) {
                swal.fire({
                    text: 'Contraseña incorrecta',
                    confirmButtonText: 'OK',
                    timer: '3000',
                    color: '#262425',
                    confirmButtonColor: '#FBC209',
                    background: '#FFFFFF',
                });
            }
    });
    }

    function buttonFunction(){
        createAdmin(),
        onClose()
    }

    if (!visible) return null
    
    return (
        <div id='box' onClick={handleOnClose} className='fixed z-40 inset-0 bg-dark bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
            <div className='w-10/12 md:w-6/12 my-auto bg-light border-2 border-yellow p-2 rounded-md drop-shadow-2xl overflow-y-auto scrollbar scrollbar-track scrollbar-thumb'>
                <button onClick={onClose} className='w-full mx-auto flex justify-end'><AiFillCloseCircle size={20} className='fill-dark hover:fill-red'/></button>
                <h1 className='w-11/12 md:w-8/12 mx-auto mt-2 py-1 px-2 bg-dark rounded-md font-Poppins font-semibold text-center text-yellow text-base md:text-xl'> 
                Nuevo administrador
                </h1>
                
                <div className='px-8 pb-4 pt-8 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Nombre:</label>
                    <input value={name1Person} onChange={(e) => {setName1Person(e.target.value)}} placeholder='1er nombre' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Segundo nombre:</label>
                    <input value={name2Person} onChange={(e) => {setName2Person(e.target.value)}} placeholder='2do nombre' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Apellido:</label>
                    <input value={lastname1Person} onChange={(e) => {setLastname1Person(e.target.value)}} placeholder='1er apellido' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Segundo apellido:</label>
                    <input value={lastname2Person} onChange={(e) => {setLastname2Person(e.target.value)}} placeholder='2do apellido' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>N° de documento:</label>
                    <input value={documentPerson} onChange={(e) => {setDocumentPerson(e.target.value)}} placeholder='123456789' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Correo:</label>
                    <input value={emailPerson} onChange={(e) => {setEmailPerson(e.target.value)}} placeholder='correo@correo.edu.co' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Cargo (Opcional):</label>
                    <input value={positionPerson} onChange={(e) => {setPositionPerson(e.target.value)}} placeholder='Cargo' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='grid grid-cols py-4'>
                    <button onClick={buttonFunction} className='flex mx-auto px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-purple text-center text-yellow hover:text-light font-Poppins font-medium'>Crear</button>
                </div>
            </div>
        </div>
    )
}

export default Modal