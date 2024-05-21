// utils/csvUtils.js
export const downloadCSV = (csv, filename) => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const convertToCSV = (data, columns) => {
    const header = columns.map(col => col.Header).join(',');
    const rows = data.map(row => {
        return columns.map(col => {
            const value = row[col.accessor] ? row[col.accessor].toString().replace(/"/g, '""') : '';
            return `"${value}"`;
        }).join(',');
    });

    return [header, ...rows].join('\n');
};
