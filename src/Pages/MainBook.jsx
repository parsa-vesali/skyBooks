import React from 'react'
import { useParams } from 'react-router-dom';
import { books } from "../Constant";
import NavBar from '../Components/NavBar';
import NavBarMobile from '../Components/NavBarMobile';
import Footer from '../Components/Footer';
import Select from 'react-select'
import { FaClipboardCheck } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { FaBarcode } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosColorFilter } from "react-icons/io";
import { FcInTransit } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import GetBooks from '../Utils/GetBooks';
import LatesBooks from '../Components/LatesBooks';


export default function MainBook() {
  let params = useParams();
  let mainBookDatas = books.find(book => book.id == params.bookID)
  const options = [
    { value: 'رنگی', label: 'رنگی' },
    { value: 'سیاه سفید', label: 'سیاه سفید' },
  ]
  return (
    <>
      <div className='container'>
        <NavBar />
      </div>
      <NavBarMobile />

      <div className="container my-24">
        <div className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
          {/* DATA RIGTH */}
          <div className="col-span-12 lg:col-span-7 shadow-lg w-full px-8 py-4 flex flex-col-reverse lg:flex-row justify-between  rounded-lg" dir='ltr'>

            <div className="flex flex-col items-start space-y-5">

              <div className="flex gap-x-3  justify-center">
                <span className='w-1 bg-rose-600'></span>
                <div className="">
                  <h2 className=' font-Dana-Bold'>{mainBookDatas.name}</h2>
                  <p className=' text-gray-500'>{mainBookDatas.author}</p>
                </div>
              </div>

              <ul className=' space-y-2'>
                <li className='flex gap-x-2 '>
                  <span>
                    <FaBook />
                  </span>
                  <span className='font-Dana-Bold'>Paperback :</span>
                  <p className=' text-gray-500'>{mainBookDatas.page} Pages </p>
                </li>
                <li className='flex gap-x-2 '>
                  <span>
                    <FaClipboardCheck />
                  </span>
                  <span className='font-Dana-Bold'> Publisher :</span>
                  <p className=' text-gray-500'> {mainBookDatas.Publisher} </p>
                </li>
                <li className='flex gap-x-2 '>
                  <span>
                    <FaCalendar />
                  </span>
                  <span className='font-Dana-Bold'> Year :</span>
                  <p className=' text-gray-500'> {mainBookDatas.year} </p>
                </li>
                <li className='flex gap-x-2 '>
                  <span>
                    <FaLanguage />
                  </span>
                  <span className='font-Dana-Bold'>Language :</span>
                  <p className=' text-gray-500'> {mainBookDatas.language} </p>
                </li>
                <li className='flex gap-x-2 '>
                  <span>
                    <FaBarcode />
                  </span>
                  <span className='font-Dana-Bold'>ISBN :</span>
                  <p className=' text-gray-500'>  78163343</p>
                </li>
              </ul>

            </div>

            <div className="flex justify-center mb-10 lg:mb-0">
              <img src={mainBookDatas.img} className='w-40 h-60 object-cover' alt="" />
            </div>
          </div>

          {/* DATA LEFT */}
          <div className="col-span-12 lg:col-span-5 space-y-8 shadow-lg px-8 py-4  rounded-lg">

            <div className="flex items-center justify-between">
              <h2>چاپ صفحات</h2>
              <Select options={options} className='w-[70%]' placeholder="رنگی" />
            </div>

            <ul className='flex flex-col space-y-8 child:font-Dana-Bold'>
              <li className='flex items-center justify-between'>
                <span>جلد سخت	</span>
                <p className=' text-green-600'>
                  {mainBookDatas.price} <span className=' text-sm'>تومان</span>
                </p>
              </li>
              <li className='flex items-center justify-between'>
                <span>جلد نرم	</span>
                <p className=' text-green-600'>
                  {mainBookDatas.price} <span className=' text-sm'>تومان</span>
                </p>
              </li>
            </ul>

            <button className='flex items-center justify-center bg-rose-600 hover:bg-rose-500 transition-all text-white py-2 w-full rounded-full'>
              افزودن به سبد خرید
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-8">
          <div className="col-span-12 lg:col-span-7 shadow-lg w-full px-8 py-4 flex justify-between rounded-lg">
            <ul className='flex flex-col gap-y-2 lg:flex-row items-center justify-between w-full child:text-sm font-Dana-Bold'>
              <li className='flex items-center gap-x-2 '>
                <SlSizeFullscreen className=' text-xl' /> قطع : B5
              </li>
              <li className='flex items-center gap-x-2'>
                <IoDocumentTextOutline className=' text-xl' /> کیفیت متن: اورجینال انتشارات
              </li>
              <li className='flex items-center gap-x-2'>
                <IoIosColorFilter className=' text-xl' />رنگ صفحات: دارای متن و کادر رنگی
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-8 shadow-lg px-8 py-4  rounded-lg">
            <ul>
              <ul className='flex  flex-col lg:flex-row gap-y-2 items-center justify-between w-full child:text-sm font-Dana-Bold'>
                <li className='flex items-center gap-x-2 '>
                  <FcInTransit className=' text-xl' /> پشتیبانی آنلاین حتی در تعطیلات
                </li>
                <li className='flex items-center gap-x-2'>
                  <FcApproval className=' text-xl' />ارسال به سراسر کشور
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <LatesBooks />
      </div>
      <Footer />
    </>
  )

}
