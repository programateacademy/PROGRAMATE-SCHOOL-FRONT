import React, { useState, useEffect } from 'react'
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

    let dataTableOptions = {
        pageLength: 10,
        destroy: true,
    }
    let studentsTableIsInitialized=false;
    let studentTable;


const initDataTable = async() => {
    if (studentsTableIsInitialized) {
        studentTable.destroy();
    }
    await listStudents();

    
    studentTable = $('#dataTable_students').DataTable(dataTableOptions);

    studentsTableIsInitialized = true;
    };

    const listStudents = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/getUsers');
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
    // alert(ex);   
}
}

    window.addEventListener('load', async () => {
    await initDataTable();
    });

return (
    <div className='w-full container my-4'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <table id="dataTable_students" className='table'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Documento</th>
                                            <th>Edad</th>
                                            <th>Correo</th>
                                            <th>Institución</th>
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