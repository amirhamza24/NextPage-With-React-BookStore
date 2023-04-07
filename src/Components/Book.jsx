import React from 'react';

const Book = ({ book }) => {
    return (
        <div>
            <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-xl hover:shadow-2xl">
                <img src={book.image} alt="Book Cover" className='object-cover w-full h-56 md:h-64 xl:h-80' />

                <div className='bg-black px-6 py-4 text-gray-300 bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                    <p>{book.title}</p>
                    <br />
                    <p>{book.subtitle.substring(0, 45)}...</p>
                    <br />
                    <p className='mt-auto'>Price: {book.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Book;