import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineCelebration } from 'react-icons/md'

const StudentPhases = () => {
    return (
        <main>
            {/* presentation of the student process */}
            <div className="flex justify-between items-center mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center bg-purple rounded-full h-[150px] w-[10px]">
                    <div className="bg-purple w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <BsCheck className="text-white text-5xl" />
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-purple mx-4 md:text-lg lg:text-3xl">Fase 1: Registro en la plataforma</h2>
                <p></p>
            </div>
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center  bg-dark rounded-full h-[150px] w-[10px] ">
                    <div className="bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>2</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 2: Cuentanos un poco sobre ti queremos conocerte</h2>
                <p></p>
            </div>
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center bg-dark rounded-full h-[150px] w-[10px]">
                    <div className="bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>3</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 3: Prueba tecnica</h2>
                <p></p>
            </div>
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center bg-dark rounded-full h-[150px] w-[10px]">
                    <div className="bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>4</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 4: inicio de clases</h2>
                <p></p>
            </div><br/>
            <p className=' font-Poppins font-semibold text-center text-3xl mx-3 mb-2 md:text-3xl md:my-8 flex flex-row justify-center'><MdOutlineCelebration className='text-4xl text-center'/> Felicidades ya eres parte del programa!</p>
        </main>
    )
}

export default StudentPhases