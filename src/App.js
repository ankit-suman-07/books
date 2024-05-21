// App.js
import React, { useState } from 'react';
import useFetchBooks from './hooks/useFetchBooks';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { convertToCSV, downloadCSV } from './utils/csvUtils';
import "./App.css";

const App = () => {
  const [query, setQuery] = useState('the+lord+of+the+rings');
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const { data, loading, error } = useFetchBooks(query, page + 1, perPage);

  const columns = [
    { Header: 'Ratings', accessor: 'ratings_average' },
    { Header: 'Author Name', accessor: 'author_name' },
    { Header: 'Title', accessor: 'title' },
    { Header: 'First Publish Year', accessor: 'first_publish_year' },
    { Header: 'Subject', accessor: 'subject' },
    { Header: 'Author Birth Date', accessor: 'author_birth_date' },
    { Header: 'Author Top Work', accessor: 'author_top_work' },
  ];

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data;
    return [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  const totalPages = Math.ceil(data.length / perPage);

  const handleDownload = () => {
    const csv = convertToCSV(sortedData, columns);
    downloadCSV(csv, 'books_data.csv');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Search query={query} setQuery={setQuery} />
      <Table
        columns={columns}
        data={sortedData}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onSort={(column, direction) => {
          setSortColumn(column);
          setSortDirection(direction);
        }}
      />
      <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
      <select value={perPage} onChange={(e) => setPerPage(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <button onClick={handleDownload}>Download CSV</button>
    </div>
  );
};

export default App;
