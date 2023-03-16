import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { guardianShema } from '../../schemas/formSchema'
import defaultApi from '../../apis/index'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const Guardian = () => {
        // formk validations
    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } = useFormik({
        initialValues: {
            nameGuardian: '',
            relationship: '',
            relationshipO: '',
            documentTypeGuardian: '',
            numberIdGuardian: '',
            emailGuardian: '',
            phoneGuardian: '',
            phoneGuardianTwo: '',
            addressGuardian: '',
            departmentGuardian: '',
            educationLevelGuardian: '',
            economic: '',
            family: '',
        },
        validationSchema: guardianShema,
        onSubmit
    });
    // console.log(errors);
    // backend connection
    function guardianP() {
        var view4 = {
            nameGuardian: values.nameGuardian,
            relationship: values.relationship,
            relationshipO: values.relationshipO,
            documentTypeGuardian: values.documentTypeGuardian,
            numberIdGuardian: values.numberIdGuardian,
            emailGuardian: values.emailGuardian,
            phoneGuardian: values.phoneGuardian,
            phoneGuardianTwo: values.phoneGuardianTwo,
            addressGuardian: values.addressGuardian,
            departmentGuardian: values.departmentGuardian,
            educationLevelGuardian: values.educationLevelGuardian,
            economic: values.economic,
            family: values.family
        }
        console.log(view4);
        defaultApi
            .post("/registertoannouncement", view4)
            .then((res) => {
                // alert("Se ha registrado en PROGRAMATE SCHOOL");
                //  navigator("/")
            })
            .then(err => {
                console.log(err)
            })
            .catch(err => {
                if (err.response.status === 409) {
                    alert("Ya existe un usuario con este documento");
                } else if (err.response.status === 408) {
                    alert("Ya existe un usuario con este Correo");
                }
            })
    }

    return (
        <div>
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoCUATRO.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className=' flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto'>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>

            <Link to='/Residence'>
                <button className=' m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-dark hover:text-light text-sm font-Poppins font-bold'>Atras</button>
            </Link>

            <h2 className=' font-Poppins font-semibold flex justify-center mb -5 text-2xl'>
                Informacion de acudiente
            </h2>

            <form onSubmit={handleSubmit}  className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4 ' >

                {/* question 27 id nameGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 ' >
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Nombre completo de tu acudiente <small className='text-red/80'>*</small></label>
                    <input
                        className={errors.nameGuardian && touched.nameGuardian ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                        type="text"
                        id='nameGuardian'
                        name='nameGuardian'
                        placeholder='Nombre completo de tu acudiente'
                        value={values.nameGuardian}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></input>
                    {errors.nameGuardian && touched.nameGuardian && <p className='text-red text-xs font-Poppins'>{errors.nameGuardian}</p>}
                </div>





                {/* question 29 id documentTypeGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black' >Tipo de documento <small className='text-red/80'>*</small></h3>
                    <select
                        id='documentTypeGuardian'
                        name='documentTypeGuardian'
                        value={values.documentTypeGuardian}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true'
                        className={errors.documentTypeGuardian && touched.documentTypeGuardian ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark' value='Cc'>
                            Cédula de Ciudadania </option>
                        <option className='font-medium text-dark' value='Ce'>
                            Cédula de extranjería </option>
                        <option className='font-medium text-dark' value='Ti'>
                            Tarjeta de identidad </option>
                        <option className='font-medium text-dark' value='Pasaporte'>
                            Pasaporte </option>
                        <option className='font-medium text-dark' value='PEP'>
                            PEP </option>
                        <option className='font-medium text-dark' value='PTP'>
                            PTP </option>
                    </select>
                    {errors.documentTypeGuardian && touched.documentTypeGuardian && <p className='text-red text-xs font-Poppins'>{errors.documentTypeGuardian}</p>}
                </div>


                {/* question 30 id numberIdGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                    <label className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Numero de documento  <small className='text-red/80'>*</small></label>
                    <input
                        className={errors.numberIdGuardian && touched.numberIdGuardian ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                        type="text"
                        id='numberIdGuardian'
                        name='numberIdGuardian'
                        placeholder='00000000000'
                        value={values.numberIdGuardian}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></input>
                    {errors.numberIdGuardian && touched.numberIdGuardian && <p className='text-red text-xs font-Poppins'>{errors.numberIdGuardian}</p>}
                </div>


                {/* question 32 id phoneGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Teléfono celular principal de tu acudiente  <small className='text-red/80'>*</small></label>
                    <input
                        className={errors.phoneGuardian && touched.phoneGuardian ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                        type="number"
                        id='phoneGuardian'
                        name='phoneGuardian'
                        placeholder='000 000 00 00'
                        value={values.phoneGuardian}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></input>
                    {errors.phoneGuardian && touched.phoneGuardian && <p className='text-red text-xs font-Poppins'>{errors.phoneGuardian}</p>}
                </div>

                {/* question 33 id phoneGuardianTwo */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Teléfono celular o fijo secundario de tu acudiente</label>
                    <input
                        className={errors.phoneGuardianTwo && touched.phoneGuardianTwo ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                        type="number"
                        id='phoneGuardianTwo'
                        name='phoneGuardianTwo'
                        placeholder='000 000 00 00'
                        value={values.phoneGuardianTwo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></input>
                    {errors.phoneGuardianTwo && touched.phoneGuardianTwo && <p className='text-red text-xs font-Poppins'>{errors.phoneGuardianTwo}</p>}
                </div>

            

                {/* question 34 id addressGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                    <label className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Dirección permanente / recurrente de residencia  <small className='text-red/80'>*</small></label>
                    <input
                        className={errors.addressGuardian && touched.addressGuardian ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                        type="text"
                        id='addressGuardian'
                        name='addressGuardian'
                        placeholder="Dirección permanente / recurrente de residencia"
                        value={values.addressGuardian}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></input>
                    {errors.addressGuardian && touched.addressGuardian && <p className='text-red text-xs font-Poppins'>{errors.addressGuardian}</p>}
                </div>

                {/* question 35 id departmentGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Departamento de residencia  <small className='text-red/80'>*</small></h3>
                    <select
                        id='departmentGuardian'
                        name='departmentGuardian'
                        value={values.departmentGuardian}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.departmentGuardian && touched.departmentGuardian ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        <option className='font-Poppins font-medium text-dark'>Selecciona una opción</option>
                        <option className='font-Poppins font-medium text-dark' value='Atlántico'>Atlántico</option>
                        <option className='font-medium text-dark' value='Bogotá'>Bogotá</option>
                        <option className='font-medium text-dark' value='Magdalena'>Magdalena</option>
                        <option className='font-medium text-dark' value='Tolima'>Tolima</option>
                    </select>
                    {errors.departmentGuardian && touched.departmentGuardian && <p className='text-red text-xs font-Poppins'>{errors.departmentGuardian}</p>}
                </div>


                {/* question 31 id emailGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black '>Correo Electronico</label>

                    <input
                        className={errors.emailGuardian && touched.emailGuardian ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                        type="Email"
                        id='emailGuardian'
                        name='emailGuardian'
                        placeholder='Correo@correo.edu'
                        value={values.emailGuardian}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></input>

                    {errors.emailGuardian && touched.emailGuardian && <p className='text-red text-xs font-Poppins'>{errors.emailGuardian}</p>}
                    <p className=' font-Nunito text-gray-500 text-sm '> En este correo enviaremos copia de la información sobre todo el proceso, te recomendamos que sea el correo que revise constantemente</p>
                </div>

                {/* question 28 id relationship */}

                <div className='mx-12 sm:mx-40  md:mx-16 lg:mx-28 pb-6  '>
                    <label className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Parentesco contigo</label>
                    <select
                        className={errors.relationship && touched.relationship ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                        type="text"
                        id='relationship'
                        name='relationship'
                        placeholder='Parentesco contigo'
                        value={values.relationship}
                        onChange={handleChange}
                        onBlur={handleBlur}>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark' value='padres'>
                            Madre - Padre </option>
                        <option className='font-medium text-dark' value='padrinos'>
                            Padrino - Madrina </option>
                        <option className='font-medium text-dark' value='tios'>
                            Tío - Tía </option>
                        <option className='font-medium text-dark' value='abuelos'>
                            Abuelo - Abuela </option>
                        <option className='font-medium text-dark' value='padrastros'>
                            Padrastro - Madrastra </option>
                        <option className='font-medium text-dark' value='otro'>
                            Otro </option>
                    </select>
                    {errors.relationship && touched.relationship && <p className='text-red text-xs font-Poppins'>{errors.relationship}</p>}
                </div>
                <div className='mx-12 sm:mx-40  md:mx-16 lg:mx-28 pb-6  '>
                    {values.relationship === 'Otro' && (
                        <div>
                            <label className=' pb-1.5 text-dark text-sm font-Nunito font-black'> Cual</label>
                            <input
                                className={errors.relationshipO && touched.relationshipO ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                                type="text"
                                id='relationshipO'
                                name='relationshipO'
                                placeholder='Cual'
                                value={values.relationshipO}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                    )}
                </div>
                
                <hr className=" border-2 border-yellow rounded w-full max-w-7xl flex justify-center items-center md:mx-6 md:col-span-2" />

                {/* question 36 id educationLevelGuardian */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es el nivel educativo de tus padres?  <small className='text-red/80'>*</small> </label>
                    <select
                        id='educationLevelGuardian'
                        name='educationLevelGuardian'
                        value={values.educationLevelGuardian}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.educationLevelGuardian && touched.educationLevelGuardian ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark' value='Pregrado-completo'>
                            Pregrado - completo </option>
                        <option className='font-medium text-dark' value='Pregrado-incompleto'>
                            Pregrado - incompleto </option>
                        <option className='font-medium text-dark' value='tecnológica-completo'>
                            Formación tecnológica - completo </option>
                        <option className='font-medium text-dark' value='tecnológica-incompleto'>
                            Formación tecnológica - incompleto </option>
                        <option className='font-medium text-dark' value='tecnica-completo'>
                            Formación tecnica - completo </option>
                        <option className='font-medium text-dark' value='tecnica-incompleto'>
                            Formación tecnica - incompleto </option>
                        <option className='font-medium text-dark' value='Bachillerato-completo'>
                            Bachillerato - completo </option>
                        <option className='font-medium text-dark' value='Bachillerato-incompleto'>
                            Bachillerato - incompleto </option>
                        <option className='font-medium text-dark' value='Primaria-completo'>
                            Primaria - completo </option>
                        <option className='font-medium text-dark' value='Primaria-incompleto'>
                            Primaria - incompleto </option>
                        <option className='font-medium text-dark' value='Ninguno'>
                            Ninguna </option>
                    </select>
                    {errors.educationLevelGuardian && touched.educationLevelGuardian && <p className='text-red text-xs font-Poppins'>{errors.educationLevelGuardian}</p>} 
                </div>

                {/* question 37 id economic */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu actividad económica / ocupación actual del principal proveedor en tu casa?  <small className='text-red/80'>*</small></label>
                    <select
                        id='economic'
                        name='economic'
                        value={values.economic}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.economic && touched.economic ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark' value='Empleado tiempo completo'>
                            Empleado tiempo completo </option>
                        <option className='font-medium text-dark' value='Empleado medio tiempo'>
                            Empleado medio tiempo</option>
                        <option className='font-medium text-dark' value='Informal'>
                            Generando ingresos de manera informal (sin contrato) </option>
                        <option className='font-medium text-dark' value='Independiente'>
                            Independiente</option>
                        <option className='font-medium text-dark' value='Desempleado'>
                            Desempleado/a</option>
                    </select>
                    {errors.economic && touched.economic && <p className='text-red text-xs font-Poppins'>{errors.economic}</p>}   
                </div>

                {/* question 38 id family */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuántas personas componen tu núcleo familiar?  <small className='text-red/80'>*</small> </label>
                    <select
                        id='family'
                        name='family'
                        value={values.family}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.family && touched.family ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark' value='1-2'>
                            1 - 2 </option>
                        <option className='font-medium text-dark' value='3-4'>
                            3 - 4 </option>
                        <option className='font-medium text-dark' value='5-mas'>
                            5 o más </option>
                        <option className='font-medium text-dark' value='Ninguna'>
                            Ninguna </option>
                    </select>
                    {errors.family && touched.family && <p className='text-red text-xs font-Poppins'>{errors.family}</p>} 
                </div>

                <div className='flex justify-end'>
                <Link className='mr-8 col-span-2 w-28' to='/Vocation'>
                    <button
                        onClick={guardianP}
                        disabled={!(isValid && dirty)}
                    type='submit'
                        className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-dark  hover:text-light text-sm font-Poppins font-bold rounded-sm disabled:opacity-25'>Siguiente</button>
                </Link>
                </div>
                <br/>
            </form>
        </div>
    )
}

export default Guardian