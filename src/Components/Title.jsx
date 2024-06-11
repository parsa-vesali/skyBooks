import React from 'react'

export default function Title({ title, subtite, children }) {
  return (
    <div data-aos="fade-up" className='flex items-center justify-between mt-16'>
      <div className="flex items-center gap-x-4">
        <span className='w-5 h-5 bg-rose-700 rounded rotate-45 hidden md:flex'></span>
        <div className="space-y-1">
          <h1 className='font-Dana-Bold text-base lg:text-xl'>{title}</h1>
          <p className='text-gray-500 text-sm lg:text-lg'>{subtite}</p>
        </div>
      </div>
      <div className="">
        {children}
      </div>
    </div>
  )
}
