import React from 'react'
import { Link } from 'react-router-dom'
import { menuCategory } from '../Constant'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function NavBar() {
    return (
        <div className='relative mt-10'>
            <div className=" m-auto absolute -top-5 left-0 right-0 w-[90%] h-5 bg-green-400 rounded-t-full shadow"></div>

            <div className="w-full flex items-center justify-between mt-2 h-20 shadow rounded-xl p-4 z-50 ">

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
                        <Link to={'/'} className='flex items-center gap-x-1 text-gray-400 hover:text-green-400' >
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
            <div className=" m-auto absolute -bottom-12 left-0 right-0 w-[80%] h-12 bg-gray-200 rounded-b-xl flex items-center justify-center py-4">
                <ul className='flex gap-x-8 child:text-lg child:text-gray-600 child-hover:text-green-500 child:transition-colors'>
                    {
                        menuCategory.map(menu => (
                            <Link to={'/'} className='group relative flex items-center justify-center transition-all'>
                                {menu.title}

                                {
                                    menu.subMenu.length ? (
                                        <>
                                            <KeyboardArrowDownIcon />
                                            <ul className='absolute bg-white top-20  text-zinc-700 border-t-2 border-t-green-400 shadow-lg flex items-center justify-center gap-x-4 child:transition-colors child:text-base child-hover:text-green-500  rounded-lg  transition-all delay-100 invisible opacity-0 group-hover:top-8 group-hover:opacity-100 group-hover:visible py-4 px-5 z-50'>
                                                {
                                                    menu.subMenu.map(submenu => (
                                                        <li className='w-28'>
                                                            <Link to={'/'} className='relative submenu flex items-center justify-center '>
                                                                {submenu.title}
                                                                <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />

                                                                <ul className='absolute subsubmenu bg-gray-50 top-20 text-zinc-700 border-t-2 border-t-sky-400 shadow-lg flex flex-col items-center  gap-x-4 child:transition-colors child:text-base child-hover:text-sky-400 w-[200px] rounded-lg  transition-all delay-100 invisible opacity-0  group-hover:top-10 py-4 px-5 z-50 space-y-3 '>
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
                                                    ))
                                                }
                                            </ul>
                                        </>
                                    ) : ''
                                }
                            </Link>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}



