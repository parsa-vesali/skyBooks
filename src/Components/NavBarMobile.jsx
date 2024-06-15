import React, { useContext, useState } from 'react'
import { menuCategory } from '../Constant';
import { Link } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { MdChevronLeft } from "react-icons/md";
import SearchBar from './SearchBar';
import AccounteBox from './AccounteBox';
import { AuthContext } from '../Context/AuthContext';


export default function NavBarMobile() {
    const { isAuthenticated } = useContext(AuthContext);

    const [isShowMenu, setIsShowMenu] = useState(false)
    const clickHandler = () => {
        setIsShowMenu(!isShowMenu)
    }
    return (
        <>
            <div className="py-3 px-2 flex flex-col space-y-3 lg:hidden shadow-lg">
                {/* LOGO && ACCOUNTE && SIDEBAR BTN SHOPINGCART*/}
                <div className="flex items-center justify-between">
                    {/* MENU */}
                    <span onClick={clickHandler}>
                        <IoMenuOutline className='text-3xl text-gray-600' />
                    </span>

                    {/* SIDE BAR MENU */}
                    <div className={` ${isShowMenu ? 'right-0 opacity-100' : '-right-64 opacity-0'} dark:bg-dark-700 bg-gray-100  shadow-lg w-64 overflow-y-auto fixed top-0 bottom-0 z-50 p-4.5  duration-500`}>
                        {/* CLOSE BTN */}
                        <div className="flex items-center justify-between p-4 text-gray-50 bg-rose-600 h-20">
                            <span className='flex items-center gap-x-2 text-xl'>
                                sky Book
                            </span>
                            <span onClick={clickHandler} className=' text-3xl'>
                                <IoMdClose />
                            </span>
                        </div>
                        {/* MENU */}
                        <div className="mt-4">
                            <a href="#" className='px-4'>دسته بندی محصولات</a>

                            <ul className='flex flex-col mt-2'>
                                {
                                    menuCategory.map(menu => (
                                        <li key={menu.id} className='border-b border-zinc-300 px-4 py-3'>
                                            <Link to={`/categories/${menu.title}`} className='flex items-center justify-between'>
                                                <p className='flex items-center gap-x-2'>
                                                    <span className='w-2 h-2 rounded-full bg-rose-600'></span>
                                                    {menu.title}
                                                </p>
                                                <span className=' pr-3 border-r-2 border-zinc-500 text-zinc-500 '>
                                                    <MdChevronLeft className=' text-xl' />
                                                </span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Logo */}
                    <Link to={'/'} className='flex items-center gap-x-2 font-Dana-Bold text-lg'>
                        <span className='w-6 h-6 bg-rose-500 flex items-center justify-center rounded-lg'>
                            <IoBookOutline className='text-white text-sm' />
                        </span>
                        اسکای بوک
                    </Link>

                    {/* ACCOUNTE && shoping */}
                    <div className="flex items-center gap-x-2 child:text-gray-600">
                        <span>
                            {isAuthenticated ? (
                                <AccounteBox />
                            ) : (
                                <div className='flex items-center gap-x-1 text-gray-500 child:cursor-pointer child-hover:text-rose-600 child:text-2xl child:font-bold'>
                                    <Link to={'/register'} className=' flex items-center'>
                                      <LuUser2 />
                                    </Link>
                                </div>
                            )}
                        </span>
                        <Link to={'/shopping-cart'}>
                            <LocalMallOutlinedIcon className='text-2xl' />
                        </Link>
                    </div>
                </div>

                {/* SEARCHBAR */}
                <div className="">
                    <SearchBar />
                </div>
            </div>

            {/* OVERLAY */}
            {isShowMenu && (
                <div onClick={clickHandler} className="fixed w-full h-full top-0 left-0 bg-black/40 z-40 md:backdrop-blur transition-all"></div>
            )}
        </>
    )
}
