import { React, useState } from 'react'
import Modal from '../components/Modal'
import defaultApi from '../apis/index'
import { useFormik } from 'formik'
import { signupSchema } from '../schemas/formSchema'
import swal from 'sweetalert2'
import { AiOutlineEye } from 'react-icons/ai'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const validationSignup = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name1Person: '',
            name2Person: '',
            lastname1Person: '',
            lastname2Person: '',
            documentPerson: '',
            emailPerson: '',
            profilePerson: 3,
            agePerson: '',
            institutionPerson: '',
            termsAndConditions: false,
        },
        validationSchema: signupSchema,
        onSubmit
    })

const [showModal, setShowModal] = useState(false)

const handleOnClose = () => setShowModal(false)

function signUp() {
    var signP = {
        name1Person: values.name1Person,
        name2Person: values.name2Person,
        lastname1Person: values.lastname1Person,
        lastname2Person: values.lastname2Person,
        documentPerson: values.documentPerson,
        emailPerson: values.emailPerson,
        profilePerson: 3,
        agePerson: values.agePerson,
        institutionPerson: values.institutionPerson,
    };
    console.log(signP);
    defaultApi
    .post("/signUp", signP)
    .then((res) => {
        swal.fire({
            text: 'Se ha registrado en PROGRAMATE SCHOOL',
            confirmButtonText: 'OK',
            timer: '3000',
            color: '#262425',
            confirmButtonColor: '#FBC209',
            background: '#FFFFFF',
        });
    })
    .then(err => {
        console.log(err)
    })
    .catch(err => {
        if (err.response.status === 409) {
            swal.fire({
                text: 'Ya existe un usuario con este documento',
                confirmButtonText: 'OK',
                timer: '3000',
                color: '#262425',
                confirmButtonColor: '#FBC209',
                background: '#FFFFFF',
            });
        } else if (err.response.status === 408) {
            swal.fire({
                text: 'Ya existe un usuario con este Correo',
                confirmButtonText: 'OK',
                timer: '3000',
                color: '#262425',
                confirmButtonColor: '#FBC209',
                background: '#FFFFFF',
            });
        }
    })
}

    return (
        <div className='h-screen md:content-center grid grid-rows-5 md:grid-rows-1 md:grid-cols-2'>
            <div className='row-span-1 md:col-start-1 md:col-end-2 md:h-full md:fixed md:w-[50%] bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoOCHO_50.png?raw=true")] bg-cover bg-center grid'>
                <div className='w-7/12 sm:w-5/12 md:w-9/12 m-auto'>
                    <img className='bg-light/90 rounded-lg p-2 md:p-4 shadow-2xl' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'}/>
                </div>
            </div>
            {/* Signup form */}
            <form onSubmit={handleSubmit} autoComplete='off' className='row-span-4 md:col-start-2 md:col-end-3 bg-light py-10 my-auto z-10'>
                <h1 className='mx-12 sm:mx-52 md:mx-12 lg:mx-26 pb-5 text-center text-yellow text-lg sm:text-2xl md:text-2xl lg:text-3xl font-Poppins font-black uppercase'>¡Da el primer paso<br/>y regístrate!</h1>

                {/* Applicant's names (variables: name1Person and name2Person) */}
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid grid-cols-2 gap-x-2'>

                    <label htmlFor='names' className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Nombres:</label>

                    {/* name1Person */}
                    <div>
                        <input
                        value={values.name1Person}
                        onChange={handleChange}
                        id='name1Person'
                        type='text'
                        placeholder='1er nombre'
                        onBlur={handleBlur}
                        className={errors.name1Person && touched.name1Person ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
                        {errors.name1Person && touched.name1Person && <p className='w-full px-1 text-red text-[0.65rem] font-Poppins'>{errors.name1Person}</p>}
                    </div>

                    {/* name2Person */}
                    <div>
                        <input 
                        value={values.name2Person}
                        onChange={handleChange}
                        id='name2Person'
                        type='text'
                        placeholder='2do nombre'
                        onBlur={handleBlur}
                        className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'/>
                    </div>
                </div>

                {/* Applicant's last names (variables: lastname1Person and lastname2Person) */}
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid grid-cols-2 gap-x-2'>

                    <label htmlFor='lastnames'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Apellidos:</label>

                    {/* lastname1Person */}
                    <div>
                        <input
                        value={values.lastname1Person}
                        onChange={handleChange}
                        id='lastname1Person'
                        type='text'
                        placeholder='1er apellido'
                        onBlur={handleBlur}
                        className={errors.lastname1Person && touched.lastname1Person ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
                        {errors.lastname1Person && touched.lastname1Person && <p className='w-full px-1 text-red text-[0.65rem] font-Poppins'>{errors.lastname1Person}</p>}
                    </div>

                    {/* lastname2Person */}
                    <div>
                        <input
                        value={values.lastname2Person}
                        onChange={handleChange}
                        id='lastname2Person'
                        type='text'
                        placeholder='2do apellido'
                        onBlur={handleBlur}
                        className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'/>
                    </div>
                </div>

                {/* Applicant's email (variable: emailPerson) */}
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid grid-cols-1'>

                    <label htmlFor='emailPerson'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Correo:</label>

                    <div>
                        <input
                        value={values.emailPerson}
                        onChange={handleChange}
                        id='emailPerson'
                        type='text'
                        placeholder='correo@correo.edu.co'
                        onBlur={handleBlur}
                        className={errors.emailPerson && touched.emailPerson ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
                        {errors.emailPerson && touched.emailPerson && <p className='w-full px-1 text-red text-[0.65rem] font-Poppins'>{errors.emailPerson}</p>}
                    </div>
                </div>

                {/* Applicant's age and document in media query greater than 768px (variables: documentPerson and agePerson) */}
                <div className='hidden md:grid mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid-cols-2 gap-x-2'>

                    <label htmlFor='documentPerson' className='col-span-1 pb-1.5 text-dark text-sm font-Nunito font-black'>N° de Documento:</label>

                    <label htmlFor='agePerson'  className='col-span-1 pb-1.5 text-dark text-sm font-Nunito font-black'>Edad:</label>

                    {/* documentPerson */}
                    <div>
                        <input
                        value={values.documentPerson}
                        onChange={handleChange}
                        id='documentPerson'
                        type='text'
                        placeholder='0123456789'
                        onBlur={handleBlur}
                        className={errors.documentPerson && touched.documentPerson ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
                        {errors.documentPerson && touched.documentPerson && <p className='w-full px-1 text-red text-[0.65rem] font-Poppins'>{errors.documentPerson}</p>}
                    </div>

                    {/* agePerson */}
                    <div>
                        <input 
                        value={values.agePerson}
                        onChange={handleChange}
                        id='agePerson'
                        type='text'
                        placeholder='00'
                        onBlur={handleBlur}
                        className={errors.agePerson && touched.agePerson ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
                        {errors.agePerson && touched.agePerson && <p className='w-full px-1 text-red text-[0.65rem] font-Poppins'>{errors.agePerson}</p>}
                    </div>
                </div>

                {/* Applicant's document in media query smaller than 768px (variable: documentPerson) */}
                <div className='md:hidden mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid grid-cols-1'>

                    <label htmlFor='documentPerson' className='pb-1.5 text-dark text-sm font-Nunito font-black'>N° de Documento:</label>

                    <input
                    value={values.documentPerson}
                    onChange={handleChange}
                    id='documentPerson'
                    type='text'
                    placeholder='0123456789'
                    onBlur={handleBlur}
                    className={errors.documentPerson && touched.documentPerson ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
                    {errors.documentPerson && touched.documentPerson && <p className='px-1 text-red text-[0.65rem] font-Poppins'>{errors.documentPerson}</p>}
                </div>

                {/* Applicant's age in media query smaller than 768px (variable: agePerson) */}
                <div className='md:hidden mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid grid-cols-1'>

                    <label htmlFor='agePerson' className='pb-1.5 text-dark text-sm font-Nunito font-black'>Edad:</label>

                    <input 
                    value={values.agePerson}
                    onChange={handleChange}
                    id='agePerson'
                    type='text'
                    placeholder='00'
                    onBlur={handleBlur}
                    className={errors.agePerson && touched.agePerson ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
                    {errors.agePerson && touched.agePerson && <p className='px-1 text-red text-[0.65rem] font-Poppins'>{errors.agePerson}</p>}
                </div>

                {/* Applicant's institution  */}
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-1'>
                    <label htmlFor='institutionPerson' className='pb-1.5 text-dark text-sm font-Nunito font-black'>Institución:</label>
                    <select
                    value={values.institutionPerson}
                    onChange={handleChange}
                    id='institutionPerson'
                    type='text'
                    placeholder='Selecciona una opción'
                    onBlur={handleBlur}
                    className={errors.institutionPerson && touched.institutionPerson ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}>
                        <option className='font-medium text-dark'>Selecciona una opción</option>
                        <option className='font-medium text-dark' value='Jardín'>IE El Jardín - Ibagué</option>
                        <option className='font-medium text-dark' value='Olivo'>El Olivo School - Santa Marta</option>
                        <option className='font-medium text-dark' value='Candelaria'>Colegio Integrada La Candelaria</option>
                        <option className='font-medium text-dark' value='Luruaco'>Técnica Agropecuaria Luruaco - Atlantico</option>
                        <option className='font-medium text-dark' value='Cruz'>Colegio Campo de la Cruz - Atlantico</option>
                    </select>
                    {errors.institutionPerson && touched.institutionPerson && <p className='px-1 text-red text-[0.65rem] font-Poppins'>{errors.institutionPerson}</p>}
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 flex flex-col justify-center'>
                    <div className='flex'>
                        <input
                        value={values.termsAndConditions}
                        onChange={handleChange}
                        id='termsAndConditions'
                        type='checkbox'
                        onBlur={handleBlur}
                        className='accent-purple' />
                        <label htmlFor='termsAndConditions' className='flex gap-2 ml-2 text-center text-dark text-sm font-Nunito'>He leído y acepto los <button onClick={() => setShowModal(true)} className='flex items-center gap-2 text-purple hover:text-dark underline decoration-2 underline-offset-4'><b>términos y condiciones</b><AiOutlineEye className='scale-[1.5]'/></button></label>
                        <Modal onClose={handleOnClose} visible={showModal}/>
                    </div>
                    <div className='pt-1'>
                        {errors.termsAndConditions && touched.termsAndConditions && <p className='text-red text-[0.65rem] font-Poppins'>∗ {errors.termsAndConditions} </p>}
                    </div>
                </div>
                <button type='submit' onClick={signUp} className='flex button md:text-base'>Regístrarse</button>
            </form>
        </div>
    )
}

export default validationSignup