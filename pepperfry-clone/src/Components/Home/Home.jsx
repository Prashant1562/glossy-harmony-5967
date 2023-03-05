import React from 'react'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import  './Home.css'

const Home = () => {
  return (
    <div className="homePage">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export { Home }