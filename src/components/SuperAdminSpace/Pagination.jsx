import React from 'react'

const Pagination = ({ totalItems, itemsPerPage, onChangePage, currentPage}) => {

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Generate an array of page numbers to display in the pagination bar
    const pages = [...Array(totalPages).keys()].map((i) => i + 1);

// const itemsPerPage = 8;
// const startIndex = (currentPage - 1) * itemsPerPage;
// const endIndex = currentPage * itemsPerPage;
// const itemsToShow = data.slice(startIndex, endIndex);



    return (
        <div className="w-full my-4 md:my-8 flex justify-center gap-2 md:gap-6 font-Poppins font-bold text-xl text-dark">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onChangePage(page)}
                    className={`bg-light shadow-md shadow-dark/50 border-[1px] border-dark/50 rounded px-2 md:px-5 py-1 ${page === currentPage ? 'bg-yellow' : 'hover:bg-dark/40'}`}
                    style={{ margin: '0 5px' }}
                >
                    {page}
                </button>
            ))}
        </div>

    )
}

export default Pagination