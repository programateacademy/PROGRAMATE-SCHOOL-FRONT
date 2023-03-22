import React, { useState, useEffect } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import defaultApi from '../../apis/index'

const UsersTable = () => {

    const [dataStudentsList, setDataStudentsList] = useState([])

    useEffect(() => {
        defaultApi
            .get("/getUsers")
            .then(res => {
                console.log(res.data)
                setDataStudentsList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>

            {/* Header */}        
            <section className='md:pl-4 grid grid-row-2 md:grid-cols-2 text-dark'>
                <h1 className='my-4 font-bold text-xl font-Poppins md:my-8 md:text-xl lg:text-3xl'>
                    Tabla de usuarios registrados
                </h1>
                
                <h2 className='mb-4 flex items-center md:justify-end font-Poppins font-bold text-right'>Crear un usuario<BsFillPlusSquareFill className='scale-[1.5] md:scale-[2] ml-5 rounded-md'/></h2>
            </section>

                <li>
                    {dataStudentsList.map((student) => {
                        console.log()
                        {/* este li es quien contiene el indice para poder iterar a todos los elementos */}

                            return(

                                <li key={student._id} className="clases"> 

                                    <p >Nombre:<span className='text-xl'>{student.name1Person}</span></p>
                                    <p >Apellido:<span className='text-xl'>{student.lastname1Person}</span></p>
                                    <p >Documento:<span className='text-xl'>{student.documentPerson}</span></p>
                                    <p >Edad:<span className='text-xl'>{student.agePerson}</span></p>
                                    <p >Email:<span className='text-xl'>{student.emailPerson}</span></p>
                                    <p >Colegio:<span className='text-xl'>{student.institutionPerson}</span></p>
                            
                                </li>//Comentarios
                            )
                    })}
                </li>

            {/* Table */}
            <section className=''>
                <br/>

                <br/>

                <br/>

                <br/>

                <br/>
            </section>
        </div>
    )
}

export default UsersTable