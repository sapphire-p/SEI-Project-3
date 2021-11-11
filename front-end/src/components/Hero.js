import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'

const Hero = () => {

  // const [randomMuseum, setRandomMuseum] = useState([])
  const [featuredMuseums, setFeaturedMuseums] = useState([])
  // const location = useLocation()
  // const { id } = useParams()

  // useEffect(() => {
  //   try {
  //     const { data1 } = await axios.get(`/api/museums/[${Math.floor(Math.random() * 31).toString()}]`)
  //     setRandomMuseum(data1)
  //     } catch (err) {
  //       console.log(err)
  //     }
  // }, [])

  // useEffect(() => {

  // }, [location.pathname])

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        console.log(data)
        setFeaturedMuseums(data[Math.floor(Math.random() * 31)])
        // console.log('ONE OF THE MUSEUMS ->', featuredMuseums)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  // const randomMuseum = featuredMuseums[Math.floor(Math.random() * 31)]
  // console.log('RANDOM MUSEUM ->', randomMuseum)
  // console.log('FEATURED MUSEUM ->', featuredMuseums[2])

  return (
    <section className="hero is-warning is-halfheight">
      <div className="hero-body">
        <div className="columns container is-full">
          <div className="column is-half custom-flex heroTitleSubtitleHome">
            <h1 className="title hero-title mb-6 has-text-centered is-size-2">{featuredMuseums.name}</h1>
            <p className="subtitle hero-subtitle">{featuredMuseums.description}</p>
            <p className="subtitle hero-subtitle">Located in {featuredMuseums.region}</p>
          </div>
          <div className="column is-half show-size">
            <img className="heroImageHome" src={featuredMuseums.image}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

// {
//   params: { id: '' }
// })