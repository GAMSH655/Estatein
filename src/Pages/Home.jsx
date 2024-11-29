import React from 'react'
import Header from "../../src/Components/HomeUi/Header"
import Hero from '../../src/Components/HomeUi/Hero'
import FeaturedProps from '../Components/HomeUi/FeaturedProps'
import Cutomers from '../Components/HomeUi/Cutomers'
import Faq from '../Components/HomeUi/Faq'
import Footer from '../Components/HomeUi/Footer'
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturedProps/>
      <Cutomers/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home
