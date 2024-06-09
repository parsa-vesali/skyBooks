import React, { useState } from 'react'
import { books } from '../Constant'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

export default function SearchBar() {
    const [query, setQuery] = useState('')
    const clickHandler = () => {
        setQuery('')
    }
    return (
        <>
            <div className='relative z-50'>
                <div className="relative flex justify-end p-1.5 bg-zinc-100 rounded-lg  w-[100%] lg:w-[400px]" >
                    <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className='absolute top-0 left-0 right-0 bottom-0 w-full px-2 rounded-lg  outline-none border-none bg-transparent text-sm   focus:ring focus:ring-sky-300  z-10' placeholder='جستجو کنید...' />
                    <span className='w-8 h-8 flex items-center justify-center bg-rose-500 hover:bg-rose-400 transition-all cursor-pointer rounded-lg text-white text-sm z-20'>
                        <SearchOutlinedIcon />
                    </span>
                </div>
                {
                    query ? (
                        books.filter(book => book.name.toLowerCase().trim().startsWith(query)).map(book => (
                            <ul className="absolute flex flex-col space-y-3 items-center gap-y-2 w-full p-4 bg-zinc-100  shadow-lg  rounded-lg">
                                <li key={book.id} className="shadow hover:shadow-xl rounded-lg w-full">
                                    <Link to='/' className='flex items-center  gap-x-3 p-3' dir='ltr'>
                                        <img className='w-20 h-20 object-cover rounded' src={book.img} alt={`${book.name}-img`} />
                                        <div className="flex flex-col text-start justify-start child:line-clamp-1">
                                            <p>{book.name}</p>
                                            <p className=' text-sm text-gray-400'>{book.author}</p>
                                            <p>{book.year}</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        ))
                    ) : (
                        <></>
                    )
                }
            </div>
            {query && (
                <div onClick={clickHandler} className="fixed w-full h-full top-0 left-0 bg-black/40 z-40  transition-all"></div>
            )}
        </>
    )
}
