import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode  } from 'swiper/modules';
import { formatNumber } from '../Utils';
import { books } from '../Constant';

export default function GetBooks() {
 
    return (
        <div className="my-10 bg-gray-100 px-2 rounded-lg">
            <Swiper
                freeMode={true}
                modules={[FreeMode]}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                {books.map(book => (
                    <SwiperSlide key={book.id}>
                        <Link to={'/'} className=" w-40 h-64 lg:h-80 lg:w-52 bg-white flex m-5 flex-col justify-center text-center items-center gap-y-4 rounded-lg shadow cursor-pointer p-5 overflow-hidden hover:scale-105 transition-all duration-300 ">
                            <img src={book.img} className=' w-36 h-44 object-cover' alt="" />
                            <div className="flex flex-col items-center justify-center gap-y-2 lg:gap-y-4">
                                <h2 className='font-Dana-Bold text-sm line-clamp-1' dir='ltr'>{book.name}</h2>
                                <div className="flex items-center gap-x-1">
                                    <p className=' font-Dana-Bold'>{formatNumber(book.price)}</p>
                                    <span className=' text-gray-500 text-sm'>تومان</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
