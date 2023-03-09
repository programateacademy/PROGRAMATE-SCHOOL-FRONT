import { React, useState } from 'react'
import { Link } from 'react-router-dom'

function Social() {

    //Hooks
    const [sisben, setSisben] = useState("");
    const [ethnicGroup, setEthnicGroup] = useState("");
    const [Nationality, setNationality] = useState("");
    const [disability, setDisability] = useState("");
    const [tipeDisability, setTipeDisability] = useState("");

    function socialA() {
        var social = {
            sisben: sisben,
            ethnicGroup: ethnicGroup,
            Nationality: Nationality,
            disability: disability,
            tipeDisability: tipeDisability
        }
        console.log(social)
    }

    return (
        <div>
            <div>
                {/* cover image with logo */}
                <div className='flex h-72 '>
                    <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                    <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                        <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                    </div>
                </div>
                <Link to='/Student'>
                    <button className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-light text-sm font-Poppins font-medium'>Atras</button>
                </Link>

                {/* Form validation */}
                {/* <Formik
                initialValues={{
                    Email: '',
                }}
                validate={(valores) => {
                    let errores = {};
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log('formulario enviado');
                }}
            >


                {/*the name input with the id NAME*/}
                {/* {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => ( */}

                <section
                    className=' font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4'>

                    {/* question 17 id sisben */}
                    <div
                    id="sisben" 
                    value={sisben}
                        onChange={(e) => { setSisben(e.target.value) }}
                    className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Perteneces al sisbén?</label>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                id="sisben"
                                name="sisben"
                                value="Yes"
                                className="accent-red
                                    focus:accent-yellow" />
                            Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="sisben"
                                name="sisben"
                                value="No"
                                className="accent-red
                                    focus:accent-yellow"
                            />
                            No
                        </label>
                    </div>

                    {/* question 18 id ethnicGroup */}
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Eres parte de un grupo étnico?</h3>
                        <select id='ethnicGroup'
                        value={ethnicGroup}onChange={(e) => { setEthnicGroup(e.target.value) }}
                            data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                Palenquero </option>
                            <option className='font-medium text-dark'>
                                Afrocolombiano o Afrodecendiente </option>
                            <option className='font-medium text-dark'>
                                Indigena </option>
                            <option className='font-medium text-dark'>
                                Gitano </option>
                            <option className='font-medium text-dark'>
                                Raizal </option>
                            <option className='font-medium text-dark'>
                                Ninguna de las anteriores </option>
                        </select>
                    </div>

                    {/* question 19 id Nationaly */}
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu nacionalidad?</h3>
                        <select id='Nationality'
                        value={Nationality}onChange={(e) => { setNationality(e.target.value) }}
                            data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                Venezolan@ </option>
                            <option className='font-medium text-dark'>
                                Colombian@</option>
                            <option className='font-medium text-dark'>
                                Otra </option>
                        </select>
                    </div>
                    {/* the break line in the form */}
                    <hr className=" border-2 border-yellow rounded w-full max-w-7xl flex justify-center items-center md:mx-6 md:col-span-2" />

                    {/* question 20 id disability */}
                    <div 
                    value={disability}onChange={(e) => { setDisability(e.target.value) }}
                    className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Perteneces a población en situación de discapacidad?</label>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                name="disability"
                                id="disability"
                                value="Yes"
                                className="accent-red
                                    focus:accent-yellow" />
                            Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="disability"
                                id="disability"
                                value="No"
                                className="accent-red
                                    focus:accent-yellow"
                            />
                            No
                        </label>
                    </div>

                    {/* question 21 id tipeDisability */}
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Qué tipo de discapacidad tienes?</h3>
                        <select id='tipeDisability'
                        value={tipeDisability}onChange={(e) => { setTipeDisability(e.target.value) }}
                            data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                Fisica </option>
                            <option className='font-medium text-dark'>
                                Auditiva </option>
                            <option className='font-medium text-dark'>
                                Visual </option>
                            <option className='font-medium text-dark'>
                                Intelectual / Cognitiva </option>
                            <option className='font-medium text-dark'>
                                SordoCegera </option>
                            <option className='font-medium text-dark'>
                                Pisicosocial </option>
                            <option className='font-medium text-dark'>
                                Multiple </option>
                            <option className='font-medium text-dark'>
                                Otra </option>
                            <option className='font-medium text-dark'>
                                Ninguno de los anteriores </option>
                        </select>
                    </div>

                </section>

                {/* <Link to="/Residence" className='flex justify-end mr-8' > */}
                <button
                        onClick={socialA}
                        type='submit'
                        // disabled={true}
                        className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Siguiente</button>
            {/* </Link> */}
        </div>
        </div>
    )
};

export default Social