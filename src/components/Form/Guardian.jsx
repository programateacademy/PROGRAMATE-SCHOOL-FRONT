import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { guardianSchema } from '../../schemas/formSchema'

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
        validationSchema: guardianSchema,
        onSubmit
    });

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

        //THIS BRING AN OBJECT FROM LOCALSTORAGE
        const view1to3save = JSON.parse(localStorage.getItem('LSview1to3'))
        localStorage.removeItem('LSview1to3')

        // THIS JOIN TWO OBJECT
        const view1to4 = { ...view1to3save, ...view4 }
        console.log(view1to4)

        // THIS SEND VIEW1TO4  TO LOCALSTORAGE 
        localStorage.setItem('LSview1to4', JSON.stringify(view1to4))
    }

    return (
        <div>
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoCUATRO.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className=' flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto'>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>
            <Link to='/Register/Residence'>
                <button className=' m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-dark hover:text-light text-sm font-Poppins font-bold'>Atrás</button>
            </Link>
            <h2 className=' font-Poppins font-semibold flex justify-center mb -5 text-2xl'>Información de acudiente</h2>
            <form onSubmit={handleSubmit} className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4 ' >

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
                        <option className='font-medium text-dark'>Selecciona una opción</option>
                        <option className='font-medium text-dark'>Cédula de Ciudadania</option>
                        <option className='font-medium text-dark'>Cédula de extranjería</option>
                        <option className='font-medium text-dark'>Tarjeta de identidad</option>
                        <option className='font-medium text-dark'>Pasaporte</option>
                        <option className='font-medium text-dark'>PEP</option>
                        <option className='font-medium text-dark'>PTP</option>
                    </select>
                    {errors.documentTypeGuardian && touched.documentTypeGuardian && <p className='text-red text-xs font-Poppins'>{errors.documentTypeGuardian}</p>}
                </div>

                {/* question 30 id numberIdGuardian */}
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                    <label className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Número de documento  <small className='text-red/80'>*</small></label>
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
                        type="text"
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
                        type="text"
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
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black '>Correo Electrónico</label>
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
                    <p className=' font-Nunito text-gray-500 text-sm '> En este correo enviaremos copia de la información sobre todo el proceso, te recomendamos que sea un correo que revise constantemente</p>
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
                        <option className='font-medium text-dark'>Selecciona una opción </option>
                        <option className='font-medium text-dark'>Madre - Padre</option>
                        <option className='font-medium text-dark'>Padrino - Madrina</option>
                        <option className='font-medium text-dark'>Tío - Tía</option>
                        <option className='font-medium text-dark'>Abuelo - Abuela</option>
                        <option className='font-medium text-dark' value='padrastros'>Padrastro - Madrastra</option>
                        <option className='font-medium text-dark'>Otro</option>
                    </select>
                    {errors.relationship && touched.relationship && <p className='text-red text-xs font-Poppins'>{errors.relationship}</p>}
                </div>
                {values.relationship === 'Otro' && (
                    <div className='mx-12 sm:mx-40  md:mx-16 lg:mx-28 pb-6'>
                        <label className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Cual</label>
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
                        <option className='font-medium text-dark'>Selecciona una opción </option>
                        <option className='font-medium text-dark'>Pregrado - completo</option>
                        <option className='font-medium text-dark'>Pregrado - incompleto</option>
                        <option className='font-medium text-dark'>Formación tecnológica - completo</option>
                        <option className='font-medium text-dark'>Formación tecnológica - incompleto</option>
                        <option className='font-medium text-dark'>Formación técnica - completo</option>
                        <option className='font-medium text-dark'>Formación técnica - incompleto</option>
                        <option className='font-medium text-dark'>Bachillerato - completo</option>
                        <option className='font-medium text-dark'>Bachillerato - incompleto </option>
                        <option className='font-medium text-dark'>Primaria - completo</option>
                        <option className='font-medium text-dark'>Primaria - incompleto </option>
                        <option className='font-medium text-dark'>Ninguna </option>
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
                        <option className='font-medium text-dark'>Selecciona una opción </option>
                        <option className='font-medium text-dark'>Empleado tiempo completo</option>
                        <option className='font-medium text-dark'>Empleado medio tiempo</option>
                        <option className='font-medium text-dark'>Generando ingresos de manera informal (sin contrato)</option>
                        <option className='font-medium text-dark'>Independiente</option>
                        <option className='font-medium text-dark'>Desempleado/a</option>
                    </select>
                    {errors.economic && touched.economic && <p className='text-red text-xs font-Poppins'>{errors.economic}</p>}
                </div>

                {/* question 38 id family */}
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuántas personas componen tu núcleo familiar?<small className='text-red/80'>*</small> </label>
                    <select
                        id='family'
                        name='family'
                        value={values.family}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.family && touched.family ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        <option className='font-medium text-dark'>Selecciona una opción </option>
                        <option className='font-medium text-dark'>1 - 2</option>
                        <option className='font-medium text-dark'>3 - 4</option>
                        <option className='font-medium text-dark'>5 o más</option>
                        <option className='font-medium text-dark'>Ninguna</option>
                    </select>
                    {errors.family && touched.family && <p className='text-red text-xs font-Poppins'>{errors.family}</p>}
                </div>
                <div className='flex justify-end'>
                    <Link className='mr-8 col-span-2 w-28' to='/Register/Vocation'>
                        <button
                            onClick={guardianP}
                            disabled={!(isValid && dirty)}
                            type='submit'
                            className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-dark  hover:text-light text-sm font-Poppins font-bold rounded-sm disabled:opacity-25'>Siguiente</button>
                    </Link>
                </div>
                <br />
            </form>
        </div>
    )
}

export default Guardian;