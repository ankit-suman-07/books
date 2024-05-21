// ThemedComponent.js
import React, { useContext } from 'react';
import { BookContext } from './context/booksContext';
import { useGetData } from './api/GetBooks';

const ThemedComponent = () => {
    const { book, setBook } = useContext(BookContext);
    const { details } = useGetData();

    if (!book) {
        return <div>Loading...</div>;
    }
    else {
        console.log(book)
        //setUsername(details.results[0].name.first)
    }

    const toggleTheme = () => {
        setBook((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div style={{ background: book === 'light' ? '#fff' : '#333', color: book === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <p>The current theme is true</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemedComponent;
