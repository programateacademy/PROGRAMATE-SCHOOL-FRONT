import {React, useState} from 'react'
import Pagination from './Pagination';


const CreationPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // número de elementos por página
    const items = [...Array(100).keys()]; // array de elementos a mostrar

    // función que se llama cuando se hace clic en un número de página
    const handleChangePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // obtén los elementos de la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);


    return (
        <div>
            <ul>
                {currentItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <Pagination
                totalItems={items.length}
                itemsPerPage={itemsPerPage}
                onChangePage={handleChangePage}
                currentPage={currentPage}
            />
        </div>

    )
}

export default CreationPagination