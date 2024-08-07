import React, { useContext, useState } from 'react';
import NavBar from '../Components/NavBar';
import NavBarMobile from '../Components/NavBarMobile';
import { useNavigate, useParams } from 'react-router-dom';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { books } from '../Constant';
import { IoIosArrowDown } from "react-icons/io";
import RangeSlider from '../Components/RangeSlider';
import { PiHouseSimpleThin } from "react-icons/pi";
import { IoEye } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Footer from '../Components/Footer';
import { useCart } from '../Context/CartContext'; 
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const categories = [
    {
        title: 'زبان',
        options: ['English', 'Persian', 'Engineering']
    },
    {
        title: 'انتشارات',
        options: ['Independently', 'Manning',]
    },
    {
        title: 'کیفیت متن',
        options: ['اورجینال انتشارات', 'اسکن شده', 'تبدیل شده از Epub']
    }
];

export default function Categories() {
    const { isAuthenticated } = useContext(AuthContext);
    let params = useParams();
    let navigate = useNavigate();

    const navigateToMainBook = (bookID) => {
        window.scrollTo(0, 0); 
        navigate(`/mainbook/${bookID}`);
    }
    const { addToCart } = useCart(); 
    const [selectedOption, setSelectedOption] = useState('جدیدترین');
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
    const [priceRange, setPriceRange] = useState(20000);
    const [pagesRange, setPagesRange] = useState(300);
    const [yearRange, setYearRange] = useState(2020);
    const options = ['پرفروش ترین', 'گران ترین', 'ارزان ترین', 'محبوب ترین', 'جدیدترین'];

    const handleAccordionClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleCheckboxChange = (category, option) => {
        setSelectedCheckboxes((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [option]: !prev[category]?.[option],
            },
        }));
    };

    const handleAddToCart = (book) => {
        if (isAuthenticated) {
            addToCart(book);
            Swal.fire({
                icon: 'success',
                title: 'افزودن به سبد خرید',
                text: 'محصول با موفقیت به سبد خرید شما اضافه شد.',
                confirmButtonText: 'باشه',
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'ثبت نام یا ورود',
                text: 'برای افزودن به سبد خرید باید وارد شوید یا ثبت نام کنید.',
                confirmButtonText: 'باشه',
            });
        }
    };

    return (
        <>
            <div className='container'>
                <NavBar />
            </div>
            <NavBarMobile />
            <div className="container mt-4 lg:mt-24">
                <div className="grid grid-cols-12 gap-y-5 md:gap-x-7 items-start">
                    {/* SIDEBAR */}
                    <div className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-5">
                        <div className="flex lg:flex-col items-center lg:items-start justify-center lg:justify-normal">
                            <h2 className='text-lg font-Dana-Bold flex items-center gap-x-2'>{params.category} <span className=' text-sm text-gray-500'>({books.length} محصول)</span></h2>
                            <div className='hidden gap-x-2 mt-2 child:text-gray-500 cursor-pointer lg:flex'>
                                <span>
                                    <PiHouseSimpleThin />
                                </span>
                                <span className=' text-lg'> / </span>
                                <span>
                                    {params.category}
                                </span>
                            </div>
                        </div>
                        <div className="shadow-lg p-4 space-y-2 rounded-lg ">
                            {/* ACCORDION */}
                            {categories.map((category, index) => (
                                <div key={index} className="border-b last:border-none">
                                    <div
                                        className="flex justify-between items-center cursor-pointer py-3"
                                        onClick={() => handleAccordionClick(index)}
                                    >
                                        <h3 className="text-lg font-medium ">{category.title}</h3>
                                        <span className="transition-transform transform duration-300" style={{ transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            <IoIosArrowDown />
                                        </span>
                                    </div>
                                    {expandedIndex === index && (
                                        <div className="pl-4 space-y-2">
                                            {category.options.map((option, optionIndex) => (
                                                <div key={optionIndex} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={`${category.title}-${option}`}
                                                        className="form-checkbox"
                                                        checked={selectedCheckboxes[category.title]?.[option] || false}
                                                        onChange={() => handleCheckboxChange(category.title, option)}
                                                    />
                                                    <label htmlFor={`${category.title}-${option}`} className="mr-2 my-1 text-gray-600">{option}</label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* RANGE SLIDERS */}
                            <RangeSlider
                                label="قیمت"
                                min={0}
                                max={100000}
                                value={priceRange}
                                onChange={(e) => setPriceRange((e.target.value))}
                            />
                            <RangeSlider
                                label="تعداد صفحات"
                                min={0}
                                max={2000}
                                value={pagesRange}
                                onChange={(e) => setPagesRange(e.target.value)}
                            />
                            <RangeSlider
                                label="سال چاپ"
                                min={1900}
                                max={2024}
                                value={yearRange}
                                onChange={(e) => setYearRange(e.target.value)}
                            />
                        </div>

                    </div>
                    {/* CONTENT */}
                    <div className="order-1 col-span-full lg:col-span-8 xl:col-span-9 lg:order-2 space-y-5 ">
                        {/* SORT FILTER */}
                        <div className=" items-center gap-x-4 py-3 bg-gray-100 rounded-lg px-4 hidden lg:flex">
                            <span className='flex items-center gap-x-2'>
                                <SwapVertIcon />
                                <p className='font-Dana-Bold text-lg'>مرتب سازی بر اساس :</p>
                            </span>
                            <div className="flex space-x-5">
                                {options.reverse().map((option) => (
                                    <div
                                        key={option}
                                        className={`cursor-pointer px-3 py-2 rounded-lg transition-all ${selectedOption === option ? 'bg-rose-600 text-white' : ''}`}
                                        onClick={() => setSelectedOption(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FILTRED BOOKS */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-5 child:cursor-pointer">
                            {
                                books.map(book => (
                                    <div  key={book.id} className="flex flex-col bg-white border border-neutral-100 rounded-2xl px-5 py-5 relative group h-80 mt-14 shadow-lg">
                                        <div className="absolute -top-10 right-0 left-0 flex justify-center">
                                            <img className='max-h-52 transition-all duration-150 group-hover:-translate-y-1 group-hover:shadow-xl' src={book.img} alt="book" />
                                        </div>
                                        <p onClick={() => navigateToMainBook(book.id)} className='bottom-14 right-5 left-5 absolute mt-2 h-14 text-sm font-bold text-center line-clamp-2' dir='ltr'>
                                            {book.name}
                                        </p>

                                        <div className="absolute bottom-3 right-5 left-5 flex items-center justify-between">
                                            <span onClick={() => navigateToMainBook(book.id)}   >
                                                <IoEye />
                                            </span>
                                            <span className='flex items-center gap-x-1'>
                                                <p className='font-Dana-Bold'>
                                                    {book.price}
                                                </p>  
                                                <span className='text-sm text-gray-500'>تومان</span>
                                            </span>

                                        </div>
                                        <div className="absolute transition-all duration-150 left-6 right-6 bottom-0 translate-y-2 group-hover:translate-y-6 items-center text-xs opacity-0 group-hover:opacity-100 flex">
                                            <button 
                                                className="flex items-center justify-center h-0 w-full group-hover:h-auto transition-all duration-150 py-1 px-2 rounded bg-gray-200 hover:bg-rose-600 hover:text-white mr-1"
                                                onClick={() => handleAddToCart(book)}
                                            >
                                                <CiShoppingCart className='text-lg' />
                                                افزودن به سبد خرید
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
