import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Hero from '../HomeC/Hero'
import AboutUs from '../HomeC/AboutUs'
import ServicesCards from '../HomeC/ServicesCards'
import ReadyToTransform from '../HomeC/ReadyToTransform'
import Industries from '../HomeC/Industries'
import ExpertInsights from '../HomeC/ExpertInsights'

const Home = () => {
  return (
    <>
      <Header/>
        <Hero/>
        <AboutUs/>
        <ServicesCards/>
        <Industries/>
        <ExpertInsights/>
        <ReadyToTransform/>
      <Footer/>
    </>
  )
}

export default Home
