import React from 'react'
import NavBar from '../Components/NavBar'
import MainHeader from '../Components/MainHeader'
import NavBarMobile from '../Components/NavBarMobile'
import LatesBooks from '../Components/LatesBooks'
import BestCategoties from '../Components/BestCategoties'
import MainBanners from '../Components/MainBanners'
import ProgrammingBooks from '../Components/ProgrammingBooks'
import PopularBooks from '../Components/PopularBooks'
import Footer from '../Components/Footer'

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
        <MainBanners />
        <ProgrammingBooks />
        <PopularBooks />
      </div>
      <Footer />
    </>

  )
}
