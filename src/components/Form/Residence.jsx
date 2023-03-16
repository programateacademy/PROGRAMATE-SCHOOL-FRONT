import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { residenceShema } from '../../schemas/formSchema'
import defaultApi from '../../apis/index'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const Residence = () => {
    // formk validations
    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } = useFormik({
        initialValues: {
            addressStudent: '',
            departmentStudent: '',
            rural: '',
            bogota: '',
            stratum: '',
        },
        validationSchema: residenceShema,
        onSubmit
    });
    // console.log(errors);
    // backend connection
    function residenceP() {
        var view3 = {
            addressStudent: values.addressStudent,
            departmentStudent: values.departmentStudent,
            rural: values.rural,
            bogota: values.bogota,
            stratum: values.stratum
        }
        console.log(view3);
        defaultApi
            .post("/registertoannouncement", view3)
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
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoDOS.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className=' flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>
            <Link to='/Social'>
                <button className='m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-dark hover:text-light text-sm font-Poppins font-bold'>Atras</button>
            </Link>

            <h2 className=' font-Poppins font-semibold flex justify-center mb-5 text-2xl'>
                Informacion de Recidencia
            </h2>
            <form
                onSubmit={handleSubmit}
                className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4' >

                {/* question 22 id addressStudent */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Dirección permanente / recurrente de residencia <small className='text-red/80'>*</small></label>
                    <input
                        className={errors.addressStudent && touched.addressStudent ? 'w-full p-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}
                        type="text"
                        id='addressStudent'
                        name='addressStudent'
                        placeholder="Dirección permanente / recurrente de residencia"
                        value={values.addressStudent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></input>
                    {errors.addressStudent && touched.addressStudent && <p className='text-red text-xs font-Poppins'>{errors.addressStudent}</p>}
                </div>

                {/* question 23 id departmentStudent */}

                <div className=' mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>department de residencia <small className='text-red/80'>*</small> </label>
                    <select
                        id='departmentStudent'
                        name='departmentStudent'
                        value={values.departmentStudent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.departmentStudent && touched.departmentStudent ? 'w-full p-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        <option
                            
                            className='font-medium text-dark'>Selecciona una opción</option>
                        <option
                            value='Atlántico' 
                            className='font-medium text-dark'>Atlántico</option>
                        <option
                            value='Bogotá' className='font-medium text-dark'>Bogotá</option>
                        <option
                            value='Magdalena' className='font-medium text-dark'>Magdalena</option>
                        <option
                            value='Tolima'
                            className='font-medium text-dark' >Tolima</option>
                    </select>
                    {errors.departmentStudent && touched.departmentStudent && <p className='text-red text-xs font-Poppins'>{errors.departmentStudent}</p>}
                </div>

                {/* question 24 id rural */}

                <div
                    value={values.rural}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label
                        className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Tu residencia se encuentra en el área rural de tu department?<small className='text-red/80'>*</small></label>
                    <label className='flex flex-row font-Nunito'>
                        <input
                            type="radio"
                            id="rural"
                            name="rural"
                            value="SI"
                            className="accent-red
                                focus:accent-yellow" />
                        Si
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="rural"
                            name="rural"
                            value="NO"
                            className="accent-red
                                focus:accent-yellow"
                        />
                        No
                    </label>
                    {errors.radio && touched.radio && <p className='text-red text-xs font-Poppins'>{errors.radio}</p>}
                </div>

                {/* question 25 id bogota */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Si tu lugar de residencia es Bogotá, ¿Cuál es la localidad de residencia? <small className='text-red/80'>*</small></label>
                    <select
                        id='bogota'
                        name='bogota'
                        value={values.bogota}
                        onChange={handleChange}
                        onBlur={handleBlur} data-te-select-init data-te-select-filter='true' className={errors.bogota && touched.bogota ? 'w-full p-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        <option className='font-medium text-dark'>Selecciona una opción</option>
                        <option className='font-medium text-dark' value='Antonio Nariño'>localidad de Antonio Nariño</option>
                        <option className='font-medium text-dark' value='Barrios Unidos'>localidad de Barrios Unidos</option>
                        <option className='font-medium text-dark' value='Bosa'>localidad de Bosa</option>
                        <option className='font-medium text-dark' value='Chapinero'>localidad de Chapinero</option>
                        <option className='font-medium text-dark' value='Ciudad Bolívar'>localidad de Ciudad Bolívar</option>
                        <option className='font-medium text-dark' value='Engativá'>localidad de Engativá</option>
                        <option className='font-medium text-dark' value='Fontibón'>localidad de Fontibón</option>
                        <option className='font-medium text-dark' value='Kennedy'>localidad de Kennedy</option>
                        <option className='font-medium text-dark' value='Candelaría'>localidad de La Candelaría</option>
                        <option className='font-medium text-dark' value='Mártires'>localidad de Los Mártires</option>
                        <option className='font-medium text-dark' value='Puente Aranda'>localidad de Puente Aranda</option>
                        <option className='font-medium text-dark' value='Rafael Uribe Uribe'>localidad de Rafael Uribe Uribe</option>
                        <option className='font-medium text-dark' value='Ninguna'>Ninguna</option>
                    </select>
                    {errors.bogota && touched.bogota && <p className='text-red text-xs font-Poppins'>{errors.bogota}</p>}
                </div>

                {/* question 26 id stratum */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu estrato socioeconómico?
                        (De acuerdo con la estratificación reportada en los recibos de servicios públicos) <small className='text-red/80'>*</small></label>
                    <select
                        id='stratum'
                        name='stratum'
                        value={values.stratum}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-te-select-init data-te-select-filter='true' className={errors.stratum && touched.stratum ? 'w-full p-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                        <option className='font-medium text-dark'>Selecciona una opción</option>
                        <option className='font-medium text-dark' value='1'>1</option>
                        <option className='font-medium text-dark' value='2'>2</option>
                        <option className='font-medium text-dark' value='3'>3</option>
                        <option className='font-medium text-dark' value='4'>4</option>
                        <option className='font-medium text-dark' value='5'>5</option>
                        <option className='font-medium text-dark' value='6'>6</option>
                    </select>
                    {errors.stratum && touched.stratum && <p className='text-red text-xs font-Poppins'>{errors.stratum}</p>}
                </div><br />

                <div className='flex justify-end col-span-2'>
                <Link to="/Guardian" className='mr-8  w-28' >
                    <button
                        onClick={residenceP}
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

export default Residence