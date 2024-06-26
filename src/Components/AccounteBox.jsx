// AccounteBox.jsx
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LuUser2 } from "react-icons/lu";
import { AuthContext } from '../Context/AuthContext';

export default function AccounteBox() {
    const { user, logout } = useContext(AuthContext);

    return (
        <Link to={`/panel/${user.name}`} className=' group flex items-center justify-end lg:justify-center gap-x-1 text-gray-500 hover:text-rose-500 z-50'>
            <LuUser2 className='text-2xl font-bold' />
            <span className=' hidden lg:flex'>حساب کاربری</span>
            <div className='absolute w-[250px] bg-white top-20 border-t-2 border-gray-200 shadow-xl flex flex-col gap-y-2 child:text-sm text-gray-500  rounded-lg transition-all delay-100 invisible opacity-0 group-hover:top-14 group-hover:opacity-100 group-hover:visible py-3 px-2 z-50'>
                <div className="px-4 flex flex-col">
                    {user && (
                      <>
                        <a href="#">نام: {user.name}</a>
                        <span>موبایل: {user.phone}</span>
                      </>
                    )}
                </div>
                <ul className='w-full space-y-2 block text-center child-hover:bg-gray-100 child:transition-colors'>
                    <li className='bg-gray-50 rounded py-2'>پنل کاربری</li>
                    <li className='bg-gray-50 rounded py-2'>کیف پول [0 تومان]</li>
                    <li className='bg-gray-50 rounded py-2'>سفارش ها</li>
                    <li className='bg-gray-50 rounded py-2'>پشتیبانی</li>
                    <li className='bg-gray-50 rounded py-2 hover:bg-rose-500' onClick={logout}>خروج از حساب</li>
                </ul>
            </div>
        </Link>
    )
}
