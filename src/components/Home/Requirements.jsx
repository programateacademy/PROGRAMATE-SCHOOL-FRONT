import React from 'react'

const Requirements = () => {
    return (
        <div className='mx-3'>

            {/* requirements sections */}

            <h2 className=' font-Poppins text-dark font-bold sm:text-2xl'>
                ¿Cuales son los requerimientos para participar?
            </h2>
            <br />
            <section className='container m-auto sm:flex items-center md:grid grid-cols-4 gap-14'>

                {/* First requirement */}
                <article className='flex justify-center sd:flex items-center flex-col md:'>
                    <p>
                        <img src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/recurso-uno.png?raw=true' />
                    </p>
                    <p className='text-center font-Nunito sm:text-sm'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis consequuntur dolorum debitis id a laboriosam libero
                    </p>
                </article>

                {/* Second requirement */}
                <article className='flex justify-center items-center sm:flex flex-col md:row-span-6'>
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
            <br />
            <h2 className='font-Poppins text-dark  font-bold sm:text-2xl'>
                El proceso para aplicar es muy sencillo
            </h2>
            <br />

            {/* process section to apply */}
            <div className='flex justify-around items-center'>
                <section className=''>
                    {/* first process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='z-0' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A11-amarilla.png?raw=true' />
                            
                        </div>
                        <div>
                            <h5 className=' text-dark text-2xl font-bold indent-8'> Regístrate al programa</h5>
                            <p className=' indent-8'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-2 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className=' font-Poppins font-extrabold'>
                            15 min
                        </h5>
                    </article>

                    {/* second process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='z-0'width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A12-amarilla.png?raw=true' />
                            
                        </div>
                        <div>
                            <h5 className=' text-dark text-2xl font-bold indent-8'> Regístrate al programa</h5>
                            <p className=' indent-8'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-2 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className=' font-Poppins font-extrabold'>
                            15 min
                        </h5>
                    </article>

                    {/* third process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A13-amarilla.png?raw=true' />
                        </div>
                        <div>
                            <h5 className=' text-dark text-2xl font-bold indent-8'> Regístrate al programa</h5>
                            <p className=' indent-8'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-2 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className=' font-Poppins font-extrabold'>
                            15 min
                        </h5>
                    </article>

                    {/* fourth process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='z-0' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A14-amarilla.png?raw=true' />
                        </div>
                        <div>
                            <h5 className=' text-dark text-2xl font-bold indent-8'> Regístrate al programa</h5>
                            <p className=' indent-8'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-2 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className=' font-Poppins font-extrabold'>
                            15 min
                        </h5>
                    </article>

                    {/* fifth process */}
                    <article className='flex flex-row my-8'>
                        <div className=''>
                            <img className='z-0'width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A15-amarilla.png?raw=true' />
                        </div>
                        <div>
                            <h5 className=' text-dark text-2xl font-bold indent-8'> Regístrate al programa</h5>
                            <p className=' indent-8'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            <button className=' flex m-auto ml-2 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-light text-sm font-Poppins font-medium rounded-sm'>button-Primary</button>
                        </div>
                        <h5 className=' font-Poppins font-extrabold'>
                            15 min
                        </h5>
                    </article>

                </section>
            </div>
        </div>
    )
}

export default Requirements