import React from 'react'
import Header from "../../src/Components/HomeUi/Header"
import Hero from '../../src/Components/HomeUi/Hero'
import FeaturedProps from '../Components/HomeUi/FeaturedProps'
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturedProps/>
    </div>
  )
}

export default Home
