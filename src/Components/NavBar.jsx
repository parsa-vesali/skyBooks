import React from 'react';
import { Link } from 'react-router-dom';
import { menuCategory } from '../Constant';
import { IoBookOutline } from "react-icons/io5";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchBar from './SearchBar';
import AccounteBox from './AccounteBox';
import { IoMenuOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export default function NavBar() {
    return (
        <>
            {/* NAV BAR */}
            <div className='relative mt-10 hidden lg:block'>
                {/* Decorative top arc */}
                <div className="m-auto absolute -top-5 left-0 right-0 w-[90%] h-5 bg-rose-500 rounded-t-full shadow"></div>

                {/* Main Navigation Bar */}
                <div className="w-full flex items-center justify-between mt-2 h-20 shadow rounded-xl p-4 z-50">

                    {/* LEFT SECTION: Logo and Search Bar */}
                    <div className="flex items-center gap-x-10">
                        {/* Logo */}
                        <Link to={'/'} className='flex items-center gap-x-2 font-Dana-Bold text-lg'>
                            <span className='w-10 h-10 bg-rose-500 flex items-center justify-center rounded-lg'>
                                <IoBookOutline className='text-white' />
                            </span>
                            اسکای بوک
                        </Link>
                        {/* SearchBar */}
                        <SearchBar />
                    </div>

                    {/* RIGHT SECTION: Account and Cart Links */}
                    <div className="flex items-center">
                        <div className="flex items-center gap-x-10 child:transition-all">
                            {/* accountBox */}
                            <AccounteBox />
                            <Link to={'/'} className='flex items-center gap-x-3 px-2 p-2 bg-rose-500 rounded-lg text-white hover:bg-rose-400'>
                                <LocalMallOutlinedIcon />
                                <span>سبد خرید</span>
                                <span className='rounded-lg bg-slate-100 w-8 h-8 text-zinc-900 flex items-center justify-center text-lg '>0</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation for Menu Categories */}
                <div className="m-auto absolute -bottom-12 left-0 right-0 w-[80%] h-12 bg-gray-100 rounded-b-xl flex items-center justify-center py-4">
                    <ul className='flex gap-x-8 child:text-lg child:text-gray-600 child-hover:text-rose-500 child:transition-colors'>
                        {menuCategory.map(menu => (
                            <Link to={'/'} key={menu.title} className='group relative flex items-center justify-center transition-all'>
                                {menu.title}
                                {menu.subMenu.length ? (
                                    <>
                                        <KeyboardArrowDownIcon />
                                        <ul className='absolute bg-white top-20 text-zinc-700 border-t-2 border-t-rose-500 shadow-lg flex items-center justify-center gap-x-4 child:transition-colors child:text-base child-hover:text-rose-500 rounded-lg transition-all delay-100 invisible opacity-0 group-hover:top-8 group-hover:opacity-100 group-hover:visible py-4 px-5 z-50'>
                                            {menu.subMenu.map(submenu => (
                                                <li key={submenu.title} className='w-28'>
                                                    <Link to={'/'} className='relative submenu flex items-center justify-center'>
                                                        {submenu.title}
                                                        <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                                                        <ul className='absolute subsubmenu bg-gray-50 top-20 text-zinc-700 border-t-2 border-t-sky-400 shadow-lg flex flex-col items-center gap-x-4 child:transition-colors child:text-base child-hover:text-sky-400 w-[200px] rounded-lg transition-all delay-100 invisible opacity-0 group-hover:top-10 py-4 px-5 z-50 space-y-3'>
                                                            {submenu.subMenu && submenu.subMenu.map((subsubmenu) => (
                                                                <li key={subsubmenu.id}>
                                                                    <Link to='/' className='flex line-clamp-1'>
                                                                        {subsubmenu.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : ''}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>


            {/* NAV BAR MOBILE */}
            <div className="py-2 space-y-3 lg:hidden">
                {/* LOGO && ACCOUNTE && SIDEBAR BTN SHOPINGCART*/}
                <div className="flex items-center justify-between">
                    {/* MENU */}
                    <span>
                        <IoMenuOutline className='text-3xl text-gray-600' />
                    </span>

                    {/* Logo */}
                    <Link to={'/'} className='flex items-center gap-x-2 font-Dana-Bold text-lg'>
                        <span className='w-6 h-6 bg-rose-500 flex items-center justify-center rounded-lg'>
                            <IoBookOutline className='text-white text-sm' />
                        </span>
                        اسکای بوک
                    </Link>

                    {/* ACCOUNTE */}
                    <div className="flex gap-x-2 child:text-gray-600">
                        <span>
                            <LocalMallOutlinedIcon className='text-2xl' />
                        </span>
                        <span>
                            <LuUser2 className='text-2xl' />
                        </span>
                    </div>
                </div>

                {/* SEARCHBAR */}
                <div className="">
                    <div className=" relative flex justify-end p-1.5 bg-zinc-100 rounded-lg w-[100%] ">
                        <input type="text" className='absolute top-0 left-0 right-0 bottom-0 w-full px-2 rounded-lg  outline-none border-none bg-transparent text-sm   focus:ring focus:ring-sky-300  z-10' placeholder='جستجو کنید...' />
                        <span className='w-8 h-8 flex items-center justify-center bg-rose-500 hover:bg-rose-400 transition-all cursor-pointer rounded-lg text-white text-sm z-20'>
                            <SearchOutlinedIcon />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
