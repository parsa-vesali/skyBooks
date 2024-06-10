// Counter.js

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterBox = ({ end, title , icon }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5, 
    });

    return (
        <div ref={ref} className="text-center flex flex-col p-4 m-2 bg-gray-100 rounded-lg shadow hover:-translate-y-5 transition-all duration-300">
            <span>{icon}</span>
            <h2 className="text-xl font-Dana-Bold mb-2">{title}</h2>
            {inView && (
                <CountUp start={0} end={end} duration={2.5} suffix="+" className='text-xl' />
            )}
        </div>
    );
};

export default CounterBox;
