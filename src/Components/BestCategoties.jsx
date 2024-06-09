import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import { bestCategories } from '../Constant'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Autoplay } from 'swiper/modules';

export default function BestCategoties() {
    const [allCategories, setAllCategories] = [bestCategories]
    const randomCategories = () => {
        const shuffled = allCategories.sort(() => 0.5 - Math.random())
        return shuffled.slice(0, 6)
    }
    return (
        <>
            <Title title={'رشته‌های منتخب'} subtite={'بر اساس انتخاب شما'} />

            <ul className='hidden lg:flex items-center justify-around mt-10'>
                {
                    randomCategories().map(category => (
                        <li key={category.id} className='px-8 py-4 transition-all duration-300 hover:shadow-xl rounded-lg'>
                            <Link to={'/'} className='flex flex-col items-center justify-center gap-y-4 text-gray-600'>
                                <img src={category.img} alt="" className='w-20 h-20 object-cover' />
                                <p>{category.title}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>

            {/* mobile */}
          <div className="mt-5 lg:hidden">
          <Swiper
                freeMode={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Autoplay]}
                breakpoints={{
                    300: {
                        slidesPerView: 3,
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
                }}
                className="mySwiper"
            >
                {
                    randomCategories().map(category => (
                        <SwiperSlide>
                            <li key={category.id} className='p-2 transition-all duration-300 hover:shadow-xl rounded-lg'>
                                <Link to={'/'} className='flex flex-col items-center justify-center gap-y-4 text-gray-600 text-sm'>
                                    <img src={category.img} alt="" className='w-12 h-12 object-cover' />
                                    <p>{category.title}</p>
                                </Link>
                            </li>
                        </SwiperSlide>

                    ))
                }

            </Swiper>
          </div>
        </>

    )
}
