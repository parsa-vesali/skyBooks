import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="">
            <div className='container bg-rose-500 dark:bg-dark-700  text-white mt-20  py-8'>

                <ul className="w-full flex items-center justify-between lg:child:w-[20%] pb-8 border-b border-neutral-200 ">
                    <li className='flex items-center gap-x-2'>
                        <img className='w-10 h10 hover:scale-110 transition-all ' src="./images/svg/book.png" alt="" />
                        <p>
                            آرشیو بزرگ کتاب‌های تخصصی
                        </p>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <img className='w-10 h10 hover:scale-110 transition-all ' src="./images/svg/buy.png" alt="" />
                        <p>
                            خرید امن و آسان
                        </p>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <img className='w-10 h10 hover:scale-110 transition-all ' src="./images/svg/blue-t.png" alt="" />
                        <p>
                            عدم اتمام موجودی
                        </p>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <img className='w-10 h10 hover:scale-110 transition-all ' src="./images/svg/iran.png" alt="" />
                        <p>
                            ارسال به سراسر کشور
                        </p>
                    </li>
                </ul>

                <div className="flex items-start flex-col lg:flex-row gap-y-5 justify-between lg:child:w-[30%] py-8">
                    <ul className=' space-y-2 child:cursor-pointer '>
                        <h2 className=' font-Dana-Bold text-xl'>دسترسی سریع</h2>
                        <li>راهنمای خرید</li>
                        <li> راهنمای ارسال</li>
                        <li> سوالات متداول</li>
                        <li> قوانین و مقررات</li>
                        <li>  تماس با ما</li>
                        <li>   وبلاگ</li>
                    </ul>

                    <ul className='space-y-5 child:cursor-pointer '>
                        <h2 className=' font-Dana-Bold text-xl'>درباره ما</h2>
                        <li>
                            مجموعه اسکای بوک با کادری مجرب و متخصص، با استفاده از بهترین دستگاه‌ها و مواد اولیه چاپ و صحافی با کیفیتی تضمینی، آماده همکاری با دانشگاه‌ها، مدارس، موسسات آموزشی و فرهنگی، کتابخانه‌ها و شرکت‌ها می باشد. اسکای بوک هیچ شعبه و شراکتی با دفاتر چاپ و کتابفروشی‌ها ندارد. بیشتر بخوانید...
                        </li>
                    </ul>



                    <ul className='space-y-2 child:cursor-pointer'>
                        <h2 className='font-Dana-Bold text-xl text-white'>با ما در تماس باشید</h2>
                        <li>
                            پشتیبانی:
                            ۰۹۱۹۱۲۳۱۱۱۰ | ۰۲۱۶۶۱۲۰۳۵۰
                        </li>
                        <li>
                            مدیریت:
                            ۰۲۱۲۲۰۰۰۳۳۲
                        </li>
                        <li>
                            ساعات پاسخگویی : شنبه تا چهارشنبه از ساعت ۱۰:۰۰ الی ۱۹:۰۰، پنجشنبه‌ها ۱۰:۰۰ الی ۱۷:۰۰ (پشتیبانی در ساعات و روزهای تعطیل از طریق تلگرام و واتساپ انجام می‌شود.)
                        </li>
                        <li>
                            آدرس : میدان انقلاب، خیابان کارگر جنوبی، اولین کوچه سمت راست (کوچه رشتچی)، پلاک ۷، (ساختمان اداری تخت جمشید)، طبقه اول، واحد ۲
                        </li>
                    </ul>


                </div>
            </div>
            <div className="container bg-zinc-800 text-gray-100 flex items-center flex-col lg:flex-row justify-between py-4">
                <h2 className=''>
                    ساخته شده توسط
                    <a href="https://github.com/parsa-vesali" className=' text-sky-400'> parsavesali </a>
                </h2>
                <ul className='flex items-center justify-center gap-x-2 text-xl child:cursor-pointer'>
                    <li>
                        <span>
                            <FaGithub />
                        </span>
                    </li>
                    <li>
                        <span>
                            <FaTelegramPlane />
                        </span>
                    </li>
                    <li>
                        <span>
                            <FaXTwitter />
                        </span>
                    </li>
                    <li>
                        <span>
                            <FaInstagram />
                        </span>
                    </li>
                    <li>
                        <span>
                            <FaWhatsapp />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

