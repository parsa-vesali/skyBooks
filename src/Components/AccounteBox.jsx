import React from 'react'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";

export default function AccounteBox() {
    return (
        <Link to={'/'} className=' group flex items-center justify-center gap-x-1 text-gray-500 hover:text-rose-500 z-50'>
            <CiUser className='text-xl font-bold' />
            <span>حساب کاربری</span>
            <div className='absolute w-[250px] bg-white top-20 border-t-2 border-gray-200 shadow-xl flex flex-col gap-y-2 child:text-sm text-gray-500  rounded-lg transition-all delay-100 invisible opacity-0 group-hover:top-14 group-hover:opacity-100 group-hover:visible py-3 px-2 z-50'>
                <div className="px-4 flex flex-col">
                    <a href="#">نام: پارسا وصالی</a>
                    <span>موبایل: 09920087317</span>
                </div>
                <ul className='w-full space-y-2 block text-center child-hover:bg-gray-100 child:transition-colors'>
                    <li className=' bg-gray-50 rounded py-2'>پنل کاربری</li>
                    <li className=' bg-gray-50 rounded py-2'>کیف پول [0 تومان]</li>
                    <li className=' bg-gray-50 rounded py-2'>سفارش ها</li>
                    <li className=' bg-gray-50 rounded py-2'>پشتیبانی</li>
                    <li className=' bg-gray-50 rounded py-2'>خروج از حساب</li>
                </ul>
            </div>
        </Link>
    )
}
