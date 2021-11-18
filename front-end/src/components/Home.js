import React from 'react'
import FeaturedMuseum from './FeaturedMuseum'
import Hero from './Hero'
import FilterPanel from './FilterPanel'

const Home = () => {

  return (
    <>
      <FilterPanel />
      <Hero />
      <FeaturedMuseum />
    </>
  )
}

export default Home