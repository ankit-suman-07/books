// components/Table.js
import React from 'react';

const Table = ({ columns, data, sortColumn, sortDirection, onSort }) => {
    const handleSort = (column) => {
        const direction = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
        onSort(column, direction);
    };

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.accessor} onClick={() => handleSort(column.accessor)}>
                            {column.Header}
                            {sortColumn === column.accessor ? (sortDirection === 'asc' ? ' 🔼' : ' 🔽') : ''}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.accessor}>{row[column.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
