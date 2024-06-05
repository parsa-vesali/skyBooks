import React from 'react'
import { Link } from 'react-router-dom'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function NavBar() {
    return (
        <div className='relative'>

            <div className="w-full flex items-center justify-between mt-5 h-20 shadow-md rounded-2xl p-4 z-50 ">

                {/* RIGHT */}

                <div className="flex items-center gap-x-10">
                    {/* LOGO */}
                    <Link to={'/'} className='flex items-center gap-x-2 font-Dana-Bold text-lg '>
                        <span className='w-10 h-10 bg-green-400 flex items-center justify-center rounded-lg'>
                            <MenuBookOutlinedIcon className=' text-white' />
                        </span>
                        اسکای بوک
                    </Link>

                    {/* SEARCH BAR */}
                    <div className="relative flex justify-between p-1 bg-zinc-100 rounded-lg w-96 shadow">
                        <input type="text" className='px-2 outline-none border-none bg-transparent' placeholder='جستجو کنید...' />
                        <span className='w-8 h-8 flex items-center justify-center bg-green-400 hover:bg-green-500 transition-all cursor-pointer rounded-lg text-white text-sm '>
                            <SearchOutlinedIcon />
                        </span>
                    </div>
                </div>

                {/* LEFT */}
                <div className="flex items-center">
                    {/* ACCOUNTE && CART */}
                    <div className="flex items-center gap-x-10 child:transition-all">
                        <Link to={'/'} className='flex items-center gap-x-1 text-gray-500 hover:text-green-400' >
                            <PersonOutlinedIcon />
                            <span>حساب کاربری</span>
                        </Link>
                        <Link to={'/'} className='flex items-center gap-x-1 px-4 p-2 bg-green-400 rounded-lg text-white hover:bg-green-500 '>
                            <LocalMallOutlinedIcon />
                            <span>سبد خرید</span>
                        </Link>
                    </div>
                </div>




            </div>


        </div>
    )
}
