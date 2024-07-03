import React, { useState, useMemo } from 'react';
import { books } from '../Constant';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    let navigate = useNavigate();

    const navigateToMainBook = (bookID) => {
        window.scrollTo(0, 0); 
        navigate(`/mainbook/${bookID}`);
    }
    // Handler for clearing the query and closing the search results
    const clickHandler = () => {
        setQuery('');
    };

    // Filter books based on the query
    const filteredBooks = useMemo(() => {
        // Trim whitespace from the query
        const trimmedQuery = query.trim().toLowerCase();

        // Return an empty array if query is empty after trimming
        if (!trimmedQuery) return [];

        return books.filter(book =>
            book.name.toLowerCase().startsWith(trimmedQuery)
        );
    }, [query]);

    return (
        <>
            <div className='relative z-40'>
                <div className={`relative flex justify-end p-1.5 bg-zinc-100 w-full lg:w-[400px]  xl:w-[500px] ${query ? 'rounded-b-none rounded-t-lg' : 'rounded-lg'}`}>
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        type="text"
                        className='absolute top-0 left-0 right-0 bottom-0 w-full px-2 rounded-lg outline-none border-none bg-transparent text-sm focus:ring focus:ring-sky-300 z-10'
                        placeholder='جستجو کنید...'
                    />
                    <span className='w-8 h-8 flex items-center justify-center bg-rose-500 hover:bg-rose-400 transition-all cursor-pointer rounded-lg text-white text-sm z-20'>
                        <SearchOutlinedIcon />
                    </span>
                </div>
                {query && (
                    <ul className="absolute flex flex-wrap items-center justify-between gap-4 w-full p-4 bg-zinc-100 shadow-lg rounded-b-lg border-t border-gray-400">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map(book => (
                                <li onClick={() => navigateToMainBook(book.id)} key={book.id} className="shadow hover:shadow-lg transition-all rounded-lg w-full lg:w-[48%]">
                                    <Link to='/' className='flex items-center gap-x-2 p-1' dir='ltr'>
                                        <img className='w-16 h-16 object-cover rounded' src={book.img} alt={`${book.name}-img`} />
                                        <div className="flex flex-col text-start justify-start child:text-sm child:line-clamp-1">
                                            <p className='text-base font-medium'>{book.name}</p>
                                            <p className='text-gray-400'>{book.author}</p>
                                            <p>{book.year}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            // Display message when no books are found
                            <p className="text-center text-gray-500 w-full">کتاب مورد نظر شما موجود نیست</p>
                        )}
                    </ul>
                )}
            </div>
            {query && (
                <div onClick={clickHandler} className="fixed w-full h-full top-0 left-0 bg-black/40 z-30 transition-all"></div>
            )}
        </>
    );
}
