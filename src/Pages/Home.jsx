import React from 'react'
import NavBar from '../Components/NavBar'
import MainHeader from '../Components/MainHeader'
import NavBarMobile from '../Components/NavBarMobile'
import LatesBooks from '../Components/LatesBooks'

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
      </div>
    </>

  )
}
