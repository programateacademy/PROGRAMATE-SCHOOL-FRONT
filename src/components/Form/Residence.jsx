import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { basicShema } from './index';
// import axios from 'axios';

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const Residence = () => {
    
    

    // const [addressStudent, setAddressStudent] = useState("");
    // const [departamentoStudent, setDepartamentoStudent] = useState("");
    // const [rural, setRural] = useState("");
    // const [bogota, setBogota] = useState("");
    // const [stratum, setStratum] = useState("");

    // const [errorAddressStudent, setErrorAddressStudent] = useState("");
    // const [errorDepartamentoStudent, setErrorDepartamentoStudent ] = useState("");
    // const [errorRural, setErrorRural ] = useState("");
    // const [errorBogota, setErrorBogota, ] = useState("");
    // const [errorStratum, setErrorStratum, ] = useState("");

    // function residenceA() {
    //     var residence = {
    //         addressStudent: addressStudent,
    //         departamentoStudent: departamentoStudent,
    //         rural: rural,
    //         bogota: bogota,
    //         stratum: stratum
    //     }
    //     console.log(residence)
    //     // axios.post("http://localhost:3000/", residence)
    //         // .then(res => {alert("hola mundo") })
    // }

    // const handleBlur = () => { 
    //     if (addressStudent == "") {
    //         setErrorAddressStudent("ingresa tu direccion");
    //     }
    //     if (departamentoStudent == "") {
    //         setErrorDepartamentoStudent("ingresa el departamento donde vives");
    //     }
    //     if (rural == "") {
    //         setErrorRural("selecciona si vives en zona rural o no");
    //     }
    //     if (bogota == "") {
    //         setErrorBogota("si vives en Bogotá selecciona la localidad y si no selecciona ninguna");
    //     }
    //     if (stratum == "") {
    //         setErrorStratum("ingresa tu estrato según un recibo de servicio publico");
    //     }
    //     else {
    //         setErrorAddressStudent(null)
    //         setErrorDepartamentoStudent(null)
    //         setErrorRural(null)
    //         setErrorBogota(null)
    //         setErrorStratum(null)
    //     }
    // }
    
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            addressStudent: '',
            departamentoStudent: '',
            rural: '',
            bogota: '',
            stratum: '',
        },
        validationSchema: basicShema,
        onSubmit
    });
    console.log(errors);
    

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
            <form
                onSubmit={handleSubmit}
                className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4' >
                
                {/* question 21 id addressStudent */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Dirección permanente / recurrente de residencia</label>
                        <input
                        className={errors.addressStudent && touched.addressStudent ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}                     
                            type="text"
                            id='addressStudent'
                            name='addressStudent'
                        placeholder="Dirección permanente / recurrente de residencia"
                        value={values.addressStudent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        //     value={addressStudent}
                        //     onChange={(e) => { setAddressStudent(e.target.value) }}
                        //     onBlur={handleBlur}
                        // required

                        ></input>
                    {errors.addressStudent && errors.touched && <p className='text-red text-xs font-Poppins'>{errors.addressStudent}</p>}
                    {/* {errorAddressStudent && <div className="text-center font-Nunito text-red text-sm">{errorAddressStudent}</div>} */}
                </div>
                
                {/* question 22 id departamentoStudent */}

                    <div className=' mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Departamento de residencia</label>
                        <select
                            id='departamentoStudent'
                        name='departamentoStudent'
                        value={values.departamentoStudent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                            // value={departamentoStudent}
                            // onChange={(e) => { setDepartamentoStudent(e.target.value) }}
                            // onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.departamentoStudent && touched.departamentoStudent ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}>
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
                    {errors.departamentoStudent && errors.touched && <p className='text-red text-xs font-Poppins'>{errors.departamentoStudent}</p>}
                    {/* {errorDepartamentoStudent && <div className="text-center font-Nunito text-red text-sm">{errorDepartamentoStudent}</div>} */}
                </div>
                
                {/* question 23 id rural */}

                    <div
                        // value={rural}
                        // onChange={(e) => { setRural(e.target.value) }}
                        // onBlur={handleBlur}
                    value={values.rural}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    {errors.radio && errors.touched && <p className='text-red text-xs font-Poppins'>{errors.radio}</p>}
                    {/* {errorRural && <div className="text-center font-Nunito text-red text-sm">{errorRural}</div>} */}
                </div>
                
                {/* question 24 id bogota */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Si tu lugar de residencia es Bogotá, ¿Cuál es la localidad de residencia?</label>
                        <select id='bogota'
                        name='bogota'
                        value={values.bogota}
                        onChange={handleChange}
                        onBlur={handleBlur}
                            // value={bogota}
                            // onChange={(e) => { setBogota(e.target.value) }}
                            // onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.bogota && touched.bogota ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}>
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
                            <option className='font-medium text-dark'>Ninguna</option>
                    </select>
                    {errors.bogota && errors.touched && <p className='text-red text-xs font-Poppins'>{errors.bogota}</p>}
                    {/* {errorBogota && <div className="text-center font-Nunito text-red text-sm">{errorBogota}</div>} */}
                </div>
                
                {/* question 25 id stratum */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu estrato socioeconómico?
                            (De acuerdo con la estratificación reportada en los recibos de servicios públicos)</label>
                        <select id='stratum'
                            name='stratum'
                            // value={stratum}
                            // onChange={(e) => { setStratum(e.target.value) }}
                            // onBlur={handleBlur}
                        value={values.stratum}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.stratum && touched.stratum ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}>
                            <option className='font-medium text-dark'>Selecciona una opción</option>
                            <option className='font-medium text-dark'>1</option>
                            <option className='font-medium text-dark'>2</option>
                            <option className='font-medium text-dark'>3</option>
                            <option className='font-medium text-dark'>4</option>
                            <option className='font-medium text-dark'>5</option>
                            <option className='font-medium text-dark'>6</option>
                    </select>
                    {errors.stratum && errors.touched && <p className='text-red text-xs font-Poppins'>{errors.stratum}</p>}
                    {/* {errorStratum && <div className="text-center font-Nunito text-red text-sm">{errorStratum}</div>} */}
                    </div>

                    {/* <Link type='submit' className='flex justify-end' to='/Guardian'> */}
                    <button
                        // onClick={residenceA}
                    type='submit'
                    disabled={!values}
                        // disabled={true}
                        className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Siguiente</button>
                    {/* </Link>  */}
                </form>
            </div>
        )
}

export default Residence