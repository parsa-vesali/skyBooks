import React from 'react'
import CounterBox from './CounterBox'
import { datas } from '../Constant'

export default function CounterNumber() {
    return (
        <div className="mt-20 container py-6 bg-rose-600 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 child:py-5">
            {datas.map(item => (
                <CounterBox key={item.id} end={item.end} title={item.title} icon={item.icon} />
            ))}
        </div>
    )
}
