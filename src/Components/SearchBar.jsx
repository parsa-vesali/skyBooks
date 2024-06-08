import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function SearchBar() {
    return (
        <div className="relative flex justify-between p-1 bg-zinc-100 rounded-lg w-[400px] shadow">
            <input type="text" className='px-2 outline-none border-none bg-transparent' placeholder='جستجو کنید...' />
            <span className='w-8 h-8 flex items-center justify-center bg-rose-500 hover:bg-rose-400 transition-all cursor-pointer rounded-lg text-white text-sm'>
                <SearchOutlinedIcon />
            </span>
        </div>

    )
}
