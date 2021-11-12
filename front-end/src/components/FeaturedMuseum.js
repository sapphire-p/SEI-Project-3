import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'

const FeaturedMuseum = () => {

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
        // setFeaturedMuseums(data[2])
        setFeaturedMuseums(data[Math.floor(Math.random() * 31)])
        // console.log('ONE OF THE MUSEUMS ->', featuredMuseums)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])



  return (
    <section className="hero is-black is-fullheight">
      <div className="hero-body">
        <div className="columns container is-full">
          <div className="column is-half custom-flex ">
            <h1 className="title hero-title mb-6 has-text-centered is-size-2">{featuredMuseums.name}</h1>
            <p className="subtitle hero-subtitle">{featuredMuseums.description}</p>
            {/* <p className="subtitle hero-subtitle">Location: <strong>{featuredMuseums.region}</strong></p>
            <p className="subtitle hero-subtitle">Date established: <strong>{featuredMuseums.date_established}</strong></p>
            <p className="subtitle hero-subtitle">Address: <strong>{featuredMuseums.address}</strong></p> */}
            <a href={featuredMuseums.website} target="_blank" rel="noreferrer" className="button is-white is-fullwidth visitWebiteBtn is-large"><i className="fas fa-info-circle"></i> More Info </a>
          </div>
          <div className="column is-half show-size ">
            <img className="heroImageHome" src={featuredMuseums.image}/>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMuseum

// {
//   params: { id: '' }
// })