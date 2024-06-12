import React from 'react';

const RangeSlider = ({ min, max, value, onChange, label }) => {
    return (
        <div className="flex flex-col">
            <label className="font-Dana-Bold text-right mt-6 mb-2">{label}</label>
            <div className="flex items-center space-x-4">
                <span className="text-sm">{min}</span>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={onChange}
                    className="flex-grow appearance-none w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-rose-500"
                />
                <span className="text-sm">{label == 'قیمت'? value.toLocaleString('fa') : value }</span>
            </div>
        </div>
    );
};

export default RangeSlider;
