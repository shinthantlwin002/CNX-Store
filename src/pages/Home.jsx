import React from 'react'
import Hero from '../components/sections/Hero'
import PopularCategories from '../components/sections/PopularCategories'
import PopularCollections from '../components/sections/PopularCollections'

const Home = () => {
  return (
    <div>
        <Hero />
        <PopularCategories />
        <PopularCollections />
    </div>
  )
}

export default Home