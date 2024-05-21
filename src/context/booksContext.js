import React, { createContext, useState } from 'react';
import { useGetData } from '../api/GetBooks';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [book, setBook] = useState('light');


    const values = {
        book,
        setBook
    }

    return (
        <BookContext.Provider value={values}>
            {children}
        </BookContext.Provider>
    );
};
