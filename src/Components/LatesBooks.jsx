import React from 'react'
import Title from './Title'
import { books } from '../Constant';
import { MdChevronLeft } from "react-icons/md";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';


export default function LatesBooks() {
    return (
        <>
            <Title title={'جدید ترین کتاب ها'} subtite={'به روز ترین کتاب های تخصصی'}>
                <Link to={'/'} className='flex items-center justify-center text-sm lg:text-base lg:gap-x-1 px-2 p-2 bg-rose-600 rounded-lg text-white hover:bg-rose-500'>
                    مشاهده همه
                    <MdChevronLeft className='text-xl' />
                </Link>
            </Title>

            <div className="my-10 bg-gray-100 px-2 rounded-lg">
                <Swiper
                    slidesPerView={5}
                    freeMode={true}
                    modules={[FreeMode]}
                    spaceBetween={30}
                    className="mySwiper"
                >
                    {
                        books.map(book => (
                            <SwiperSlide key={book.id}>
                                <Link to={'/'} className="h-80 w-52 bg-white flex m-5 flex-col justify-center text-center items-center gap-y-4 rounded-lg shadow cursor-pointer p-5 overflow-hidden hover:scale-105 transition-all duration-300 ">
                                    <img src={book.img} className=' w-36 h-44 object-cover' alt="" />
                                    <div className="flex flex-col items-center justify-center gap-y-4">
                                        <h2 className='font-Dana-Bold text-sm line-clamp-1' dir='ltr'>{book.name}</h2>
                                        <div className="flex items-center gap-x-1">
                                            <p className=' font-Dana-Bold'>{book.price}</p>
                                            <span className=' text-gray-500 text-sm'>تومان</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}
