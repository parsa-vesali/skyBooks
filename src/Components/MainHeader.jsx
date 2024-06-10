import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


export default function MainHeader() {
  return (
   <>
     <div className='grid grid-cols-12 gap-6 sm:gap-7 mt-4 lg:mt-20 z-0'>
      {/* SLIDER */}

      <div className="col-span-12 sm:col-span-8 overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay,]}
          className="mySwiper child:cursor-pointer child:h-36 sm:child:h-[310px] lg:child:h-96 "
        >
          <SwiperSlide>
            <img className=' w-full h-full  rounded-lg  object-cover' src="./images/slide-1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=' w-full h-full  rounded-lg  object-cover' src="./images/slide-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=' w-full h-full  rounded-lg  object-cover' src="./images/slide-3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=' w-full h-full  rounded-lg  object-cover' src="./images/slide-4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=' w-full h-full  rounded-lg  object-cover' src="./images/slide-5.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* BANNERS */}
      <div className="col-span-12 sm:col-span-4 space-y-2.5 child:h-24 md:h-20 lg:child:h-[122px] child:w-full child:cursor-pointer child:object-cover">
        <img src="./images/banner-1.jpg" className=' rounded-lg' alt="" />
        <img src="./images/banner-2.jpg" className=' rounded-lg' alt="" />
        <img src="./images/banner-3.jpg" className=' rounded-lg' alt="" />
      </div>

    </div>
   </>
  );
}
