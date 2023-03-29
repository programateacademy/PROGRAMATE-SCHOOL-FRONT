import React, { useState, useEffect } from 'react'
import defaultApi from '../../apis/index'

const UsersTable = () => {
    
    const [dataStudentsList, setDataStudentsList] = useState([]);
    
    useEffect(() => {
        defaultApi
        .get('/getUsers')
        .then((res) => {
            console.log(res.data);
            setDataStudentsList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    useEffect(() => {
        initDataTable();
    }, [dataStudentsList]);
    
    const dataTableOptions = {
        pageLength: 10,
        destroy: true,
        responsive: true,
    };
    
    let studentsTableIsInitialized = false;
    let studentTable;
    
    const initDataTable = async () => {
        if (studentsTableIsInitialized) {
            studentTable.destroy();
        }
        await listStudents();
        
        studentTable = $('#dataTable_students').DataTable(dataTableOptions);
        
        studentsTableIsInitialized = true;
    };
    
    const listStudents = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/getallquestionaries');
            const students = await response.json();
            
            let content = ``;
            students.forEach((student, index) => {
                content += `<tr>
                <td>${index + 1}</td>
                <td>${student.q1_name1Person}</td>
                <td>${student.q3_lastname1Person}</td>
                <td>${student.q9_documentPerson}</td>
                <td>${student.q14_emailPerson}</td>
                <td>${student.ScoreTotal.toFixed(1)}</td>
                </tr>`;
            });
            tableBody_students.innerHTML = content;
        } catch (ex) {
            //alert(ex);
        }
    };

return (
    <div className=''>
        {/* Header */}
        <section className='md:pl-4 grid grid-row-2 md:grid-cols text-dark'>
            <h1 className='my-4 font-bold text-xl text-center md:text-left font-Poppins md:my-8 md:text-xl lg:text-3xl'>
                Tabla de usuarios registrados
            </h1>
        </section>
        <div className='w-screen md:w-full overflow-x-auto'>
            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 '>
                <table id="dataTable_students" className='table table-auto font-Poppins text-dark'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Documento</th>
                            <th>Correo</th>
                            <th>Puntaje Total</th>
                        </tr>
                    </thead>
                    <tbody id='tableBody_students'></tbody>
                </table>
            </div>
        </div>
    </div>
)

}


export default UsersTable