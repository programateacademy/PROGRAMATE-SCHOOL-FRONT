import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { studentShema } from '../../schemas/formSchema'
import defaultApi from '../../apis/index'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const Student = () => {
    // formk validations
    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } = useFormik({
        initialValues: {
            name1Person: '',
            name2Person: '',
            lastname1Person: '',
            lastname2Person: '',
            birthdate: '',
            agePerson: '',
            gender: '',
            document: '',
            documentPerson: '',
            institutionPerson: '',
            course: '',
            sena: '',
            availability: '',
            emailPerson: '',
            phone: '',
            phoneTwo: '',
        },
        validationSchema: studentShema,
        onSubmit
    });
    // console.log(errors);
    // backend connection
    function studentP() {
        var view1 = {
            name1Person: values.name1Person,
            name2Person: values.name2Person,
            lastname1Person: values.lastname1Person,
            lastname2Person: values.lastname2Person,
            birthdate: values.birthdate,
            agePerson: values.agePerson,
            gender: values.gender,
            document: values.document,
            documentPerson: values.documentPerson,
            institutionPerson: values.institutionPerson,
            course: values.course,
            sena: values.sena,
            availability: values.availability,
            emailPerson: values.emailPerson,
            phone: values.phone,
            phoneTwo: values.phoneTwo,
        }
        console.log(view1);
        defaultApi
            .post("/registertoannouncement", view1)
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

        <div >
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>
            <h2 className=' font-Poppins font-semibold flex justify-center p-2 text-2'>
                Informacion del estudiante
            </h2>
            {/* form start text */}

            <div>
                <h3 className=' font-Poppins font-semibold flex justify-center p-3'>
                    Por favor diligencia estas preguntas. Para nosotros son muy importantes, ya que esta será la primera forma de conocerte.
                </h3>
            </div>

            {/* start of form */}
            <form onSubmit={handleSubmit} >
                <div className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4'>
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid grid-cols-2 gap-x-2'>

                        {/* question 1 id name1Person */}

                        <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Nombres: <small className='text-red/80'>*</small></h3>
                        <input
                            id="name1Person"
                            value={values.name1Person}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            placeholder='Primer nombre'
                            className={errors.name1Person && touched.name1Person ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}></input>


                        {/* question 2 id name2Person */}

                        <input
                            id='name2Person'
                            value={values.name2Person}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            placeholder='Segundo nombre'
                            className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                        {errors.name1Person && touched.name1Person && <p className=" text-center font-Nunito text-red text-sm">{errors.name1Person}</p>}
                    </div>

                    {/* question 3 id lastname1Person */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-2 gap-x-2'>
                        <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Apellidos: <small className='text-red/80'>*</small></h3>
                        <input
                            id='lastname1Person'
                            value={values.lastname1Person}
                            onChange={handleChange}
                            onBlur={handleBlur} type='text' placeholder='1er apellido' className={errors.lastname1Person && touched.lastname1Person ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}
                        ></input>


                        {/* question 4 id lastname2Person */}

                        <input
                            id='lastname2Person'
                            value={values.lastname2Person}
                            onChange={handleChange}
                            onBlur={handleBlur} type='text' placeholder='2do apellido' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                        {errors.lastname1Person && touched.lastname1Person && <p className='text-red text-xs font-Poppins'>{errors.lastname1Person}</p>}
                    </div>

                    {/* the birth input with the id birthdate */}
                    {/* question 5 id birthdate */}


                    <div className='flex flex-col mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Fecha de nacimiento: <small className='text-red/80'>*</small></label>
                        <input
                            value={values.birthdate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='birthdate'
                            type="date"
                            className={errors.birthdate && touched.birthdate ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        </input>
                        {errors.birthdate && touched.birthdate && <p className="text-center font-Nunito text-red text-sm">{errors.birthdate}</p>}
                    </div>

                    {/* question 6 id agePerson */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Edad: <small className='text-red/80'>*</small></h3>
                        <input
                            id='agePerson'
                            value={values.agePerson}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type='number'
                            placeholder='00'
                            className={errors.agePerson && touched.agePerson ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}></input>
                        {errors.agePerson && touched.agePerson && <p className='text-red text-xs font-Poppins'>{errors.agePerson}</p>}
                    </div>

                    {/* the birth input with the id gender */}
                    {/* question 7 id gender */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu género? <small className='text-red/80'>*</small></h3>
                        <select
                            id='gender'
                            value={values.gender}
                            onChange={handleChange}
                            onBlur={handleBlur} type='text' placeholder='Genero'
                            data-te-select-init data-te-select-filter='true' className={errors.gender && touched.gender ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                Femenino </option>
                            <option className='font-medium text-dark'>
                                Masculino </option>
                            <option className='font-medium text-dark'>
                                Otro </option>
                        </select>
                        {errors.gender && touched.gender && <p className='text-red text-xs font-Poppins'>{errors.gender}</p>}
                    </div>

                    {/* the document input with the options it gives */}
                    {/* question 8 id document */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Tipo de documento: <small className='text-red/80'>*</small></h3>
                        <select
                            value={values.document}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='document'
                            data-te-select-init data-te-select-filter='true' className={errors.document && touched.document ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                        >
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
                        {errors.document && touched.document && <p className='text-red text-xs font-Poppins'>{errors.document}</p>}
                    </div>

                    {/* question 9 id documentPerson */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>N° de Documento: <small className='text-red/80'>*</small></h3>
                        <input
                            id="documentPerson"
                            value={values.documentPerson}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type='number' placeholder='123456789' className={errors.documentPerson && touched.documentPerson ? 'w-full p-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'} ></input>
                        {errors.documentPerson && touched.documentPerson && <p className='text-red text-xs font-Poppins'>{errors.documentPerson}</p>}
                    </div>


                    {/* the break line in the form */}
                    <hr className=" border-2 border-yellow rounded w-full max-w-full flex justify-center items-center md:col-span-2" />

                    {/* question 10 id institutionPerson */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Institución educativa a la que Pertenece? <small className='text-red/80'>*</small></h3>
                        <select
                            value={values.institutionPerson}
                            onChange={handleChange}
                            onBlur={handleBlur} id='institutionPerson' data-te-select-init data-te-select-filter='true'
                            className={errors.institutionPerson && touched.institutionPerson ? 'w-full p-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                            <option className='font-medium text-dark'>Selecciona una opción</option>
                            <option className='font-medium text-dark'>IE El Jardín - Ibagué</option>
                            <option className='font-medium text-dark'>El Olivo School - Santa Marta</option>
                            <option className='font-medium text-dark'>Colegio Integrada La Candelaria</option>
                            <option className='font-medium text-dark'>Técnica Agropecuaria Luruaco - Atlantico</option>
                            <option className='font-medium text-dark'>Colegio Campo de la Cruz - Atlantico</option>
                        </select>
                        {errors.institutionPerson && touched.institutionPerson && <p className='text-red text-xs font-Poppins'>{errors.institutionPerson}</p>}
                    </div>

                    {/* the birth input with the id course */}
                    {/* question 11 id course */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Que grado estas cursando Actualmente? <small className='text-red/80'>*</small></h3>
                        <select
                            id='course'
                            value={values.course}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            data-te-select-init data-te-select-filter='true' className={errors.course && touched.course ? 'w-full p-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                11° </option>
                            <option className='font-medium text-dark'>
                                Otro </option>
                        </select>
                        {errors.course && touched.course && <p className='text-red text-xs font-Poppins'>{errors.course}</p>}
                    </div>

                    {/* the birth input with the id Sena */}
                    {/* question 12 id sena */}

                    <div
                        value={values.sena}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Te encuentras cursando SENA u Horas sociales? <small className='text-red/80'>*</small> </h3>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                id="sena"
                                name="sena"
                                value="SI"
                                className="accent-red
                                    focus:accent-yellow" />
                            Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="sena"
                                name="sena"
                                value="NO"
                                className="accent-red
                                    focus:accent-yellow"
                            />
                            No
                        </label>
                        {errors.sena && touched.sena && <p className='text-red text-xs font-Poppins'>{errors.sena}</p>}

                    </div>

                    {/* the birth input with the id availability */}
                    {/* question 13 id availability */}

                    <div
                        value={values.availability}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuentas con Disponibilidad de tiempo Lunes, Martes, Miercoles Y Viernes de 3:00 PM a 6:00 PM? <small className='text-red/80'>*</small></h3>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                id="availability"
                                name="availability"
                                value="SI"
                                className="accent-red
                                    focus:accent-yellow" />
                            Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="availability"
                                name="availability"
                                value="NO"
                                className="accent-red
                                    focus:accent-yellow"
                            />
                            No
                        </label>
                        {errors.availability && touched.availability && <p className='text-red text-xs font-Poppins'>{errors.availability}</p>}
                    </div>


                    {/* the birth input with the id phone */}
                    {/* question 15 id phone */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Telefono Celular principal  <small className='text-red/80'>*</small></label>
                        <input
                            id='phone'
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='000 000 00 00'
                            className={errors.phone && touched.phone ? 'w-full p-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'} ></input>
                        {errors.phone && touched.phone && <p className='text-red text-xs font-Poppins'>{errors.phone}</p>}
                    </div>

                    {/* the birth input with the id phoneTwo */}
                    {/* question 16 id phoneTwo */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Telefono Celular Secundario</label>
                        <input
                            value={values.phoneTwo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='phoneTwo'
                            placeholder='000 000 00 00'
                            className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'></input>
                    </div>
                    {/* question 14 id emailPerson */}

                    <div className='mx-12 sm:mx-40 md:mx-16  lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Correo: <small className='text-red/80'>*</small></h3>
                        <input
                            id="emailPerson"
                            value={values.emailPerson}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type='email' placeholder='correo@correo.edu.co' className={errors.emailPerson && touched.emailPerson ? 'w-full p-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}></input>
                        {errors.emailPerson && touched.emailPerson && <p className='text-red text-xs font-Poppins'>{errors.emailPerson}</p>}
                        <p className=' font-Nunito text-sm text-dark/60'> En este correo te enviaremos información sobre todo el proceso, te recomendamos que sea el correo oficial de tu colegio</p>
                    </div>

                    <div className='flex justify-end col-span-2'>
                        <Link to="/Social" className='mr-8 w-28' >
                            <button
                                onClick={studentP}
                                disabled={!(isValid && dirty)}
                                type='submit'
                                className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-dark  hover:text-light text-sm font-Poppins font-bold rounded-sm disabled:opacity-25'>Siguiente</button>
                        </Link>
                    </div>
                    <br />
                </div>
            </form>


            <br />
        </div>
    );

};

export default Student