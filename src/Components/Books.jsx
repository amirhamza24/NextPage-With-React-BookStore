import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {

    const { books } = useLoaderData();
    console.log(books);

    return (
        <div>
            
        </div>
    );
};

export default Books;