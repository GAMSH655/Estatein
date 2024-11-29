import React from 'react'
import Header from "../../src/Components/HomeUi/Header"
import Hero from '../../src/Components/HomeUi/Hero'
import FeaturedProps from '../Components/HomeUi/FeaturedProps'
import Cutomers from '../Components/HomeUi/Cutomers'
import Faq from '../Components/HomeUi/Faq'
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturedProps/>
      <Cutomers/>
      <Faq/>
    </div>
  )
}

export default Home
