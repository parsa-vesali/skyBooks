import React from 'react'
import NavBar from '../Components/NavBar'
import MainHeader from '../Components/MainHeader'
import NavBarMobile from '../Components/NavBarMobile'
import LatesBooks from '../Components/LatesBooks'
import BestCategoties from '../Components/BestCategoties'
import Counter from '../Components/Counter'
import { datas } from '../Constant'

export default function Home() {

  return (
    <>
      <div className='container'>
        <NavBar />
      </div>
      <NavBarMobile />
      <div className="container">
        <MainHeader />
        <LatesBooks />
        <BestCategoties />
        <div className="main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {datas.map(item => (
            <Counter key={item.id} end={item.end} title={item.title} />
          ))}
        </div>
      </div>
    </>

  )
}
