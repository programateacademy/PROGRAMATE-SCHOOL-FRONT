import React from 'react'

const Requirements = () => {
    return (
        <div className='mx-3'>

            {/* requirements sections */}

            <h2 className=' font-Poppins text-dark font-bold my-3 sm:text-2xl md:ml-6 lg:ml-10'>
                ¿Cuales son los requerimientos para participar?
            </h2>
            <br />
            <section className='container m-auto sm:flex items-center md:grid grid-cols-4 gap-14'>

                {/* First requirement */}
                <article className='flex justify-center sd:flex items-center flex-col '>
                    <p>
                        <img src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/recurso-uno.png?raw=true' />
                    </p>
                    <p className='text-center font-Nunito sm:text-sm'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis consequuntur dolorum debitis id a laboriosam libero
                    </p>
                </article>

                {/* Second requirement */}
                <article className='flex justify-center items-center  sm:flex flex-col md:row-span-6'>
                    <p>
                        <img src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/recurso-dos.png?raw=true' />
                    </p>
                    <p className='text-center font-Nunito sm:text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis consequuntur dolorum debitis id a laboriosam libero amet
                    </p>
                </article>

                {/* Third requirement */}
                <article className='flex justify-center items-center md:flex flex-col lg:flex-col-reverse'>
                    <p>
                        <img src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/recurso-tres.png?raw=true' />
                    </p>
                    <p className='text-center font-Nunito sm:text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis consequuntur dolorum debitis id a laboriosam libero amet
                    </p>
                </article>

                {/* fourth requirement */}
                <article className=' flex justify-center items-center sm:flex flex-col text-sm md:row-span-5'>
                    <p>
                        <img src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/recurso-cuatro.png?raw=true' />
                    </p>
                    <p className='text-center font-Nunito sm:flex flex-col'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis consequuntur dolorum debitis id a laboriosam libero amet
                    </p>
                </article>
            </section>
            <h2 className='font-Poppins text-dark font-bold sm:text-2xl md:ml-6 lg:ml-10'>
                El proceso para aplicar es muy sencillo
            </h2>

            {/* process section to apply */}
            <div className='flex justify-around items-center'>
                <section className=''>
                    {/* first process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='md:mr-3 lg:mr-5' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A11-amarilla.png?raw=true' />
                            
                        </div>
                        <div>
                            <h5 className=' text-dark font-bold sm:text-2xl ml-6 my-2 md:text-3xl xl:text-4xl 2xl:text-5xl '> Regístrate al programa</h5>
                            <p className=' font-Nunito sm:m-6 text-sm ml-6 mb-2 md:text-xl md:my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-6 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className=' font-Poppins font-extrabold sm:m-5 items-center'>
                            15 min
                        </h5>
                    </article>

                    {/* second process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='md:mr-3 lg:mr-9'width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A12-amarilla.png?raw=true' />
                            
                        </div>
                        <div>
                            <h5 className=' text-dark font-bold sm:text-2xl ml-6 my-2 md:text-3xl xl:text-4xl 2xl:text-5xl'> Regístrate al programa</h5>
                            <p className='font-Nunito sm:m-6 text-sm ml-6 mb-2 md:text-xl md:my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-2 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className='font-Poppins font-extrabold sm:m-5 items-center'>
                            15 min
                        </h5>
                    </article>

                    {/* third process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='md:mr-3 lg:mr-9' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A13-amarilla.png?raw=true' />
                        </div>
                        <div>
                            <h5 className=' text-dark font-bold sm:text-2xl ml-6 my-2 md:text-3xl xl:text-4xl 2xl:text-5xl'> Regístrate al programa</h5>
                            <p className='font-Nunito sm:m-6 text-sm ml-6 mb-2 md:text-xl md:my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-2 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className='font-Poppins font-extrabold sm:m-5 items-center'>
                            15 min
                        </h5>
                    </article>

                    {/* fourth process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='md:mr-3 lg:mr-9' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A14-amarilla.png?raw=true' />
                        </div>
                        <div>
                            <h5 className=' text-dark font-bold sm:text-2xl ml-6 my-2 md:text-3xl xl:text-4xl 2xl:text-5xl'> Regístrate al programa</h5>
                            <p className='font-Nunito sm:m-6 text-sm ml-6 mb-2 md:text-xl md:my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-2 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className='font-Poppins font-extrabold sm:m-5 items-center'>
                            15 min
                        </h5>
                    </article>

                    {/* fifth process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='md:mr-3 lg:mr-6'width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A15-amarilla.png?raw=true' />
                        </div>
                        <div>
                            <h5 className=' text-dark font-bold sm:text-2xl ml-6 my-2 md:text-3xl xl:text-4xl 2xl:text-5xl'> Regístrate al programa</h5>
                            <p className='font-Nunito sm:m-6 text-sm ml-6 mb-2 md:text-xl md:my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-2 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className='font-Poppins font-extrabold sm:m-5 items-center'>
                            15 min
                        </h5>
                    </article>
                    <div className='flex justify-end pb-9'>
                        <img width={100} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/brillas-blanco-y-negro.png?raw=true'/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Requirements