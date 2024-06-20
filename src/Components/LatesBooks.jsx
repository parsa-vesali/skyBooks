import React from 'react'
import Title from './Title'
import { MdChevronLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import GetBooks from '../Utils/GetBooks';



export default function LatesBooks() {
    return (
        <>
            <Title title={'جدید ترین کتاب ها'} subtite={'به روز ترین کتاب های تخصصی'}>
                <Link to={'/categories/برنامه نویسی'} className='flex items-center justify-center text-sm lg:text-base lg:gap-x-1 px-2 p-2 bg-rose-600 rounded-lg text-white hover:bg-rose-500'>
                    مشاهده همه
                    <MdChevronLeft className='text-xl' />
                </Link>
            </Title>
            <GetBooks />
        </>
    )
}
