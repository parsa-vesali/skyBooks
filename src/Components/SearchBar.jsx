import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function SearchBar() {
    
    return (
        <div  className=" relative flex justify-end p-1.5 bg-zinc-100 rounded-lg w-[450px] ">
            <input type="text" className='absolute top-0 left-0 right-0 bottom-0 w-full px-2 rounded-lg  outline-none border-none bg-transparent text-sm   focus:ring focus:ring-sky-300  z-10' placeholder='جستجو کنید...' />
            <span className='w-8 h-8 flex items-center justify-center bg-rose-500 hover:bg-rose-400 transition-all cursor-pointer rounded-lg text-white text-sm z-20'>
                <SearchOutlinedIcon />
            </span>
        </div>

    )
}
