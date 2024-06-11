import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import NavBarMobile from '../Components/NavBarMobile';
import { FormControlLabel, Checkbox, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { books } from '../Constant';

export default function Categories() {
    let params = useParams();
    const [selectedOption, setSelectedOption] = useState('جدیدترین');
    const [checkedItems, setCheckedItems] = useState({});
    const options = ['پرفروش ترین', 'گران ترین', 'ارزان ترین', 'محبوب ترین', 'جدیدترین'];
    const accordionData = [
        {
            title: 'دسته بندی',
            options: ['فنی', 'هنری', 'ادبی', 'تاریخی']
        },
        {
            title: 'نویسنده',
            options: ['نویسنده 1', 'نویسنده 2', 'نویسنده 3']
        }
    ];

    const handleCheckboxChange = (category, option) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [option]: !prevState[category]?.[option]
            }
        }));
    };

    return (
        <>
            <div className='container'>
                <NavBar />
                <div className=""></div>
            </div>
            <NavBarMobile />

            <div className="container mt-24">
                <div className="grid grid-cols-12 gap-y-5 md:gap-x-7 items-start">
                    {/* SIDEBAR */}
                    <div className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-5">
                        <div className="flex items-center gap-x-2">
                            <h2 className='text-lg font-Dana-Bold'>{params.category}</h2>
                            <span>({books.length} محصول)</span>
                        </div>
                        <div className="shadow-lg p-3">
                            {accordionData.map((category) => (
                                <Accordion key={category.title}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel-${category.title}-content`}
                                        id={`panel-${category.title}-header`}
                                        className='py-5'
                                    >
                                        <h3 className='text-md font-Dana-Bold'>{category.title}</h3>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {category.options.map((option) => (
                                            <FormControlLabel
                                                key={option}
                                                control={
                                                    <Checkbox
                                                        checked={checkedItems[category.title]?.[option] || false}
                                                        onChange={() => handleCheckboxChange(category.title, option)}
                                                        name={option}
                                                        color="primary"
                                                    />
                                                }
                                                label={option}
                                            />
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="order-1 col-span-full lg:col-span-8 xl:col-span-9 lg:order-2">
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
