import React from 'react'
import FeaturedMuseum from './FeaturedMuseum'
import Hero from './Hero'
import FilterPanel from './FilterPanel'

// import { useLocation } from 'react-router-dom'

const Home = () => {

  // const location = useLocation()

  // useEffect(() => {

  // }, [location.pathname])

  return (
    <>
      <FilterPanel />
      <Hero />
      <FeaturedMuseum />
    </>
  )
}

export default Home