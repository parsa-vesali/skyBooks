import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import NavBar from '../Components/NavBar';
import NavBarMobile from '../Components/NavBarMobile';
import { IoMdClose } from 'react-icons/io';
import { FaCaretLeft } from 'react-icons/fa';
import { CartContext } from '../Context/CartContext';
import { CiShoppingCart } from 'react-icons/ci';

export default function ShoppingCart() {
    const { cartItems, nextPurchaseItems, updateCartItem, removeCartItem, removeNextPurchaseItem, moveToNextPurchase  , } = useContext(CartContext);
    const [activeItem, setActiveItem] = useState('cart');

    const handleDecrement = (itemId) => {
        updateCartItem(itemId, 'decrement');
    };

    const handleIncrement = (itemId) => {
        updateCartItem(itemId, 'increment');
    };

    const handleRemoveItem = (itemId) => {
        Swal.fire({
            title: 'آیا مطمئن هستید؟',
            text: 'این محصول از لیست حذف خواهد شد.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'بله، حذف شود!',
            cancelButtonText: 'لغو'
        }).then((result) => {
            if (result.isConfirmed) {
                if (activeItem === 'cart') {
                    removeCartItem(itemId);
                } else {
                    removeNextPurchaseItem(itemId);
                }
                Swal.fire(
                    'حذف شد!',
                    'محصول از لیست حذف شد.',
                    'success'
                );
            }
        });
    };
    const handleMoveToNextPurchase = (itemId) => {
        moveToNextPurchase(itemId);
    };

    const totalPrice = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price);
        const count = parseInt(item.quantity);
        return total + (price * count);
    }, 0);

    return (
        <>
            <div className='container'>
                <NavBar />
            </div>
            <NavBarMobile />
            <div className="container mt-5 lg:mt-24">
                <div className="h-full W-[80%]  flex flex-col space-y-4 lg:flex-row">
                    <div className="lg:w-[75%] h-full flex flex-col shadow-lg lg:px-8 pb-5">
                        <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
                            <div className="flex items-center gap-x-4">
                                <div
                                    onClick={() => setActiveItem('cart')}
                                    className={`flex items-center gap-x-1 cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ${activeItem === 'cart' ? 'shadow-lg' : ''}`}
                                >
                                    <p className="font-Dana-Bold">سبد خرید</p>
                                    <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm">{cartItems.length}</span>
                                </div>
                                <div
                                    onClick={() => setActiveItem('next-purchase')}
                                    className={`flex items-center gap-x-1 cursor-pointer py-2 px-4  rounded-lg transition-all duration-300  ${activeItem === 'next-purchase' ? 'shadow-lg' : ''}`}
                                >
                                    <p className="font-Dana-Bold">خرید بعدی</p>
                                    <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-gradient-to-r from-green-400 to-teal-500 text-white text-sm">{nextPurchaseItems.length}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mt-5 space-y-5 ">
                            {activeItem === 'cart' ? (
                                cartItems.length ? (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="w-full lg:h-40 py-2 px-4 lg:p-4 flex flex-col items-end lg:flex-row-reverse relative lg:items-center lg:justify-between lg:shadow rounded-lg">
                                            <span className='absolute top-2 right-2 cursor-pointer' onClick={() => handleRemoveItem(item.id)}>
                                                <IoMdClose />
                                            </span>

                                            <div className="flex justify-end gap-x-3 lg:w-[30%] mb-10 mt-5 lg:mt-0 lg:mb-0">
                                                <div className="flex flex-col justify-between items-end line-clamp-1 py-1">
                                                    <h2 className='font-Dana-Bold' dir='ltr'>{item.name}</h2>
                                                    <span className='text-sm text-gray-500'>{item.author}</span>
                                                </div>
                                                <img className='w-28 h-32 object-cover rounded-lg' src={item.img} alt={item.name} />
                                            </div>

                                            <div className="inline-flex items-center border border-gray-300 rounded-md mb-5 lg:mb-0">
                                                <button onClick={() => handleDecrement(item.id)} className="px-2 py-1 text-gray-600 hover:text-gray-900 focus:outline-none">-</button>
                                                <input type="text" value={item.quantity} readOnly className="w-12 text-center border-none focus:outline-none" />
                                                <button onClick={() => handleIncrement(item.id)} className="px-2 py-1 text-gray-600 hover:text-gray-900 focus:outline-none">+</button>
                                            </div>

                                            <div className="flex items-center gap-x-1 child:text-green-500">
                                                <h2 className='font-Dana-Bold'>{item.price.toLocaleString()}</h2>
                                                <span className='text-sm'>تومان</span>
                                            </div>

                                            <span className='flex items-center gap-x-1 absolute right-2 bottom-2 text-sm text-rose-600 font-Dana-Bold cursor-pointer hover:-translate-x-2 transition-transform' onClick={() => handleMoveToNextPurchase(item.id)}>
                                                افزودن به خرید بعدی
                                                <FaCaretLeft />
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className='py-5 flex items-center justify-center gap-x-1 text-gray-500'>
                                        <span><CiShoppingCart /></span>
                                        <h1>سبد خرید شما خالی میباشد!</h1>
                                    </div>
                                )
                            ) : (
                                nextPurchaseItems.length ? (
                                    nextPurchaseItems.map((item) => (
                                        <div key={item.id} className="w-full lg:h-40 py-2 px-4 lg:p-4 flex flex-col items-end lg:flex-row-reverse relative lg:items-center lg:justify-between lg:shadow rounded-lg">
                                            <span className='absolute top-2 right-2 cursor-pointer' onClick={() => handleRemoveItem(item.id)}>
                                                <IoMdClose />
                                            </span>

                                            <div className="flex justify-end gap-x-3 lg:w-[30%] mb-10 mt-5 lg:mt-0 lg:mb-0">
                                                <div className="flex flex-col justify-between items-end line-clamp-1 py-1">
                                                    <h2 className='font-Dana-Bold' dir='ltr'>{item.name}</h2>
                                                    <span className='text-sm text-gray-500'>{item.author}</span>
                                                </div>
                                                <img className='w-28 h-32 object-cover rounded-lg' src={item.img} alt={item.name} />
                                            </div>

                                            <div className="inline-flex items-center border border-gray-300 rounded-md mb-5 lg:mb-0">
                                                <button onClick={() => handleDecrement(item.id)} className="px-2 py-1 text-gray-600 hover:text-gray-900 focus:outline-none">-</button>
                                                <input type="text" value={item.quantity} readOnly className="w-12 text-center border-none focus:outline-none" />
                                                <button onClick={() => handleIncrement(item.id)} className="px-2 py-1 text-gray-600 hover:text-gray-900 focus:outline-none">+</button>
                                            </div>

                                            <div className="flex items-center gap-x-1 child:text-green-500">
                                                <h2 className='font-Dana-Bold'>{item.price.toLocaleString()}</h2>
                                                <span className='text-sm'>تومان</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className='py-5 flex items-center justify-center gap-x-1 text-gray-500'>
                                        <span><CiShoppingCart /></span>
                                        <h1>خرید بعدی شما خالی میباشد!</h1>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Bill */}
                    <div className="lg:w-[25%] bg-gray-50 p-4">
                        <div className="flex items-center justify-between border-dashed border-b-2 border-gray-200 py-5">
                            <h2>جمع مبلغ سفارش:</h2>
                            <span className='flex items-center gap-x-1'>
                                <h2 className=' font-Dana-Bold'>{totalPrice.toLocaleString()}</h2>
                                <p className=' text-sm  text-gray-500'>تومان</p>
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-5">
                            <h2>مبلغ قابل پرداخت :</h2>
                            <span className='flex items-center gap-x-1'>
                                <h2 className=' font-Dana-Bold'>{totalPrice.toLocaleString()}</h2>
                                <p className=' text-sm  text-gray-500'>تومان</p>
                            </span>
                        </div>
                        <button className='w-full flex items-center justify-center py-2 mt-4 bg-green-500 rounded text-white hover:bg-green-400 transition-colors'> ثبت سفارش</button>
                    </div>

                </div>
            </div>
        </>
    );
}
