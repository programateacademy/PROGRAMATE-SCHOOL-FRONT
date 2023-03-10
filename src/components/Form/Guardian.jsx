import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { guardianShema } from '../../schemas/formSchema'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const Guardian = () => {

    
    function GuardianA() {
        var guardian = {
            nameGuardian: nameGuardian,
            relationship: relationship,
            documentTypeGuardian: documentTypeGuardian,
            numberIdGuardian: numberIdGuardian,
            EmailGuardian: EmailGuardian,
            phoneGuardian: phoneGuardian,
            phoneGuardianTwo: phoneGuardianTwo,
            addressGuardian: addressGuardian,
            departamentoGuardian: departamentoGuardian,

            educationLevelGuardian: educationLevelGuardian,
            economic: economic,
            family: family
        }
        console.log(guardian)
        // axios.post("http://localhost:3000/", guardian)
        // .then(res => {alert("hola mundo") })
    }

    

    return (
        <div>Guardian
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className=' flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto'>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>

            <Link to='/Residence'>
                <button className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Atras</button>
            </Link>

            <div className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4 ' >

                {/* question 27 id nameGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 ' >
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Nombre completo de tu acudiente</label>
                    <input
                        className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                        type="text"
                        id='nameGuardian'
                        name='nameGuardian'
                        placeholder='Nombre completo de tu acudiente'
                        value={nameGuardian}
                        onChange={(e) => { setNameGuardian(e.target.value) }}
                    // onBlur={handleBlur}
                    ></input>
                    {/* {touched.nameGuardian && errors.nameGuardian && <div className="text-center font-Nunito text-red text-sm">{errors.nameGuardian}</div>} */}
                </div>

                {/* question 28 id relationship */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6  '>
                    <label className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Parentesco contigo</label>
                    <input
                        className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                        type="text"
                        id='relationship'
                        name='relationship'
                        placeholder='Parentesco contigo'
                        value={relationship}
                        onChange={(e) => { setRelationship(e.target.value) }}
                    // onBlur={handleBlur}
                    ></input>
                    {/* {touched.relationship && errors.relationship && <div className="text-center font-Nunito text-red text-sm">{errors.relationship}</div>} */}
                </div>

                {/* question 29 id documentTypeGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black' >Tipo de documento</h3>
                    <select id='documentTypeGuardian'
                        name='documentTypeGuardian'
                        value={documentTypeGuardian}
                        onChange={(e) => { setdocumentTypeGuardian(e.target.value) }}
                        // onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true'
                        className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark'>
                            Cédula de Ciudadania </option>
                        <option className='font-medium text-dark'>
                            Cédula de extranjería </option>
                        <option className='font-medium text-dark'>
                            Tarjeta de identidad </option>
                        <option className='font-medium text-dark'>
                            Pasaporte </option>
                        <option className='font-medium text-dark'>
                            PEP </option>
                        <option className='font-medium text-dark'>
                            PTP </option>
                    </select>
                </div>

                {/* question 30 id numberIdGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                    <label className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Numero de documento</label>
                    <input
                        className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                        type="text"
                        id='numberIdGuardian'
                        name='numberIdGuardian'
                        placeholder='Parentesco contigo'
                        value={numberIdGuardian}
                        onChange={(e) => { setNumberIdGuardian(e.target.value) }}
                    // onBlur={handleBlur}
                    ></input>
                    {/* {touched.numberId && errors.numberId && <div className="text-center font-Nunito text-red text-sm">{errors.numberId}</div>} */}
                </div>

                {/* question 31 id EmailGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 md:col-span-2 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black '>Correo Electronico</label>
                    <p className=' font-Nunito text-gray-500 text-sm '> En este correo enviaremos copia de la información sobre todo el proceso, te recomendamos que sea el correo que revise constantemente</p>
                    <input
                        className=' w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow md:w-1/2'
                        type="Email"
                        id='EmailGuardian'
                        name='EmailGuardian'
                        placeholder='Correo@correo.edu'
                        value={EmailGuardian}
                        onChange={(e) => { setEmailGuardian(e.target.value) }}
                    // onBlur={handleBlur}
                    ></input>
                    {/* {touched.EmailGuardian && errors.EmailGuardian && <div className="mx-9 font-Nunito text-red text-sm">{errors.EmailGuardian}</div>} */}
                </div>

                {/* question 32 id phoneGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Teléfono celular principal de tu acudiente</label>
                    <input
                        className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                        type="phone"
                        id='phoneGuardian'
                        name='phoneGuardian'
                        placeholder='000 000 00 00'
                        value={phoneGuardian}
                        onChange={(e) => { setphoneGuardian(e.target.value) }}
                    // onBlur={handleBlur}
                    ></input>
                    {/* {touched.phoneGuardian && errors.phoneGuardian && <div className="text-center font-Nunito text-red text-sm">{errors.phoneGuardian}</div>} */}
                </div>

                {/* question 33 id phoneGuardianTwo */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Teléfono celular o fijo secundario de tu acudiente</label>
                    <input
                        className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                        type="phone"
                        id='phoneGuardianTwo'
                        name='phoneGuardianTwo'
                        placeholder='000 000 00 00'
                        value={phoneGuardianTwo}
                        onChange={(e) => { setphoneGuardianTwo(e.target.value) }}
                    ></input>
                </div>

                {/* question 34 id addressGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                    <label className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Dirección permanente / recurrente de residencia</label>
                    <input
                        className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                        type="text"
                        id='addressGuardian'
                        name='addressGuardian'
                        placeholder="Dirección permanente / recurrente de residencia"
                        value={addressGuardian}
                        onChange={(e) => { setAddressGuardian(e.target.value) }}
                    // onBlur={handleBlur}
                    ></input>
                    {/* {touched.addressGuardian && errors.addressGuardian && <div className="text-center font-Nunito text-red text-sm">{errors.addressGuardian}</div>} */}
                </div>

                {/* question 35 id departamentoGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Departamento de residencia</h3>
                    <select id='departamentoGuardian'
                        name='departamentoGuardian'
                        value={departamentoGuardian}
                        onChange={(e) => { setDepartamentoGuardian(e.target.value) }}
                        // onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                        <option className='font-Poppins font-medium text-dark'>Selecciona una opción</option>
                        <option className='font-Poppins font-medium text-dark'>Atlántico</option>
                        <option className='font-medium text-dark'>Bogotá</option>
                        <option className='font-medium text-dark'>Magdalena</option>
                        <option className='font-medium text-dark'>Tolima</option>
                    </select>
                </div>

                <hr className=" border-2 border-yellow rounded w-full max-w-7xl flex justify-center items-center md:mx-6 md:col-span-2" />

                {/* question 36 id educationLevelGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es el nivel educativo de tus padres?</label>
                    <select id='educationLevelGuardian'
                        name='educationLevelGuardian'
                        value={educationLevelGuardian}
                        onChange={(e) => { setEducationLevelGuardian(e.target.value) }}
                        // onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark'>
                            Pregrado - completo </option>
                        <option className='font-medium text-dark'>
                            Pregrado - incompleto </option>
                        <option className='font-medium text-dark'>
                            Formación tecnológica - completo </option>
                        <option className='font-medium text-dark'>
                            Formación tecnológica - incompleto </option>
                        <option className='font-medium text-dark'>
                            Formación tecnica - completo </option>
                        <option className='font-medium text-dark'>
                            Formación tecnica - incompleto </option>
                        <option className='font-medium text-dark'>
                            Bachillerato - completo </option>
                        <option className='font-medium text-dark'>
                            Bachillerato - incompleto </option>
                        <option className='font-medium text-dark'>
                            Primaria - completo </option>
                        <option className='font-medium text-dark'>
                            Primaria - incompleto </option>
                        <option className='font-medium text-dark'>
                            Ninguna </option>
                    </select>
                    {/* {touched.levelEducationGuardian && errors.levelEducationGuardian && <div className="text-center font-Nunito text-red text-sm">{errors.levelEducationGuardian}</div>} */}
                </div>

                {/* question 37 id economic */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu actividad económica / ocupación actual del principal proveedor en tu casa?</label>
                    <select id='economic'
                        name='economic'
                        value={economic}
                        onChange={(e) => { setEconomic(e.target.value) }}
                        // onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark'>
                            Empleado tiempo completo </option>
                        <option className='font-medium text-dark'>
                            Empleado medio tiempo</option>
                        <option className='font-medium text-dark'>
                            Generando ingresos de manera informal (sin contrato) </option>
                        <option className='font-medium text-dark'>
                            Independiente</option>
                        <option className='font-medium text-dark'>
                            Desempleado/a</option>

                    </select>
                </div>

                {/* question 38 id family */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuántas personas componen tu núcleo familiar?</label>
                    <select id='family'
                        name='family'
                        value={family}
                        onChange={(e) => { setFamily(e.target.value) }}
                        // onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark'>
                            1 - 2 </option>
                        <option className='font-medium text-dark'>
                            3 - 4 </option>
                        <option className='font-medium text-dark'>
                            5 o más </option>
                        <option className='font-medium text-dark'>
                            Ninguna </option>

                    </select>
                </div>

                {/* <Link className='flex justify-end' to='/Vocation'> */}
                <button
                    onClick={GuardianA}
                    type='submit'
                    className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Siguiente</button>
                {/* </Link> */}

            </div>


        </div>
    )
}

export default Guardian