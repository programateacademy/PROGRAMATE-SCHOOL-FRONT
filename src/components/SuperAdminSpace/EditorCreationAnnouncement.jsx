import {React, useState} from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import defaultApi from '../../apis/index'
import swal from 'sweetalert2'
import jwt_decode from "jwt-decode"

function Modal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === 'box')
        onClose()
    }
    
    const decodedToken = jwt_decode(localStorage.getItem("token"))
    // THIS INFO MUST BE OBTAIN FROM THE TOKEN
    //const documentPerson = something
    const adminId = decodedToken._id

    const [ nameAnnouncement, setNameAnnouncement ] = useState("");
    const [ descriptionAnnouncement, setDescriptionAnnouncement ] = useState("");
    const [ placesAnnouncement, setPlacesAnnouncement ] = useState("");
    const [ dateStartAnnouncement, setDateStartAnnouncement ] = useState("");
    const [ dateFinishAnnouncement, setDateFinishAnnouncement ] = useState("");

    function createAnnouncement() {
        var createAnn = {
            adminId: adminId,
            nameAnnouncement:  nameAnnouncement,
            descriptionAnnouncement: descriptionAnnouncement,  
            placesAnnouncement: placesAnnouncement,
            dateStartAnnouncement: dateStartAnnouncement, 
            dateFinishAnnouncement: dateFinishAnnouncement,
        }
        console.log(createAnn)
        defaultApi
        .post("/addnewannouncement", createAnn)
        .then((res) => {
        swal.fire({
                text: 'Convocatoria creada con éxito',
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
                    text: 'Error, no ha iniciado sesión',
                    confirmButtonText: 'OK',
                    timer: '3000',
                    color: '#262425',
                    confirmButtonColor: '#FBC209',
                    background: '#FFFFFF',
                });
            } else if (err.response.status === 403) {
                swal.fire({
                    text: 'Error, no tiene permiso para crear convocatorias',
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
        createAnnouncement(),
        onClose()
    }

    if (!visible) return null
    
    return (
        <div id='box' onClick={handleOnClose} className='fixed z-40 inset-0 bg-dark bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
            <div className='w-10/12 md:w-6/12 my-auto bg-light border-2 border-yellow p-2 rounded-md drop-shadow-2xl overflow-y-auto scrollbar scrollbar-track scrollbar-thumb'>
                <button onClick={onClose} className='w-full mx-auto flex justify-end'><AiFillCloseCircle size={20} className='fill-dark hover:fill-red'/></button>
                <h1 className='w-11/12 md:w-8/12 mx-auto mt-2 py-1 px-2 bg-dark rounded-md font-Poppins font-semibold text-center text-yellow text-base md:text-xl'> 
                Nueva convocatoria
                </h1>
                
                <div className='px-8 pb-4 pt-8 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Nombre convocatoria:</label>
                    <input value={nameAnnouncement} onChange={(e) => {setNameAnnouncement(e.target.value)}} placeholder='Desarrollador Web Jr' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Descripción:</label>
                    <input value={descriptionAnnouncement} onChange={(e) => {setDescriptionAnnouncement(e.target.value)}} placeholder='Jóvenes de grado 11' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Cupos:</label>
                    <input value={placesAnnouncement} onChange={(e) => {setPlacesAnnouncement(e.target.value)}} placeholder='120' type="Number" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Fecha de inicio:</label>
                    <input value={dateStartAnnouncement} onChange={(e) => {setDateStartAnnouncement(e.target.value)}} placeholder='dd/mm/aaaa' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                <div className='px-8 pb-4 flex gap-2'>
                    <label className='w-full text-dark font-Poppins font-medium text-base'>Fecha de cierre:</label>
                    <input value={dateFinishAnnouncement} onChange={(e) => {setDateFinishAnnouncement(e.target.value)}} placeholder='dd/mm/aaaa' type="text" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold'/>
                </div>
                
                <div className='grid grid-cols py-4'>
                    <button onClick={buttonFunction} className='flex mx-auto px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-purple text-center text-yellow hover:text-light font-Poppins font-medium'>Crear</button>
                </div>
            </div>
        </div>
    )
}

export default Modal