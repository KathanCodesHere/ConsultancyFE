import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import AboutUs from './AboutUs'
import ServicesCards from './ServicesCards'

const Home = () => {
  return (
    <>
      <Header/>
        <Hero/>
        <AboutUs/>
        <ServicesCards/>
      <Footer/>
    </>
  )
}

export default Home
