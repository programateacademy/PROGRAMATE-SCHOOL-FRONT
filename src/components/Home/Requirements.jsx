import React from 'react'

const Requirements = () => {
    return (
        <div className='mx-6 md:mx-24'>

            {/* Requirements sections */}
            <h2 className=' font-Poppins text-dark font-bold my-3 mx-4 text-2xl'>
                ¿Cuales son los requerimientos para participar?
            </h2>
            <section className='mx-4 my-14 sm:flex items-center md:grid grid-cols-4 gap-14'>

                {/* First requirement */}
                <article className='flex justify-center sd:flex items-center flex-col pb-6'>
                    <p>
                        <img src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/recurso-uno.png?raw=true' />
                    </p>
                    <p className='text-center font-Nunito text-sm  sm:text-sm p-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </p>
                </article>

                {/* Second requirement */}
                <article className='flex justify-center items-center sm:flex flex-col md:flex md:row-span-2 md:items-center pb-6 md:pb-0 md:mt-auto'>
                    <p>
                        <img src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/recurso-dos.png?raw=true' />
                    </p>
                    <p className='text-center font-Nunito text-sm sm:text-sm p-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </p>
                </article>

                {/* Third requirement */}
                <article className='flex justify-center items-center md:flex flex-col lg:flex-col-reverse pb-6'>
                    <p>
                        <img src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/recurso-tres.png?raw=true' />
                    </p>
                    <p className='text-center font-Nunito text-sm sm:text-sm p-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </p>
                </article>

                {/* fourth requirement */}
                <article className=' flex justify-center items-center sm:flex flex-col md:flex md:row-span-2 md:items-center pb-6 md:pb-0 md:mt-auto'>
                    <p>
                        <img src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/recurso-cuatro.png?raw=true' />
                    </p>
                    <p className='text-center font-Nunito text-sm  sm:text-sm p-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </p>
                </article>
            </section>
            <h2 className='font-Poppins text-dark font-bold mt-3 mx-4 text-2xl'>
                El proceso para aplicar es muy sencillo
            </h2>

            {/* process section to apply */}
            <div className='flex justify-around items-center'>
                <section className=''>
                    {/* first process */}
                    <article className='flex flex-row mb-8 mx-4 pt-14'>
                        <div className='flex items-center'>
                            <img className='md:mr-3 lg:mr-5' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A11-amarilla.png?raw=true' /> 
                        </div>
                        <div>
                            <h5 className=' text-dark font-bold text-2xl mx-3 my-2 '> Regístrate al programa</h5>
                            <p className=' font-Nunito text-sm mx-3 mb-2 md:text-xl md:my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </p>
                            {/* <button className=' button mx-3 '>button-Primary</button> */}
                        </div>
                        <h5 className=' flex items-center font-Poppins font-extrabold sm:m-5 text-center'>
                            15 min
                        </h5>
                    </article>

                    {/* second process */}
                    <article className='flex flex-row my-8 mx-4'>
                        <div className='flex items-center'>
                            <img className='md:mr-3 lg:mr-5' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A12-amarilla.png?raw=true' />  
                        </div>
                        <div>
                            <h5 className=' text-dark font-bold text-2xl mx-3 my-2 '> Regístrate al programa</h5>
                            <p className=' font-Nunito text-sm mx-3 mb-2 md:text-xl md:my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                            {/* <button className=' button mx-3 '>button-Primary</button> */}
                        </div>
                        <h5 className=' flex items-center font-Poppins font-extrabold sm:m-5 text-center'>15 min</h5>
                    </article>

                    {/* third process */}
                    <article className='flex flex-row my-8 mx-4'>
                        <div className='flex items-center'>
                            <img className='md:mr-3 lg:mr-5' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A13-amarilla.png?raw=true' />  
                        </div>
                        <div>
                            <h5 className=' text-dark font-bold text-2xl mx-3 my-2 '> Regístrate al programa</h5>
                            <p className=' font-Nunito text-sm mx-3 mb-2 md:text-xl md:my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                            {/* <button className=' button mx-3 '>button-Primary</button> */}
                        </div>
                        <h5 className=' flex items-center font-Poppins font-extrabold sm:m-5 text-center'>15 min</h5>
                    </article>

                    {/* fourth process */}
                    <article className='flex flex-row my-8 mx-4'>
                        <div className='flex items-center'>
                            <img className='md:mr-3 lg:mr-5' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A14-amarilla.png?raw=true' />
                            </div>
                        <div>
                            <h5 className=' text-dark font-bold text-2xl mx-3 my-2 '> Regístrate al programa</h5>
                            <p className=' font-Nunito text-sm mx-3 mb-2 md:text-xl md:my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                            {/* <button className=' button mx-3 '>button-Primary</button> */}
                        </div>
                        <h5 className=' flex items-center font-Poppins font-extrabold sm:m-5 text-center'>15 min</h5>
                    </article>
                    {/* fifth process */}
                    <article className='flex flex-row mt-8 mx-4 pb-14'>
                        <div className='flex items-center'>
                            <img className='md:mr-3 lg:mr-5' width={50} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/%C3%A15-amarilla.png?raw=true' />
                            </div>
                        <div>
                            <h5 className=' text-dark font-bold text-2xl mx-3 my-2 '> Regístrate al programa</h5>
                            <p className=' font-Nunito text-sm mx-3 mb-2 md:text-xl md:my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                            {/* <button className=' button mx-3 '>button-Primary</button> */}
                        </div>
                        <h5 className=' flex items-center font-Poppins font-extrabold sm:m-5 text-center'>15 min</h5>
                    </article>
                    <div className='flex justify-end pb-14'>
                        <img width={100} src='https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/brillas-blanco-y-negro.png?raw=true'/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Requirements