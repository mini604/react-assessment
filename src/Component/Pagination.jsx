import React, { useState } from 'react'

const Pagination = ({data, itemsPerPage}) => {

    const[currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        };

    const handlePrevPage = () =>{
        setCurrentPage(currentPage - 1);
    }


    
  return (
    <div>
        {currentItems.map((item, index) =>(
            <div key={index}>{item}</div>
        ))}

        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={indexOfLastItem >= data.length}>
            Next
        </button>
    </div>
  )
}

export default Pagination