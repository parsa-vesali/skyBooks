import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import NavBarMobile from '../Components/NavBarMobile'
import { IoMdClose } from "react-icons/io";
import { FaCaretLeft } from "react-icons/fa";

export default function ShoppingCart() {
    const [activeItem, setActiveItem] = useState('cart');
    const [count, setCount] = useState(1);

    const decrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 1));
    };

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <>
            <div className='container'>
                <NavBar />
            </div>
            <NavBarMobile />
            <div className="container mt-5 lg:mt-24">
                {/* SHOPPING CART */}
                <div className="h-full W-[80%] child:lg:h-[90vh] flex flex-col space-y-4 lg:flex-row">
                    {/* ITEMS */}
                    <div className="lg:w-[75%] h-full flex flex-col shadow-lg lg:px-8">

                        {/* ITEMS HEADER */}
                        <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
                            <div className="flex items-center gap-x-4">
                                <div
                                    onClick={() => setActiveItem('cart')}
                                    className={`flex items-center gap-x-1 cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ${activeItem === 'cart' ? 'shadow-lg' : ''}`}
                                >
                                    <p className="font-Dana-Bold">سبد خرید</p>
                                    <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm">3</span>
                                </div>
                                <div
                                    onClick={() => setActiveItem('next-purchase')}
                                    className={`flex items-center gap-x-1 cursor-pointer py-2 px-4  rounded-lg transition-all duration-300  ${activeItem === 'next-purchase' ? 'shadow-lg' : ''}`}
                                >
                                    <p className="font-Dana-Bold">خرید بعدی</p>
                                    <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-gradient-to-r from-green-400 to-teal-500 text-white text-sm">0</span>
                                </div>
                            </div>
                        </div>

                        {/* BOX ITEMS */}
                        <div className="flex flex-col mt-5 space-y-5 ">
                            {/* ITEM */}
                            <div className="w-full lg:h-40  py-2 px-4 lg:p-4 flex flex-col items-end lg:flex-row-reverse relative lg:items-center lg:justify-between lg:shadow rounded-lg">
                                <span className='absolute top-2 right-2 cursor-pointer'>
                                    <IoMdClose />
                                </span>

                                {/* ITEM IMAGE AND NAME */}
                                <div className="flex gap-x-3 lg:w-[30%] mb-10 mt-5 lg:mt-0 lg:mb-0">
                                    <div className=" flex flex-col justify-between items-end line-clamp-1 py-1">
                                        <h2 className='font-Dana-Bold' dir='ltr'>
                                            Lorem ipsum, dolor sit amet consectetur
                                        </h2>
                                        <span className=' text-sm text-gray-500'>
                                            Lorem, ipsum.
                                        </span>
                                    </div>
                                    <img className=' w-28 h-32 object-cover rounded-lg' src="../images/Books/book-2.jpg" alt="" />
                                </div>

                                {/* number */}
                                <div className="inline-flex items-center border border-gray-300 rounded-md mb-5 lg:mb-0">
                                    <button
                                        onClick={decrement}
                                        className="px-2 py-1 text-gray-600 hover:text-gray-900 focus:outline-none"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        value={count}
                                        readOnly
                                        className="w-12 text-center border-none focus:outline-none"
                                    />
                                    <button
                                        onClick={increment}
                                        className="px-2 py-1 text-gray-600 hover:text-gray-900 focus:outline-none"
                                    >
                                        +
                                    </button>

                                </div>

                                {/* price */}
                                <div className="flex items-center gap-x-1 child:text-green-500">
                                    <h2 className=' font-Dana-Bold'>651,000</h2>
                                    <span className=' text-sm'>تومان</span>
                                </div>

                                <span className=' flex items-center gap-x-1 absolute right-2 bottom-2 text-sm text-rose-600 font-Dana-Bold cursor-pointer hover:-translate-x-2 transition-transform'>
                                    انتقال به خرید بعدی
                                    <FaCaretLeft />
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Bill */}
                    <div className="lg:w-[25%] bg-gray-50 p-4">
                        <div className="flex items-center justify-between border-dashed border-b-2 border-gray-200 py-5">
                            <h2>جمع مبلغ سفارش:</h2>
                            <span className='flex items-center gap-x-1'>
                                <h2 className=' font-Dana-Bold'>520,000</h2>
                                <p className=' text-sm  text-gray-500'>تومان</p>
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-5">
                            <h2>مبلغ قابل پرداخت :</h2>
                            <span className='flex items-center gap-x-1'>
                                <h2 className=' font-Dana-Bold'>520,000</h2>
                                <p className=' text-sm  text-gray-500'>تومان</p>
                            </span>
                        </div>

                        <button className='w-full flex items-center justify-center py-2 mt-4 bg-green-500 rounded text-white hover:bg-green-400 transition-colors'> ثبت سفارش</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}