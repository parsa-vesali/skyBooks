// Counter.js

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterBox = ({ end, title }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5, 
    });

    return (
        <div ref={ref} className="counter-box text-center p-4 m-2 bg-rose-500 text-white border-b-2 border-b-rose-700  rounded-t shadow">
            <h2 className="text-xl font-Dana-Bold mb-2">{title}</h2>
            {inView && (
                <CountUp start={0} end={end} duration={2.5} suffix="+" className=' text-lg' />
            )}
        </div>
    );
};

export default CounterBox;
