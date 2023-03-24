import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import defaultApi from '../../apis/index';
import DataTable from 'datatables.net-dt';

const UsersTable = () => {

    let Table = new DataTable('#myTable', {
        responsive: true,
    });

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
    
    //FORM TABLE TWO
    var studentTable;
    let studentsTableIsInitialized = false;
    
    let dataTableOptions = {
        pageLength: 10,
        destroy: true,
    }

    const initDataTable = async() => {
        if (studentsTableIsInitialized) {
            studentTable.destroy();
        }
        await listStudents();

        $(document).ready(function() {
            $('#dataTable_students').DataTable( {
                "pagingType": "scrolling"
            } );
        } );
        
        // studentTable = $('#dataTable_students').DataTable( dataTableOptions );
        // DataTable = $('#dataTable_students').DataTable( dataTableOptions );

        studentsTableIsInitialized = true;
    }

    const listStudents = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/getUsers");
            const students = await response.json();

            let content = ``;
            students.forEach((student, index) => {
                content += `<tr>
                    <td>${index + 1}</td>
                    <td>${student.name1Person}</td>
                    <td>${student.lastname1Person}</td>
                    <td>${student.documentPerson}</td>
                    <td>${student.agePerson}</td>
                    <td>${student.emailPerson}</td>
                    <td>${student.institutionPerson}</td>                  
                </tr>`
            })
            tableBody_students.innerHTML = content;
        } catch (ex) {
            alert(ex);   
        }
    }

    window.addEventListener("load", async () => {
        await initDataTable();
    });
    
    return (
        <div>
                    

            {/* Header */}        
            <section className='md:pl-4 grid grid-row-2 md:grid-cols-2 text-dark'>
                <h1 className='my-4 font-bold text-xl font-Poppins md:my-8 md:text-xl lg:text-3xl'>
                    Tabla de usuarios registrados
                </h1>
            </section>

                    {/* FORM TABLE */}
                <button
                // onClick={initDataTable}
                className="bg-yellow hover:bg-dark text-dark hover:text-light font-semibold font-Poppins py-2 px-4 rounded">VER LISTADO DE USUARIOS</button>
                <div>
                    <div>
                        <div
                        className='p-5 w-full'
                        >
                            <table id="dataTable_students" className='table table-striped '
                            >
                                <thead >
                                    <tr
                                    className=" bg-amber-200 text-dark font-Poppins border-2 border-gray-300 "
                                    >
                                        <th className='text-center px-2'>#</th>
                                        <th className='text-center px-2'>Nombre</th>
                                        <th className='text-center px-2'>Apellido</th>
                                        <th className='text-center px-2'>Documento</th>
                                        <th className='text-center px-'>Edad</th>
                                        <th className='text-center px-2'>Correo</th>
                                        <th className='text-center px-2'>Institución</th>
                                        </tr>
                                    </thead>
                                    <tbody id='tableBody_students'></tbody>
                            </table>
                            {/* <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
                                <span class="text-sm font-normal text-gray-500 ">Showing <span class="font-semibold text-gray-900 ">1-10</span> of <span class="font-semibold text-gray-900 ">1000</span></span>
                                <ul class="inline-flex items-center -space-x-px">
                                    <li>
                                        <a href="#" class="block px-3 py-2 ml-0 leading-tight text-black border border-gray-300 rounded-l-lg bg-light hover:bg-yellow">
                                            <span class="sr-only">Previous</span>
                                            <BsChevronLeft class="w-5 h-5"></BsChevronLeft>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="px-3 py-2 leading-tight text-black border border-gray-300  bg-light hover:bg-yellow">1</a>
                                    </li>
                                    <li>
                                        <a href="#" class="px-3 py-2 leading-tight text-black border border-gray-300  bg-light hover:bg-yellow">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page" class="z-10 px-3 py-2 leading-tight text-black border border-gray-300 bg-light hover:bg-yellow">3</a>
                                    </li>
                                    <li>
                                        <a href="#" class="px-3 py-2 leading-tight text-black border border-gray-300 bg-light hover:bg-yellow">...</a>
                                    </li>
                                    <li>
                                        <a href="#" class="px-3 py-2 leading-tight text-black border border-gray-300 bg-light hover:bg-yellow ">100</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-3 py-2 leading-tight text-black border border-gray-300 rounded-r-lg bg-light hover:bg-yellow ">
                                            <span class="sr-only">Next</span>
                                            <BsChevronRight class="w-5 h-5"></BsChevronRight>
                                        </a>
                                    </li>
                                </ul>
                            </nav> */}
                            </div>
                        </div>
                    </div>
                    </div>
        
    );
};

export default UsersTable