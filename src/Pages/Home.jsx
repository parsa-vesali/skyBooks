import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import MainHeader from '../Components/MainHeader'
import NavBarMobile from '../Components/NavBarMobile'
import LatesBooks from '../Components/LatesBooks'
import BestCategoties from '../Components/BestCategoties'
import MainBanners from '../Components/MainBanners'
import ProgrammingBooks from '../Components/ProgrammingBooks'
import PopularBooks from '../Components/PopularBooks'
import Footer from '../Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className='container'>
        <NavBar data-aos="fade-up" />
      </div>
      <NavBarMobile />
      <div className="container">
        <MainHeader />
        <LatesBooks />
        <BestCategoties />
        <MainBanners />
        <ProgrammingBooks />
        <PopularBooks />
        <img src="./images/banner-8.jpg" data-aos="fade-up" className=' hidden lg:flex rounded-lg mt-20' alt="" />
      </div>
      <Footer />
    </>

  )
}
