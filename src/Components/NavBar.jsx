import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { menuCategory } from '../Constant';
import { IoBookOutline } from "react-icons/io5";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchBar from './SearchBar';
import AccounteBox from './AccounteBox';
import { AuthContext } from '../Context/AuthContext';
import { CiLogin } from "react-icons/ci";
import { CartContext } from '../Context/CartContext';
import Swal from 'sweetalert2';



export default function NavBar() {
    const { isAuthenticated } = useContext(AuthContext);
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()
    const clickHandler = () => {
        if (isAuthenticated) {
            navigate('/shopping-cart'); // استفاده از مسیر مطلق
        } else {
            Swal.fire({
                icon: 'info',
                title: 'ثبت نام یا ورود',
                text: 'برای مشاهده سبد خرید اول باید وارد شوید یا ثبت نام کنید.',
                confirmButtonText: 'باشه',
            });
        }
    };
    return (
        <>
            {/* NAV BAR */}
            <div className='relative mt-10 hidden lg:block '>
                {/* Decorative top arc */}
                <div className="m-auto absolute -top-5 left-0 right-0 w-[90%] h-5 bg-rose-600 rounded-t-full shadow"></div>

                {/* Main Navigation Bar */}
                <div className="w-full flex items-center justify-between mt-2 h-20 shadow rounded-xl p-4 z-50">

                    {/* LEFT SECTION: Logo and Search Bar */}
                    <div className="flex items-center gap-x-10">
                        {/* Logo */}
                        <Link to={'/'} className='flex items-center gap-x-2 font-Dana-Bold text-lg'>
                            <span className='w-10 h-10 bg-rose-600 flex items-center justify-center rounded-lg'>
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
                            {isAuthenticated ? (
                                <>
                                    <AccounteBox />
                                </>
                            ) : (
                                <div className='flex items-center gap-x-4 text-gray-500 child:cursor-pointer child-hover:text-rose-600'>
                                    <Link to={'/register'} className=' text-lg flex items-center gap-x-1'>
                                        <CiLogin className=' font-bold text-2xl' />
                                        <span>ثبت‌ نام</span>
                                    </Link>
                                    <Link to={'/login'} className=' text-lg'>
                                        <span>ورود</span>
                                    </Link>
                                </div>
                            )}
                            <div
                                onClick={clickHandler}
                                className='flex items-center gap-x-3 px-2 p-2 bg-rose-600 rounded-lg text-white hover:bg-rose-500'
                            >
                                <LocalMallOutlinedIcon />
                                <span>سبد خرید</span>
                                <span className='rounded-lg bg-slate-100 w-8 h-8 text-zinc-900 flex items-center justify-center text-lg '>{cartItems.length}</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Navigation for Menu Categories */}
                <div className="m-auto absolute -bottom-12 left-0 right-0 w-[80%] h-12 bg-gray-100 rounded-b-xl flex items-center justify-center py-4">
                    <ul className='flex gap-x-4 xl:gap-x-8 child:text-base child:text-gray-600 child-hover:text-rose-600 child:transition-colors'>
                        {menuCategory.map(menu => (
                            <Link to={`/categories/${menu.title}`} key={menu.title} className='group relative flex items-center justify-center transition-all'>
                                {menu.title}
                                {menu.subMenu.length ? (
                                    <>
                                        <KeyboardArrowDownIcon />
                                        <ul className='absolute bg-white top-20 text-zinc-700 border-t-2 border-t-rose-600 shadow-lg flex items-center justify-center  xl:gap-x-4 child:transition-colors text-sm xl:child:text-base child-hover:text-rose-600 rounded-lg transition-all delay-100 invisible opacity-0 group-hover:top-8 group-hover:opacity-100 group-hover:visible py-4 px-5 z-50'>
                                            {menu.subMenu.map(submenu => (
                                                <li key={submenu.title} className=' w-24 xl:w-28'>
                                                    <Link to={'/'} className='relative submenu flex items-center justify-center'>
                                                        {submenu.title}
                                                        <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                                                        <ul className='absolute subsubmenu bg-gray-50 top-20 text-zinc-700 border-t-2 border-t-sky-400 child:text-base shadow-lg flex flex-col items-center gap-x-4 child:transition-colors  child-hover:text-sky-400 w-[200px] rounded-lg transition-all delay-100 invisible opacity-0 group-hover:top-10 py-4 px-5 z-50 space-y-3'>
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
        </>
    );
}
