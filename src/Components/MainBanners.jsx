import React from 'react'

export default function MainBanners() {
    return (
        <div data-aos="fade-up" className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 mt-10 child:text-gray-200 child:flex child:rounded-xl child:cursor-pointer child-hover:scale-105 overflow-hidden child:transition-all child:duration-300 p-6'>
            <img src="./images/banner-4.jpg" alt="" />
            <img src="./images/banner-5.jpg" alt="" />
            <img src="./images/banner-6.jpg" alt="" />
            <img src="./images/banner-7.jpg" alt="" />
        </div>
    )
}
