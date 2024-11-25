import React from 'react'
import Header from "../../src/Components/HomeUi/Header"
import Hero from '../../src/Components/HomeUi/Hero'
import FeaturedProps from '../Components/HomeUi/FeaturedProps'
import Cutomers from '../Components/HomeUi/Cutomers'
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturedProps/>
      <Cutomers/>
    </div>
  )
}

export default Home
