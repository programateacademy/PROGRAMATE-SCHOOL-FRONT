import { React } from 'react'
import { Link } from 'react-router-dom';


const Guardian = () => {

    let rate = 0;

    const [nameGuardian, setNameGuardian] = useState("");
    const [relationship, setRelationship] = useState("");
    const [DocumentTypeGuardian, setDocumentTypeGuardian] = useState("");
    const [numberIdGuardian, setNumberIdGuardian] = useState("");
    const [EmailGuardian, setEmailGuardian] = useState("");
    const [PhoneGuardian, setPhoneGuardian] = useState("");
    const [PhoneGuardianTwo, setPhoneGuardianTwo] = useState("");
    const [addressGuardian, setAddressGuardian] = useState("");
    const [departamentoGuardian, setEmailGuardiandepartamentoGuardian] = useState("");
    const [educationLevelGuardian, setEducationLevelGuardian] = useState("");
    const [economic, setEconomic] = useState("");
    const [family, setFamily] = useState("");

    function formAnnouncement() {
        var formAn = {
            nameGuardian: nameGuardian,
            relationship: relationship,
            DocumentTypeGuardian: DocumentTypeGuardian,
            numberIdGuardian: numberIdGuardian,
            EmailGuardian: EmailGuardian,
            PhoneGuardian: PhoneGuardian,
            PhoneGuardianTwo: PhoneGuardianTwo,
            addressGuardian: addressGuardian,
            departamentoGuardian: departamentoGuardian,

            educationLevelGuardian: educationLevelGuardian,
            economic: economic,
            family: family
        }
        console.log(formAn)
        // axios.post("http://localhost:3000/", formAn)
        // .then(res => {alert("hola mundo") })
    }

    const validateForm = () => {
        //Logica de las preguntas para sumar puntajes
        if (!addressStudent) {
            const errorAddressStudent = "true"
        }
        if (!departamentoStudent) {
            const validateForm = "true"
        }
        if (!rural) {
            const validateForm = "true"
        }
        if (!bogota) {
            const validateForm = "true"
        }
        if (!stratum) {
            const validateForm = "true"
        }
        else {
            if (addressStudent == "femenino") {
                rate = rate + 1
            }
        }
    }

    return (
        <div>Guardian
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className=' flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto'>
                    <img width={300}  className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>

            <Link to='/Residence'>    
                <button className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Atras</button>
            </Link> 
            <Formik
                initialValues={{
                    nameGuardian: '',
                    relationship: '',
                    DocumentTypeGuardian:'',
                    numberIdGuardian: '',
                    EmailGuardian: '',
                    PhoneGuardian: '',
                    PhoneGuardianTwo: '',
                    addressGuardian: '',
                    departamentoGuardian: '',
                    
                    educationLevelGuardian: '',
                    economic: '',
                    family: '',
                }}

                validate={(valores) => {
                    let errores = {};
                    if (!valores.nameGuardian) {
                        errores.nameGuardian = 'ingresa el Nombre completo de tu acudiente'
                    }
                    if (!valores.relationship) {
                        errores.relationship = 'ingresa el parentesco con tu acudiente'
                    }
                    if (!valores.DocumentTypeGuardian) {
                        errores.DocumentTypeGuardian = 'ingresa el tipo de documento de identidad de tu acudiente'
                    }
                    if (!valores.numberIdGuardian) {
                        errores.numberIdGuardian = 'ingresa el Numero de documento de tu acudiente'
                    }
                    if (!valores.EmailGuardian) {
                        errores.EmailGuardian = 'ingresa el correo electronico de tu acudiente'
                    }
                    if (!valores.PhoneGuardian) {
                        errores.PhoneGuardian = 'ingresa el numero de telefono de tu acudiente'
                    }
                    // if (!valores.PhoneGuardianTwo) {
                    //     errores.PhoneGuardianTwo = 'ingresa el segundo numero de telefono de tu acudiente'
                    // }
                    if (!valores.addressGuardian) {
                        errores.addressGuardian = 'ingresa la direccion de residencia de tu acudiente'
                    }
                    if (!valores.departamentoGuardian) {
                        errores.departamentoGuardian = 'ingresa el departamento de residencia de tu acudiente'
                    }

                    if (!valores.educationLevelGuardian) {
                        errores.educationLevelGuardian = 'Ingresa nivel educativo de tus padres'
                    }
                    if (!valores.economic) {
                        errores.economic = 'Ingresa la actividad economica de tus padres'
                    }
                    if (!valores.family) {
                        errores.family = 'Selecciona la cantidad de personas en tu familia'
                    }
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log('formulario enviado');
                    console.log(valores)
                }}
            >
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <Form className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4 '  onSubmit={handleSubmit}>
                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 ' >
                            <label  className='pb-1.5 text-dark text-sm font-Nunito font-black'>Nombre completo de tu acudiente</label>
                            <input
                                className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                                type="text"
                                id='nameGuardian'
                                name='nameGuardian'
                                placeholder='Nombre completo de tu acudiente'
                                value={values.nameGuardian}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                            {touched.nameGuardian && errors.nameGuardian && <div className="text-center font-Nunito text-red text-sm">{errors.nameGuardian}</div>}
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6  '>
                            <label  className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Parentesco contigo</label>
                            <input
                                className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                                type="text"
                                id='relationship'
                                name='relationship'
                                placeholder='Parentesco contigo'
                                value={values.relationship}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                            {touched.relationship && errors.relationship && <div className="text-center font-Nunito text-red text-sm">{errors.relationship}</div>}
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black' >Tipo de documento</h3>
                            <select id='DocumentTypeGuardian'
                                name='DocumentTypeGuardian'
                                value={values.DocumentTypeGuardian}
                                onChange={handleChange}
                                onBlur={handleBlur}
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

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                            <label htmlFor='relationship' className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Numero de documento</label>
                            <input
                                className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                                type="text"
                                id='numberIdGuardian'
                                name=''
                                placeholder='Parentesco contigo'
                                value={values.numberId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                            {touched.numberId && errors.numberId && <div className="text-center font-Nunito text-red text-sm">{errors.numberId}</div>}
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 md:col-span-2 lg:mx-28 pb-6'>
                            <label  className='pb-1.5 text-dark text-sm font-Nunito font-black '>Correo Electronico</label>
                            <p className=' font-Nunito text-gray-500 text-sm '> En este correo enviaremos copia de la información sobre todo el proceso, te recomendamos que sea el correo que revise constantemente</p>
                            <input
                                className=' w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow md:w-1/2'
                                type="Email"
                                id='EmailGuardian'
                                name='Email'
                                placeholder='Correo@correo.edu'
                                value={values.EmailGuardian}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                            {touched.EmailGuardian && errors.EmailGuardian && <div className="mx-9 font-Nunito text-red text-sm">{errors.EmailGuardian}</div>}
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label  className='pb-1.5 text-dark text-sm font-Nunito font-black'>Teléfono celular principal de tu acudiente</label>
                            <input
                                className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                                type="Phone"
                                id='PhoneGuardian'
                                name='Phone'
                                placeholder='000 000 00 00'
                                value={values.PhoneGuardian}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                            {touched.PhoneGuardian && errors.PhoneGuardian && <div className="text-center font-Nunito text-red text-sm">{errors.PhoneGuardian}</div>}
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Teléfono celular o fijo secundario de tu acudiente</label>
                            <input
                                className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                                type="Phone"
                                id='PhoneGuardianTwo'
                                name='Phone'
                                placeholder='000 000 00 00'
                            ></input>
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 '>
                            <label htmlFor='addressStudent' className=' pb-1.5 text-dark text-sm font-Nunito font-black'>Dirección permanente / recurrente de residencia</label>
                            <input
                                className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow in-range:border-re'
                                type="text"
                                id='addressGuardian'
                                name=''
                                placeholder="Dirección permanente / recurrente de residencia"
                                value={values.addressGuardian}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                            {touched.addressGuardian && errors.addressGuardian && <div className="text-center font-Nunito text-red text-sm">{errors.addressGuardian}</div>}
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Departamento de residencia</h3>
                            <select id='departamentoGuardian'
                                name='departamentoGuardian'
                                value={values.departamentoGuardian}
                                onChange={handleChange}
                                onBlur={handleBlur} data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                                <option className='font-Poppins font-medium text-dark'>Selecciona una opción</option>
                                <option className='font-Poppins font-medium text-dark'>Atlántico</option>
                                <option className='font-medium text-dark'>Bogotá</option>
                                <option className='font-medium text-dark'>Magdalena</option>
                                <option className='font-medium text-dark'>Tolima</option>
                            </select>
                        </div>

                        <hr className=" border-2 border-yellow rounded w-full max-w-7xl flex justify-center items-center md:mx-6 md:col-span-2" />

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es el nivel educativo de tus padres?</label>
                            <select id='educationLevelGuardian'
                                name='educationLevelGuardian'
                                value={values.educationLevelGuardian}
                                onChange={handleChange}
                                onBlur={handleBlur}
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
                            {touched.levelEducationGuardian && errors.levelEducationGuardian && <div className="text-center font-Nunito text-red text-sm">{errors.levelEducationGuardian}</div>}
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu actividad económica / ocupación actual del principal proveedor en tu casa?</label>
                            <select id='economic'
                                name='economic'
                                value={values.economic}
                                onChange={handleChange}
                                onBlur={handleBlur}
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

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuántas personas componen tu núcleo familiar?</label>
                            <select id='family'
                                name='family'
                                value={values.family}
                                onChange={handleChange}
                                onBlur={handleBlur}
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

                        <Link className='flex justify-end' to='/Vocation'>
                            <button className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Siguiente</button>
                        </Link> 
                        
                    </Form>
                )}
            </Formik>  
            
        </div>
    )
}

export default Guardian