import { React, useState } from 'react'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Singup() {

    const [showModal, setShowModal] = useState(false)

    const handleOnClose = () => setShowModal(false)

    //Hooks
    const [name1Person, setName1Person] = useState("");
    const [name2Person, setName2Person] = useState("");
    const [lastname1Person, setLastname1Person] = useState("");
    const [lastname2Person, setLastname2Person] = useState("");
    const [documentPerson, setDocumentPerson] = useState("");
    const [emailPerson, setEmailPerson] = useState("");
    const [agePerson, setAgePerson] = useState("");
    const [institutionPerson, setInstitutionPerson] = useState("");

    const navigator = useNavigate();

    function signUp() {
        var signP = {
            name1Person: name1Person,
            name2Person: name2Person,
            lastname1Person: lastname1Person,
            lastname2Person: lastname2Person,
            documentPerson: documentPerson,
            emailPerson: emailPerson,
            profilePerson: 3,
            agePerson: agePerson,
            institutionPerson: institutionPerson             
        }
        console.log(signP)
        axios.post("http://localhost:3000/api/signUp", signP)
        .then(res => {
            alert("Se ha registrado en PROGRAMATE SCHOOL")
            //  navigator("/")
        })
        .then(err => {console.log(err)})
    }

    return (
        <div className='h-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-2'>
            <div className='row-span-1 md:h-full xl:h-screen bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoOCHO_50.png?raw=true")] bg-cover bg-center grid'>
                <div className='w-7/12 sm:w-5/12 md:w-9/12 m-auto'>
                    <img className='bg-light/90 rounded-lg p-2 md:p-4 shadow-2xl' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'}/>
                </div>
            </div>
            {/* <div className='row-span-1 relative'>
                <div className='h-full w-full m-auto flex justify-center items-center bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoOCHO_50.png?raw=true")] bg-cover bg-center bg-fixed'>
                    <img className='md:fixed md:object-contain md:w-4/12 bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'}/>
                </div>
            </div> */}
            <div className='row-span-4 bg-light py-6 my-auto'>
                <h1 className='mx-12 sm:mx-52 md:mx-12 lg:mx-26 pb-5 text-center text-yellow text-lg sm:text-2xl md:text-2xl lg:text-3xl font-Poppins font-black uppercase'>¡Da el primer paso<br/>y regístrate!</h1>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid grid-cols-2 gap-x-2'>
                    <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Nombres:</h3>
                    <input value={name1Person} onChange={(e) => {setName1Person(e.target.value)}} type='text' placeholder='1er nombre' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <input value={name2Person} onChange={(e) => {setName2Person(e.target.value)}} type='text' placeholder='2do nombre' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-2 gap-x-2'>
                    <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Apellidos:</h3>
                    <input value={lastname1Person} onChange={(e) => {setLastname1Person(e.target.value)}} type='text' placeholder='1er apellido' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <input value={lastname2Person} onChange={(e) => {setLastname2Person(e.target.value)}} type='text' placeholder='2do apellido' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Correo:</h3>
                    <input value={emailPerson} onChange={(e) => {setEmailPerson(e.target.value)}} type='email' placeholder='correo@correo.edu.co' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='hidden md:grid mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid-cols-2 gap-x-2'>
                    <h3 className='col-span-1 pb-1.5 text-dark text-sm font-Nunito font-black'>N° de Documento:</h3>
                    <h3 className='col-span-1 pb-1.5 text-dark text-sm font-Nunito font-black'>Edad:</h3>
                    <input value={documentPerson} onChange={(e) => {setDocumentPerson(e.target.value)}} type='number' placeholder='123456789' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <input value={agePerson} onChange={(e) => {setAgePerson(e.target.value)}} type='number' placeholder='00' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='md:hidden mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>N° de Documento:</h3>
                    <input value={documentPerson} onChange={(e) => {setDocumentPerson(e.target.value)}} type='number' placeholder='123456789' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='md:hidden mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Edad:</h3>
                    <input value={agePerson} onChange={(e) => {setAgePerson(e.target.value)}} type='number' placeholder='00' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Institución:</h3>
                    <select value={institutionPerson} onChange={(e) => {setInstitutionPerson(e.target.value)}} id='instituciones' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                        <option className='font-medium text-dark'>Selecciona una opción</option>
                        <option className='font-medium text-dark'>Uno</option>
                        <option className='font-medium text-dark'>Dos</option>
                        <option className='font-medium text-dark'>Tres</option>
                        <option className='font-medium text-dark'>Cuatro</option>
                    </select>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 flex flex-row justify-center'>
                    <input type='checkbox' className='w-3 h-3 accent-red self-center'></input>
                    <label className='ml-2 text-center text-dark text-sm font-Nunito'>He leído y acepto los <button onClick={() => setShowModal(true)} className='text-dark hover:text-red'><b>términos y condiciones</b></button>.</label>
                    <Modal onClose={handleOnClose} visible={showModal}/>
                </div>
                <button onClick={signUp} className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Regístrarse</button>
            </div>
        </div>
    )
}

export default Singup