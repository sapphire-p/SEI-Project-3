import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'



const FeaturedMuseum = () => {

  const [featuredMuseums, setFeaturedMuseums] = useState([])

  // const Animation = () => {
  //   return (
  //     <ScrollAnimation animateIn="fadeIn">
  //       <h1>TESTING SCROLL</h1>
  //     </ScrollAnimation>
  //   )
  // }

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        // console.log(data)
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
    <section className="hero is-black is-halfheight">
      <ScrollAnimation animateIn="bounceInRight">
        <h2 className="title has-text-centered is-size-1 featuredMuseumTitle">Featured Museum</h2>
      </ScrollAnimation>
      <p className="has-text-centered arrowBelowTitle"><i className="fas fa-angle-down"></i></p>
      <div className="hero-body">
        <div className="columns container is-full">
          <div className="column is-half custom-flex ">
            <ScrollAnimation animateIn="fadeIn">
              <h1 className="title hero-title mb-6 has-text-centered is-size-2">
                {featuredMuseums.name}
              </h1>
            </ScrollAnimation>
            <p className="subtitle hero-subtitle">{featuredMuseums.description}</p>
            {/* <p className="subtitle hero-subtitle">Location: <strong>{featuredMuseums.region}</strong></p>
            <p className="subtitle hero-subtitle">Date established: <strong>{featuredMuseums.date_established}</strong></p>
            <p className="subtitle hero-subtitle">Address: <strong>{featuredMuseums.address}</strong></p> */}
            <Link to={`/museums/${featuredMuseums.id}`}>
              <a target="_blank" rel="noreferrer" className="button is-white is-fullwidth visitWebiteBtn is-large">
                <i className="fas fa-info-circle">
                </i> More Info
              </a>
            </Link>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p>
            <p>more stuff</p><p>more stuff</p>
            <p>more stuff</p>
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