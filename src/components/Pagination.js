// components/Pagination.js
import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = [...Array(totalPages).keys()];

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} >
                Prev
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={page === currentPage ? 'active' : ''}
                    onClick={() => onPageChange(page)}
                >
                    {page + 1}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} >
                Next
            </button>
        </div>
    );
};

export default Pagination;
