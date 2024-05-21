import { useState, useEffect, useContext } from 'react';
import { BookContext } from '../context/booksContext';

export const useGetData = () => {
    // We moved the fetching logic into a custom hook
    const [details, setDetails] = useState(null); // Change the initial state to null
    const { setBook } = useContext(BookContext);

    const fetchData = async () => {
        try {
            const response = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
            const data = await response.json(); // Parse the response JSON
            console.log(data.docs); // Log the parsed data
            setBook(data.docs); // Set the parsed data into the context
            setDetails(data.docs); // Set the parsed data into the state
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Return only the final data result
    return { details };
};
