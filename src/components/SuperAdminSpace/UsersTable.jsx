import React, { useState, useEffect } from 'react'
// import DataTable from 'datatables.net-dt'
// import defaultApi from '../../apis/index'

const UsersTable = () => {

//     const [dataStudentsList, setDataStudentsList] = useState('')

//     useEffect(() => {
//         defaultApi
//             .get("/getUsers")
//             .then(res => {
//                 console.log(res.data)
//                 setDataStudentsList(res.data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     })

//     return (
//         <div>

//             {/* Header */}        
//             <section className='md:pl-4 grid grid-row-2 md:grid-cols-2 text-dark'>
//                 <h1 className='my-4 font-bold text-xl font-Poppins md:my-8 md:text-xl lg:text-3xl'>
//                     Tabla de usuarios registrados
//                 </h1>
//             </section>

//                 <li>
//                     {dataStudentsList.map((student) => {
//                         console.log()
//                         {/* este li es quien contiene el indice para poder iterar a todos los elementos */}

//                             return(

//                                 <li key={student._id} className="clases"> 

//                                     <p >Nombre:<span className='text-xl'>{student.name1Person}</span></p>
//                                     <p >Apellido:<span className='text-xl'>{student.lastname1Person}</span></p>
//                                     <p >Documento:<span className='text-xl'>{student.documentPerson}</span></p>
//                                     <p >Edad:<span className='text-xl'>{student.agePerson}</span></p>
//                                     <p >Email:<span className='text-xl'>{student.emailPerson}</span></p>
//                                     <p >Colegio:<span className='text-xl'>{student.institutionPerson}</span></p>
                            
//                                 </li>//Comentarios
//                             )
//                     })}
//                 </li>

//             {/* Table */}
            
//             <section className='bg-gray-100 text-gray-900 tracking-wider leading-normal'>
//             {dataStudentsList.map((student) => {
//                         console.log()
//                         {/* este li es quien contiene el indice para poder iterar a todos los elementos */}

//                         return(
                
//                 <div className="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2">
//                     <div key={_id} class="bg-green-400 bg-opacity-100 text-gray-100 text-center"><p class="text-xl">Datatables - Tailwind CSS</p></div>			
//                     <div id='recipients' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">			 				
//                         <table id="users" className="stripe hover">
//                             <thead>
//                                 <tr className="bg-indigo-400 bg-opacity-100 text-white">
//                                     <th data-priority="1">USER_ID</th>
//                                     <th data-priority="2">USER NAME</th>
//                                     <th data-priority="3">FIRST NAME</th>
//                                     <th data-priority="4">LAST NAME</th>
//                                     <th data-priority="5">GENDER</th>
//                                     <th data-priority="6">PASSWORD</th>
//                                     <th data-priority="7">STATUS</th>
//                                 </tr>
//                             </thead>
//                                 <tr>
//                                     <th data-priority="1">{name1Person}</th>
//                                 </tr>
//                             <tbody>
//                             </tbody>					
//                         </table>				
//                     </div>	
//                 </div>
//                             )
//                         })}
//             </section>
//         </div>
//     )
}

export default UsersTable