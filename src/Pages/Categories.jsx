import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import NavBarMobile from '../Components/NavBarMobile';
import { useParams } from 'react-router-dom';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { books } from '../Constant';
import { IoIosArrowDown } from "react-icons/io";
import RangeSlider from '../Components/RangeSlider';
import { PiHouseSimpleThin } from "react-icons/pi";


const categories = [
    {
        title: 'زبان',
        options: ['English', 'Persian', 'Engineering']
    },
    {
        title: 'انتشارات',
        options: ['Independently', 'Manning', ]
    },
    {
        title: 'کیفیت متن',
        options: ['اورجینال انتشارات', 'اسکن شده', 'تبدیل شده از Epub']
    }
];

export default function Categories() {
    let params = useParams();
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
                        <div className="shadow-lg p-4 space-y-2 rounded-lg">
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
                    <div className="order-1 col-span-full lg:col-span-8 xl:col-span-9 lg:order-2 space-y-5">
                        {/* SORT FILTER */}
                        <div className="flex items-center gap-x-4 py-3 bg-gray-100 rounded-lg px-4">
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
                    </div>
                </div>
            </div>
        </>
    );
}
