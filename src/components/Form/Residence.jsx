import {React, useState} from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';


function Residence () {
    
    // let rate = 0;

    const [addressStudent, setAddressStudent] = useState("");
    const [departamentoStudent, setDepartamentoStudent] = useState("");
    const [rural, setRural] = useState("");
    const [bogota, setBogota] = useState("");
    const [stratum, setStratum] = useState("");

    // const [errorAddressStudent, setErrorAddressStudent] = useState("");
    // const [errordepartamentoStudent, setErrorDepartamentoStudent ] = useState("");
    // const [errorRural, setErrorRural ] = useState("");
    // const [errorBogota, setErrorBogota, ] = useState("");
    // const [errorStratum, setErrorStratum, ] = useState("");

    function residenceA() {
        var residence = {
            addressStudent: addressStudent,
            departamentoStudent: departamentoStudent,
            rural: rural,
            bogota: bogota,
            stratum: stratum
        }
        console.log(residence)
        // axios.post("http://localhost:3000/", residence)
            // .then(res => {alert("hola mundo") })
    }

    // let val = 5;
    // const validateForm = () => {


        //Logica de las preguntas para sumar puntajes
    //     if (!addressStudent) {
    //         errorAddressStudent.addressStudent = "ingresa tu dirección"
    //         // val--;
    //     }
    //     if (!departamentoStudent) {
    //         const validateForm = "true"
    //         val--;
    //     }
    //     if (!rural) {
    //         const validateForm = "true"
    //         val--;
    //     }
    //     if (!bogota) {
    //         const validateForm = "true"
    //         val--;
    //     }
    //     if (!stratum == 2) {
    //         const errorStratum = "true"
    //         val--;
    //     }
    //     else {
    //         if (addressStudent == "femenino") {
    //             rate = rate + 1
    //         }
    //     } 
    // // }

    // if (val == 0) {
    //     disabled = true
    // } else (
    //     disabled = false
    // )

    return (
            
            <div>
                <div className='flex h-72 '>
                    <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                    <div className=' flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                        <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                    </div>
                </div>

                <Link to='/Social'>
                    <button className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Atras</button>
                </Link>
            <div className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4' >
                
                {/* question 21 id addressStudent */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Dirección permanente / recurrente de residencia</label>
                        <input
                            className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                            type="text"
                            id='addressStudent'
                            name='addressStudent'
                            placeholder="Dirección permanente / recurrente de residencia"
                            value={addressStudent}
                        onChange={(e) => { setAddressStudent(e.target.value) }}
                        onBlur={(e) => { setAddressStudent(e.target.value) }}
                        required
                        ></input>
                    {errorAddressStudent.addressStudent && <div className="text-center font-Nunito text-red text-sm">{errorAddressStudent.addressStudent}</div>}
                </div>
                
                {/* question 22 id departamentoStudent */}

                    <div className=' mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Departamento de residencia</label>
                        <select
                            id='departamentoStudent'
                            name='departamentoStudent'
                            value={departamentoStudent}
                            onChange={(e) => { setDepartamentoStudent(e.target.value) }}
                            data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option
                                value=''
                                className='font-medium text-dark'>Selecciona una opción</option>
                            <option className='font-medium text-dark'>Atlántico</option>
                            <option
                                value='Bogotá' className='font-medium text-dark'>Bogotá</option>
                            <option
                                value='Magdalena' className='font-medium text-dark'>Magdalena</option>
                            <option
                                value='Tolima'
                                className='font-medium text-dark'>Tolima</option>
                        </select>
                </div>
                
                {/* question 23 id rural */}

                    <div
                        value={rural}
                        onChange={(e) => { setRural(e.target.value) }}
                        className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label
                        className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Tu residencia se encuentra en el área rural de tu Departamento?</label>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                id="rural"
                                name="rural"
                                value="Yes"
                                className="accent-red
                                focus:accent-yellow" />
                            Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="rural"
                                name="rural"
                                value="No"
                                className="accent-red
                                focus:accent-yellow"
                            />  
                            No
                        </label>
                </div>
                
                {/* question 24 id bogota */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Si tu lugar de residencia es Bogotá, ¿Cuál es la localidad de residencia?</label>
                        <select id='bogota'
                            name='bogota'
                            value={bogota}
                            onChange={(e) => { setBogota(e.target.value) }}
                            data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option className='font-medium text-dark'>Selecciona una opción</option>
                            <option className='font-medium text-dark'>localidad de Antonio Nariño</option>
                            <option className='font-medium text-dark'>localidad de Barrios Unidos</option>
                            <option className='font-medium text-dark'>localidad de Bosa</option>
                            <option className='font-medium text-dark'>localidad de Chapinero</option>
                            <option className='font-medium text-dark'>localidad de Ciudad Bolívar</option>
                            <option className='font-medium text-dark'>localidad de Engativá</option>
                            <option className='font-medium text-dark'>localidad de Fontibón</option>
                            <option className='font-medium text-dark'>localidad de Kennedy</option>
                            <option className='font-medium text-dark'>localidad de La Candelaría</option>
                            <option className='font-medium text-dark'>localidad de Los Mártires</option>
                            <option className='font-medium text-dark'>localidad de Puente Aranda</option>
                            <option className='font-medium text-dark'>localidad de Rafael Uribe Uribe</option>
                        </select>
                </div>
                
                {/* question 25 id stratum */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu estrato socioeconómico?
                            (De acuerdo con la estratificación reportada en los recibos de servicios públicos)</label>
                        <select id='stratum'
                            name='stratum'
                            value={stratum}
                            onChange={(e) => { setStratum(e.target.value) }}
                            data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option className='font-medium text-dark'>Selecciona una opción</option>
                            <option className='font-medium text-dark'>1</option>
                            <option className='font-medium text-dark'>2</option>
                            <option className='font-medium text-dark'>3</option>
                            <option className='font-medium text-dark'>4</option>
                            <option className='font-medium text-dark'>5</option>
                            <option className='font-medium text-dark'>6</option>
                        </select>
                    </div>

                    {/* <Link type='submit' className='flex justify-end' to='/Guardian'> */}
                    <button
                        onClick={residenceA}
                        type='submit'
                        // disabled={true}
                        className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Siguiente</button>
                    {/* </Link>  */}
                </div>
            </div>
        )
}

export default Residence