// ThemedComponent.js
import React, { useContext } from 'react';
import { BookContext } from './context/booksContext';

const ThemedComponent = () => {
    const { book, setBook } = useContext(BookContext);

    const toggleTheme = () => {
        setBook((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div style={{ background: book === 'light' ? '#fff' : '#333', color: book === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <p>The current theme is {book}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemedComponent;
