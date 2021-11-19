import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StandoutExhibit = () => {

  const [ museum, setMuseum ] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        setMuseum(data)
      } catch (err) {
        setHasError(true)
      }

    }
    getData()
  }, [])

  return (
    <>
      {museum ?
        <section className='has-background-black standoutPage'>
          <section className='hero is-medium' id="hero-container">
            <div className='hero-body standoutExhibitsHero pt-8'>
              <p className='title has-text-white'>Museums</p>
              <p className='subtitle has-text-white'>Check out these fascinating natural history collections across England</p>
            </div>
          </section>
          <section className='section standoutSection'>
            <div className=''>
              <div className='columns is-multiline is-flex is-justify-content-center container standoutContainer'>
                {museum.map(Smuseum => {
                  return (
                    <div key={Smuseum._id} className='column is-narrow is-one-quarter-desktop animate__animated animate__faster  standoutCards'>
                      <div className='card is-narrow standoutCard'>
                        <div className='card-header is-flex is-align-items-center'>
                          <div className='card-header-title cardTitle is-size-7'>{Smuseum.exhibits_name}</div>
                        </div>
                        <Link to={`/museums/${Smuseum._id}`}>
                          <div className='card-image'>
                            <figure className='image is-1 exhibitImage'>
                              <img src={Smuseum.exhibits_image} alt={`Picture of ${Smuseum.exhibits_name}`} />
                            </figure>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </section>
        :
        <>
          {hasError ?
            <section className='hero is-medium' id="hero-container">
              <div className='hero-body standoutExhibitsHero pt-8'>
                <p className='title has-text-white'>Oops!</p>
                <p className='subtitle has-text-white'>something has gone wrong. Please refresh the page</p>
              </div>
            </section>
            :
            <section className='hero is-medium' id="hero-container">
              <div className='hero-body standoutExhibitsHero pt-8'>
                <p className='title has-text-white'>Loading</p>
              </div>
            </section>
          }
        </>
      }
    </>
  )

}

export default StandoutExhibit