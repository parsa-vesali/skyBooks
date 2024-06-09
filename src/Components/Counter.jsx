// Counter.js

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, title }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5, 
    });

    return (
        <div ref={ref} className="counter-box text-center p-4 m-2 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            {inView && (
                <CountUp start={0} end={end} duration={2.5} suffix="+" />
            )}
        </div>
    );
};

export default Counter;
