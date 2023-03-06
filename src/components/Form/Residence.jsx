import {React, } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik'

const Residence = () => {
    
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
            <Formik
            initialValues={{
                    addressStudent: '',
                    departamentoStudent: '',
                    rural: '',
                    bogota: '',
                    stratum:'',
                }}

                validate={(valores) => {
                    let errores = {};
                    if (!valores.addressStudent) {
                        errores.addressStudent = 'ingresa tu dirección permanente / recurrente de residencia'
                    }
                    if (!valores.departamentoStudent) {
                        errores.departamentoStudent = 'ingresa el departamento de residencia'
                    }
                    if (!valores.rural) {
                        errores.rural = 'Selecciona una opción'
                    }
                    if (!valores.bogota) {
                        errores.bogota = 'ingresa la localidad de residencia'
                    }
                    if (!valores.stratum) {
                        errores.stratum = 'ingresa el estrato de residencia'
                    }
                    
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log('formulario enviado');
                    // console.log(valores)
                }}
            >
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <Form className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                            <label htmlFor='addressStudent' className='pb-1.5 text-dark text-sm font-Nunito font-black'>Dirección permanente / recurrente de residencia</label>
                            <input
                                className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                                type="text"
                                id='addressStudent'
                                name=''
                                placeholder="Dirección permanente / recurrente de residencia"
                                value={values.addressStudent}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                            {touched.addressStudent && errors.addressStudent && <div className="text-center font-Nunito text-red text-sm">{errors.addressStudent}</div>}
                        </div>

                        <div className=' mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Departamento de residencia</label>
                            <select id='departamentoStudent' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                                    <option className='font-medium text-dark'>Selecciona una opción</option>
                                    <option className='font-medium text-dark'>Atlántico</option>
                                    <option className='font-medium text-dark'>Bogotá</option>
                                    <option className='font-medium text-dark'>Magdalena</option>
                                    <option className='font-medium text-dark'>Tolima</option>
                                </select>
                            </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Tu residencia se encuentra en el área rural de tu Departamento?</label>
                            <label className='flex flex-row font-Nunito'>
                                <Field
                                    type="radio"
                                    id="rural"
                                    name="rural"
                                    value="Yes"
                                    className="accent-red
                                    focus:accent-yellow" />
                                Si
                            </label>
                            <label>
                                <Field
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

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Si tu lugar de residencia es Bogotá, ¿Cuál es la localidad de residencia?</label>
                            <select id='bogota' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
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
                        
                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu estrato socioeconómico? 
                                (De acuerdo con la estratificación reportada en los recibos de servicios públicos)</label>
                            <select id='stratum' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                                <option className='font-medium text-dark'>Selecciona una opción</option>
                                <option className='font-medium text-dark'>1</option>
                                <option className='font-medium text-dark'>2</option>
                                <option className='font-medium text-dark'>3</option>
                                <option className='font-medium text-dark'>4</option>
                                <option className='font-medium text-dark'>5</option>
                                <option className='font-medium text-dark'>6</option>
                            </select>
                        </div>

                        <Link className='flex justify-end' to='/Guardian'>
                            <button type='submit' disabled="" className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Siguiente</button>
                        </Link> 
                    </Form>
                )}
            </Formik>
            
            

            

            
        </div>
    )
}

export default Residence