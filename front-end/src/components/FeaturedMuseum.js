import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const FeaturedMuseum = () => {

  const [featuredMuseums, setFeaturedMuseums] = useState(null)

  const [hasError, setHasError] = useState(false)


  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        setFeaturedMuseums(data[Math.floor(Math.random() * data.length)])
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  return (
    <>
      {featuredMuseums ?
        <section className="hero is-black is-fullheight hero" id="featured-container">
          <a href='#featured-container' className="title has-text-centered is-size-1 featuredMuseumTitle">Featured Museum</a>
          <a href='#featured-container' className="has-text-centered arrowBelowTitle animate__animated animate__infinite animate__slower animate__bounce"><i className="fas fa-angle-down"></i></a>
          <div className="hero-body">
            <div className="columns container is-full">
              <div className="column is-half custom-flex ">
                <h1 className="title hero-title mb-6 has-text-centered is-size-2">
                  {featuredMuseums.name}
                </h1>
                <p className="subtitle hero-subtitle">{featuredMuseums.description}</p>
                <Link to={`/museums/${featuredMuseums.id}`} >
                  <button className="button is-white is-fullwidth visitWebiteBtn is-large">
                    More Info
                  </button>
                </Link>
              </div>
              <div className="column is-half show-size ">
                <img className="heroImageHome" src={featuredMuseums.image} />

              </div>
            </div>
          </div>
        </section>
        :
        <>
          {hasError ? 
            <section className="hero is-black is-fullheight hero" id="featured-container">
              <a href='#featured-container' className="title has-text-centered is-size-1 featuredMuseumTitle">Oops! Something has gone wrong, please refresh the page</a>
              <div className="hero-body">
              </div>
            </section>
            :
            <section className="hero is-black is-fullheight hero" id="featured-container">
              <a href='#featured-container' className="title has-text-centered is-size-1 featuredMuseumTitle">Loading...</a>
            </section>
          }
        </>
      }
    </>

  )
}

export default FeaturedMuseum
